
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur-md border-b border-white/10">
      <div className="solana-container py-4">
        <nav className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="#" className="text-2xl font-bold text-white">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600">Abstract</span>
            </a>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="relative group">
              <a href="#" className="text-sm text-white/70 hover:text-white transition-colors flex items-center gap-1">
                Build <ChevronDown size={14} />
              </a>
              <div className="absolute left-0 top-full mt-2 w-48 hidden group-hover:block">
                <div className="bg-black/80 backdrop-blur-md rounded-lg p-4 border border-white/10">
                  <a href="#" className="block py-2 text-sm text-white/70 hover:text-white">Documentation</a>
                  <a href="#" className="block py-2 text-sm text-white/70 hover:text-white">Cookbook</a>
                  <a href="#" className="block py-2 text-sm text-white/70 hover:text-white">Scaffolds</a>
                  <a href="#" className="block py-2 text-sm text-white/70 hover:text-white">SVM</a>
                </div>
              </div>
            </div>
            <div className="relative group">
              <a href="#" className="text-sm text-white/70 hover:text-white transition-colors flex items-center gap-1">
                Network <ChevronDown size={14} />
              </a>
              <div className="absolute left-0 top-full mt-2 w-48 hidden group-hover:block">
                <div className="bg-black/80 backdrop-blur-md rounded-lg p-4 border border-white/10">
                  <a href="#" className="block py-2 text-sm text-white/70 hover:text-white">Status</a>
                  <a href="#" className="block py-2 text-sm text-white/70 hover:text-white">Explorer</a>
                  <a href="#" className="block py-2 text-sm text-white/70 hover:text-white">Validators</a>
                </div>
              </div>
            </div>
            <div className="relative group">
              <a href="#" className="text-sm text-white/70 hover:text-white transition-colors flex items-center gap-1">
                Community <ChevronDown size={14} />
              </a>
              <div className="absolute left-0 top-full mt-2 w-48 hidden group-hover:block">
                <div className="bg-black/80 backdrop-blur-md rounded-lg p-4 border border-white/10">
                  <a href="#" className="block py-2 text-sm text-white/70 hover:text-white">Workshops</a>
                  <a href="#" className="block py-2 text-sm text-white/70 hover:text-white">Grants</a>
                  <a href="#" className="block py-2 text-sm text-white/70 hover:text-white">Breakpoint</a>
                </div>
              </div>
            </div>
            <div className="relative group">
              <a href="#" className="text-sm text-white/70 hover:text-white transition-colors flex items-center gap-1">
                Ecosystem <ChevronDown size={14} />
              </a>
              <div className="absolute left-0 top-full mt-2 w-48 hidden group-hover:block">
                <div className="bg-black/80 backdrop-blur-md rounded-lg p-4 border border-white/10">
                  <a href="#" className="block py-2 text-sm text-white/70 hover:text-white">Apps</a>
                  <a href="#" className="block py-2 text-sm text-white/70 hover:text-white">DeFi</a>
                  <a href="#" className="block py-2 text-sm text-white/70 hover:text-white">NFTs</a>
                  <a href="#" className="block py-2 text-sm text-white/70 hover:text-white">Payments</a>
                </div>
              </div>
            </div>
          </div>

          {/* CTA buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="text-white hover:text-white hover:bg-white/10">Sign In</Button>
            <Button className="bg-gradient-to-r from-green-500 to-green-400 text-white hover:opacity-90">Get Started</Button>
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
              <details className="group">
                <summary className="text-sm text-white/70 hover:text-white transition-colors py-2 flex justify-between items-center cursor-pointer">
                  Build <ChevronDown size={14} className="group-open:rotate-180 transition-transform" />
                </summary>
                <div className="pl-4 pt-2">
                  <a href="#" className="block py-2 text-sm text-white/70 hover:text-white">Documentation</a>
                  <a href="#" className="block py-2 text-sm text-white/70 hover:text-white">Cookbook</a>
                  <a href="#" className="block py-2 text-sm text-white/70 hover:text-white">Scaffolds</a>
                  <a href="#" className="block py-2 text-sm text-white/70 hover:text-white">SVM</a>
                </div>
              </details>
              <details className="group">
                <summary className="text-sm text-white/70 hover:text-white transition-colors py-2 flex justify-between items-center cursor-pointer">
                  Network <ChevronDown size={14} className="group-open:rotate-180 transition-transform" />
                </summary>
                <div className="pl-4 pt-2">
                  <a href="#" className="block py-2 text-sm text-white/70 hover:text-white">Status</a>
                  <a href="#" className="block py-2 text-sm text-white/70 hover:text-white">Explorer</a>
                  <a href="#" className="block py-2 text-sm text-white/70 hover:text-white">Validators</a>
                </div>
              </details>
              <details className="group">
                <summary className="text-sm text-white/70 hover:text-white transition-colors py-2 flex justify-between items-center cursor-pointer">
                  Community <ChevronDown size={14} className="group-open:rotate-180 transition-transform" />
                </summary>
                <div className="pl-4 pt-2">
                  <a href="#" className="block py-2 text-sm text-white/70 hover:text-white">Workshops</a>
                  <a href="#" className="block py-2 text-sm text-white/70 hover:text-white">Grants</a>
                  <a href="#" className="block py-2 text-sm text-white/70 hover:text-white">Breakpoint</a>
                </div>
              </details>
              <details className="group">
                <summary className="text-sm text-white/70 hover:text-white transition-colors py-2 flex justify-between items-center cursor-pointer">
                  Ecosystem <ChevronDown size={14} className="group-open:rotate-180 transition-transform" />
                </summary>
                <div className="pl-4 pt-2">
                  <a href="#" className="block py-2 text-sm text-white/70 hover:text-white">Apps</a>
                  <a href="#" className="block py-2 text-sm text-white/70 hover:text-white">DeFi</a>
                  <a href="#" className="block py-2 text-sm text-white/70 hover:text-white">NFTs</a>
                  <a href="#" className="block py-2 text-sm text-white/70 hover:text-white">Payments</a>
                </div>
              </details>
              <div className="flex flex-col space-y-2 pt-2">
                <Button variant="outline" className="w-full">Sign In</Button>
                <Button className="bg-gradient-to-r from-green-500 to-green-400 text-white w-full">Get Started</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
