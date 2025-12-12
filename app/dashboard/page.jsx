"use client";

import { useEffect, useState } from "react";
import { auth } from "@/lib/firebase";
import { onAuthStateChanged } from "firebase/auth";
import {
  Loader2,
  Rocket,
  Wallet,
  User,
  Building2,
  Edit3,
  Globe,
  Save,
} from "lucide-react";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();

  const [firebaseUser, setFirebaseUser] = useState(null);
  const [mode, setMode] = useState("loading"); // loading | select-role | form | view
  const [saving, setSaving] = useState(false);

  const [profile, setProfile] = useState({
    firebaseUID: "",
    name: "",
    email: "",
    userType: "",

    // Startup
    startupName: "",
    industry: "",
    otherIndustry: "",
    stage: "",
    otherStage: "",
    teamSize: "",
    location: "",
    website: "",
    pitchDeck: "",
    description: "",

    // Investor
    firmName: "",
    investorType: "",
    otherInvestorType: "",
    investmentRange: "",
    sectorInterest: "",
    otherSector: "",
    websiteInvestor: "",

    profileCompleted: false,
  });

  // ----------------------------------------------------
  // LOAD USER
  // ----------------------------------------------------
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (user) => {
      if (!user) return router.push("/sign-in");

      setFirebaseUser(user);

      const startupRes = await fetch(`/api/user?uid=${user.uid}&type=startup`);
      const startupData = await startupRes.json();

      const investorRes = await fetch(`/api/user?uid=${user.uid}&type=investor`);
      const investorData = await investorRes.json();

      let found = null;

      if (startupData?.user?.firebaseUID) {
        found = { ...startupData.user, userType: "startup" };
      }
      if (investorData?.user?.firebaseUID) {
        found = { ...investorData.user, userType: "investor" };
      }

      if (!found) {
        setMode("select-role");
        return;
      }

      const safe = Object.fromEntries(
        Object.entries(found).map(([k, v]) => [k, v ?? ""])
      );

      safe.firebaseUID = user.uid;
      safe.email = user.email || safe.email;
      safe.name = user.displayName || safe.name;

      setProfile(safe);

      if (!safe.profileCompleted) setMode("form");
      else setMode("view");
    });

    return () => unsub();
  }, []);

  // ----------------------------------------------------
  // UPDATE HANDLER
  // ----------------------------------------------------
  const update = (e) =>
    setProfile((p) => ({ ...p, [e.target.name]: e.target.value }));

  // ----------------------------------------------------
  // SAVE PROFILE
  // ----------------------------------------------------
  const saveProfile = async () => {
    setSaving(true);

    const payload = { ...profile, profileCompleted: true };

    await fetch("/api/user", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    setSaving(false);
    setProfile(payload);
    setMode("view");
  };

  // ----------------------------------------------------
  // SELECT ROLE
  // ----------------------------------------------------
  const chooseRole = async (role) => {
    const payload = {
      firebaseUID: firebaseUser.uid,
      email: firebaseUser.email,
      name: firebaseUser.displayName || firebaseUser.email.split("@")[0],
      userType: role,
      profileCompleted: false,
    };

    await fetch("/api/user", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    setProfile(payload);
    setMode("form");
  };

  // ----------------------------------------------------
  // UI
  // ----------------------------------------------------

  if (mode === "loading")
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        <Loader2 className="w-12 h-12 animate-spin text-amber-400" />
      </div>
    );

  // ------------------ ROLE SELECTOR ------------------
  if (mode === "select-role")
    return (
      <div className="min-h-screen flex flex-col items-center  justify-center text-white bg-gradient-to-b from-black to-slate-950">
        <h1 className="text-4xl font-bold mb-10">
          Choose Your <span className="text-amber-400">Role</span>
        </h1>

        <div className="flex gap-10">
          <RoleCard
            label="Startup"
            icon={<Rocket className="w-12 h-12" />}
            onClick={() => chooseRole("startup")}
          />

          <RoleCard
            label="Investor"
            icon={<Wallet className="w-12 h-12" />}
            onClick={() => chooseRole("investor")}
          />
        </div>
      </div>
    );

  // ------------------ FORM MODE ------------------
  if (mode === "form")
    return (
      <div className="min-h-screen px-6 py-20 mt-18  text-white bg-gradient-to-br from-slate-950 via-blue-950 to-black">
        <div className="max-w-2xl mx-auto bg-slate-900/40 p-10 rounded-2xl border border-blue-900 shadow-lg shadow-blue-950/40 space-y-10">
          <h1 className="text-3xl font-bold flex items-center gap-3 text-amber-400">
            <Edit3 className="w-7 h-7" /> Complete Your Profile
          </h1>

          <Input label="Your Name" name="name" value={profile.name} update={update} icon={<User />} />

          {/* STARTUP FIELDS */}
          {profile.userType === "startup" && (
            <>
              <Input
                label="Startup Name"
                name="startupName"
                value={profile.startupName}
                update={update}
                icon={<Building2 />}
              />

              <DropdownWithOther
                label="Industry"
                name="industry"
                otherName="otherIndustry"
                value={profile.industry}
                otherValue={profile.otherIndustry}
                update={update}
                options={["AI", "Fintech", "HealthTech", "EdTech", "E-commerce", "Other"]}
              />

              <DropdownWithOther
                label="Stage"
                name="stage"
                otherName="otherStage"
                value={profile.stage}
                otherValue={profile.otherStage}
                update={update}
                options={["Idea", "MVP", "Pre-Seed", "Seed", "Series A+", "Other"]}
              />

              <Input label="Team Size" name="teamSize" value={profile.teamSize} update={update} icon={<User />} />
              <Input label="Location" name="location" value={profile.location} update={update} icon={<Globe />} />
              <Input label="Website" name="website" value={profile.website} update={update} icon={<Globe />} />
              <Input label="Pitch Deck URL" name="pitchDeck" value={profile.pitchDeck} update={update} icon={<Globe />} />

              <TextArea label="Description" name="description" value={profile.description} update={update} />
            </>
          )}

          {/* INVESTOR FIELDS */}
          {profile.userType === "investor" && (
            <>
              <Input label="Firm Name" name="firmName" value={profile.firmName} update={update} icon={<Building2 />} />

              <DropdownWithOther
                label="Investor Type"
                name="investorType"
                otherName="otherInvestorType"
                value={profile.investorType}
                otherValue={profile.otherInvestorType}
                update={update}
                options={[
                  "Angel Investor",
                  "VC Firm",
                  "Private Equity",
                  "Family Office",
                  "Corporate Investor",
                  "Other",
                ]}
              />

              <Input
                label="Investment Range"
                name="investmentRange"
                value={profile.investmentRange}
                update={update}
                icon={<Wallet />}
              />

              <DropdownWithOther
                label="Preferred Sector"
                name="sectorInterest"
                otherName="otherSector"
                value={profile.sectorInterest}
                otherValue={profile.otherSector}
                update={update}
                options={["AI", "Fintech", "Healthcare", "E-commerce", "Other"]}
              />

              <Input
                label="Website"
                name="websiteInvestor"
                value={profile.websiteInvestor}
                update={update}
                icon={<Globe />}
              />
            </>
          )}

          <button
            onClick={saveProfile}
            className="w-full flex items-center justify-center gap-3 bg-amber-500 hover:bg-amber-400 text-black py-4 rounded-xl font-semibold shadow-lg shadow-amber-500/30 transition"
          >
            {saving ? <Loader2 className="animate-spin" /> : <Save />}
            Save Profile
          </button>
        </div>
      </div>
    );

  // ------------------ VIEW MODE ------------------
  return (
    <div className="min-h-screen px-6 py-20 mt-18 text-white bg-gradient-to-br from-black via-slate-950 to-blue-950">
      <div className="max-w-2xl mx-auto bg-slate-900/40 p-10 rounded-2xl border border-blue-900 shadow-xl shadow-blue-950/40">

        <h1 className="text-4xl font-bold mb-6 flex items-center gap-3 text-amber-400">
          <User className="w-10 h-10" /> {profile.name}
        </h1>

        <ProfileItem label="Email" value={profile.email} />

        {profile.userType === "startup" ? (
          <>
            <ProfileItem label="Startup Name" value={profile.startupName} />

            <ProfileItem
              label="Industry"
              value={profile.industry === "Other" ? profile.otherIndustry : profile.industry}
            />

            <ProfileItem
              label="Stage"
              value={profile.stage === "Other" ? profile.otherStage : profile.stage}
            />

            <ProfileItem label="Team Size" value={profile.teamSize} />
            <ProfileItem label="Location" value={profile.location} />
            <ProfileItem label="Website" value={profile.website} />

            {/* ⭐ Pitch Deck Added ⭐ */}
            <ProfileItem label="Pitch Deck" value={profile.pitchDeck} />

            <ProfileItem label="Description" value={profile.description} />
          </>
        ) : (
          <>
            <ProfileItem label="Firm Name" value={profile.firmName} />

            <ProfileItem
              label="Investor Type"
              value={profile.investorType === "Other" ? profile.otherInvestorType : profile.investorType}
            />

            <ProfileItem label="Investment Range" value={profile.investmentRange} />

            <ProfileItem
              label="Sector Interest"
              value={profile.sectorInterest === "Other" ? profile.otherSector : profile.sectorInterest}
            />

            <ProfileItem label="Website" value={profile.websiteInvestor} />
          </>
        )}
      </div>
    </div>
  );
}

