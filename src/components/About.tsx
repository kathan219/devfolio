import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">About Me</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Let me introduce myself
          </p>
        </div>
        <div className="mt-10">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div className="relative">
              <img
                className="w-full rounded-lg shadow-lg"
                src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80"
                alt="Kathan Soni"
              />
            </div>
            <div className="mt-10 lg:mt-0">
              <div className="text-lg text-gray-500 space-y-4">
                <p>
                  I'm a software developer with a passion for creating elegant solutions to complex problems.
                  My journey in technology began with a curiosity about how things work, which led me to pursue
                  a career in software development.
                </p>
                <p>
                  I specialize in full-stack development, with expertise in modern web technologies.
                  My approach combines technical excellence with a keen eye for user experience,
                  ensuring that the solutions I build are not just functional, but also intuitive and enjoyable to use.
                </p>
                <p>
                  When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
                  or sharing my knowledge with the developer community through blog posts and mentoring.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}