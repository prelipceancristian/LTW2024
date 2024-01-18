using System.Text;
using be.BusinessLogicServices.Storage;
using be.Data.Models;
using be.Repositories;

namespace be.BusinessLogicServices.Business;

public class NoteService : INoteService
{
    private readonly IFileStorageService _fileStorageService;
    private readonly IGenericRepository<Note> _repository;

    public NoteService(IFileStorageService fileStorageService, IGenericRepository<Note> repository)
    {
        _fileStorageService = fileStorageService;
        _repository = repository;
    }

    public async Task<string> CreateNote(string fileContent, string? userId = null)
    {
        using var memoryStream = new MemoryStream();
        var bytes = Encoding.UTF8.GetBytes(fileContent);
        await memoryStream.WriteAsync(bytes);
        var fileStorageId = await _fileStorageService.UploadFile(memoryStream);
        var newNote = new Note
        {
            NoteId = Guid.NewGuid(),
            UserId = userId, 
            ContentId = fileStorageId,
            LastUpdated = DateTimeOffset.UtcNow
        };
        await _repository.Create(newNote);
        return newNote.NoteId.ToString();
    }

    public async Task<DTOs.Note> RetrieveNote(string noteId)
    {
        var noteData = await _repository.GetById(Guid.Parse(noteId)) ?? throw new Exception();
        await using var fileStream = await _fileStorageService.DownloadFile(noteData.ContentId);
        var noteContent = await new StreamReader(fileStream).ReadToEndAsync();
        return new DTOs.Note
        {
            NoteData = noteData,
            NoteContent = noteContent
        };
    }

    public async Task<IList<DTOs.Note>> GetNotes(string userEmail)
    {
        var notes = await _repository.GetAll();
        return notes
            .Where(n => n.UserId == userEmail)
            .Select(n => new DTOs.Note
            {
                NoteData = n,
                NoteContent = string.Empty
            }).ToList();
    }
}