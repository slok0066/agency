"use client";

import Link from "next/link";
import { useState } from "react";
import KoalendarModal from "./modals/KoalendarModal";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Smartphone, Globe, Zap, ArrowRight } from "lucide-react";

const Services = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeService, setActiveService] = useState<number | null>(null);
  const [koalendarOpen, setKoalendarOpen] = useState(false);

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

  const serviceDetails = [
    {
      title: "Custom Web Development That Converts",
      description: "Go beyond templates — we build custom websites and applications using React, Next.js, and other modern web frameworks.",
      sections: [
        { heading: "Benefits of Custom Development", content: "• Tailored to your brand and goals\n• Better performance, SEO, and scalability\n• Stand out from competitors" },
        { heading: "Showcase", content: "[Project 1: Modern SaaS Platform](#)\n[Project 2: E-commerce Redesign](#)" },
        { heading: "Detailed Features", content: "- Responsive UI\n- SEO Schema & Meta Tags\n- Lighthouse Performance >90\n- Code Splitting & SSR (if Next.js)" },
      ],
      cta: { label: "Book a Free Consultation", url: "https://koalendar.com/e/meet-with-thinkbuild" },
    },
    {
      title: "Scalable Mobile Apps for iOS & Android",
      description: "Whether it's React Native or native development, we build intuitive mobile apps with powerful performance and minimal bugs.",
      sections: [
        { heading: "Platforms We Support", content: "Android, iOS, Cross-platform" },
        { heading: "UI/UX Demo", content: "[App Demo Screenshot](#)" },
        { heading: "Technologies", content: "React Native, Kotlin, Swift" },
        { heading: "Features", content: "- Push Notifications\n- Offline Support\n- App Store Optimization" },
        { heading: "Case Study", content: "[Demo Link](#)" },
      ],
      cta: { label: "Schedule a Demo", url: "https://koalendar.com/e/meet-with-thinkbuild" },
    },
    {
      title: "Software Built for Your Workflow",
      description: "We build software that adapts to your business, not the other way around.",
      sections: [
        { heading: "What is Custom Software?", content: "Custom vs off-the-shelf solutions" },
        { heading: "Features We Offer", content: "- Backend/API Development (Node.js, Django, etc.)\n- Secure Database Design (MongoDB, PostgreSQL)\n- Admin Panels & Dashboards\n- SaaS product examples" },
        { heading: "Hosting & Maintenance", content: "AWS, Vercel, Firebase, etc." },
        { heading: "Real Examples", content: "[Use Case Scenario](#)" },
      ],
      cta: { label: "Let's Talk About Your Project", url: "https://koalendar.com/e/meet-with-thinkbuild" },
    },
    {
      title: "Digital Transformation for Modern Enterprises",
      description: "We help businesses digitize operations with cutting-edge tools and cloud solutions.",
      sections: [
        { heading: "What is Digital Transformation?", content: "Overview and benefits" },
        { heading: "Services", content: "- Workflow Automation (Zapier, n8n)\n- Cloud Migration (AWS, GCP)\n- System Integration (CRM, ERP)\n- Data Dashboards & Insights" },
        { heading: "Example Transformation", content: "Before vs After" },
        { heading: "Benefits", content: "- Reduced manual effort\n- Cost & time savings\n- Real-time data access" },
      ],
      cta: { label: "Request a Digital Audit", url: "https://koalendar.com/e/meet-with-thinkbuild" },
    },
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
                  {service.features?.map((feature, featureIndex) => (
                    <li key={feature} className="flex items-center text-gray-600 dark:text-gray-300 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300">
                      <div className={`w-2 h-2 bg-gradient-to-r ${service.gradient} rounded-full mr-3 group-hover:scale-125 transition-transform duration-300`} />
                      <span className="text-sm sm:text-base">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                {/* Learn More Link */}
                <Link
                  href={
                    service.title === "Web Development"
                      ? "/services/web-development"
                      : service.title === "Mobile App Development"
                      ? "/services/mobile-apps"
                      : service.title === "Custom Software"
                      ? "/services/custom-software"
                      : "/services/digital-transformation"
                  }
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 text-base sm:text-lg mt-4 group"
                >
                  <span>Learn More</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Modal for Service Details */}
      {modalOpen && activeService !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm animate-fade-in p-4" onClick={() => setModalOpen(false)}>
          <div className="relative bg-white dark:bg-slate-900 rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] flex flex-col overflow-y-auto animate-scale-in" onClick={e => e.stopPropagation()}>
            <div className="flex justify-between items-center p-4 border-b border-slate-200 dark:border-slate-700">
              <h2 className="text-lg font-semibold text-slate-800 dark:text-white">{serviceDetails[activeService].title}</h2>
              <button
                onClick={() => setModalOpen(false)}
                className="w-10 h-10 flex items-center justify-center rounded-full text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                aria-label="Close modal"
              >
                <span className="text-2xl">×</span>
              </button>
            </div>
            <div className="p-6 overflow-y-auto">
              <p className="mb-4 text-gray-600 dark:text-gray-300">{serviceDetails[activeService].description}</p>
              {serviceDetails[activeService].sections.map((section, i) => (
                <div key={i} className="mb-4">
                  <h3 className="font-semibold text-emerald-600 mb-1">{section.heading}</h3>
                  <pre className="whitespace-pre-line text-gray-700 dark:text-gray-200 text-sm">{section.content}</pre>
                </div>
              ))}
              <button
                className="mt-6 w-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-bold py-3 rounded-xl shadow-lg transition-all duration-300 text-lg"
                onClick={() => { setModalOpen(false); setKoalendarOpen(true); }}
              >
                {serviceDetails[activeService].cta.label}
              </button>
            </div>
          </div>
        </div>
      )}
      {koalendarOpen && activeService !== null && (
        <KoalendarModal
          isOpen={koalendarOpen}
          onClose={() => setKoalendarOpen(false)}
          url={serviceDetails[activeService].cta.url}
        />
      )}
    </section>
  );
};

export default Services;
