const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  jobRole: {
    type: String,
  },
  workingDays: {
    type: [String],
  },
  checkInTime: {
    type: String,
  },
  checkOutTime: {
    type: String,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  avatar: { 
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = User = mongoose.model("users", UserSchema);
