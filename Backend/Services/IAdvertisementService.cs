using DevBuild.Backend.Models;
using DevBuild.Backend.Operations;

namespace DevBuild.Backend.Services
{
    public interface IAdvertisementService : IServiceBase<Advertisement>
    {
        Task<List<Advertisement>> GetAllAdvertisementsAsync();
        Task<Advertisement?> GetAdvertisementByIdAsync(int id);
        Task<Advertisement> AddAdvertisementAsync(Advertisement advertisement);
    }
}
