import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Our Experts', href: '#experts' },
    { name: 'Differentiators', href: '#differentiators' },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <a href="#home" className="block">
                <img src="/lovable-uploads/1f674820-80ca-41d4-9807-4cde9d64e1a6.png" alt="AEI Logo" className="h-20" />
              </a>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-aei-dark hover:bg-aei-light px-3 py-2 rounded-md font-medium transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
            <Button asChild className="bg-aei-dark hover:bg-aei-accent">
              <a href="#contact">Work With Us</a>
            </Button>
          </div>
          
          <div className="flex md:hidden items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-aei-dark hover:bg-aei-light focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute w-full">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-3 py-2 rounded-md text-gray-700 hover:text-aei-dark hover:bg-aei-light font-medium"
                onClick={toggleMenu}
              >
                {item.name}
              </a>
            ))}
            <div className="px-3 py-2">
              <Button asChild className="w-full bg-aei-dark hover:bg-aei-accent">
                <a href="#contact" onClick={toggleMenu}>Work With Us</a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
