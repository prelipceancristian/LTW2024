namespace be.BusinessLogicServices.Business;

public interface IUserService
{
    public Task CreateUser(string email, string username, string password);

    public Task ValidateUser(string email, string password);
}