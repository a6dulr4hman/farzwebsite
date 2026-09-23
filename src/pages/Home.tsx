import Header from "../components/Header";
import Hero from "../components/Hero";
import Features from "../components/Features";
import PlatformPreview from "../components/PlatformPreview";
import Security from "../components/Security";
import Pricing from "../components/Pricing";
import Cta from "../components/Cta";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <PlatformPreview />
        <Security />
        <Pricing />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
