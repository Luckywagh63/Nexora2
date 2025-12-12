"use client";

import { useEffect, useState } from "react";
import { UserCircle, Menu, X, LayoutDashboard, LogOut } from "lucide-react";
import { auth } from "@/lib/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

export default function Navbar() {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const [open, setOpen] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  // AUTO-DETECT USER FROM DB (Startup or Investor)
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (u) => {
      setUser(u);
      if (!u) return;

      try {
        let fetchedUser = null;

        // Try STARTUP first
        const startupRes = await fetch(`/api/user?uid=${u.uid}&type=startup`);
        if (startupRes.ok) {
          const sData = await startupRes.json();
          if (sData.user) fetchedUser = sData.user;
        }

        // If not found, try INVESTOR
        if (!fetchedUser) {
          const investorRes = await fetch(`/api/user?uid=${u.uid}&type=investor`);
          if (investorRes.ok) {
            const iData = await investorRes.json();
            if (iData.user) fetchedUser = iData.user;
          }
        }

        if (!fetchedUser) {
          console.error("User not found in Startup or Investor collections");
          return;
        }

        setProfile(fetchedUser);
      } catch (err) {
        console.error("Fetch failed:", err);
      }
    });

    return () => unsub();
  }, []);

  const logout = async () => {
    await signOut(auth);
    window.location.href = "/";
  };

  const name =
    profile?.name ||
    user?.displayName ||
    user?.email?.split("@")[0] ||
    "User";

  return (
    <nav className="fixed top-0 w-full bg-slate-900/90 backdrop-blur-xl text-white p-5 z-50 border-b border-blue-900/40">
      <div className="max-w-6xl mx-auto flex justify-between items-center">

        {/* LOGO */}
        <a href="/" className="text-2xl font-bold text-amber-400">
          Nexora
        </a>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-8 text-slate-300">
          <a href="/how-it-works" className="hover:text-amber-400 transition">How It Works</a>
          <a href="/solution" className="hover:text-amber-400 transition">Solutions</a>
          <a href="/about" className="hover:text-amber-400 transition">About</a>
          <a href="/contact" className="hover:text-amber-400 transition">Contact</a>

          {!user ? (
            <a
              href="/sign-in"
              className="px-4 py-2 bg-amber-500 text-black rounded-lg hover:bg-amber-400 transition"
            >
              Sign In
            </a>
          ) : (
            <div className="relative">
              <button
                onClick={() => setOpen(!open)}
                className="flex items-center gap-2 hover:text-amber-400 transition"
              >
                <UserCircle size={24} />
                <span>{name}</span>
              </button>

              {open && (
                <div className="absolute right-0 mt-3 bg-slate-800 p-4 rounded-lg w-48 shadow-lg border border-slate-700">
                  <a
                    href="/dashboard"
                    className="block py-2 hover:text-amber-400 transition"
                  >
                    <LayoutDashboard size={16} className="inline mr-2" />
                    Dashboard
                  </a>

                  <button
                    onClick={logout}
                    className="text-red-400 py-2 w-full text-left hover:text-red-300 transition"
                  >
                    <LogOut size={16} className="inline mr-2" />
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setMobileMenu(!mobileMenu)}
          className="md:hidden p-2 rounded-lg hover:bg-slate-800"
        >
          {mobileMenu ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {mobileMenu && (
        <div className="md:hidden bg-slate-900/95 backdrop-blur-xl mt-4 p-5 border-t border-slate-800">
          <div className="flex flex-col space-y-4 text-slate-300">

            <a href="/how-it-works" className="hover:text-amber-400 transition">How It Works</a>
            <a href="/solution" className="hover:text-amber-400 transition">Solutions</a>
            <a href="/about" className="hover:text-amber-400 transition">About</a>
            <a href="/contact" className="hover:text-amber-400 transition">Contact</a>

            {!user ? (
              <a
                href="/sign-in"
                className="px-4 py-2 bg-amber-500 text-black rounded-lg mt-4 text-center hover:bg-amber-400 transition"
              >
                Sign In
              </a>
            ) : (
              <>
                <a
                  href="/dashboard"
                  className="hover:text-amber-400 transition"
                >
                  Dashboard
                </a>

                <button
                  onClick={logout}
                  className="text-red-400 text-left hover:text-red-300 transition"
                >
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
