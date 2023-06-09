﻿using Microsoft.VisualBasic;
using System.ComponentModel.DataAnnotations;

namespace RecruitmentTask.Models
{
    public class RegisterUser
    {
        [Required]
        public string Name { get; set; }

        [Required]
        public string Surname { get; set; }

        [Required]
        [EmailAddress]
        public string Email { get; set; }

        [MinLength(8)]
        [RegularExpression(@"^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,}$",
         ErrorMessage = "Hasło powinno zawierać kombinację liter (zarówno wielkich, jak i małych), cyfr oraz znaków specjalnych, takich jak !, @, #, $ itp.")]
        public string Password { get; set; }

        [Required]
        public double PhoneNumber { get; set; }

        [Required]
        [DataType(DataType.Date)]
        public DateTime DateOfBirth { get; set; }
    }
}