
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/theme-toggle";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import { Shield, Lock, Eye, UserCheck } from "lucide-react";

const PrivacyPolicy = () => {
  const sections = [
    {
      icon: Shield,
      title: "Data Protection",
      content: "We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction."
    },
    {
      icon: Lock,
      title: "Information Security",
      content: "Your data is encrypted and stored securely. We use industry-standard SSL encryption for all data transmission and storage."
    },
    {
      icon: Eye,
      title: "Data Usage",
      content: "We only collect information necessary to provide our services and never sell your personal data to third parties."
    },
    {
      icon: UserCheck,
      title: "Your Rights",
      content: "You have the right to access, update, or delete your personal information at any time by contacting us."
    }
  ];

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-purple-900 dark:to-slate-900 transition-colors duration-300">
        <div className="fixed top-4 right-4 z-50">
          <ThemeToggle />
        </div>
        
        <Navigation />

        {/* Hero Section */}
        <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                Privacy <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">Policy</span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Your privacy is important to us. This policy explains how we collect, use, and protect your information.
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
                Last updated: December 2024
              </p>
            </div>

            {/* Privacy Sections */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {sections.map((section, index) => (
                <div key={index} className={`bg-white/80 dark:bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-gray-200 dark:border-white/10 hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 animate-fade-in`} style={{animationDelay: `${index * 200}ms`}}>
                  <div className="p-4 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl w-fit mb-6 animate-scale-in" style={{animationDelay: `${index * 200 + 100}ms`}}>
                    <section.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">{section.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{section.content}</p>
                </div>
              ))}
            </div>

            {/* Detailed Policy */}
            <div className="bg-white/80 dark:bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-gray-200 dark:border-white/10 animate-fade-in delay-1000">
              <div className="prose prose-gray dark:prose-invert max-w-none">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Information We Collect</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  We collect information you provide directly to us, such as when you create an account, contact us, or use our services.
                </p>
                
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 mt-8">How We Use Your Information</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  We use the information we collect to provide, maintain, and improve our services, communicate with you, and ensure security.
                </p>
                
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 mt-8">Contact Us</h2>
                <p className="text-gray-600 dark:text-gray-300">
                  If you have any questions about this Privacy Policy, please contact us at privacy@thinkbuild.com
                </p>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default PrivacyPolicy;
