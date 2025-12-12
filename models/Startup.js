import mongoose from "mongoose";

const StartupSchema = new mongoose.Schema(
  {
    firebaseUID: { type: String, required: true, unique: true },
    name: String,
    email: String,

    // Startup fields
    startupName: String,
    industry: String,
    otherIndustry: String,

    stage: String,
    otherStage: String,

    teamSize: String,
    location: String,
    website: String,
    pitchDeck: String,
    description: String,

    profileCompleted: { type: Boolean, default: false },

    userType: { type: String, default: "startup" },
  },
  { timestamps: true }
);

export default mongoose.models.Startup ||
  mongoose.model("Startup", StartupSchema);
