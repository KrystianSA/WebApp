using AutoMapper;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using RecruitmentTask.Data;
using RecruitmentTask.Entities;
using RecruitmentTask.Models;
using RecruitmentTask.Services;

namespace RecruitmentTask.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [EnableCors("AllowOrigin")]
    public class AccountController : ControllerBase
    {
        private readonly IAccountService _accountService;
        private readonly IMapper _mapper;

        public AccountController(IAccountService accountService, IMapper mapper)
        {
            _accountService = accountService;
            _mapper = mapper;
        }

        [HttpPost("register")]
        public ActionResult RegisterUser([FromBody] RegisterUser user)
        {
            _accountService.Register(user);
            return Ok();
        }

        [HttpPost("login")]
        public ActionResult Login([FromBody] LoginUser login)
        {
            string token = _accountService.Login(login);
            var response = new
            {
                token = token
            };
            return Ok(response);
        }

    }
}
