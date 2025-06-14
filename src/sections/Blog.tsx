import React from 'react';
import { Clock, ArrowRight, Calendar } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const Blog: React.FC = () => {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });

  const blogPosts = [
    {
      id: 1,
      title: 'Building Scalable React Applications with TypeScript',
      excerpt: 'Learn how to structure large React applications using TypeScript, custom hooks, and proper state management patterns for better maintainability.',
      image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: '2024-01-15',
      readTime: '8 min read',
      tags: ['React', 'TypeScript', 'Architecture']
    },
    {
      id: 2,
      title: 'Modern CSS Techniques for Better Web Performance',
      excerpt: 'Explore advanced CSS techniques including container queries, CSS Grid subgrid, and modern layout patterns that improve both performance and user experience.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: '2024-01-08',
      readTime: '6 min read',
      tags: ['CSS', 'Performance', 'Web Development']
    },
    {
      id: 3,
      title: 'API Design Best Practices for Full-Stack Applications',
      excerpt: 'A comprehensive guide to designing RESTful APIs and GraphQL endpoints that are scalable, secure, and developer-friendly.',
      image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: '2024-01-01',
      readTime: '12 min read',
      tags: ['API', 'Backend', 'Best Practices']
    }
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <section id="blog" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`transition-all duration-1000 ${isIntersecting ? 'animate-slide-up' : 'opacity-0'}`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Latest Blog Posts
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Sharing insights about web development, best practices, and the latest technologies
            </p>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article
                key={post.id}
                className={`group bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 ${
                  isIntersecting ? 'animate-slide-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="p-6">
                  {/* Post Meta */}
                  <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{formatDate(post.date)}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={14} />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  {/* Post Title */}
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-primary-500 transition-colors cursor-pointer line-clamp-2">
                    {post.title}
                  </h3>

                  {/* Post Excerpt */}
                  <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Read More */}
                  <button className="group/btn flex items-center gap-2 text-primary-500 hover:text-primary-600 font-medium transition-colors">
                    <span>Read More</span>
                    <ArrowRight 
                      size={16} 
                      className="transition-transform group-hover/btn:translate-x-1" 
                    />
                  </button>
                </div>
              </article>
            ))}
          </div>

          {/* View All Posts */}
          <div className="text-center mt-12">
            <button className="inline-flex items-center gap-2 px-8 py-4 border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105">
              <span>View All Posts</span>
              <ArrowRight size={20} />
            </button>
          </div>

          {/* Newsletter Signup */}
          <div className="mt-16 bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg text-center">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Stay Updated
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
              Subscribe to my newsletter to get the latest articles about web development, 
              programming tips, and industry insights delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
              />
              <button className="px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white font-medium rounded-lg transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;