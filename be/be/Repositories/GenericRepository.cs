using be.Data;
using Microsoft.EntityFrameworkCore;

namespace be.Repositories;

public class GenericRepository<T> : IGenericRepository<T> where T : class
{
    private readonly DataContext _context;
    public GenericRepository(DataContext context)
    {
        _context = context;
    }

    public async Task Create(T entity)
    {
        await _context.AddAsync(entity);
        await _context.SaveChangesAsync();
    }

    public async Task Delete(T entity)
    {
        _context.Remove(entity);
        await _context.SaveChangesAsync();
    }

    public async Task<IEnumerable<T>> GetAll()
    {
        return await _context.Set<T>().ToListAsync();
    }

    public async Task<T?> GetById(object id)
    {
        return await _context.FindAsync<T>(id);
    }

    public void SaveChanges()
    {
        _context.SaveChanges();
    }

    public async Task Update(T entity)
    {
        _context.Update(entity);
        await _context.SaveChangesAsync();
    }
}