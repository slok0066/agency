"use client";
import Link from "next/link";
import { Mail, Linkedin, Twitter, Github, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-emerald-50 via-cyan-50 to-white dark:from-slate-950 dark:via-emerald-950/10 dark:to-slate-950 border-t border-gray-200 dark:border-gray-800 shadow-2xl backdrop-blur-xl">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold">
              <span className="bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 bg-clip-text text-transparent">
                ThinkBuild
              </span>
            </h3>
            <p className="mt-4 text-gray-500 dark:text-gray-400 max-w-md">
              Transforming businesses through innovative web and mobile development solutions. 
              Let's build the future together.
            </p>
            <div className="mt-4 flex gap-4">
              <a
                href="mailto:thinkbuild8@gmail.com"
                className="flex items-center text-gray-500 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded-lg"
                aria-label="Email ThinkBuild"
              >
                <Mail className="h-5 w-5 mr-2" />
                thinkbuild8@gmail.com
              </a>
              <a
                href="https://instagram.com/thinkbuild.tech"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-500 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded-lg"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5 mr-2" />
                Instagram
              </a>
            </div>
            <form className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md" onSubmit={e => { e.preventDefault(); }}>
              <input
                type="email"
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 shadow-sm"
                placeholder="Subscribe to our newsletter"
                aria-label="Email address"
              />
              <button
                type="submit"
                className="px-6 py-2 rounded-lg bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-semibold shadow-md hover:shadow-lg transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
              >
                Subscribe
              </button>
            </form>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white tracking-wider uppercase">Services</h4>
            <ul className="mt-4 space-y-2">
              <li><Link href="/services/web-development" className="text-base text-gray-500 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400">Web Development</Link></li>
              <li><Link href="/services/mobile-apps" className="text-base text-gray-500 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400">Mobile Apps</Link></li>
              <li><Link href="/services/custom-software" className="text-base text-gray-500 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400">Custom Software</Link></li>
              <li><Link href="/services/digital-transformation" className="text-base text-gray-500 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400">Digital Transformation</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white tracking-wider uppercase">Company</h4>
            <ul className="mt-4 space-y-2">
              <li><Link href="/about" className="text-base text-gray-500 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400">About Us</Link></li>
              <li><Link href="/services" className="text-base text-gray-500 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400">Our Services</Link></li>
              <li><Link href="/privacy-policy" className="text-base text-gray-500 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400">Privacy Policy</Link></li>
              <li><Link href="/contact" className="text-base text-gray-500 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400">Contact</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 border-t border-gray-200 dark:border-gray-800 pt-8 text-center">
          <p className="text-base text-gray-500 dark:text-gray-400">
            {new Date().getFullYear()} ThinkBuild. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
