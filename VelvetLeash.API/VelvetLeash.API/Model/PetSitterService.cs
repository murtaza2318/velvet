using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace VelvetLeash.API.Models
{
    public class PetSitterService
    {
        public int Id { get; set; }

        [Required]
        public int PetSitterId { get; set; }

        [Required]
        public int ServiceType { get; set; } // Enum: 1=Boarding, 2=DayCare, etc.

        [Required]
        [Column(TypeName = "decimal(18,2)")]
        public decimal Price { get; set; }

        public string? Description { get; set; }

        public bool IsActive { get; set; } = true;

        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

        [ForeignKey("PetSitterId")]
        public PetSitter PetSitter { get; set; }
    }
}
