import React from 'react';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    title: 'Teaching Assistant',
    company: 'Carleton University',
    period: 'January 2025 - Present',
    description: [
      'Provide academic support and mentorship to 110 undergraduate students enrolled in COMP 4900E: Real-Time Operating Systems.',
      'Support grading assignments, leading tutorials, and facilitating interactive in-class discussions to enhance students\' grasp of RTOS principles.',
      'Create and deliver additional learning resources to break down complex RTOS concepts, enabling students to approach challenges with confidence.',
      'Oversee and manage QNX software licenses to ensure all students have seamless access to the tools required for hands-on learning and project development.',
    ],
  },
  {
    title: 'Junior Software Engineer',
    company: 'Rydot Infotech Pvt Ltd.',
    period: 'September 2022 - June 2023',
    description: [
      'Enhanced system performance by 30% by refactoring Spring Boot services, implementing caching, and optimizing database queries.',
      'Significantly improved dynamic content rendering by 25% through DOM manipulation using JavaScript in single-page applications.',
      'Automated testing frameworks using Selenium and JUnit, increasing test coverage by 40% and reducing manual testing time by 50%.',
      'Conducted code reviews for 15+ weekly submissions, utilizing Git and BitBucket to ensure compliance with coding standards.',
    ],
  },
  {
    title: 'Developer Intern',
    company: 'Softvan Technologies Ltd.',
    period: 'December 2021 - June 2022',
    description: [
      'Developed RESTful HTTP APIs using Java and Spring, enhancing system interoperability by 30% for B2B solutions.',
      'Implemented Test-Driven Development (TDD), reducing post-production errors by 20% and aligning with DevOps practices.',
      'Wrote clean, maintainable code and unit tests using JUnit, resulting in a 30% reduction in bug reports over six months.',
      'Configured SSL encryption for web services, ensuring data security and compliance across 100% of external communications using OpenSSL and Java Keystore.',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-16">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Experience</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Professional Journey
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0">
                  <div className="h-12 w-12 bg-indigo-100 rounded-full flex items-center justify-center">
                    <Briefcase className="h-6 w-6 text-indigo-600" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-gray-900">{exp.title}</h3>
                  <p className="text-indigo-600 font-medium">{exp.company}</p>
                  <p className="text-sm text-gray-500">{exp.period}</p>
                </div>
              </div>
              <ul className="ml-16 space-y-2">
                {exp.description.map((item, i) => (
                  <li key={i} className="text-gray-600">
                    • {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
