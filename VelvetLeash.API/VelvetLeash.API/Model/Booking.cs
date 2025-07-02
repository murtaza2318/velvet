using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace VelvetLeash.API.Models
{
    public enum BookingStatus
    {
        Pending = 1,
        Confirmed,
        InProgress,
        Completed,
        Cancelled,
        Declined
    }

    public class Booking
    {
        public int Id { get; set; }

        [Required]
        public string UserId { get; set; }

        [Required]
        public int PetSitterId { get; set; }

        [Required]
        public int PetId { get; set; }

        [Required]
        public int ServiceType { get; set; } // Could later be enum

        [Required]
        public DateTime StartDate { get; set; }

        [Required]
        public DateTime EndDate { get; set; }

        public string? SpecialInstructions { get; set; }

        [Column(TypeName = "decimal(18,2)")]
        public decimal TotalAmount { get; set; }

        public BookingStatus Status { get; set; } = BookingStatus.Pending;

        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
        public DateTime UpdatedAt { get; set; } = DateTime.UtcNow;
    }
}
