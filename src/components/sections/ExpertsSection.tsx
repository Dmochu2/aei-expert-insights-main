import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useRef } from 'react';

const ExpertsSection = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300; // Width of one card
      const currentScroll = scrollContainerRef.current.scrollLeft;
      const newScroll = direction === 'left' 
        ? currentScroll - scrollAmount 
        : currentScroll + scrollAmount;
      
      scrollContainerRef.current.scrollTo({
        left: newScroll,
        behavior: 'smooth'
      });
    }
  };

  // Sample experts - in a real application, these would come from a database
  const experts = [
    {
      name: "Gerry D'Angelo",
      title: "Former VP Global Media at P&G",
      expertise: "Brands, Agencies, Programmatic",
      image: "/lovable-uploads/1.jpeg",
      companies: ["P&G", "Mondelez", "Publicis"]
    },
    {
      name: "Danilo Tauro",
      title: "Managing Partner Aperiam",
      expertise: "AdTech, MarTech, Retail Media",
      image: "/lovable-uploads/2.jpeg",
      companies: ["P&G", "Amazon", "Uber"]
    },
    {
      name: "Sorin Patilinet",
      title: "Marketing Effectiveness Executive",
      expertise: "Brands, Measurement, Analytics",
      image: "/lovable-uploads/3.jpeg",
      companies: ["Mars", "Pepsi", "BAT"]
    },
    {
      name: "Sebastian Acevedo",
      title: "Former CEO Memorable AI (sold to Reddit)",
      expertise: "AI, Creative Tech, Startups",
      image: "/lovable-uploads/4.jpeg",
      companies: ["Memorable AI", "Reddit"]
    },
    {
      name: "Confidential",
      title: "VP Digital at Lindt",
      expertise: "Brands, Social Media, Creative",
      image: "/lovable-uploads/Anonymous_Female.jpeg",
      companies: ["Lindt"]
    },
    {
      name: "Confidential",
      title: "Product VP at Amazon Ads",
      expertise: "1P Data, Measurement, AI",
      image: "/lovable-uploads/Anonymous_Male.jpeg",
      companies: ["Amazon"]
    },
    {
      name: "Confidential",
      title: "Marketing Director at Coty",
      expertise: "Brands, Agencies, Programmatic",
      image: "/lovable-uploads/Anonymous_Male.jpeg",
      companies: ["Coty"]
    },
    {
      name: "Confidential",
      title: "Product Leader at Netflix",
      expertise: "CTV, Programmatic, Privacy",
      image: "/lovable-uploads/Anonymous_Female.jpeg",
      companies: ["Netflix"]
    },
    {
      name: "Confidential",
      title: "VP Commerce Media at Publicis",
      expertise: "Commerce Media, Data Strategy, AI",
      image: "/lovable-uploads/Anonymous_Male.jpeg",
      companies: ["Publicis"]
    },
    {
      name: "Confidential",
      title: "Director MarTech at P&G",
      expertise: "Data Strategy, 1P data, Identity",
      image: "/lovable-uploads/Anonymous_Female.jpeg",
      companies: ["P&G"]
    },
    {
      name: "Confidential",
      title: "Director Advertising at Mattel",
      expertise: "Programmatic, Commerce Media, CTV",
      image: "/lovable-uploads/Anonymous_Female.jpeg",
      companies: ["Mattel"]
    },
    {
      name: "Confidential",
      title: "Marketing VP at LinkedIn",
      expertise: "Brands, Programmatic",
      image: "/lovable-uploads/Anonymous_Male.jpeg",
      companies: ["LinkedIn"]
    }
  ];

  const benefits = [
    {
      title: "Well-Paid Expert Calls",
      description: "Engage with top-tier clients on high-value consultations"
    },
    {
      title: "Networking with Peers",
      description: "Connect with fellow experts across brands, agencies, and technology leaders"
    },
    {
      title: "Editorial Exposure",
      description: "Contribute to AEI thought leadership, including articles, panels, and public speaking"
    },
    {
      title: "Advisory Projects",
      description: "Get invited to deeper projects such as strategy workshops, vendor selection exercises, and competitive analysis"
    },
    {
      title: "Private Events & Entertainment",
      description: "Exclusive access to AEI private gatherings at major events like Cannes and Advertising Week"
    },
    {
      title: "Annual Top Performer Bonus",
      description: "Rewarding AEI's most engaged and highly-rated experts"
    }
  ];

  return (
    <section id="experts" className="bg-aei-light">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title">Our Experts</h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            AEI's network includes carefully selected experts, blending senior executives and next-generation innovators from across the advertising, media and tech ecosystem.
          </p>
        </div>

        <div className="relative">
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white/80 hover:bg-white shadow-lg rounded-full h-12 w-12"
            onClick={() => scroll('left')}
          >
            <ChevronLeft className="h-6 w-6 text-aei-dark" />
          </Button>

          <div 
            ref={scrollContainerRef}
            className="overflow-x-auto pb-8 -mx-4 px-4 scrollbar-hide"
          >
            <div className="flex gap-8 min-w-max">
              {experts.map((expert, index) => (
                <Card key={index} className="w-[300px] flex-shrink-0 card-shadow overflow-hidden hover:translate-y-[-5px] transition-all duration-300">
                  <div className="h-60 overflow-hidden">
                    <img 
                      src={expert.image} 
                      alt={expert.name} 
                      className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h4 className="text-xl font-bold text-aei-dark">{expert.name}</h4>
                    <p className="text-aei-medium font-medium">{expert.title}</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {expert.expertise.split(', ').map((skill, i) => (
                        <Badge key={i} variant="outline" className="bg-aei-light/50 text-aei-dark border-aei-medium">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                    <div className="mt-4 flex items-center gap-2">
                      {expert.companies.map((company, i) => (
                        <span key={i} className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                          {company}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white/80 hover:bg-white shadow-lg rounded-full h-12 w-12"
            onClick={() => scroll('right')}
          >
            <ChevronRight className="h-6 w-6 text-aei-dark" />
          </Button>
        </div>

        <div className="bg-white rounded-xl p-8 shadow-lg mt-16">
          <h3 className="text-2xl font-bold text-aei-dark mb-6 text-center">
            Benefits for AEI Experts
          </h3>
          <p className="text-gray-700 mb-8 text-center max-w-3xl mx-auto">
            Join an Elite Network. AEI is not a marketplace — it's an invite-only handpicked expert network. Our experts gain access to:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.filter(b => b.title !== "Conference Access").map((benefit, index) => (
              <div key={index} className="flex flex-col p-4 bg-aei-light/30 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <div className="bg-aei-medium rounded-full p-1">
                    <Check size={16} className="text-white" />
                  </div>
                  <h4 className="font-semibold text-aei-dark">{benefit.title}</h4>
                </div>
                <p className="text-gray-600 text-sm pl-7">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertsSection;
