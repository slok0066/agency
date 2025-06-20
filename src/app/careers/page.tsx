import type { Metadata } from 'next';
import { Briefcase, HeartHandshake, Users, Trophy, Send } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Careers',
  description: 'Join ThinkBuild and help us build the future of digital innovation. Explore open roles, company culture, and benefits. Apply now to be part of our passionate team!',
};

const jobs = [
  {
    title: 'Frontend Developer',
    location: 'Remote / India',
    type: 'Full-time',
    description: 'Build stunning web interfaces with React & Next.js. Collaborate with designers and backend engineers to deliver seamless user experiences.',
    perks: ['Flexible Hours', 'Remote Friendly', 'Growth Opportunities'],
  },
  {
    title: 'Backend Engineer',
    location: 'Remote / India',
    type: 'Full-time',
    description: 'Architect and develop robust APIs and services. Work with Node.js, databases, and cloud infrastructure.',
    perks: ['Latest Tech Stack', 'Team Learning', 'Competitive Salary'],
  },
  {
    title: 'UI/UX Designer',
    location: 'Remote / India',
    type: 'Contract / Freelance',
    description: 'Design beautiful, intuitive digital products. Shape user journeys from idea to launch.',
    perks: ['Creative Freedom', 'Impactful Work', 'Collaborative Culture'],
  },
];

const benefits = [
  { icon: HeartHandshake, title: 'Supportive Team', desc: 'Collaborate with passionate, friendly professionals.' },
  { icon: Users, title: 'Diverse Culture', desc: 'Work with people from all backgrounds and skillsets.' },
  { icon: Trophy, title: 'Growth & Learning', desc: 'Access to courses, mentorship, and career advancement.' },
  { icon: Briefcase, title: 'Remote Flexibility', desc: 'Work from anywhere and enjoy work-life balance.' },
];

const CareersPage = () => {
  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-emerald-50 via-cyan-50 to-white dark:from-slate-900 dark:via-emerald-900/10 dark:to-slate-900 min-h-screen">
      <div className="max-w-5xl mx-auto text-center mb-16 animate-fade-in">
        <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-4">Careers at ThinkBuild: Join Our Digital Innovation Team</h1>
        <p className="text-lg sm:text-2xl text-gray-600 dark:text-gray-300 mb-8">Join <strong>ThinkBuild</strong> and help shape the future of technology. We’re always looking for talented developers, designers, and strategists who are passionate about digital excellence. Enjoy remote flexibility, growth opportunities, and a supportive team culture. Explore open positions and grow your career with ThinkBuild.</p>
        <a href="/contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
          Apply Now <Send className="w-5 h-5" />
        </a>
      </div>

      {/* Open Positions */}
      <div className="max-w-4xl mx-auto mb-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 animate-fade-in delay-300">
        {jobs.map((job, i) => (
          <div key={job.title} className="bg-white/90 dark:bg-white/5 rounded-3xl shadow-xl border border-gray-200 dark:border-white/10 p-6 flex flex-col gap-4 hover:scale-105 hover:shadow-2xl transition-all duration-300 group animate-slide-in-up" style={{animationDelay: `${i * 150}ms`}}>
            <h2 className="text-2xl font-bold text-emerald-700 dark:text-emerald-400 mb-2 group-hover:text-emerald-600 transition-colors">{job.title}</h2>
            <p className="text-gray-600 dark:text-gray-300 text-base mb-2">{job.description}</p>
            <div className="flex flex-wrap gap-2 mb-2">
              <span className="px-3 py-1 bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-200 rounded-full text-xs font-semibold">{job.location}</span>
              <span className="px-3 py-1 bg-cyan-100 dark:bg-cyan-900/40 text-cyan-700 dark:text-cyan-200 rounded-full text-xs font-semibold">{job.type}</span>
            </div>
            <div className="flex flex-wrap gap-2 mt-auto">
              {job.perks.map((perk) => (
                <span key={perk} className="inline-block bg-gradient-to-r from-emerald-200 to-teal-200 dark:from-emerald-900/40 dark:to-teal-900/40 text-emerald-700 dark:text-emerald-200 px-3 py-1 rounded-full text-xs font-medium">{perk}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Benefits Section */}
      <div className="max-w-4xl mx-auto mb-16 animate-fade-in delay-500">
        <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">Why Work With Us?</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {benefits.map((benefit, i) => (
            <div key={benefit.title} className="flex items-start gap-4 bg-white/70 dark:bg-white/5 rounded-2xl p-5 border border-gray-200 dark:border-white/10 shadow-md hover:scale-105 transition-transform duration-300 animate-slide-in-up" style={{animationDelay: `${i * 200}ms`}}>
              <div className="p-3 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl shadow-lg">
                <benefit.icon className="h-6 w-6 text-white" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">{benefit.title}</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{benefit.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="max-w-3xl mx-auto text-center animate-fade-in delay-700">
        <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Ready to make an impact?</h4>
        <a href="/contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
          Apply Now <Send className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
};

export default CareersPage;
