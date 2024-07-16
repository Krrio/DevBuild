using DevBuild.Backend.Models;
using DevBuild.Backend.Services;
using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/[controller]")]
public class AdvertisementController : ControllerBase
{
    private readonly IAdvertisementService _advertisementService;

    public AdvertisementController(IAdvertisementService advertisementService)
    {
        _advertisementService = advertisementService;
    }

    [HttpGet("all")]
    public async Task<IEnumerable<Advertisement>> GetAll()
    {
        return await _advertisementService.GetAllAdvertisementsAsync();
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<Advertisement>> Get(int id)
    {
        var advertisement = await _advertisementService.GetAdvertisementByIdAsync(id);
        if (advertisement == null)
        {
            return NotFound();
        }
        return Ok(advertisement);
    }

    [HttpPost("add")]
    public async Task<ActionResult<Advertisement>> Add([FromBody] Advertisement advertisement)
    {
        var newAdvertisement = await _advertisementService.AddAdvertisementAsync(advertisement);
        return CreatedAtAction(nameof(Get), new { id = newAdvertisement.Id }, newAdvertisement);
    }

    [HttpPut("edit/{id}")]
    public async Task<ActionResult<Advertisement>> Edit(int id, [FromBody] Advertisement advertisement)
    {
        if (id != advertisement.Id)
        {
            return BadRequest();
        }
        var editedAdvertisement = await _advertisementService.EditAsync(advertisement);
        return Ok(editedAdvertisement);
    }

    [HttpDelete("delete/{id}")]
    public async Task<ActionResult> Delete(int id)
    {
        await _advertisementService.DeleteAsync(id);
        return Ok("Advertisement deleted successfully!");
    }
}
