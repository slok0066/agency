"use client";


import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle, Sparkles } from "lucide-react";
import Link from 'next/link';
import Script from 'next/script';

const Hero = () => {


  return (
    <>
      <Script id="koalendar-queue" strategy="beforeInteractive">
        {`window.Koalendar=window.Koalendar||function(){(Koalendar.props=Koalendar.props||[]).push(arguments)};`}
      </Script>
      <Script
        id="koalendar-widget"
        async
        src="https://koalendar.com/assets/widget.js"
        strategy="afterInteractive"
        onLoad={() => {
          if (window.Koalendar) {
            window.Koalendar('init');
          }
        }}
      />
      <section className="min-h-screen flex items-center justify-center px-2 sm:px-6 lg:px-8 overflow-hidden 
        relative bg-white/95  sm:bg-transparent">
        <div className="w-full h-full flex flex-col justify-center items-center overflow-y-auto sm:overflow-visible">
      {/* Enhanced gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-100 dark:from-slate-900 dark:via-emerald-900/20 dark:to-slate-900" />
      
      {/* Animated floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-emerald-400/30 to-teal-400/20 rounded-full blur-3xl animate-pulse opacity-70" />
        <div className="absolute top-1/3 -left-20 w-72 h-72 bg-gradient-to-r from-cyan-400/20 to-blue-400/30 rounded-full blur-3xl animate-pulse delay-1000 opacity-60" />
        <div className="absolute bottom-20 right-1/4 w-64 h-64 bg-gradient-to-r from-teal-400/20 to-emerald-400/20 rounded-full blur-3xl animate-pulse delay-500 opacity-50" />
        
        {/* Floating geometric shapes */}
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-emerald-500/40 rotate-45 animate-bounce delay-300" />
        <div className="absolute top-3/4 right-1/3 w-3 h-3 bg-teal-500/40 rounded-full animate-bounce delay-700" />
        <div className="absolute bottom-1/3 left-2/3 w-2 h-8 bg-cyan-500/40 animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 text-center max-w-7xl mx-auto">
        <div className="space-y-8 animate-fade-in">
          {/* Badge */}
          <div className="flex items-center justify-center gap-2 animate-scale-in">
            <Sparkles className="h-5 w-5 text-emerald-600 dark:text-emerald-400 animate-pulse" />
            <span className="text-sm font-semibold text-emerald-700 dark:text-emerald-300 bg-emerald-100/80 dark:bg-emerald-900/30 px-4 py-2 rounded-full backdrop-blur-sm border border-emerald-200 dark:border-emerald-800">
              Premium Digital Solutions
            </span>
          </div>
          
          {/* Main heading */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-gray-900 dark:text-white leading-tight sm:leading-tight leading-snug mb-2 sm:mb-0">
              <span className="block animate-slide-in-right">Transform Your</span>
              <span className="block bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent animate-slide-in-left delay-300">
                Digital Vision
              </span>
              <span className="block animate-slide-in-right delay-500">Into Reality</span>
            </h1>
          </div>
          
          {/* Description */}
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed animate-fade-in delay-700 px-2 sm:px-4">
            We craft exceptional web applications and mobile experiences that drive growth, 
            engage users, and deliver measurable results for forward-thinking businesses.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4 animate-fade-in delay-1000">
            <Button 
              asChild
              className="group w-full sm:w-auto px-8 sm:px-14 py-5 sm:py-7 text-lg sm:text-2xl font-extrabold rounded-2xl shadow-xl border-2 border-transparent bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-400 focus-visible:ring-4 focus-visible:ring-emerald-300/60 transition-all duration-200 relative overflow-hidden before:content-[''] before:absolute before:inset-0 before:rounded-2xl before:bg-white/10 before:opacity-0 group-hover:before:opacity-10 before:pointer-events-none active:scale-97 animate-glow"
              style={{ letterSpacing: '0.03em', boxShadow: '0 4px 24px 0 rgba(16, 185, 129, 0.18), 0 2px 12px 0 rgba(20, 184, 166, 0.18) inset' }}
            >
              <a href="https://koalendar.com/e/meet-with-thinkbuild" data-koalendar-widget data-koa-type="link">
                <span className="relative z-10 bg-gradient-to-r from-white via-emerald-100 to-cyan-100 bg-clip-text text-transparent drop-shadow-lg group-hover:text-white transition-colors duration-200">
                  Book Free Consultation
                </span>
                <ArrowRight className="ml-3 h-6 w-6 sm:h-8 sm:w-8 group-hover:translate-x-1 transition-transform duration-300 relative z-10 text-white/80 group-hover:text-white" />
              </a>
            </Button>
            <Button asChild className="group w-full sm:w-auto px-6 sm:px-10 py-4 sm:py-6 text-lg sm:text-xl font-extrabold rounded-xl sm:rounded-2xl shadow-md sm:shadow-xl border-2 border-transparent bg-slate-900/80 dark:bg-slate-800/80 backdrop-blur-md relative overflow-hidden focus:outline-none focus-visible:ring-4 focus-visible:ring-sky-400/60 transition-all duration-200 active:scale-95">
              <Link href="https://wa.me/+919204527554" target="_blank" rel="noopener noreferrer">
                <span className="relative z-10 bg-gradient-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent drop-shadow-lg">
                  Chat Now
                </span>
                <MessageCircle className="ml-3 h-5 w-5 sm:h-7 sm:w-7 group-hover:translate-x-1 transition-transform duration-300 relative z-10 text-sky-400" />
              </Link>
            </Button>
            

          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-10 sm:mt-16 px-2 sm:px-4 animate-fade-in delay-1200">
            {[
              { number: "150+", label: "Projects Delivered", delay: "delay-0" },
              { number: "50%+", label: "Avg. Revenue Growth", delay: "delay-200" },
              { number: "100%", label: "Client Satisfaction", delay: "delay-400" }
            ].map((stat, i) => (
              <div key={stat.label} className={`rounded-xl sm:rounded-2xl bg-white/80 dark:bg-slate-900/40 shadow-md p-3 sm:p-6 flex flex-col items-center justify-center ${stat.delay} animate-fade-in`}>
                <span className="text-xl sm:text-4xl font-bold text-emerald-600 dark:text-emerald-400 mb-1 sm:mb-2">
                  {stat.number}
                </span>
                <span className="text-gray-600 dark:text-gray-300 text-sm sm:text-lg font-medium text-center">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </section>
      
  </>
  );
}

export default Hero;
