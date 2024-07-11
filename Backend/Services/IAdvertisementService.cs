using DevBuild.Backend.Models;
using DevBuild.Backend.Operations;

namespace DevBuild.Backend.Services
{
    public interface IAdvertisementService : IServiceBase<Advertisement>
    {
        Task<OperationResult<dynamic>> GetAllAdvertisements();
        Task<OperationResult<dynamic>> GetAdvertisementById(int id);
        Task<OperationResult<dynamic>> AddAdvertisement(Advertisement advertisement);
    }
}
