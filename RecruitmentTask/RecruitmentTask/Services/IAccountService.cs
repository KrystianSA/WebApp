﻿using RecruitmentTask.Models;

namespace RecruitmentTask.Services
{
    public interface IAccountService
    {
        void Register(RegisterUser user);
        string Login(LoginUser login);
    }
}
