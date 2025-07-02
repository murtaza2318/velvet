using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace VelvetLeash.API.Migrations
{
    /// <inheritdoc />
    public partial class AddUserNotificationSettingsTable : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "UserNotificationSettings",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    UserId = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    EmailNotifications = table.Column<bool>(type: "bit", nullable: false),
                    MarketingEmails = table.Column<bool>(type: "bit", nullable: false),
                    SmsNotifications = table.Column<bool>(type: "bit", nullable: false),
                    MessageNotifications = table.Column<bool>(type: "bit", nullable: false),
                    NewInquiries = table.Column<bool>(type: "bit", nullable: false),
                    NewMessages = table.Column<bool>(type: "bit", nullable: false),
                    BookingRequests = table.Column<bool>(type: "bit", nullable: false),
                    BookingDeclined = table.Column<bool>(type: "bit", nullable: false),
                    MmsSupport = table.Column<bool>(type: "bit", nullable: false),
                    QuietHours = table.Column<bool>(type: "bit", nullable: false),
                    MarketingSms = table.Column<bool>(type: "bit", nullable: false),
                    CreatedAt = table.Column<DateTime>(type: "datetime2", nullable: false),
                    UpdatedAt = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UserNotificationSettings", x => x.Id);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "UserNotificationSettings");
        }
    }
}
