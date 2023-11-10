using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.OData.Query;
using RL.Data.DataModels;
using RL.Data;

namespace RL.Backend.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PlanProcedureUserController : ControllerBase
    {
        private readonly ILogger<PlanProcedureUserController> _logger;
        private readonly RLContext _context;

        public PlanProcedureUserController(ILogger<PlanProcedureUserController> logger, RLContext context)
        {
            _logger = logger;
            _context = context ?? throw new ArgumentNullException(nameof(context));
        }

        [HttpGet]
        [EnableQuery]
        public IEnumerable<PlanProcdureUser> Get()
        {
            return _context.PlanProcdureUser;
        }
    }
}
