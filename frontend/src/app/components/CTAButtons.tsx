"use client";

import Link from "next/link";

export default function CTAButtons() {
  return (
    <section className="text-center">
      <Link href="/signup">
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded mr-4 cursor-pointer">
          Sign Up
        </button>
      </Link>
      <Link href="/login">
        <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded cursor-pointer">
          Login
        </button>
      </Link>
    </section>
  );
}
