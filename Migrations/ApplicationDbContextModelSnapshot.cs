﻿// <auto-generated />
using DevBuild.Backend.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace DevBuild.Migrations
{
    [DbContext(typeof(ApplicationDbContext))]
    partial class ApplicationDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "8.0.7")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("DevBuild.Backend.Models.Advertisement", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<int>("BuildingType")
                        .HasColumnType("int");

                    b.Property<int>("CompletionState")
                        .HasColumnType("int");

                    b.Property<string>("ContactEmail")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("ContactNumber")
                        .HasColumnType("int");

                    b.Property<string>("Description")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<double>("Measurement")
                        .HasColumnType("float");

                    b.Property<string>("Photo")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<double>("Price")
                        .HasColumnType("float");

                    b.Property<string>("Title")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("Advertisements");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            BuildingType = 0,
                            CompletionState = 2,
                            ContactEmail = "contact@villa.com",
                            ContactNumber = 123456789,
                            Description = "A beautiful villa with ocean view.",
                            Measurement = 250.5,
                            Photo = "https://images.unsplash.com/photo-1523217582562-09d0def993a6?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                            Price = 1000000.0,
                            Title = "Luxury Villa"
                        },
                        new
                        {
                            Id = 2,
                            BuildingType = 1,
                            CompletionState = 0,
                            ContactEmail = "contact@apartment.com",
                            ContactNumber = 987654321,
                            Description = "A modern apartment in the city center.",
                            Measurement = 120.0,
                            Photo = "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                            Price = 500000.0,
                            Title = "Modern Apartment"
                        },
                        new
                        {
                            Id = 3,
                            BuildingType = 3,
                            CompletionState = 1,
                            ContactEmail = "contact@office.com",
                            ContactNumber = 112233445,
                            Description = "Spacious office space in the business district.",
                            Measurement = 300.0,
                            Photo = "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2301&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                            Price = 750000.0,
                            Title = "Office Space"
                        },
                        new
                        {
                            Id = 4,
                            BuildingType = 2,
                            CompletionState = 2,
                            ContactEmail = "contact@Studio.com",
                            ContactNumber = 998877665,
                            Description = "A cozy studio apartment in the suburbs.",
                            Measurement = 60.0,
                            Photo = "https://images.unsplash.com/photo-1607570838997-65f270035031?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHN0dWRpb3xlbnwwfHwwfHx8MA%3D%3D",
                            Price = 250000.0,
                            Title = "Studio Apartment"
                        });
                });
#pragma warning restore 612, 618
        }
    }
}
