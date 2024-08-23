import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import OurApproach from "@/components/OurApproach";
import SpecialFeatures from "@/components/SpecialFeatures";
import SpecialNeeds from "@/components/SpecialNeeds";
import Image from "next/image";

export default function Home() {
  return (
    <section className="h-screen max-h-screen">
      <Navbar />
      <Hero />
      <OurApproach />
      <SpecialNeeds />
      <SpecialFeatures />
      <Footer />
    </section>
 )
}
