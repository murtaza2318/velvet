using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using VelvetLeash.API.Data;
using VelvetLeash.API.Models;

namespace VelvetLeash.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PetSitterServicesController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public PetSitterServicesController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var services = await _context.PetSitterServices.ToListAsync();
            return Ok(services);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            var service = await _context.PetSitterServices.FindAsync(id);
            if (service == null) return NotFound();
            return Ok(service);
        }

        [HttpPost]
        public async Task<IActionResult> Create(PetSitterService service)
        {
            _context.PetSitterServices.Add(service);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(Get), new { id = service.Id }, service);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id, PetSitterService updated)
        {
            if (id != updated.Id) return BadRequest();
            _context.Entry(updated).State = EntityState.Modified;
            await _context.SaveChangesAsync();
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var service = await _context.PetSitterServices.FindAsync(id);
            if (service == null) return NotFound();
            _context.PetSitterServices.Remove(service);
            await _context.SaveChangesAsync();
            return NoContent();
        }
    }
}
