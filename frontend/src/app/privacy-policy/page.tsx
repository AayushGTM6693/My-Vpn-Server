// /app/privacy-policy/page.tsx
"use client";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-12 px-6">
      <div className="max-w-3xl mx-auto bg-gray-800 p-8 rounded shadow">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
        <p className="mb-4">
          My Singapore VPN is committed to protecting your privacy. This policy
          explains how we handle data in our Chrome Extension and related
          services.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">1. Data Collection</h2>
        <p className="mb-4">
          We do <strong>not</strong> collect any personally identifiable
          information. The only data stored is a secure authentication token
          (JWT) saved locally in your browsers extension storage. This token is
          required to connect to our VPN server.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">2. Token Use</h2>
        <p className="mb-4">
          The token is used only to verify that you are a valid user when
          connecting to the VPN. It is never shared, sold, or transferred to any
          third party.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">3. Data Sharing</h2>
        <p className="mb-4">
          We do <strong>not</strong> share or sell any user data to third
          parties. We do not use your data for advertising or analytics.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">4. Compliance</h2>
        <p className="mb-4">
          This extension complies with all Chrome Web Store policies. We follow
          security best practices to protect user authentication tokens.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">5. Contact</h2>
        <p className="mb-4">
          If you have any questions about this privacy policy, you can reach out
          to us at <strong>professional.coding6693@gmail.com</strong>
        </p>
      </div>
    </div>
  );
}
