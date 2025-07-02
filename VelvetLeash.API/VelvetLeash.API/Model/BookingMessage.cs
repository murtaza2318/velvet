// Models/BookingMessage.cs
using System;
using System.ComponentModel.DataAnnotations;

namespace VelvetLeash.API.Models
{
    public class BookingMessage
    {
        public int Id { get; set; }

        [Required]
        public int BookingId { get; set; }

        [Required]
        public string SenderId { get; set; }

        [Required]
        public string Message { get; set; }

        public bool IsRead { get; set; } = false;

        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    }
}
