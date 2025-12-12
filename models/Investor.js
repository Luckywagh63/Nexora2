import mongoose from "mongoose";

const InvestorSchema = new mongoose.Schema(
  {
    firebaseUID: { type: String, required: true, unique: true },

    // Basic
    name: String,
    email: String,

    // Investor Details
    firmName: String,
    investorType: String,

    investmentSize: String,     // e.g. 10L - 50L
    investmentRange: String,    // NEW
    sectorInterest: String,     // NEW
    website: String,            // NEW

    profileCompleted: { type: Boolean, default: false },

    userType: { type: String, default: "investor" },
  },
  { timestamps: true }
);

export default mongoose.models.Investor ||
  mongoose.model("Investor", InvestorSchema);
