using System;
using System.Collections.Generic;
using System.Text;

namespace TestBed_Data.Models
{
    public class StarShip : BaseEntity
    {
        public string ShipName { get; set; }
        public DateTime CommissionDate { get; set; }

        //A Star Ship has many crew members.
        public List<CrewMember> CrewMembers { get; set; }
    }
}
