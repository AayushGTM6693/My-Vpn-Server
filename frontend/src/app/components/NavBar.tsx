"use client";
import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="bg-gray-900 text-white px-8 py-4 flex justify-between items-center shadow-md">
      <h1 className="text-2xl font-bold">My Singapore VPN</h1>
      <div className="space-x-6">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/auth/login">Login</Link>
        <Link href="/auth/signup">Signup</Link>
      </div>
    </nav>
  );
}
