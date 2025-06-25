"use client";
import { useState } from "react";
import Link from "next/link";

declare const chrome: {
  runtime?: {
    sendMessage?: (
      extensionId: string,
      message: unknown,
      options?: object,
      callback?: (response: unknown) => void
    ) => void;
  };
};

const ExtensionId = "cciehfpkidobfcoalglefgajcepallkb";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/auth/login`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        }
      );

      const data = await res.json();
      if (data.token) {
        localStorage.setItem("token", data.token);

        if (chrome?.runtime?.sendMessage) {
          chrome.runtime.sendMessage(
            ExtensionId,
            { setToken: data.token },
            () => {}
          );
        }

        alert("Login successful!");
        window.location.href = "/dashboard";
      } else {
        alert(data.error || "Login failed");
      }
    } catch {
      alert("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <form
        onSubmit={handleSubmit}
        className="space-y-4 p-6 bg-gray-800 rounded shadow-md w-96"
      >
        <h2 className="text-2xl font-bold">Login</h2>

        {loading && (
          <div className="text-center text-sm text-blue-400 animate-pulse">
            🔄 Logging in... Please wait a few seconds...
          </div>
        )}

        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 rounded border border-gray-600 bg-gray-900"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          disabled={loading}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 rounded border border-gray-600 bg-gray-900"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          disabled={loading}
        />
        <button
          type="submit"
          className={`w-full p-2 rounded ${
            loading ? "bg-gray-600" : "bg-green-500 hover:bg-green-600"
          }`}
          disabled={loading}
        >
          {loading ? "Processing..." : "Log In"}
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
