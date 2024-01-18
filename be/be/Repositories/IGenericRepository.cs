namespace be.Repositories;

public interface IGenericRepository<T> where T : class
{
    public Task<T?> GetById(object id);
    public Task<IEnumerable<T>> GetAll();
    public Task Create(T entity);
    public Task Update(T entity);
    public Task Delete(T entity);
    public void SaveChanges();
}