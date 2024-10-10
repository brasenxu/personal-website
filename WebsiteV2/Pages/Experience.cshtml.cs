using Microsoft.AspNetCore.Mvc.RazorPages;

namespace WebsiteV2.Pages;

public class ExperienceModel(ILogger<ExperienceModel> logger) : PageModel
{
    private readonly ILogger<ExperienceModel> _logger = logger;

    public void OnGet()
    {
    }
}