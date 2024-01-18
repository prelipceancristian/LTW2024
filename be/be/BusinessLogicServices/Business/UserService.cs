using System.Security.Cryptography;
using System.Text;
using be.Data.Models;
using be.Repositories;

namespace be.BusinessLogicServices.Business;

public class UserService : IUserService
{
    private readonly IGenericRepository<User> _repository;

    public UserService(IGenericRepository<User> repository)
    {
        _repository = repository;
    }

    public async Task CreateUser(string email, string username, string password)
    {
        var user = await _repository.GetById(email);
        if (user != null)
        {
            throw new Exception("User already exists");
        }

        var salt = BCrypt.Net.BCrypt.GenerateSalt(12); 
        var newUser = new User
        {
            Email = email,
            HashedPassword = HashPassword(password, salt),
            Username = username,
            HashSalt = salt
        };
        await _repository.Create(newUser);
    }

    public async Task ValidateUser(string email, string password)
    {
        var user = await _repository.GetById(email);
        if (user == null)
        {
            throw new Exception("User does not exist");
        }

        if (user.HashedPassword != HashPassword(password, user.HashSalt))
        {
            throw new Exception("Password is incorrect");
        }
    }

    private static string HashPassword(string password, string salt)
    {
        var hashedPassword = BCrypt.Net.BCrypt.HashPassword(password, salt);
        return hashedPassword;
    }
}