// Models/UserNotificationSetting.cs
using System;
using System.ComponentModel.DataAnnotations;

namespace VelvetLeash.API.Models
{
    public class UserNotificationSetting
    {
        public int Id { get; set; }

        [Required]
        public string UserId { get; set; }

        public bool EmailNotifications { get; set; } = true;
        public bool MarketingEmails { get; set; } = false;
        public bool SmsNotifications { get; set; } = true;
        public bool MessageNotifications { get; set; } = true;
        public bool NewInquiries { get; set; } = true;
        public bool NewMessages { get; set; } = true;
        public bool BookingRequests { get; set; } = true;
        public bool BookingDeclined { get; set; } = true;
        public bool MmsSupport { get; set; } = false;
        public bool QuietHours { get; set; } = false;
        public bool MarketingSms { get; set; } = false;

        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
        public DateTime UpdatedAt { get; set; } = DateTime.UtcNow;
    }
}
