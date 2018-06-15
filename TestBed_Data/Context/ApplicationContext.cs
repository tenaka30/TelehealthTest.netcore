using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using TestBed_Data.Models;
using Microsoft.EntityFrameworkCore;

namespace TestBed_Data.Context
{
    public class ApplicationContext : DbContext
    {
        public ApplicationContext(DbContextOptions<ApplicationContext> options) : base(options)
        { }

        //public DbSet<CrewMember> CrewMembers { get; set; }
        //public DbSet<StarShip> StarShips { get; set; }

        public override int SaveChanges()
        {
            AddAuditInfo();
            return base.SaveChanges();
        }

        private void AddAuditInfo()
        {
            var entries = ChangeTracker.Entries().Where(x => x.Entity is BaseEntity && (x.State == EntityState.Added || x.State == EntityState.Modified));
            foreach (var entry in entries)
            {
                if (entry.State == EntityState.Added)
                {
                    ((BaseEntity)entry.Entity).Created = DateTime.UtcNow;
                }
            ((BaseEntity)entry.Entity).Modified = DateTime.UtcNow;
            }
        }
    }
}