// ====================================================================
// REUSABLE COMPONENTS
// ====================================================================

function RoleCard({ label, icon, onClick }) {
  return (
    <button
      onClick={onClick}
      className="group bg-slate-900/60 hover:bg-slate-800 border border-blue-900 hover:border-amber-400 transition-all p-10 rounded-2xl shadow-xl hover:shadow-amber-500/20 flex flex-col items-center gap-4"
    >
      <div className="text-amber-400 group-hover:scale-110 transition">{icon}</div>
      <p className="text-xl font-semibold">{label}</p>
    </button>
  );
}

function Input({ label, icon, name, value, update }) {
  return (
    <div>
      <label className="text-sm text-slate-300">{label}</label>
      <div className="relative mt-1">
        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-amber-400">
          {icon}
        </div>
        <input
          name={name}
          value={value || ""}
          onChange={update}
          className="w-full bg-slate-900 border border-blue-900 rounded-lg py-3 pl-12 pr-4 text-white focus:border-amber-400 outline-none transition"
        />
      </div>
    </div>
  );
}

function TextArea({ label, name, value, update }) {
  return (
    <div>
      <label className="text-sm text-slate-300">{label}</label>
      <textarea
        rows="4"
        name={name}
        value={value || ""}
        onChange={update}
        className="w-full bg-slate-900 border border-blue-900 rounded-lg py-3 px-4 mt-1 text-white focus:border-amber-400 outline-none transition"
      />
    </div>
  );
}

function DropdownWithOther({ label, name, otherName, value, otherValue, update, options = [] }) {
  return (
    <div>
      <label className="text-sm text-slate-300">{label}</label>

      <select
        name={name}
        value={value}
        onChange={update}
        className="w-full bg-slate-900 border border-blue-900 rounded-lg py-3 px-4 mt-1 text-white focus:border-amber-400 outline-none transition"
      >
        <option value="">Select…</option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>

      {value === "Other" && (
        <input
          name={otherName}
          value={otherValue}
          onChange={update}
          placeholder="Specify other..."
          className="w-full bg-slate-800 border border-blue-900 rounded-lg py-3 px-4 mt-3 text-white"
        />
      )}
    </div>
  );
}

function ProfileItem({ label, value }) {
  return (
    <div className="mb-4">
      <p className="text-slate-400 text-sm">{label}</p>
      <p className="text-lg font-semibold">{value || "—"}</p>
    </div>
  );
}
