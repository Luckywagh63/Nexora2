import mongoose from "mongoose";

const InvestorSchema = new mongoose.Schema(
  {
    firebaseUID: { type: String, required: true, unique: true },
    name: String,
    email: String,

    firmName: String,
    investmentSize: String,
    investorType: String,

    profileCompleted: { type: Boolean, default: false },

    userType: { type: String, default: "investor" },  // ⬅ added
  },
  { timestamps: true }
);

export default mongoose.models.Investor ||
  mongoose.model("Investor", InvestorSchema);
