import Navbar from "./Navbar";
import HeroContent from "./HeroContent";
import HeroLower from "./HeroLower";

const Hero = () => {
  return (
    <div className="min-h-screen  flex flex-col bg-[url('/src/assets/images/hero-bg-new.jpg')] bg-cover bg-center bg-no-repeat">
      <Navbar />
      <HeroContent />
      <HeroLower />
    </div>
  );
};

export default Hero;
