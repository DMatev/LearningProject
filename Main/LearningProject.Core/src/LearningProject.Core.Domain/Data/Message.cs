using System;
using System.Collections.Generic;

namespace LearningProject.Core.Domain.Data {
    public partial class Message {
        public Message() {
            Translation = new HashSet<Translation>();
        }

        public string MessageCode { get; set; }
        public bool IsComplex { get; set; }
        public byte[] RowRevision { get; set; }

        public virtual ICollection<Translation> Translation { get; set; }
    }
}
