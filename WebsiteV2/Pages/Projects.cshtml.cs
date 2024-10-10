using Microsoft.AspNetCore.Mvc.RazorPages;

namespace WebsiteV2.Pages;

public class ProjectsModel(ILogger<ProjectsModel> logger) : PageModel
{
    private readonly ILogger<ProjectsModel> _logger = logger;

    public void OnGet()
    {
        
    }
}