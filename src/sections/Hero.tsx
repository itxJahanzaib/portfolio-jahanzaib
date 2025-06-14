import React from 'react';
import { ArrowDown, Download, Github, Linkedin, Mail } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const Hero: React.FC = () => {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className={`transition-all duration-1000 ${isIntersecting ? 'animate-slide-up' : 'opacity-0'}`}>
          {/* Profile Image */}
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-primary-400 to-primary-600 flex items-center justify-center text-white text-4xl font-bold shadow-xl">
              JA
            </div>
          </div>

          {/* Main Content */}
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Hi, I'm{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-primary-700">
              Jahanzaib Ashraf
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-4 font-medium">
            Full Stack Web Developer
          </p>
          
          <p className="text-lg text-gray-500 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            Turning ideas into scalable web solutions. Passionate about creating innovative digital experiences 
            with modern technologies from Lahore, Pakistan.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button
              onClick={scrollToAbout}
              className="px-8 py-4 bg-primary-500 hover:bg-primary-600 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
            >
              View Portfolio
              <ArrowDown size={20} />
            </button>
            
            <a
              href="/resume.pdf"
              download
              className="px-8 py-4 border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white font-medium rounded-lg transition-all duration-300 flex items-center gap-2"
            >
              <Download size={20} />
              Download Resume
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/jahanzaib"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl text-gray-700 dark:text-gray-300 hover:text-primary-500 transform hover:scale-110 transition-all duration-300"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/jahanzaib"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl text-gray-700 dark:text-gray-300 hover:text-primary-500 transform hover:scale-110 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:jahanzaib@example.com"
              className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl text-gray-700 dark:text-gray-300 hover:text-primary-500 transform hover:scale-110 transition-all duration-300"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
          <ArrowDown className="text-gray-400 dark:text-gray-600" size={24} />
        </div>
      </div>
    </section>
  );
};

export default Hero;