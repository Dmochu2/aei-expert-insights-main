
import { Card, CardContent } from '@/components/ui/card';
import { Check } from 'lucide-react';

const DifferentiatorsSection = () => {
  const modules = [
    {
      title: "Curated Expert Access",
      items: [
        "100% Focused on Advertising & Media, as we prioritize Quality Over Quantity",
        "A pre-vetted network of experts, each hand-selected for current operational relevance",
        "Deep specialization means faster access to the right experts — and smarter guidance on which experts you actually need"
      ]
    },
    {
      title: "Calls Prep & Facilitation",
      items: [
        "Pre-call scoping to define the right questions for your strategic goals",
        "Optional moderation to ensure focused, high-value discussions",
        "All calls recorded and shared for full transparency"
      ]
    },
    {
      title: "Summary & So-What",
      items: [
        "Optional executive summary capturing: Key insights, Strategic implications, Recommended next steps",
        "Summaries prepared with the help of senior industry experts, ensuring real-world context",
        "So-what / insights added by our senior experts"
      ]
    }
  ];

  return (
    <section id="differentiators" className="bg-white">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title">Differentiators</h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            AEI offers more than just access and more than a call. We have a complete process that supports you before, during, and after the call, turning expert opinions into clear, actionable intelligence.
          </p>
        </div>

        <div className="bg-aei-light rounded-xl p-8">
          <p className="text-lg text-center text-gray-700 mb-8">
            We help clients extract maximum strategic value through our structured 3-module offering, where clients can choose the level of support they need:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {modules.map((module, index) => (
              <Card key={index} className={`overflow-hidden ${index === 0 ? 'border-t-4 border-aei-dark' : ''} border-0 shadow-lg`}>
                <div className="bg-aei-dark p-4">
                  <h3 className="text-xl font-bold text-white">{module.title}</h3>
                </div>
                <CardContent className="p-6 pt-4 bg-white">
                  <ul className="space-y-3">
                    {module.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-3">
                        <div className="min-w-6 pt-1">
                          <div className="bg-aei-light p-1 rounded-full">
                            <Check size={12} className="text-aei-dark" />
                          </div>
                        </div>
                        <p className="text-gray-700 text-sm">{item}</p>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DifferentiatorsSection;
