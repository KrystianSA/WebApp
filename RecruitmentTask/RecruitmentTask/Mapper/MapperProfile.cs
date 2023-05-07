using AutoMapper;
using RecruitmentTask.Entities;
using RecruitmentTask.Models;

namespace RecruitmentTask.Mapper
{
    public class MapperProfile : Profile
    {
        public MapperProfile()
        {
            CreateMap<User, RegisterUser>();
            CreateMap<User, LoginUser>();
        }
    }
}
