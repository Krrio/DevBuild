﻿using DevBuild.Backend.Models;
using DevBuild.Backend.Models.CompletionState;
using DevBuild.Backend.Models.enums;
using DevBuild.Backend.Operations;

namespace DevBuild.Backend.Services
{
    public class AdvertisementService : IAdvertisementService
    {
        private readonly List<Advertisement> _advertisements;

        public AdvertisementService()
        {
            _advertisements = new List<Advertisement>()
            {
                new Advertisement()
                {
                    Id = 1,
                    Title = "Luxury Villa",
                    Description = "A beautiful villa with ocean view.",
                    Price = 1000000,
                    Measurement = 250.5,
                    CompletionState = State.Turnkey,
                    BuildingType = BuildingType.House,
                    Photo = "https://images.unsplash.com/photo-1523217582562-09d0def993a6?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    ContactNumber = 123456789,
                    ContactEmail = "contact@villa.com"
                },
                new Advertisement()
                {
                    Id = 2,
                    Title = "Modern Apartment",
                    Description = "A modern apartment in the city center.",
                    Price = 500000,
                    Measurement = 120.0,
                    CompletionState = State.Developer,
                    BuildingType = BuildingType.Apartment,
                    Photo = "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    ContactNumber = 987654321,
                    ContactEmail = "contact@apartment.com"
                },
                new Advertisement()
                {
                    Id = 3,
                    Title = "Office Space",
                    Description = "Spacious office space in the business district.",
                    Price = 750000,
                    Measurement = 300.0,
                    CompletionState = State.Raw,
                    BuildingType = BuildingType.Office,
                    Photo = "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2301&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    ContactNumber = 112233445,
                    ContactEmail = "contact@office.com"
                },
                new Advertisement()
                {
                    Id = 4,
                    Title = "Studio Apartment",
                    Description = "A cozy studio apartment in the suburbs.",
                    Price = 250000,
                    Measurement = 60.0,
                    CompletionState = State.Turnkey,
                    BuildingType = BuildingType.Studio,
                    Photo = "https://images.unsplash.com/photo-1607570838997-65f270035031?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHN0dWRpb3xlbnwwfHwwfHx8MA%3D%3D",
                    ContactNumber = 998877665,
                    ContactEmail = "contact@Studio.com"
                }
            };
        }
        public async Task<List<Advertisement>> GetAllAdvertisementsAsync()
        {
            return await Task.FromResult(_advertisements);
        }
        public async Task<Advertisement?> GetAdvertisementByIdAsync(int id)
        {
            var advertisement = _advertisements.FirstOrDefault(a => a.Id == id);
            if (advertisement == null)
            {
                return null;
            }
            return await Task.FromResult(advertisement);
        }

        public async Task<Advertisement> AddAdvertisementAsync(Advertisement advertisement)
        {
            var ad = new Advertisement()
            {
                Id = _advertisements.Max(a => a.Id) + 1,
                Title = advertisement.Title,
                Description = advertisement.Description,
                Price = advertisement.Price,
                Measurement = advertisement.Measurement,
                CompletionState = advertisement.CompletionState,
                BuildingType = advertisement.BuildingType,
                Photo = advertisement.Photo,
                ContactNumber = advertisement.ContactNumber,
                ContactEmail = advertisement.ContactEmail
            };
            _advertisements.Add(ad);
            return await Task.FromResult(ad);
        }
        public async Task<IQueryable<Advertisement>> GetMultipleAsync()
        {
            return await Task.FromResult(_advertisements.AsQueryable());
        }
        public async Task<Advertisement?> GetAsync(int id)
        {
            var advertisement = _advertisements.FirstOrDefault(a => a.Id == id);
            return await Task.FromResult(advertisement);
        }
       public async Task<Advertisement> EditAsync(Advertisement item)
        {
            var advertisement = _advertisements.FirstOrDefault(a => a.Id == item.Id);
            if(advertisement != null)
            {
                _advertisements.Remove(advertisement);
            }
            _advertisements.Add(item);
            return await Task.FromResult(item);
        }
        public async Task DeleteAsync(int id)
        {
            var advertisement = _advertisements.FirstOrDefault(a => a.Id == id);
            if(advertisement != null)
            {
                _advertisements.Remove(advertisement);
            }
            await Task.CompletedTask;
        }
    }
}
