// Controllers/PetSittersController.cs
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using VelvetLeash.API.Data;
using VelvetLeash.API.Models;

namespace VelvetLeash.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PetSittersController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public PetSittersController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<PetSitter>>> GetAll()
        {
            return await _context.PetSitters.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<PetSitter>> GetById(int id)
        {
            var sitter = await _context.PetSitters.FindAsync(id);
            if (sitter == null) return NotFound();
            return sitter;
        }

        [HttpPost]
        public async Task<ActionResult<PetSitter>> Create(PetSitter sitter)
        {
            sitter.CreatedAt = DateTime.UtcNow;
            sitter.UpdatedAt = DateTime.UtcNow;
            _context.PetSitters.Add(sitter);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetById), new { id = sitter.Id }, sitter);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id, PetSitter sitter)
        {
            if (id != sitter.Id) return BadRequest();

            sitter.UpdatedAt = DateTime.UtcNow;
            _context.Entry(sitter).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!_context.PetSitters.Any(e => e.Id == id))
                    return NotFound();
                throw;
            }

            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var sitter = await _context.PetSitters.FindAsync(id);
            if (sitter == null) return NotFound();

            _context.PetSitters.Remove(sitter);
            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}
