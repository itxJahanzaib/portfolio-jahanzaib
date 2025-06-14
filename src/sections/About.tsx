import React from 'react';
import { Download, MapPin, Calendar, Award } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const About: React.FC = () => {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`transition-all duration-1000 ${isIntersecting ? 'animate-slide-up' : 'opacity-0'}`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              About Me
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Passionate developer with a focus on creating exceptional digital experiences
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Image & Stats */}
            <div className="space-y-8">
              <div className="relative">
                <div className="w-full h-96 bg-gradient-to-br from-primary-100 to-primary-200 dark:from-gray-800 dark:to-gray-700 rounded-2xl flex items-center justify-center">
                  <div className="w-48 h-48 rounded-full bg-gradient-to-r from-primary-500 to-primary-700 flex items-center justify-center text-white text-6xl font-bold">
                    JA
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl text-center">
                  <div className="text-2xl font-bold text-primary-500 mb-2">5+</div>
                  <div className="text-gray-600 dark:text-gray-400">Years Experience</div>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl text-center">
                  <div className="text-2xl font-bold text-primary-500 mb-2">50+</div>
                  <div className="text-gray-600 dark:text-gray-400">Projects Completed</div>
                </div>
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                  Full Stack Web Developer
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  I'm a passionate full-stack web developer with over 5 years of experience in building 
                  scalable web applications. I specialize in modern JavaScript frameworks and have a 
                  strong background in both frontend and backend technologies.
                </p>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  My journey in web development started with a curiosity about how websites work, and 
                  it has evolved into a career where I help businesses transform their ideas into 
                  powerful digital solutions. I believe in writing clean, maintainable code and 
                  creating user experiences that delight and engage.
                </p>
              </div>

              {/* Info Items */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="text-primary-500" size={20} />
                  <span className="text-gray-700 dark:text-gray-300">Lahore, Pakistan</span>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="text-primary-500" size={20} />
                  <span className="text-gray-700 dark:text-gray-300">Available for freelance work</span>
                </div>
                <div className="flex items-center gap-3">
                  <Award className="text-primary-500" size={20} />
                  <span className="text-gray-700 dark:text-gray-300">Computer Science Graduate</span>
                </div>
              </div>

              {/* Skills Highlights */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Core Competencies</h4>
                <div className="flex flex-wrap gap-2">
                  {['Problem Solving', 'Team Leadership', 'Project Management', 'Client Communication', 'Agile Development', 'Code Review'].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Resume Download */}
              <div className="pt-6">
                <a
                  href="/resume.pdf"
                  download
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  <Download size={20} />
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;