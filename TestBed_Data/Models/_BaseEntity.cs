using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace TestBed_Data.Models
{
    /// <summary>
    /// A Base Model which all other models should inherit from, implimenting auditing and ID Columns.
    /// </summary>
    public class BaseEntity
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)] //Impliment auto Inc
        [Key]
        public int Id { get; set; }

        public DateTime Created { get; set; }
        public DateTime Modified { get; set; }

    }
}
