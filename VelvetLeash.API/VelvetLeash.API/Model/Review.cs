// Models/Review.cs
using System;
using System.ComponentModel.DataAnnotations;

namespace VelvetLeash.API.Models
{
    public class Review
    {
        public int Id { get; set; }

        [Required]
        public string ReviewerId { get; set; }

        [Required]
        public string RevieweeId { get; set; }

        [Required]
        public int BookingId { get; set; }

        [Range(1, 5)]
        public int Rating { get; set; }

        public string? Comment { get; set; }

        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    }
}
