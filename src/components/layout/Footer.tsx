import { Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#1a4483] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="mb-1">
              <img 
                src="/lovable-uploads/0eed22a5-e0b5-4376-83c5-fb00abad532a.png" 
                alt="AEI Logo" 
                className="h-24 object-contain" 
              />
            </div>
            <p className="text-gray-300">
              Advertising Expert Intelligence<br />
              - From Expert Calls to Executive Clarity.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-white">Home</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-white">About Us</a></li>
              <li><a href="#experts" className="text-gray-300 hover:text-white">Our Experts</a></li>
              <li><a href="#differentiators" className="text-gray-300 hover:text-white">Differentiators</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white">Work With Us</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Mail size={18} className="text-gray-300" />
                <span className="text-gray-300">Email: <a href="mailto:info@go-aei.com" className="hover:text-white transition-colors">info@go-aei.com</a></span>
              </div>
              <div className="flex items-center gap-2">
                <Linkedin size={18} className="text-gray-300" />
                <a href="https://www.linkedin.com/company/advertising-expert-intelligence/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">Follow us on LinkedIn</a>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Advertising Expert Intelligence. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
