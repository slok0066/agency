"use client";

import Image from 'next/image';
import { Target, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const AboutPageClient = () => {
  return (
    <div className="bg-white ">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative pt-24 pb-16 text-center bg-gradient-to-b from-emerald-50/50 to-white  "
      >
        <div className="container mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-emerald-600 via-teal-500 to-cyan-600 bg-clip-text text-transparent"
          >
            We Build Digital Futures
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-gray-600 dark:text-gray-300"
          >
            At ThinkBuild, we are more than just developers; we are architects of innovation, crafting bespoke digital solutions that empower businesses to thrive in an ever-evolving landscape.
          </motion.p>
        </div>
      </motion.section>

      {/* Our Mission & Story Section */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold tracking-tight text-gray-900  flex items-center">
                <Target className="w-8 h-8 mr-3 text-emerald-500" />
                Our Mission
              </h2>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                To empower businesses with transformative technology, delivering exceptional quality and fostering long-term partnerships built on trust and innovation. We strive to make cutting-edge technology accessible and impactful for everyone.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold tracking-tight text-gray-900  flex items-center">
                <Heart className="w-8 h-8 mr-3 text-teal-500" />
                Our Story
              </h2>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                Founded by a group of passionate technologists, ThinkBuild was born from a shared vision: to create a company that values creativity, collaboration, and client success above all else. Our journey is one of continuous learning and adaptation.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="py-16 sm:py-24"
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 ">
            Ready to Build With Us?
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400">
            Let's turn your ideas into reality. Reach out to us today and let's start a conversation about your next big project.
          </p>
          <div className="mt-8">
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transform transition-all duration-300"
            >
              Contact Us
            </motion.a>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default AboutPageClient;
