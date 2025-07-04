"use client";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function MobileAppsPage() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-gradient-to-br from-cyan-50 via-emerald-50 to-white py-8 px-2 sm:px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="max-w-2xl sm:max-w-3xl mx-auto bg-white/95 dark:bg-slate-900/90 rounded-3xl shadow-2xl p-4 sm:p-8 md:p-14 border border-gray-200 dark:border-white/10 animate-fade-in"
      >
        <div className="mb-4 flex items-center">
          <button
            onClick={() => router.back()}
            className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-gradient-to-r from-gray-100 to-cyan-100 hover:from-cyan-200 hover:to-emerald-100 text-teal-700 font-semibold shadow transition-all duration-200 group focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
          >
            <svg
              className="h-5 w-5 group-hover:-translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <span className="hidden xs:inline">Back</span>
          </button>
        </div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-3 bg-gradient-to-r from-teal-600 via-cyan-600 to-emerald-600 bg-clip-text text-transparent"
        >
          Scalable Mobile Apps for iOS & Android
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-6"
        >
          Whether it's React Native or native development, we build intuitive
          mobile apps with powerful performance and minimal bugs.
        </motion.p>
        <motion.section
          className="mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-xl sm:text-2xl font-semibold text-teal-600 mb-2">
            💡 Platforms We Support
          </h2>
          <ul className="list-disc pl-5 text-gray-700 dark:text-gray-200 space-y-1 text-sm sm:text-base">
            <li>Android</li>
            <li>iOS</li>
            <li>Cross-platform</li>
          </ul>
        </motion.section>
        <motion.section
          className="mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <h2 className="text-xl sm:text-2xl font-semibold text-teal-600 mb-2">
            🔧 Technologies
          </h2>
          <ul className="list-disc pl-5 text-gray-700 dark:text-gray-200 space-y-1 text-sm sm:text-base">
            <li>React Native</li>
            <li>Kotlin</li>
            <li>Swift</li>
          </ul>
        </motion.section>
        <motion.section
          className="mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <h2 className="text-xl sm:text-2xl font-semibold text-teal-600 mb-2">
            🚀 Features
          </h2>
          <ul className="list-disc pl-5 text-gray-700 dark:text-gray-200 space-y-1 text-sm sm:text-base">
            <li>Push Notifications</li>
            <li>Offline Support</li>
            <li>App Store Optimization</li>
          </ul>
        </motion.section>
        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <a
            href="https://koalendar.com/e/meet-with-thinkbuild"
            data-koalendar-widget
            data-koa-type="link"
            className="inline-flex items-center gap-2 px-7 py-4 rounded-2xl bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white font-bold shadow-lg hover:shadow-xl transition-all duration-300 text-base sm:text-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
          >
            Schedule a Demo
            <ArrowRight className="h-5 w-5" />
          </a>
        </motion.div>
      </motion.div>
    </main>
  );
}
