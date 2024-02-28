import Footer from "@/src/components/molecules/Footer";
import Navbar from "@/src/components/molecules/Navbar";
import HeroContent from "@/src/components/organisms/HeroContent";

export default function Home() {
  return (
    <div className="container">
      <Navbar />
      <HeroContent />
      <Footer />
    </div>
  );
}
