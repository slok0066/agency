
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Smartphone, Globe, Zap, ArrowRight } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: "Web Development",
      description: "Custom websites and web applications built with cutting-edge technologies like React, Next.js, and modern frameworks.",
      features: ["Responsive Design", "SEO Optimized", "Performance Focused", "Scalable Architecture"],
      gradient: "from-emerald-500 to-teal-500"
    },
    {
      icon: Smartphone,
      title: "Mobile App Development", 
      description: "Native and cross-platform mobile applications that deliver exceptional user experiences across iOS and Android.",
      features: ["React Native", "Native iOS/Android", "Cross-platform", "App Store Optimization"],
      gradient: "from-teal-500 to-cyan-500"
    },
    {
      icon: Code,
      title: "Custom Software",
      description: "Tailored software solutions designed to solve your unique business challenges and streamline operations.",
      features: ["API Development", "Database Design", "Cloud Integration", "Maintenance & Support"],
      gradient: "from-cyan-500 to-blue-500"
    },
    {
      icon: Zap,
      title: "Digital Transformation",
      description: "Complete digital overhaul services to modernize your business processes and enhance operational efficiency.",
      features: ["Process Automation", "Cloud Migration", "System Integration", "Analytics & Insights"],
      gradient: "from-blue-500 to-emerald-500"
    }
  ];

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Our <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4">
            We offer comprehensive digital solutions to help your business thrive in the modern world
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <Card key={service.title} className={`group bg-white/80 dark:bg-white/5 backdrop-blur-sm border-gray-200 dark:border-white/10 hover:bg-white/90 dark:hover:bg-white/10 transition-all duration-500 hover:transform hover:scale-105 shadow-lg hover:shadow-2xl rounded-3xl overflow-hidden animate-fade-in`} style={{animationDelay: `${index * 200}ms`}}>
              <CardHeader className="pb-4 relative">
                {/* Animated background gradient */}
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${service.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`} />
                
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6">
                  <div className={`p-4 bg-gradient-to-r ${service.gradient} rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl sm:text-3xl text-gray-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                </div>
                <CardDescription className="text-gray-600 dark:text-gray-300 text-base sm:text-lg leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={feature} className="flex items-center text-gray-600 dark:text-gray-300 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300">
                      <div className={`w-2 h-2 bg-gradient-to-r ${service.gradient} rounded-full mr-3 group-hover:scale-125 transition-transform duration-300`} />
                      <span className="text-sm sm:text-base">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                {/* Learn More Link */}
                <Link href="#" className="flex items-center text-emerald-600 dark:text-emerald-400 font-semibold group-hover:text-emerald-700 dark:group-hover:text-emerald-300 transition-colors duration-300">
                  <span className="text-sm sm:text-base">Learn More</span>
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
