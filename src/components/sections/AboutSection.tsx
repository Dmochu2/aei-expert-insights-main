
import { Card, CardContent } from '@/components/ui/card';
import { Briefcase, Code, Globe, PieChart } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const AboutSection = () => {
  const clientTypes = [
    {
      title: "Investors",
      description: "Private Equity & Venture Capital firms conducting sector due diligence and evaluating investments.",
      icon: <Briefcase size={24} className="text-white" />
    },
    {
      title: "Strategy Consulting",
      description: "Strategy consultancies advising clients on technology, market shifts, and competitive landscapes.",
      icon: <PieChart size={24} className="text-white" />
    },
    {
      title: "Brands & Agencies",
      description: "Brands, holding companies, and independent agencies making partnership, vendor or technology decisions.",
      icon: <Globe size={24} className="text-white" />
    },
    {
      title: "AdTech & MarTech",
      description: "AdTech & MarTech companies seeking expert feedback on product strategy, go-to-market, and partnerships.",
      icon: <Code size={24} className="text-white" />
    }
  ];

  const focusAreas = [
    {
      title: "Advertising Technology (AdTech)",
      description: "Programmatic, identity, measurement, data platforms, DSPs/SSPs."
    },
    {
      title: "Marketing Technology (MarTech)",
      description: "CRM, CDPs, personalization, loyalty platforms."
    },
    {
      title: "Digital Media",
      description: "Platforms, CTV, search, social media, performance marketing."
    },
    {
      title: "Retail Media",
      description: "Retail and Commerce Networks, data partnerships."
    },
    {
      title: "Advertising Brand-Side",
      description: "In-housing, media procurement, brand media operations."
    },
    {
      title: "Advertising Agency-Side",
      description: "Media and creative agencies, holding companies, and independents."
    }
  ];

  return (
    <section id="about" className="bg-white py-12">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title">About Us</h2>
          <p className="section-subtitle max-w-4xl mx-auto text-lg md:text-xl lg:text-2xl">
            Advertising Expert Intelligence (AEI) is a specialist expert network, focused exclusively on the advertising, marketing, and media ecosystem.
          </p>
        </div>

        <div className="mb-20">
          <h3 className="text-2xl font-bold text-aei-dark mb-8 text-center">Who We Serve</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {clientTypes.map((client, index) => (
              <Card key={index} className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border-0">
                <div className="bg-gradient-to-br from-aei-dark to-aei-medium p-4 flex flex-col items-center">
                  <div className="bg-white/20 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-3">
                    {client.icon}
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2 text-center">{client.title}</h4>
                </div>
                <CardContent className="p-5 text-center">
                  <p className="text-gray-700">{client.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-aei-dark mb-8 text-center">Our Focus</h3>
          <div className="bg-aei-light rounded-xl p-8">
            <p className="text-lg text-gray-700 mb-6 text-center">
              We specialize across the full value chain of the Advertising Ecosystem:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
              {focusAreas.map((area, index) => (
                <div key={index} className="bg-white p-4 rounded-lg">
                  <p className="text-gray-700">
                    <span className="font-bold text-aei-dark block mb-1">{area.title}</span>
                    {area.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
