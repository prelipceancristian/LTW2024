using System.ComponentModel.DataAnnotations;

namespace be.Data.Models;

public class User
{
    [Key]
    public string Email { get; set; } = null!;
    public string Username { get; set; } = null!;
    public string HashedPassword { get; set; } = null!;
    public string HashSalt { get; set; } = null!;
    
    public List<Note> Notes { get; set; }
}