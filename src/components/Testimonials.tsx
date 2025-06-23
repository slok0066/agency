
"use client";

import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "CEO",
      company: "TechStart Inc.",
      content: "Working with ThinkBuild transformed our digital presence completely. The team delivered beyond our expectations with a modern, responsive platform that increased our conversions by 300%.",
      rating: 5,
      gradient: "from-emerald-500 to-teal-500"
    },
    {
      name: "Arjun Patel",
      role: "Founder",
      company: "InnovateLab",
      content: "The mobile app they developed for us is absolutely fantastic. Clean design, smooth performance, and excellent user experience. Our users love it and our app store ratings improved significantly.",
      rating: 5,
      gradient: "from-teal-500 to-cyan-500"
    },
    {
      name: "Kavya Reddy",
      role: "Marketing Director",
      company: "GrowthCorp",
      content: "Their expertise in digital transformation helped us modernize our entire operation. The custom software solution they built streamlined our processes and saved us countless hours.",
      rating: 5,
      gradient: "from-cyan-500 to-blue-500"
    },
    {
      name: "Rohit Gupta",
      role: "CTO",
      company: "DataFlow Systems",
      content: "Professional, reliable, and incredibly skilled. They took our complex requirements and delivered a scalable solution that grows with our business. Highly recommended!",
      rating: 5,
      gradient: "from-blue-500 to-emerald-500"
    }
  ];

  const [current, setCurrent] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(1); // Default to 1 for SSR

  useEffect(() => {
    const updateCardsToShow = () => {
      setCardsToShow(window.innerWidth >= 1024 ? 2 : 1);
    };
    updateCardsToShow();
    window.addEventListener('resize', updateCardsToShow);
    return () => window.removeEventListener('resize', updateCardsToShow);
  }, []);

  const maxIndex = testimonials.length - cardsToShow;

  const goTo = (idx: number) => setCurrent(Math.max(0, Math.min(idx, maxIndex)));
  const prev = () => goTo(current - 1);
  const next = () => goTo(current + 1);

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") prev();
    if (e.key === "ArrowRight") next();
  };

  return (
    <section className="py-10 sm:py-20 px-2 sm:px-6 lg:px-8 relative overflow-hidden" tabIndex={0} onKeyDown={handleKeyDown} aria-label="Testimonials Carousel">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-gradient-to-r from-emerald-400/10 to-teal-400/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            What Our <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">Clients Say</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4">
            Don't just take our word for it. Here's what our satisfied clients have to say about our work.
          </p>
        </div>

        {/* Carousel Controls */}
        <div className="flex justify-center gap-2 sm:gap-4 mb-8">
          <button
            onClick={prev}
            disabled={current === 0}
            aria-label="Previous testimonial"
            className="rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white py-2 px-4 text-base sm:text-lg shadow-md hover:scale-110 disabled:opacity-40 disabled:pointer-events-none transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
          >
            &#8592;
          </button>
          <button
            onClick={next}
            disabled={current >= maxIndex}
            aria-label="Next testimonial"
            className="rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white py-2 px-4 text-base sm:text-lg shadow-md hover:scale-110 disabled:opacity-40 disabled:pointer-events-none transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
          >
            &#8594;
          </button>
        </div>

        {/* Carousel Slides */}
        <div className="flex justify-center">
          <div className="relative w-full max-w-4xl">
            <div className="flex gap-4 sm:gap-8 overflow-x-auto snap-x snap-mandatory scrollbar-hide">
              <AnimatePresence initial={false} mode="wait">
                {Array.from({ length: cardsToShow }).map((_, offset) => {
                  const idx = current + offset;
                  if (idx >= testimonials.length) return null;
                  const testimonial = testimonials[idx];
                  return (
                    <motion.div
                      key={testimonial.name}
                      initial={{ opacity: 0, x: offset === 0 ? 100 : -100 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: offset === 0 ? -100 : 100 }}
                      transition={{ duration: 0.5, type: "spring" }}
                      className="w-full lg:w-1/2 snap-center"
                    >
                      <Card className={`group bg-white/80 dark:bg-white/5 backdrop-blur-sm border-gray-200 dark:border-white/10 hover:bg-white/90 dark:hover:bg-white/10 transition-all duration-500 hover:transform hover:scale-105 shadow-lg hover:shadow-2xl rounded-3xl overflow-hidden animate-fade-in`}>
                        <CardContent className="p-6 sm:p-8 relative">
                          {/* Quote Icon */}
                          <div className={`absolute top-4 right-4 p-2 sm:p-3 bg-gradient-to-r ${testimonial.gradient} rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-300 animate-scale-in`}>
                            <Quote className="h-4 w-4 sm:h-6 sm:w-6 text-white" />
                          </div>

                          {/* Rating Stars */}
                          <div className="flex gap-1 mb-4 animate-slide-in-right">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star key={`star-${i}`} className="h-4 w-4 sm:h-5 sm:w-5 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>

                          {/* Testimonial Content */}
                          <blockquote className="text-gray-700 dark:text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed mb-6 group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors duration-300 animate-fade-in">
                            "{testimonial.content}"
                          </blockquote>

                          {/* Client Info */}
                          <div className="flex items-center gap-3">
                            <span className="font-bold text-emerald-700 dark:text-emerald-400 text-base sm:text-lg">
                              {testimonial.name}
                            </span>
                            <span className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm">
                              {testimonial.role}, {testimonial.company}
                            </span>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
