using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using RecruitmentTask.Data;
using RecruitmentTask.Entities;
using RecruitmentTask.Models;
using RecruitmentTask.Services;
using System.Collections.Generic;

namespace RecruitmentTask.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [EnableCors("AllowOrigin")]
    public class ContactController : ControllerBase
    {
        private readonly IContactService _userService;
        private readonly DataDbContext _dbContext;
        private readonly IMapper _mapper;

        public ContactController(IContactService userService, DataDbContext dbContext,IMapper mapper)
        {
            _userService = userService;
            _dbContext = dbContext;
            _mapper = mapper;
        }

        [HttpGet]
        public ActionResult<IEnumerable<Contact>> GetContacts()
        {
            var contacts = _userService.GetAll();
            return Ok(contacts);
        }

        [HttpGet]
        [Route("{id}")]
        public ActionResult GetContact([FromRoute] int id)
        {
            var contact = _userService.GetById(id);
            return Ok();
        }

        [HttpDelete]
        [Route("{id}")]
        [Authorize]
        public ActionResult DeleteContact([FromRoute] int id)
        {
            var isDeleted = _userService.Remove(id);
            if (isDeleted)
            {
                return NoContent();
            }

            return NotFound();
        }

        [HttpPost]
        [Authorize]
        public ActionResult AddContact([FromBody] Contact contact) 
        {
            if (_dbContext.Contacts.Any(x => x.Email == contact.Email))
            {
                return BadRequest("Email already exist");
            }

            var newUser = _userService.Add(contact);
            return Ok();
        }

        [HttpPut]
        [Route("{id}")]
        [Authorize]
        public ActionResult UpdateContact([FromBody] UpdateContact user, [FromRoute] int id)
        {
            if(!ModelState.IsValid) 
            {
                return BadRequest(ModelState);
            }

            var isUpdated = _userService.Update(user, id);
            var updatedContact = _mapper.Map<UpdateContact>(user);

            //if (!updatedContact)
            //{
            //    return NotFound();
            //}

            return Ok();
        }
    }
}
