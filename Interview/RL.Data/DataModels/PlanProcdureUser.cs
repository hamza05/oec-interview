﻿using RL.Data.DataModels.Common;
using System.ComponentModel.DataAnnotations;


namespace RL.Data.DataModels
{
    public class PlanProcdureUser : IChangeTrackable
    {
        [Key]
        public int PlanProcdureUserId { get; set; }
        public int ProcedureId { get; set; }
        public int PlanId { get; set; }
        public int UserId { get; set; }

        public virtual Procedure Procedure { get; set; }
        public virtual Plan Plan { get; set; }
        public virtual User User { get; set; }

        public DateTime CreateDate { get; set; }
        public DateTime UpdateDate { get; set; }
    }
    
}
