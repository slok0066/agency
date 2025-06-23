
import Image from "next/image";
import { Users, Award, Clock } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Users,
      title: "Expert Team",
      description: "Our experienced developers and designers stay ahead of industry trends to deliver cutting-edge solutions."
    },
    {
      icon: Award,
      title: "Proven Process",
      description: "We follow agile methodologies and best practices to ensure timely delivery and exceptional quality."
    },
    {
      icon: Clock,
      title: "Long-term Partnership",
      description: "We build lasting relationships with our clients, providing ongoing support and continuous improvement."
    }
  ];

  const stats = [
    { number: "5+", label: "Years Experience" },
    { number: "150+", label: "Projects Completed" },
    { number: "50+", label: "Happy Clients" },
    { number: "99%", label: "Success Rate" }
  ];

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content Side */}
          <div className="space-y-8 animate-fade-in">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Why Choose{" "}
                <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
                  Our Agency?
                </span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                We combine creativity, technical expertise, and strategic thinking to deliver digital solutions that exceed expectations.
              </p>
            </div>
            
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className={`group flex items-start gap-4 p-4 rounded-2xl bg-white/50 dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 hover:bg-white/80 dark:hover:bg-white/10 transition-all duration-300 hover:transform hover:scale-105 animate-slide-in-right`} style={{animationDelay: `${index * 200}ms`}}>
                  <div className="p-3 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Side */}
          <div className="relative animate-fade-in delay-500">
            {/* Main Image Container */}
            <div className="relative bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-3xl p-6 sm:p-8 backdrop-blur-sm border border-gray-200 dark:border-white/10 shadow-2xl">
              <Image 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Development workspace" 
                width={800}
                height={600}
                className="rounded-2xl w-full h-auto shadow-2xl hover:scale-105 transition-transform duration-500"
              />
              
              {/* Floating Stats Cards */}
              <div className="absolute -bottom-3 -left-3 sm:-bottom-6 sm:-left-6 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-3 sm:p-6 shadow-xl animate-bounce">
                <div className="text-center">
                  <p className="text-xl sm:text-3xl font-bold text-white">5+</p>
                  <p className="text-xs sm:text-sm text-emerald-100">Years Experience</p>
                </div>
              </div>

              <div className="absolute -top-3 -right-3 sm:-top-6 sm:-right-6 bg-gradient-to-r from-teal-600 to-cyan-600 rounded-2xl p-3 sm:p-6 shadow-xl animate-pulse">
                <div className="text-center">
                  <p className="text-xl sm:text-3xl font-bold text-white">150+</p>
                  <p className="text-xs sm:text-sm text-teal-100">Projects Done</p>
                </div>
              </div>
            </div>

            {/* Background Decorative Elements */}
            <div className="absolute -z-10 top-8 right-8 w-32 h-32 bg-gradient-to-r from-emerald-400/20 to-teal-400/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute -z-10 bottom-8 left-8 w-24 h-24 bg-gradient-to-r from-teal-400/20 to-cyan-400/20 rounded-full blur-2xl animate-pulse delay-1000" />
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 sm:mt-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className={`text-center p-6 bg-white/80 dark:bg-white/5 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-white/10 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 animate-fade-in`} style={{animationDelay: `${index * 100 + 1000}ms`}}>
                <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-2 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  {stat.number}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
