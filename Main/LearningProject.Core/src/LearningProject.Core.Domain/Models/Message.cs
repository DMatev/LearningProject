﻿using System.Collections.Generic;

namespace LearningProject.Core.Domain.Models
{
    public partial class Message
    {
        public Message()
        {
            Translation = new HashSet<Translation>();
        }

        public string MessageCode { get; set; }
        public byte[] RowRevision { get; set; }

        public virtual ICollection<Translation> Translation { get; set; }
    }
}
