using Microsoft.EntityFrameworkCore;
using ProjetoReact.Model;
using System.Configuration;



var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllersWithViews();


builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
//builder.Services.AddSwaggerGen();
builder.Services.AddRazorPages();
//



builder.Services.AddDbContext<Contexto>
    (options => options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));
//"Data Source=RICARDO-NOTE;Initial Catalog=BancoEntity; Integrated Security=False;User ID=sa;Password=172720; Connect Timeout=15;Encrypt=False;TrustServerCertificate=False"));
builder.Services.AddCors();//inserido

builder.Services.AddControllers(); //inserido

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();

app.UseCors(opcoes => opcoes.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader());

app.MapControllerRoute(
    name: "default",
    pattern: "{controller}/{action=Index}/{id?}");

app.MapFallbackToFile("index.html");

app.Run();

