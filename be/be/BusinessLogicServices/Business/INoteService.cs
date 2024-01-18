using be.DTOs;

namespace be.BusinessLogicServices.Business;

public interface INoteService
{ 
    Task<string> CreateNote(string fileContent, string? userId = null);
    Task<Note> RetrieveNote(string noteId);
    Task<IList<Note>> GetNotes(string userEmail);
}