using Microsoft.AspNetCore.Mvc;

namespace DevBuild.Backend.Controllers
{
    public class advertisementController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
