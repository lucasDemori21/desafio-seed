using desafio_seed.Models;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace desafio_seed.Controllers
{
    public class MultiSearchController : Controller
    {
        private readonly ILogger<MultiSearchController> _logger;

        public MultiSearchController(ILogger<MultiSearchController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
