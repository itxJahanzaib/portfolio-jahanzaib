import React from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const Projects: React.FC = () => {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment processing, order management, and admin dashboard.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe', 'JWT'],
      githubUrl: 'https://github.com/jahanzaib/ecommerce-platform',
      liveUrl: 'https://ecommerce-demo.vercel.app',
      featured: true
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application built with Next.js and Supabase. Real-time updates, team collaboration, and project tracking capabilities.',
      image: 'https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Next.js', 'Supabase', 'TypeScript', 'Tailwind CSS', 'PostgreSQL'],
      githubUrl: 'https://github.com/jahanzaib/task-manager',
      liveUrl: 'https://taskmanager-demo.vercel.app',
      featured: true
    },
    {
      id: 3,
      title: 'Social Media Dashboard',
      description: 'Analytics dashboard for social media management with data visualization, scheduling posts, and performance tracking across multiple platforms.',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'D3.js', 'Node.js', 'Redis', 'Chart.js', 'Material-UI'],
      githubUrl: 'https://github.com/jahanzaib/social-dashboard',
      liveUrl: 'https://social-dashboard-demo.vercel.app',
      featured: false
    },
    {
      id: 4,
      title: 'Real Estate Platform',
      description: 'Property listing and management platform with advanced search, virtual tours, and agent management system.',
      image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Vue.js', 'Python', 'Django', 'PostgreSQL', 'AWS S3'],
      githubUrl: 'https://github.com/jahanzaib/real-estate',
      liveUrl: 'https://realestate-demo.vercel.app',
      featured: false
    },
    {
      id: 5,
      title: 'Learning Management System',
      description: 'Educational platform with course creation, video streaming, progress tracking, and certification system.',
      image: 'https://images.pexels.com/photos/301926/pexels-photo-301926.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'AWS', 'Stripe'],
      githubUrl: 'https://github.com/jahanzaib/lms-platform',
      liveUrl: 'https://lms-demo.vercel.app',
      featured: false
    },
    {
      id: 6,
      title: 'Weather Forecast App',
      description: 'Modern weather application with location-based forecasting, interactive maps, and severe weather alerts.',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React Native', 'TypeScript', 'REST API', 'Redux', 'Maps API'],
      githubUrl: 'https://github.com/jahanzaib/weather-app',
      liveUrl: 'https://weather-demo.vercel.app',
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`transition-all duration-1000 ${isIntersecting ? 'animate-slide-up' : 'opacity-0'}`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A showcase of my recent work and personal projects demonstrating various technologies and solutions
            </p>
          </div>

          {/* Featured Projects */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 text-center">
              Highlighted Work
            </h3>
            <div className="grid lg:grid-cols-2 gap-8">
              {projects.filter(project => project.featured).map((project, index) => (
                <div
                  key={project.id}
                  className={`group bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 ${
                    isIntersecting ? 'animate-slide-up' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="flex space-x-4">
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                          aria-label="View GitHub repository"
                        >
                          <Github size={20} />
                        </a>
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                          aria-label="View live demo"
                        >
                          <ExternalLink size={20} />
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="p-8">
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                      {project.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex space-x-4">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary-500 transition-colors"
                      >
                        <Github size={16} />
                        <span className="text-sm font-medium">Code</span>
                      </a>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary-500 transition-colors"
                      >
                        <ExternalLink size={16} />
                        <span className="text-sm font-medium">Live Demo</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Other Projects */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 text-center">
              Other Projects
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.filter(project => !project.featured).map((project, index) => (
                <div
                  key={project.id}
                  className={`group bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 ${
                    isIntersecting ? 'animate-slide-up' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${(index + 2) * 100}ms` }}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>

                  <div className="p-6">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {project.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded text-xs">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>

                    <div className="flex justify-between items-center">
                      <div className="flex space-x-3">
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-500 hover:text-primary-500 transition-colors"
                          aria-label="View GitHub repository"
                        >
                          <Github size={16} />
                        </a>
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-500 hover:text-primary-500 transition-colors"
                          aria-label="View live demo"
                        >
                          <ExternalLink size={16} />
                        </a>
                      </div>
                      <ArrowRight className="text-gray-400 group-hover:text-primary-500 transition-colors" size={16} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* View More Projects */}
          <div className="text-center mt-12">
            <a
              href="https://github.com/jahanzaib"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary-500 hover:bg-primary-600 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <Github size={20} />
              View More on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;