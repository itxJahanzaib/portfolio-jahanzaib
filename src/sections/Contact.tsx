import React, { useState } from 'react';
import { Send, Mail, Phone, MapPin, Github, Linkedin, MessageSquare } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const Contact: React.FC = () => {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    setIsSubmitting(false);
    alert('Thank you for your message! I\'ll get back to you soon.');
  };

  const contactInfo = [
    {
      icon: <Mail className="text-primary-500" size={24} />,
      title: 'Email',
      value: 'jahanzaib@example.com',
      link: 'mailto:jahanzaib@example.com'
    },
    {
      icon: <Phone className="text-primary-500" size={24} />,
      title: 'Phone',
      value: '+92 300 1234567',
      link: 'tel:+923001234567'
    },
    {
      icon: <MapPin className="text-primary-500" size={24} />,
      title: 'Location',
      value: 'Lahore, Pakistan',
      link: '#'
    }
  ];

  const socialLinks = [
    {
      icon: <Github size={24} />,
      name: 'GitHub',
      url: 'https://github.com/jahanzaib',
      color: 'hover:text-gray-900 dark:hover:text-white'
    },
    {
      icon: <Linkedin size={24} />,
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/jahanzaib',
      color: 'hover:text-blue-600'
    },
    {
      icon: <MessageSquare size={24} />,
      name: 'WhatsApp',
      url: 'https://wa.me/923001234567',
      color: 'hover:text-green-500'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`transition-all duration-1000 ${isIntersecting ? 'animate-slide-up' : 'opacity-0'}`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Get In Touch
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              I'm always interested in new opportunities and interesting projects. 
              Let's discuss how we can work together!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className={`space-y-8 ${isIntersecting ? 'animate-slide-up' : 'opacity-0'}`}>
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                  Contact Information
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                  Feel free to reach out to me through any of the following methods. 
                  I typically respond within 24 hours and I'm always happy to discuss 
                  new projects, creative ideas, or opportunities to be part of your vision.
                </p>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center">
                        {info.icon}
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 dark:text-white">
                          {info.title}
                        </h4>
                        <a
                          href={info.link}
                          className="text-gray-600 dark:text-gray-400 hover:text-primary-500 transition-colors"
                        >
                          {info.value}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Follow Me
                </h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 bg-gray-100 dark:bg-gray-800 rounded-lg text-gray-600 dark:text-gray-400 ${social.color} transform hover:scale-110 transition-all duration-300 shadow-md hover:shadow-lg`}
                      aria-label={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>

              {/* Availability */}
              <div className="bg-gradient-to-r from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 p-6 rounded-xl">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Current Availability
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  I'm currently available for freelance projects and full-time opportunities. 
                  Let's discuss your requirements!
                </p>
                <div className="mt-3 inline-flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-green-600 dark:text-green-400">
                    Available for new projects
                  </span>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className={`${isIntersecting ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '200ms' }}>
              <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                  Send Me a Message
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors resize-none"
                      placeholder="Tell me about your project or inquiry..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-8 py-4 bg-primary-500 hover:bg-primary-600 disabled:bg-primary-400 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 disabled:transform-none transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;