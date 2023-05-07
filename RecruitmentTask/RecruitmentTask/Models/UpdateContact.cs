using System.ComponentModel.DataAnnotations;

namespace RecruitmentTask.Models
{
    public class UpdateContact
    {
        public double PhoneNumber { get; set; }

        [EmailAddress]
        public string Email { get; set; }
        public int CategoryId { get; set; }
    }
}
