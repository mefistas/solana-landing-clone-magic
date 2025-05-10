
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur-md border-b border-white/10">
      <div className="solana-container py-4">
        <nav className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="#" className="text-2xl font-bold text-white">
              <span className="gradient-text">Solana</span>
            </a>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-sm text-white/70 hover:text-white transition-colors">Developers</a>
            <a href="#" className="text-sm text-white/70 hover:text-white transition-colors">Network</a>
            <a href="#" className="text-sm text-white/70 hover:text-white transition-colors">Community</a>
            <a href="#" className="text-sm text-white/70 hover:text-white transition-colors">Ecosystem</a>
          </div>

          {/* CTA buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="text-white hover:text-white hover:bg-white/10">Sign In</Button>
            <Button className="solana-button">Get Started</Button>
          </div>

          {/* Mobile menu button */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden text-white" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu size={24} />
          </Button>
        </nav>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/10 mt-4">
            <div className="flex flex-col space-y-4">
              <a href="#" className="text-sm text-white/70 hover:text-white transition-colors py-2">Developers</a>
              <a href="#" className="text-sm text-white/70 hover:text-white transition-colors py-2">Network</a>
              <a href="#" className="text-sm text-white/70 hover:text-white transition-colors py-2">Community</a>
              <a href="#" className="text-sm text-white/70 hover:text-white transition-colors py-2">Ecosystem</a>
              <div className="flex flex-col space-y-2 pt-2">
                <Button variant="outline" className="w-full">Sign In</Button>
                <Button className="solana-button w-full">Get Started</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
