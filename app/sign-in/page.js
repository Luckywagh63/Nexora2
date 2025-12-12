"use client";

import React, { useState, useEffect } from "react";
import { ArrowRight, Mail, Lock, User, Eye, EyeOff } from "lucide-react";

import { auth } from "@/lib/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth";

import { useRouter } from "next/navigation";

export default function NexoraAuth() {
  const router = useRouter();

  const [isSignIn, setIsSignIn] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    userType: "startup", // only for manual signup
  });

  // Redirect if already logged in
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) router.push("/dashboard");
    });
    return () => unsub();
  }, []);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  // ======================================
  // ⭐ GOOGLE LOGIN FIXED
  // ======================================
  const handleGoogleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const res = await signInWithPopup(auth, provider);

      // Save user WITHOUT userType
      await fetch("/api/user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firebaseUID: res.user.uid,
          name: res.user.displayName,
          email: res.user.email,
          userType: null, // IMPORTANT FIX
        }),
      });

      router.push("/dashboard");
    } catch (err) {
      alert(err.message);
    }
  };

  // ======================================
  // ⭐ LOGIN / SIGNUP HANDLER
  // ======================================
  const handleSubmit = async () => {
    try {
      if (isSignIn) {
        await signInWithEmailAndPassword(auth, formData.email, formData.password);
        router.push("/dashboard");
      } else {
        if (formData.password !== formData.confirmPassword) {
          alert("Passwords do not match!");
          return;
        }

        const res = await createUserWithEmailAndPassword(
          auth,
          formData.email,
          formData.password
        );

        // Save user WITH selected userType
        await fetch("/api/user", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            firebaseUID: res.user.uid,
            name: formData.name,
            email: formData.email,
            userType: formData.userType,
          }),
        });

        router.push("/dashboard");
      }
    } catch (err) {
      alert(err.message);
    }
  };

  // INPUT FIELD COMPONENT
  const InputField = ({ icon: Icon, label, name, type = "text", placeholder }) => (
    <div>
      <label className="block text-sm font-medium text-slate-300 mb-2">{label}</label>
      <div className="relative">
        <Icon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />

        <input
          type={type === "password" && showPassword ? "text" : type}
          name={name}
          value={formData[name]}
          onChange={handleChange}
          placeholder={placeholder}
          className="w-full pl-12 pr-12 py-3 bg-slate-900/50 border border-blue-900/30 rounded-lg text-white"
        />

        {type === "password" && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
          >
            {showPassword ? <EyeOff /> : <Eye />}
          </button>
        )}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen mt-20 bg-gradient-to-br from-slate-950 via-blue-950 to-black text-white">
      <div className="max-w-4xl mx-auto py-12 px-4">

        <h1 className="text-5xl font-bold bg-gradient-to-r from-amber-300 to-yellow-500 bg-clip-text text-transparent text-center mb-10">
          Nexora
        </h1>

        <div className="bg-slate-900/60 p-8 rounded-xl border border-blue-900/40">

          {/* Toggle */}
          <div className="flex gap-4 mb-8">
            {["Sign In", "Sign Up"].map((text, i) => (
              <button
                key={i}
                onClick={() => setIsSignIn(i === 0)}
                className={`flex-1 py-3 rounded-lg font-semibold ${
                  (isSignIn && i === 0) || (!isSignIn && i === 1)
                    ? "bg-blue-900 border border-blue-700"
                    : "bg-slate-800 text-slate-400"
                }`}
              >
                {text}
              </button>
            ))}
          </div>

       

          <div className="space-y-6">
            {!isSignIn && (
              <InputField icon={User} label="Full Name" name="name" placeholder="John Doe" />
            )}

            <InputField icon={Mail} label="Email" name="email" type="email" placeholder="you@example.com" />

            <InputField icon={Lock} label="Password" name="password" type="password" placeholder="••••••••" />

            {!isSignIn && (
              <InputField icon={Lock} label="Confirm Password" name="confirmPassword" type="password" placeholder="••••••••" />
            )}

            <button
              onClick={handleSubmit}
              className="w-full py-3 bg-blue-900 rounded-lg border border-blue-800 hover:border-amber-500 transition mb-3"
            >
              {isSignIn ? "Sign In" : "Create Account"}
            </button>

            {/* Google Login */}
            <button
              onClick={handleGoogleLogin}
              className="w-full py-3 bg-slate-800 border border-blue-800 rounded-lg flex items-center justify-center gap-3 hover:border-amber-500"
            >
              <img
                src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
                className="w-5 h-5"
              />
              Continue with Google
            </button>

          </div>
        </div>
      </div>
    </div>
  );
}
