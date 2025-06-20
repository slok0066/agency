
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/theme-toggle";
import Footer from "@/components/Footer";
import { ArrowLeft, Code, Smartphone, Globe, Zap, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ServicesPage = () => {
  const services = [
    {
      icon: Globe,
      title: "Web Development",
      description: "Custom websites and web applications built with cutting-edge technologies.",
      features: ["React & Next.js", "Responsive Design", "SEO Optimization", "E-commerce Solutions", "CMS Integration", "Performance Optimization"],
      gradient: "from-emerald-500 to-teal-500",
      price: "Starting from $2,500"
    },
    {
      icon: Smartphone,
      title: "Mobile App Development", 
      description: "Native and cross-platform mobile applications for iOS and Android.",
      features: ["React Native", "Native iOS/Android", "Cross-platform", "App Store Optimization", "Push Notifications", "Offline Functionality"],
      gradient: "from-teal-500 to-cyan-500",
      price: "Starting from $5,000"
    },
    {
      icon: Code,
      title: "Custom Software",
      description: "Tailored software solutions designed for your unique business needs.",
      features: ["API Development", "Database Design", "Cloud Integration", "Third-party Integrations", "Scalable Architecture", "24/7 Support"],
      gradient: "from-cyan-500 to-blue-500",
      price: "Custom Quote"
    },
    {
      icon: Zap,
      title: "Digital Transformation",
      description: "Complete digital overhaul to modernize your business processes.",
      features: ["Process Automation", "Cloud Migration", "System Integration", "Analytics & Insights", "Training & Support", "Ongoing Maintenance"],
      gradient: "from-blue-500 to-emerald-500",
      price: "Starting from $10,000"
    }
  ];

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-purple-900 dark:to-slate-900 transition-colors duration-300">
        <div className="fixed top-4 right-4 z-50">
          <ThemeToggle />
        </div>
        
        {/* Navigation */}
        <div className="fixed top-4 left-4 z-50">
          <Link to="/">
            <Button variant="outline" size="sm" className="bg-white/80 dark:bg-white/10 backdrop-blur-sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>

        {/* Hero Section */}
        <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Our <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Comprehensive digital solutions to help your business thrive in the modern world. From web development to digital transformation.
            </p>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="bg-white/80 dark:bg-white/5 backdrop-blur-sm border-gray-200 dark:border-white/10 hover:shadow-2xl transition-all duration-500 rounded-3xl overflow-hidden">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`p-4 bg-gradient-to-r ${service.gradient} rounded-2xl`}>
                        <service.icon className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl text-gray-900 dark:text-white">{service.title}</CardTitle>
                        <p className="text-emerald-600 dark:text-emerald-400 font-semibold">{service.price}</p>
                      </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 text-lg">{service.description}</p>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-4">What's Included:</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center text-gray-600 dark:text-gray-300">
                            <CheckCircle className="h-4 w-4 text-emerald-500 mr-3 flex-shrink-0" />
                            <span className="text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <Button className={`w-full bg-gradient-to-r ${service.gradient} hover:opacity-90 text-white`}>
                      Get Started
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default ServicesPage;
