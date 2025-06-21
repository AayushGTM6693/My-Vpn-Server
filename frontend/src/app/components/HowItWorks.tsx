"use client";

export default function HowItWorks() {
  return (
    <section className="bg-gray-800 rounded-lg p-6 shadow space-y-4">
      <h2 className="text-2xl font-semibold text-blue-300">🔧 How It Works</h2>
      <ol className="list-decimal ml-6 space-y-2 text-gray-300">
        <li>Users create an account on the WAVE platform (this site).</li>
        <li>After login/signup, the backend provides a secure JWT token.</li>
        <li>This token is stored in your browser extension’s local storage.</li>
        <li>
          When you click - Connect VPN - , the extension sends the token to the
          backend.
        </li>
        <li>
          The backend verifies the token and responds with a SOCKS5 proxy
          config.
        </li>
        <li>
          Your browser traffic is then routed through the Singapore proxy
          server.
        </li>
      </ol>
    </section>
  );
}
