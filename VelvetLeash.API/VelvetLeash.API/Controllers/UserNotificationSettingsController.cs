// Controllers/UserNotificationSettingsController.cs
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using VelvetLeash.API.Data;
using VelvetLeash.API.Models;

namespace VelvetLeash.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UserNotificationSettingsController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public UserNotificationSettingsController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet("{userId}")]
        public async Task<IActionResult> GetByUserId(string userId)
        {
            var setting = await _context.UserNotificationSettings.FirstOrDefaultAsync(u => u.UserId == userId);
            if (setting == null) return NotFound();
            return Ok(setting);
        }

        [HttpPost]
        public async Task<IActionResult> Create(UserNotificationSetting setting)
        {
            if (!ModelState.IsValid) return BadRequest(ModelState);
            _context.UserNotificationSettings.Add(setting);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetByUserId), new { userId = setting.UserId }, setting);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id, UserNotificationSetting setting)
        {
            if (id != setting.Id) return BadRequest();
            _context.Entry(setting).State = EntityState.Modified;
            await _context.SaveChangesAsync();
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var setting = await _context.UserNotificationSettings.FindAsync(id);
            if (setting == null) return NotFound();
            _context.UserNotificationSettings.Remove(setting);
            await _context.SaveChangesAsync();
            return NoContent();
        }
    }
}
