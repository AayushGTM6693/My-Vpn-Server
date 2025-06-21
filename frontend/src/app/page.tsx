import Hero from "./components/Hero";
import WhatIsMyVPN from "./components/WhatIsMyVPN";
import HowItWorks from "./components/HowItWorks";
import GetStarted from "./components/GetStarted";
import CTAButtons from "./components/CTAButtons";
import Footer from "./components/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-900 text-white px-6 py-12">
      <section className="max-w-4xl mx-auto space-y-12">
        <Hero />
        <WhatIsMyVPN />
        <HowItWorks />
        <GetStarted />
        <CTAButtons />
        <Footer />
      </section>
    </main>
  );
}
