import React from 'react';
import { Github, Linkedin, Mail, Globe, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Sajjad Rasool</h3>
            <p className="text-gray-400 mb-4">
              Crafting beautiful digital experiences with passion and precision.
            </p>
            <div className="flex gap-4">
              <a href="mailto:contact@sajjadrasool.com" className="text-gray-400 hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://sajjadrasool.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Globe className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Web Design</li>
              <li>WordPress Development</li>
              <li>Shopify Development</li>
              <li>UI/UX Design</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>contact@sajjadrasool.com</li>
              <li>Available for freelance work</li>
              <li>Based in [Your Location]</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p className="flex items-center justify-center gap-1">
            © {currentYear} Sajjad Rasool. Made with <Heart className="w-4 h-4 text-red-500" /> using React
          </p>
        </div>
      </div>
    </footer>
  );
}