"use client";

import useAuth from "../hooks/useAuth";
import Link from "next/link";

export default function DashboardPage() {
  useAuth(); // ✅ Redirects to /login if no token

  return (
    <main className="min-h-screen bg-gray-950 text-white flex items-center justify-center px-4">
      <section className="max-w-xl w-full p-8 bg-gray-900 rounded shadow-lg">
        <h1 className="text-4xl font-bold mb-4">
          🎉 Welcome to Your Dashboard
        </h1>
        <p className="text-lg text-gray-300 mb-6">
          Your VPN account is now active. Your authentication token has been
          securely saved, and you are ready to connect using the Chrome
          extension.
        </p>

        <div className="flex flex-col space-y-4">
          <Link
            href="https://github.com/AayushGTM6693/myvpn"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-center bg-green-500 hover:bg-green-600 text-white font-medium py-3 rounded transition"
          >
            👉 Download Chrome Extension
          </Link>

          <Link
            href="/"
            className="inline-block text-center border border-gray-600 hover:bg-gray-800 text-gray-300 font-medium py-3 rounded transition"
          >
            If You Have Already Added to the chrome. You can connect Now.
          </Link>
        </div>
      </section>
    </main>
  );
}
