namespace DevBuild.Backend.Services
{
    public interface IServiceBase<T> where T : class
    {
        Task<IQueryable<T>> GetMultipleAsync();
        Task<T?> GetAsync(int id);
        Task<T> EditAsync(T item);
        Task DeleteAsync(int id);
    }
}
