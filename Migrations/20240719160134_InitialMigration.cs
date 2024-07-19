using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace DevBuild.Migrations
{
    /// <inheritdoc />
    public partial class InitialMigration : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Advertisements",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Title = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Description = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Price = table.Column<double>(type: "float", nullable: false),
                    Measurement = table.Column<double>(type: "float", nullable: false),
                    CompletionState = table.Column<int>(type: "int", nullable: false),
                    BuildingType = table.Column<int>(type: "int", nullable: false),
                    Photo = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ContactNumber = table.Column<int>(type: "int", nullable: false),
                    ContactEmail = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Advertisements", x => x.Id);
                });

            migrationBuilder.InsertData(
                table: "Advertisements",
                columns: new[] { "Id", "BuildingType", "CompletionState", "ContactEmail", "ContactNumber", "Description", "Measurement", "Photo", "Price", "Title" },
                values: new object[,]
                {
                    { 1, 0, 2, "contact@villa.com", 123456789, "A beautiful villa with ocean view.", 250.5, "https://images.unsplash.com/photo-1523217582562-09d0def993a6?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 1000000.0, "Luxury Villa" },
                    { 2, 1, 0, "contact@apartment.com", 987654321, "A modern apartment in the city center.", 120.0, "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 500000.0, "Modern Apartment" },
                    { 3, 3, 1, "contact@office.com", 112233445, "Spacious office space in the business district.", 300.0, "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2301&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 750000.0, "Office Space" },
                    { 4, 2, 2, "contact@Studio.com", 998877665, "A cozy studio apartment in the suburbs.", 60.0, "https://images.unsplash.com/photo-1607570838997-65f270035031?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHN0dWRpb3xlbnwwfHwwfHx8MA%3D%3D", 250000.0, "Studio Apartment" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Advertisements");
        }
    }
}
