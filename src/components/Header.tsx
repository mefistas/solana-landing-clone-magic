
import React, { useState } from 'react';
import { Menu, ChevronDown } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur-md border-b border-white/10">
      <div className="solana-container py-4">
        <nav className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold text-white">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600">Solabs</span>
              {/* Placeholder for two SVG logos */}
              <div className="flex items-center gap-2">
                {/* Logo 1 placeholder */}
                <div className="w-8 h-8 bg-transparent"></div>
                {/* Logo 2 placeholder */}
                <div className="w-8 h-8 bg-transparent"></div>
              </div>
            </a>
          </div>

          {/* Desktop menu - moved to right */}
          <div className="hidden md:flex items-center justify-end">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent text-white/70 hover:text-white hover:bg-white/10">Build</NavigationMenuTrigger>
                  <NavigationMenuContent className="bg-black/80 backdrop-blur-md rounded-lg p-2 border border-white/10">
                    <ul className="grid w-[200px] gap-1 p-2">
                      <li>
                        <NavigationMenuLink asChild>
                          <a href="https://solana.com/docs" className="block py-2 px-3 text-sm text-white/70 hover:text-white hover:bg-white/10 rounded-md">
                            Documentation
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <a href="https://solana.com/cookbook" className="block py-2 px-3 text-sm text-white/70 hover:text-white hover:bg-white/10 rounded-md">
                            Cookbook
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <a href="https://solana.com/scaffolds" className="block py-2 px-3 text-sm text-white/70 hover:text-white hover:bg-white/10 rounded-md">
                            Scaffolds
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <a href="https://solana.com/svm" className="block py-2 px-3 text-sm text-white/70 hover:text-white hover:bg-white/10 rounded-md">
                            SVM
                          </a>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent text-white/70 hover:text-white hover:bg-white/10">Network</NavigationMenuTrigger>
                  <NavigationMenuContent className="bg-black/80 backdrop-blur-md rounded-lg p-2 border border-white/10">
                    <ul className="grid w-[200px] gap-1 p-2">
                      <li>
                        <NavigationMenuLink asChild>
                          <a href="https://status.solana.com" className="block py-2 px-3 text-sm text-white/70 hover:text-white hover:bg-white/10 rounded-md">
                            Status
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <a href="https://explorer.solana.com" className="block py-2 px-3 text-sm text-white/70 hover:text-white hover:bg-white/10 rounded-md">
                            Explorer
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <a href="https://solana.com/validators" className="block py-2 px-3 text-sm text-white/70 hover:text-white hover:bg-white/10 rounded-md">
                            Validators
                          </a>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent text-white/70 hover:text-white hover:bg-white/10">Community</NavigationMenuTrigger>
                  <NavigationMenuContent className="bg-black/80 backdrop-blur-md rounded-lg p-2 border border-white/10">
                    <ul className="grid w-[200px] gap-1 p-2">
                      <li>
                        <NavigationMenuLink asChild>
                          <a href="https://solana.com/workshops" className="block py-2 px-3 text-sm text-white/70 hover:text-white hover:bg-white/10 rounded-md">
                            Workshops
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <a href="https://solana.com/grants" className="block py-2 px-3 text-sm text-white/70 hover:text-white hover:bg-white/10 rounded-md">
                            Grants
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <a href="https://solana.com/breakpoint" className="block py-2 px-3 text-sm text-white/70 hover:text-white hover:bg-white/10 rounded-md">
                            Breakpoint
                          </a>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent text-white/70 hover:text-white hover:bg-white/10">Ecosystem</NavigationMenuTrigger>
                  <NavigationMenuContent className="bg-black/80 backdrop-blur-md rounded-lg p-2 border border-white/10">
                    <ul className="grid w-[200px] gap-1 p-2">
                      <li>
                        <NavigationMenuLink asChild>
                          <a href="https://solana.com/ecosystem/apps" className="block py-2 px-3 text-sm text-white/70 hover:text-white hover:bg-white/10 rounded-md">
                            Apps
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <a href="https://solana.com/ecosystem/defi" className="block py-2 px-3 text-sm text-white/70 hover:text-white hover:bg-white/10 rounded-md">
                            DeFi
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <a href="https://solana.com/ecosystem/nfts" className="block py-2 px-3 text-sm text-white/70 hover:text-white hover:bg-white/10 rounded-md">
                            NFTs
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <a href="https://solana.com/ecosystem/payments" className="block py-2 px-3 text-sm text-white/70 hover:text-white hover:bg-white/10 rounded-md">
                            Payments
                          </a>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-white p-2 hover:bg-white/10 rounded-md"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu size={24} />
          </button>
        </nav>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/10 mt-4 bg-black/90 backdrop-blur-md rounded-b-lg">
            <div className="flex flex-col space-y-2">
              <details className="group">
                <summary className="text-sm text-white/70 hover:text-white transition-colors py-2 flex justify-between items-center cursor-pointer px-4">
                  Build <ChevronDown size={14} className="group-open:rotate-180 transition-transform" />
                </summary>
                <div className="pl-6 pt-1 flex flex-col">
                  <a href="https://solana.com/docs" className="block py-2 px-4 text-sm text-white/70 hover:text-white hover:bg-white/10 rounded-md">Documentation</a>
                  <a href="https://solana.com/cookbook" className="block py-2 px-4 text-sm text-white/70 hover:text-white hover:bg-white/10 rounded-md">Cookbook</a>
                  <a href="https://solana.com/scaffolds" className="block py-2 px-4 text-sm text-white/70 hover:text-white hover:bg-white/10 rounded-md">Scaffolds</a>
                  <a href="https://solana.com/svm" className="block py-2 px-4 text-sm text-white/70 hover:text-white hover:bg-white/10 rounded-md">SVM</a>
                </div>
              </details>
              <details className="group">
                <summary className="text-sm text-white/70 hover:text-white transition-colors py-2 flex justify-between items-center cursor-pointer px-4">
                  Network <ChevronDown size={14} className="group-open:rotate-180 transition-transform" />
                </summary>
                <div className="pl-6 pt-1 flex flex-col">
                  <a href="https://status.solana.com" className="block py-2 px-4 text-sm text-white/70 hover:text-white hover:bg-white/10 rounded-md">Status</a>
                  <a href="https://explorer.solana.com" className="block py-2 px-4 text-sm text-white/70 hover:text-white hover:bg-white/10 rounded-md">Explorer</a>
                  <a href="https://solana.com/validators" className="block py-2 px-4 text-sm text-white/70 hover:text-white hover:bg-white/10 rounded-md">Validators</a>
                </div>
              </details>
              <details className="group">
                <summary className="text-sm text-white/70 hover:text-white transition-colors py-2 flex justify-between items-center cursor-pointer px-4">
                  Community <ChevronDown size={14} className="group-open:rotate-180 transition-transform" />
                </summary>
                <div className="pl-6 pt-1 flex flex-col">
                  <a href="https://solana.com/workshops" className="block py-2 px-4 text-sm text-white/70 hover:text-white hover:bg-white/10 rounded-md">Workshops</a>
                  <a href="https://solana.com/grants" className="block py-2 px-4 text-sm text-white/70 hover:text-white hover:bg-white/10 rounded-md">Grants</a>
                  <a href="https://solana.com/breakpoint" className="block py-2 px-4 text-sm text-white/70 hover:text-white hover:bg-white/10 rounded-md">Breakpoint</a>
                </div>
              </details>
              <details className="group">
                <summary className="text-sm text-white/70 hover:text-white transition-colors py-2 flex justify-between items-center cursor-pointer px-4">
                  Ecosystem <ChevronDown size={14} className="group-open:rotate-180 transition-transform" />
                </summary>
                <div className="pl-6 pt-1 flex flex-col">
                  <a href="https://solana.com/ecosystem/apps" className="block py-2 px-4 text-sm text-white/70 hover:text-white hover:bg-white/10 rounded-md">Apps</a>
                  <a href="https://solana.com/ecosystem/defi" className="block py-2 px-4 text-sm text-white/70 hover:text-white hover:bg-white/10 rounded-md">DeFi</a>
                  <a href="https://solana.com/ecosystem/nfts" className="block py-2 px-4 text-sm text-white/70 hover:text-white hover:bg-white/10 rounded-md">NFTs</a>
                  <a href="https://solana.com/ecosystem/payments" className="block py-2 px-4 text-sm text-white/70 hover:text-white hover:bg-white/10 rounded-md">Payments</a>
                </div>
              </details>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
