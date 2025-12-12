// models/User.js
import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    firebaseUID: { type: String, required: true, unique: true },

    name: String,
    email: String,
    userType: String, // startup | investor
    profileCompleted: { type: Boolean, default: false },

    // Startup
    startupName: String,
    industry: String,
    fundingStage: String,
    pitchDeck: String,
    description: String,

    // Investor
    firmName: String,
    investmentSize: String,
    investorType: String,
    website: String,
  },
  { timestamps: true }
);

export default mongoose.models.User || mongoose.model("User", UserSchema);
