"use client";
import { useState } from "react";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await fetch("http://localhost:5001/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    if (data.token) {
      localStorage.setItem("token", data.token);
      alert("Login successful!");
      window.location.href = "/dashboard";
    } else {
      alert(data.error || "Login failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <form
        onSubmit={handleSubmit}
        className="space-y-4 p-6 bg-gray-800 rounded shadow-md w-96"
      >
        <h2 className="text-2xl font-bold">Login</h2>
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 rounded border border-gray-600 bg-gray-900 focus:outline-none focus:border-blue-400"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 rounded border border-gray-600 bg-gray-900 focus:outline-none focus:border-blue-400"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="bg-green-500 w-full p-2 rounded hover:bg-green-600 cursor-pointer"
        >
          Log In
        </button>
        <div className="text-center pt-2">
          <span className="text-gray-400">Dont have an account? </span>
          <Link href="/signup" className="text-blue-400 underline">
            Sign up
          </Link>
        </div>
      </form>
    </div>
  );
}
