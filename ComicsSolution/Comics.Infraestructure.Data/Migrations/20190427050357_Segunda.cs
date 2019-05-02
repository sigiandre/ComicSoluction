using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Comics.Infraestructure.Data.Migrations
{
    public partial class Segunda : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Usuario",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Nombres = table.Column<string>(type: "varchar(100)", nullable: false),
                    ApellidoPaterno = table.Column<string>(type: "varchar(50)", nullable: false),
                    ApellidoMaterno = table.Column<string>(type: "varchar(50)", nullable: true),
                    Email = table.Column<string>(type: "varchar(250)", nullable: false),
                    Password = table.Column<string>(type: "varchar(50)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Usuario", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Usuario");
        }
    }
}
