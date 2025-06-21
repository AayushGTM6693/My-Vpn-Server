"use client";
import React, { FormEvent, useState } from "react";
import Link from "next/link";

export default function SignupPage() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5001/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data: { message?: string; error?: string } = await res.json();

      alert(data.message || data.error || "Unknown response");
    } catch (error) {
      console.error("Signup error:", error);
      alert("Signup failed. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <form
        onSubmit={handleSubmit}
        className="space-y-4 p-6 bg-gray-800 rounded shadow-md w-96"
      >
        <h2 className="text-2xl font-bold">Sign Up</h2>
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 rounded border border-gray-600 bg-gray-900 focus:outline-none focus:border-blue-400"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 rounded border border-gray-600 bg-gray-900 focus:outline-none focus:border-blue-400"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button
          type="submit"
          className="bg-green-500 w-full p-2 rounded hover:bg-green-600 cursor-pointer"
        >
          Create Account
        </button>
        <div className="text-center pt-2">
          <span className="text-gray-400">Already have an account? </span>
          <Link href="/login" className="text-blue-400 underline">
            Log In
          </Link>
        </div>
      </form>
    </div>
  );
}
