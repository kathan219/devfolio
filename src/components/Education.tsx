import React from 'react';
import { GraduationCap } from 'lucide-react';

const education = [
  {
    degree: 'Master of Engineering in Software Engineering',
    school: 'Carleton University',
    period: '2023 - 2025',
    courses: ['Test-Driven Agile Development', 'Web and Mobile Software Development', 'Advanced Operating Systems','Embedded Systems'],
  },
  {
    degree: 'Bachelor of Engineering in Computer Engineering',
    school: 'Gujarat Technological University',
    period: '2018 - 2022',
    courses: ['Analysis and Design of Algorithms', 'Advanced Java Programming', 'Database Systems','Data Structures and Algorithms: Data structures'], 
  },
];

export default function Education() {
  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-16">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Education</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Academic Background
          </p>
        </div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="relative bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="h-12 w-12 bg-indigo-100 rounded-full flex items-center justify-center">
                    <GraduationCap className="h-6 w-6 text-indigo-600" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-gray-900">{edu.degree}</h3>
                  <p className="text-indigo-600 font-medium">{edu.school}</p>
                  <p className="text-sm text-gray-500 mb-4">{edu.period}</p>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Courses:</h4>
                    <div className="flex flex-wrap gap-2">
                      {edu.courses.map((course, i) => (
                        <span
                          key={i}
                          className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}