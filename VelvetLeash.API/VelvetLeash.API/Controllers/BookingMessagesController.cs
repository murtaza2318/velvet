// Controllers/BookingMessagesController.cs
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using VelvetLeash.API.Data;
using VelvetLeash.API.Models;

namespace VelvetLeash.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class BookingMessagesController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public BookingMessagesController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var messages = await _context.BookingMessages.ToListAsync();
            return Ok(messages);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            var message = await _context.BookingMessages.FindAsync(id);
            if (message == null) return NotFound();
            return Ok(message);
        }

        [HttpPost]
        public async Task<IActionResult> Create(BookingMessage message)
        {
            if (!ModelState.IsValid) return BadRequest(ModelState);
            _context.BookingMessages.Add(message);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(Get), new { id = message.Id }, message);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id, BookingMessage message)
        {
            if (id != message.Id) return BadRequest();
            _context.Entry(message).State = EntityState.Modified;
            await _context.SaveChangesAsync();
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var message = await _context.BookingMessages.FindAsync(id);
            if (message == null) return NotFound();
            _context.BookingMessages.Remove(message);
            await _context.SaveChangesAsync();
            return NoContent();
        }
    }
}
