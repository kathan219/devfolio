import React from 'react';
import { Code, Database, CloudCog, Terminal, Wrench } from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend Development',
    icon: Code,
    skills: [
      { name: 'React', level: 90 },
      { name: 'JavaScript/TypeScript', level: 85 },
      { name: 'HTML/CSS', level: 95 },
      { name: 'Angular', level: 75 },
    ],
  },
  {
    title: 'Backend Development',
    icon: Terminal,
    skills: [
      { name: 'Java (Spring Boot, Spring MVC, Hibernate)', level: 90 },
      { name: 'Node.js', level: 85 },
      { name: 'Express.js', level: 80 },
      { name: 'REST API Development', level: 90 },
      { name: 'GraphQL', level: 75 },
    ],
  },
  {
    title: 'Database & Data Visualization',
    icon: Database,
    skills: [
      { name: 'SQL', level: 90 },
      { name: 'MongoDB', level: 85 },
      { name: 'MySQL', level: 85 },
      { name: 'Redis', level: 75 },
      { name: 'PowerBI', level: 80 },
    ],
  },
  {
    title: 'Cloud & DevOps',
    icon: CloudCog, // Fixed icon
    skills: [
      { name: 'AWS (EC2, S3, RDS, Lambda, CloudFormation, CloudWatch)', level: 80 },
      { name: 'Docker', level: 85 },
      { name: 'Kubernetes', level: 75 },
      { name: 'GCP & Azure', level: 70 },
      { name: 'Git/GitHub/GitLab Actions', level: 90 },
    ],
  },
  {
    title: 'Project Management & Other Tools',
    icon: Wrench, // Fixed icon
    skills: [
      { name: 'JIRA, Trello, Confluence, Notion', level: 80 },
      { name: 'Bitbucket, Jenkins, CI/CD', level: 85 },
      { name: 'Swagger & Postman (API Testing)', level: 90 },
      { name: 'Unix/Linux/Bash', level: 75 },
      { name: 'UiPath (Automation)', level: 70 },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-16">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Skills</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Technical Expertise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center mb-6">
                <div className="h-12 w-12 bg-indigo-100 rounded-full flex items-center justify-center">
                  <category.icon className="h-6 w-6 text-indigo-600" />
                </div>
                <h3 className="ml-4 text-xl font-bold text-gray-900">{category.title}</h3>
              </div>
              <div className="space-y-4">
                {category.skills.map((skill, i) => (
                  <div key={i}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                      <span className="text-sm font-medium text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-indigo-600 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}