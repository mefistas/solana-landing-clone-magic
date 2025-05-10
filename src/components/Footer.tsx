
import React from 'react';
import { Github, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  // Footer links organized by category
  const footerLinks = [
    {
      category: "Developers",
      links: [
        { label: "Documentation", url: "#" },
        { label: "GitHub", url: "#" },
        { label: "Stack Exchange", url: "#" },
        { label: "Changelog", url: "#" }
      ]
    },
    {
      category: "General",
      links: [
        { label: "About", url: "#" },
        { label: "Blog", url: "#" },
        { label: "Careers", url: "#" },
        { label: "Press", url: "#" }
      ]
    },
    {
      category: "Community",
      links: [
        { label: "Discord", url: "#" },
        { label: "Twitter", url: "#" },
        { label: "Forum", url: "#" },
        { label: "Events", url: "#" }
      ]
    },
    {
      category: "Legal",
      links: [
        { label: "Privacy Policy", url: "#" },
        { label: "Terms of Use", url: "#" },
        { label: "Cookie Policy", url: "#" }
      ]
    }
  ];

  return (
    <footer className="bg-black border-t border-white/10 py-16">
      <div className="solana-container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {footerLinks.map((category, index) => (
            <div key={index}>
              <h3 className="text-white font-medium text-lg mb-4">{category.category}</h3>
              <ul className="space-y-2">
                {category.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href={link.url} className="text-white/70 hover:text-white text-sm transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10">
          <div className="mb-4 md:mb-0">
            <a href="#" className="text-xl font-bold text-white">
              <span className="gradient-text">Solana</span>
            </a>
            <p className="text-white/50 text-sm mt-2">© 2025 Solana Foundation. All rights reserved.</p>
          </div>
          
          <div className="flex space-x-4">
            <a href="#" className="text-white/70 hover:text-white transition-colors">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-white/70 hover:text-white transition-colors">
              <Github size={20} />
            </a>
            <a href="#" className="text-white/70 hover:text-white transition-colors">
              <Youtube size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
