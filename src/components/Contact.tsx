
"use client";

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Send, Clock, MessageCircle, CheckCircle2, Loader2 } from "lucide-react";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    setIsSubmitting(true);
    
    try {
      const formData = new FormData(form);
      const response = await fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        // Form submitted successfully
        setIsSubmitted(true);
        form.reset();
        // Reset the success message after 5 seconds
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        // Handle error
        const error = await response.json();
        console.error('Form submission error:', error);
        alert('There was an error submitting the form. Please try again.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      alert('There was an error submitting the form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    { 
      icon: Mail, 
      title: "Email Us", 
      info: "thinkbuild8@gmail.com",
      description: "Get in touch via email",
      gradient: "from-emerald-500 to-teal-500"
    },
    { 
      icon: Phone, 
      title: "Call Us", 
      info: "+91 92045 27554",
      description: "Speak with our team",
      gradient: "from-teal-500 to-cyan-500"
    }
  ];

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative" id="contact">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Let's Build Something{" "}
            <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
              Amazing Together
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4">
            Ready to transform your digital presence? Get in touch and let's discuss your project.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Form */}
          <Card className="bg-white/80 dark:bg-white/5 backdrop-blur-sm border-gray-200 dark:border-white/10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 animate-slide-in-left">
            <CardHeader className="pb-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-3 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl shadow-lg">
                  <MessageCircle className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-2xl sm:text-3xl text-gray-900 dark:text-white">
                  Send us a message
                </CardTitle>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>
            </CardHeader>
            <CardContent>
              <form 
                action="https://getform.io/f/ayvymvnb"
                method="POST"
                onSubmit={handleSubmit} 
                className="space-y-6"
                encType="multipart/form-data"
              >
                <input type="hidden" name="_subject" value="New Contact Form Submission" />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
                    <Input 
                      name="name"
                      placeholder="Your Name" 
                      className="bg-white/50 dark:bg-white/10 border-gray-300 dark:border-white/20 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 rounded-xl h-12 transition-all duration-300 focus:scale-105"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
                    <Input 
                      type="email" 
                      name="email"
                      placeholder="Your Email" 
                      className="bg-white/50 dark:bg-white/10 border-gray-300 dark:border-white/20 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 rounded-xl h-12 transition-all duration-300 focus:scale-105"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Subject</label>
                  <Input 
                    name="subject"
                    placeholder="Subject" 
                    className="bg-white/50 dark:bg-white/10 border-gray-300 dark:border-white/20 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 rounded-xl h-12 transition-all duration-300 focus:scale-105"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
                  <Textarea 
                    name="message"
                    placeholder="Tell us about your project..." 
                    rows={5}
                    className="bg-white/50 dark:bg-white/10 border-gray-300 dark:border-white/20 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 rounded-xl transition-all duration-300 focus:scale-105 resize-none"
                    required
                  />
                </div>
                {isSubmitted ? (
                  <div className="bg-emerald-50 dark:bg-emerald-900/30 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300 px-6 py-4 rounded-xl flex items-center justify-center space-x-2">
                    <CheckCircle2 className="h-5 w-5" />
                    <span>Message sent successfully! We'll get back to you soon.</span>
                  </div>
                ) : (
                  <Button 
                    type="submit" 
                    className="group w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-semibold py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 group-hover:scale-110 transition-transform duration-300" />
                      </>
                    )}
                  </Button>
                )}
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6 animate-slide-in-right">
            {contactInfo.map((contact, index) => (
              <div key={contact.title} className={`group bg-white/80 dark:bg-white/5 backdrop-blur-sm rounded-3xl p-6 border border-gray-200 dark:border-white/10 shadow-lg hover:shadow-xl transition-all duration-500 hover:transform hover:scale-105 animate-fade-in`} style={{animationDelay: `${index * 200}ms`}}>
                <div className="flex items-center gap-4">
                  <div className={`p-4 bg-gradient-to-r ${contact.gradient} rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <contact.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300">
                      {contact.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 font-medium">{contact.info}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{contact.description}</p>
                  </div>
                </div>
              </div>
            ))}

            {/* Response Time Card */}
            <div className="bg-gradient-to-r from-emerald-500/20 via-teal-500/20 to-cyan-500/20 rounded-3xl p-8 backdrop-blur-sm border border-gray-200 dark:border-white/10 shadow-lg hover:shadow-xl transition-all duration-500 animate-fade-in delay-600">
              <div className="flex items-start gap-4">
                <div className="p-4 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl shadow-lg">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                    Quick Response Guarantee
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    We typically respond to all inquiries within 24 hours during business days. 
                    For urgent matters, don't hesitate to call us directly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
