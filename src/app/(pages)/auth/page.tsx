"use client";

import React from "react";
import { loginWithGoogle } from "@/services/authService";

const AuthPage = () => {
  const handleGoogleSignIn = async () => {
    try {
      await loginWithGoogle();
      window.location.href = "/"; // Redirect to homepage or desired page
    } catch (error) {
      console.error("Google sign-in failed:", error);
      alert("An error occurred during sign-in. Please try again.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Sign In</h1>
      <button
        onClick={handleGoogleSignIn}
        className="bg-pink-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-pink-600 transition"
      >
        Sign in with Google
      </button>
    </div>
  );
};

export default AuthPage;
