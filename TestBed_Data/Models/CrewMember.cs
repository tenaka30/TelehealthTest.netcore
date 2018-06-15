using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Text;

namespace TestBed_Data.Models
{
    public class CrewMember : BaseEntity
    {
        [DisplayName("Full Name")]
        public string FullName { get; set; }

        //A Crew Member is part of a starShip.
        public int StarShipId { get; set; }
        public StarShip StarShip { get; set; }
    }
}
