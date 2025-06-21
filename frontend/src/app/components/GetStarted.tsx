"use client";

import Link from "next/link";

export default function GetStarted() {
  return (
    <section className="bg-gray-800 rounded-lg p-6 shadow space-y-4">
      <h2 className="text-2xl font-semibold text-blue-300">
        📦 How to Get Started
      </h2>
      <ul className="list-disc ml-6 space-y-2 text-gray-300">
        <li>
          🔑 <strong>Step 1:</strong>{" "}
          <Link href="/signup" className="text-blue-400 underline">
            Create an account
          </Link>{" "}
        </li>
        <li>
          🔓 <strong>Step 2:</strong>{" "}
          <Link href="/login" className="text-blue-400 underline">
            Login
          </Link>{" "}
          to receive your token
        </li>
        <li>
          🔌 <strong>Step 3:</strong> Open the Chrome extension popup
        </li>
        <li>
          🧠 <strong>Step 4:</strong> The extension automatically detects your
          token
        </li>
        <li>
          🌐 <strong>Step 5:</strong> Click <code>Connect</code> and you’re
          securely routed through Singapore
        </li>
      </ul>
    </section>
  );
}
