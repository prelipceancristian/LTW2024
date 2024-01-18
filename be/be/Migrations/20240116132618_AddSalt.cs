using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace be.Migrations
{
    /// <inheritdoc />
    public partial class AddSalt : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "HashSalt",
                table: "Users",
                type: "TEXT",
                nullable: false,
                defaultValue: "");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "HashSalt",
                table: "Users");
        }
    }
}
