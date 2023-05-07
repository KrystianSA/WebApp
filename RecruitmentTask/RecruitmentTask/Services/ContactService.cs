using AutoMapper;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
using Microsoft.OpenApi.Validations;
using RecruitmentTask.Data;
using RecruitmentTask.Entities;
using RecruitmentTask.Models;

namespace RecruitmentTask.Services
{
    public class ContactService : IContactService
    {
        private readonly DataDbContext _dbContext;

        public ContactService(DataDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public IEnumerable<Contact> GetAll()
        {
            return _dbContext.Contacts.ToList();
        }

        public Contact GetById(int id)
        {
            return _dbContext.Contacts.Find(id);
        }

        public bool Remove(int id) 
        {
            var contact = GetById(id);

            if (contact is null) return false;

            _dbContext.Contacts.Remove(contact);
            _dbContext.SaveChanges();

            return true;
        }

        public Contact Add(Contact contact)
        {
            _dbContext.Contacts.Add(contact);
            _dbContext.SaveChanges();
            return contact;
        }

        public bool Update(UpdateContact contact, int id)
        {
            var contactToUpdate = GetById(id);

            if (contactToUpdate is null)
                return false;

            contactToUpdate.PhoneNumber = contact.PhoneNumber;
            contactToUpdate.Email = contact.Email;
            contactToUpdate.CategoryId = contact.CategoryId;

            _dbContext.SaveChanges();

            return true;
        }
    }
}
