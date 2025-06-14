import React from 'react';
import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand & Description */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Jahanzaib Ashraf</h3>
            <p className="text-gray-400 leading-relaxed">
              Full Stack Web Developer passionate about creating innovative digital solutions. 
              Always learning, always building.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/jahanzaib"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/jahanzaib"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:jahanzaib@example.com"
                className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              {['About', 'Skills', 'Projects', 'Blog', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => {
                      const element = document.getElementById(item.toLowerCase());
                      if (element) {
                        const offsetTop = element.offsetTop - 80;
                        window.scrollTo({
                          top: offsetTop,
                          behavior: 'smooth'
                        });
                      }
                    }}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Web Development</li>
              <li>React Applications</li>
              <li>API Development</li>
              <li>Database Design</li>
              <li>Performance Optimization</li>
              <li>Technical Consulting</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 text-gray-400 mb-4 md:mb-0">
            <span>© {currentYear} Jahanzaib Ashraf. Made with</span>
            <Heart className="text-red-500" size={16} fill="currentColor" />
            <span>in Lahore, Pakistan</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 bg-primary-500 hover:bg-primary-600 rounded-lg transition-colors"
            aria-label="Back to top"
          >
            <ArrowUp size={16} />
            <span>Back to Top</span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;