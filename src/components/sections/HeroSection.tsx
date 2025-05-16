import { Button } from '@/components/ui/button';
import { Laptop, BarChart, Users, Globe, Database } from 'lucide-react';

const HeroSection = () => {
  const expertiseAreas = [
    {
      title: "Advertising (Brand-side & Agency-side)",
      icon: <Users className="h-5 w-5 text-aei-medium" />
    },
    {
      title: "Advertising Technology (AdTech)",
      icon: <Laptop className="h-5 w-5 text-aei-medium" />
    },
    {
      title: "Marketing Technology (MarTech)",
      icon: <BarChart className="h-5 w-5 text-aei-medium" />
    },
    {
      title: "Retail Media / Digital Media",
      icon: <Database className="h-5 w-5 text-aei-medium" />
    }
  ];

  return (
    <section id="home" className="bg-aei-light min-h-[calc(100vh-6rem)] flex flex-col justify-center">
      <div className="section-container py-16 md:py-24 flex flex-col justify-center flex-grow">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-5xl xl:max-w-2xl font-bold text-aei-dark leading-tight mb-6">
              From Expert Calls to Executive Clarity
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              The specialist expert network connecting Brands, Tech Companies, Private Equity, and Consultancies to the world's top pre-vetted experts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="bg-aei-dark hover:bg-aei-accent text-lg py-6">
                <a href="#experts">Meet Our Experts</a>
              </Button>
              <Button variant="outline" asChild className="border-aei-dark text-aei-dark hover:bg-aei-dark hover:text-white text-lg py-6">
                <a href="#about">Learn More</a>
              </Button>
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center animate-fade-in">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-64 h-64 bg-aei-dark/10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-aei-medium/10 rounded-full blur-3xl"></div>
              <div className="bg-white rounded-xl shadow-2xl p-8 relative z-10">
                <h3 className="text-2xl font-bold text-aei-dark mb-4">Specialized Expertise In:</h3>
                <ul className="space-y-4">
                  {expertiseAreas.map((area, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="bg-aei-light p-2 rounded-full">
                        {area.icon}
                      </div>
                      <span className="text-gray-700">{area.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-b from-aei-light to-white h-24"></div>
    </section>
  );
};

export default HeroSection;
