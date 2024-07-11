using DevBuild.Backend.Models.CompletionState;
using DevBuild.Backend.Models.enums;

namespace DevBuild.Backend.Models
{
    public class Advertisement
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public double Price { get; set; }
        public double Measurement { get; set; }
        public State CompletionState { get; set; }
        public BuildingType BuildingType { get; set; }
        public string Photo { get; set; }
        public int ContactNumber { get; set; }
        public string ContactEmail { get; set; }

    }
}
