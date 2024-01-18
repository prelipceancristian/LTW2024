using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace be.Data.Models;

public class Note
{
    [Key]
    public Guid NoteId { get; set; }
    public string? UserId { get; set; }
    public string ContentId { get; set; } = null!;
    public DateTimeOffset LastUpdated { get; set; }
    
    [ForeignKey("UserId")]
    public User? User { get; set; }
}