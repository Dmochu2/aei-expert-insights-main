
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ExpertsSection from '@/components/sections/ExpertsSection';
import DifferentiatorsSection from '@/components/sections/DifferentiatorsSection';
import ContactSection from '@/components/sections/ContactSection';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <ExpertsSection />
        <DifferentiatorsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
