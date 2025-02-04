import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Real-Time Misinformation Debunker',
    description: 'An AI-powered tool that detects misinformation in real-time using advanced NLP and deep learning.',
    image: 'https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&fit=crop&q=80',
    technologies: ['Java', 'Spring AI', 'React', 'TypeScript', 'DeepSeek R1'],
    githubUrl: '#', // Add actual GitHub link if available
    liveUrl: '#', // Add actual live demo link if available
  },
  {
    title: 'Revel - Big Data Curation & Visualization',
    description: 'A scalable data integration engine for consolidating data in warehouses, lakes, and databases with real-time reporting capabilities.',
    image: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&q=80',
    technologies: ['Java', 'Spring Boot', 'React', 'MongoDB'],
    githubUrl: '#', // Add actual GitHub link if available
    liveUrl: '#', // Add actual project demo link if available
  },
  {
    title: 'AI-Powered Flight Booking Assistant',
    description: 'A voice-based flight booking assistant leveraging AI, Spring Boot, and AWS Lambda for automation.',
    image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&q=80',
    technologies: ['Java', 'Spring Security', 'AWS Lambda', 'Amazon RDS'],
    githubUrl: 'https://github.com/kathan219/FlightBooking', // Replace with actual GitHub link
    
  }
  
];

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-16">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Projects</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Featured Work
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                {/* <div className="flex space-x-4">
                  <a
                    href={project.githubUrl}
                    className="inline-flex items-center text-gray-600 hover:text-gray-900"
                    target="_blank" rel="noopener noreferrer"
                  >
                    <Github className="h-5 w-5 mr-1" />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.liveUrl}
                    className="inline-flex items-center text-gray-600 hover:text-gray-900"
                    target="_blank" rel="noopener noreferrer"
                  >
                    <ExternalLink className="h-5 w-5 mr-1" />
                    <span>Live Demo</span>
                  </a>
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
