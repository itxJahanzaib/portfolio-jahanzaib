import React from 'react';
import { Code, Database, Globe, Wrench, Server, Smartphone } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const Skills: React.FC = () => {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });

  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: <Globe className="text-primary-500" size={24} />,
      skills: [
        { name: 'React', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'Next.js', level: 88 },
        { name: 'Tailwind CSS', level: 92 },
        { name: 'JavaScript', level: 95 },
        { name: 'HTML5/CSS3', level: 98 },
      ]
    },
    {
      title: 'Backend Development',
      icon: <Server className="text-primary-500" size={24} />,
      skills: [
        { name: 'Node.js', level: 90 },
        { name: 'Express.js', level: 88 },
        { name: 'Python', level: 85 },
        { name: 'REST APIs', level: 92 },
        { name: 'GraphQL', level: 80 },
        { name: 'Microservices', level: 75 },
      ]
    },
    {
      title: 'Database & Cloud',
      icon: <Database className="text-primary-500" size={24} />,
      skills: [
        { name: 'MongoDB', level: 88 },
        { name: 'PostgreSQL', level: 85 },
        { name: 'Redis', level: 80 },
        { name: 'AWS', level: 82 },
        { name: 'Docker', level: 78 },
        { name: 'Firebase', level: 85 },
      ]
    },
    {
      title: 'Tools & Technologies',
      icon: <Wrench className="text-primary-500" size={24} />,
      skills: [
        { name: 'Git/GitHub', level: 95 },
        { name: 'VS Code', level: 98 },
        { name: 'Webpack', level: 80 },
        { name: 'Jest', level: 85 },
        { name: 'Figma', level: 75 },
        { name: 'Postman', level: 90 },
      ]
    }
  ];

  const SkillBar: React.FC<{ skill: { name: string; level: number }; index: number }> = ({ skill, index }) => {
    return (
      <div className="mb-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
          <span className="text-sm text-gray-500 dark:text-gray-400">{skill.level}%</span>
        </div>
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
          <div
            className={`bg-gradient-to-r from-primary-500 to-primary-600 h-2 rounded-full transition-all duration-1000 ease-out ${
              isIntersecting ? '' : 'w-0'
            }`}
            style={{
              width: isIntersecting ? `${skill.level}%` : '0%',
              transitionDelay: `${index * 100}ms`
            }}
          />
        </div>
      </div>
    );
  };

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`transition-all duration-1000 ${isIntersecting ? 'animate-slide-up' : 'opacity-0'}`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Skills & Technologies
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A comprehensive overview of my technical expertise and proficiency levels
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={category.title}
                className={`bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ${
                  isIntersecting ? 'animate-slide-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${categoryIndex * 200}ms` }}
              >
                <div className="flex items-center gap-3 mb-6">
                  {category.icon}
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <SkillBar 
                      key={skill.name} 
                      skill={skill} 
                      index={categoryIndex * category.skills.length + skillIndex}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Additional Skills */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8">
              Additional Technologies
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                'Redux', 'Zustand', 'Styled Components', 'Material-UI', 'Chakra UI',
                'Prisma', 'Supabase', 'Vercel', 'Netlify', 'Stripe', 'Socket.io',
                'JWT', 'OAuth', 'CI/CD', 'Agile/Scrum'
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 rounded-full shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 border border-gray-200 dark:border-gray-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;