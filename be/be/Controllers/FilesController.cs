using be.BusinessLogicServices.Business;
using be.DTOs;
using Microsoft.AspNetCore.Mvc;

namespace be.Controllers;

[ApiController]
[Route("api/files")]
public class FilesController : ControllerBase
{
    private readonly INoteService _noteService;

    public FilesController(INoteService noteService)
    {
        _noteService = noteService;
    }

    [HttpPost]
    public async Task<IActionResult> UploadFile([FromBody] FileUploadModel fileUploadModel)
    {
        var userId = (User.Identity?.IsAuthenticated ?? false) ? 
            User.FindFirst("username")?.Value : 
            null;
        var noteId = await _noteService.CreateNote(fileUploadModel.FileContent, userId);
        return Ok(noteId);
    }

    [HttpGet]
    [Route("{noteId}")]
    public async Task<IActionResult> GetNote([FromRoute] string noteId)
    {
        var note = await _noteService.RetrieveNote(noteId);
        return Ok(note);
    }

    [HttpGet]
    public async Task<IActionResult> GetNotes()
    {
        if (!(User.Identity?.IsAuthenticated ?? false))
        {
            return NoContent();
        }

        var userId = User.FindFirst("username")?.Value!;
        var notes = await _noteService.GetNotes(userId);
        return Ok(notes);
    }
}