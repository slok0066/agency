"use client";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function CustomSoftwarePage() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-white py-8 px-2 sm:px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="max-w-2xl sm:max-w-3xl mx-auto bg-white/95 dark:bg-slate-900/90 rounded-3xl shadow-2xl p-4 sm:p-8 md:p-14 border border-gray-200 dark:border-white/10 animate-fade-in"
      >
        <div className="mb-4 flex items-center">
          <button
            onClick={() => router.back()}
            className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-gradient-to-r from-gray-100 to-blue-100 hover:from-blue-200 hover:to-cyan-100 text-cyan-700 font-semibold shadow transition-all duration-200 group focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
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
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-3 bg-gradient-to-r from-cyan-600 via-blue-600 to-emerald-600 bg-clip-text text-transparent"
        >
          Software Built for Your Workflow
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-6"
        >
          We build software that adapts to your business, not the other way around.
        </motion.p>
        <motion.section
          className="mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-xl sm:text-2xl font-semibold text-cyan-600 mb-2">
            🧩 What is Custom Software?
          </h2>
          <p className="text-gray-700 dark:text-gray-200 text-sm sm:text-base">
            Custom vs off-the-shelf solutions
          </p>
        </motion.section>
        <motion.section
          className="mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-xl sm:text-2xl font-semibold text-cyan-600 mb-2">
            ⚙️ Features We Offer
          </h2>
          <ul className="list-disc pl-5 text-gray-700 dark:text-gray-200 space-y-1 text-sm sm:text-base">
            <li>Backend/API Development (Node.js, Django, etc.)</li>
            <li>Secure Database Design (MongoDB, PostgreSQL)</li>
            <li>Admin Panels & Dashboards</li>
            <li>SaaS product examples</li>
          </ul>
        </motion.section>
        <motion.section
          className="mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <h2 className="text-xl sm:text-2xl font-semibold text-cyan-600 mb-2">
            ☁️ Hosting & Maintenance
          </h2>
          <ul className="list-disc pl-5 text-gray-700 dark:text-gray-200 space-y-1 text-sm sm:text-base">
            <li>AWS</li>
            <li>Vercel</li>
            <li>Firebase</li>
          </ul>
        </motion.section>
        <motion.section
          className="mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <h2 className="text-xl sm:text-2xl font-semibold text-cyan-600 mb-2">
            💼 Real Examples or Use Case Scenarios
          </h2>
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <img
              src="/images/logo.png"
              alt="Use Case"
              className="w-20 h-20 rounded-lg object-contain border border-blue-200"
            />
            <span className="text-gray-600 dark:text-gray-300 text-sm">
              Use case scenario or SaaS example here
            </span>
          </div>
        </motion.section>
        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <a
            href="https://koalendar.com/e/meet-with-thinkbuild"
            data-koalendar-widget
            data-koa-type="link"
            className="inline-flex items-center gap-2 px-7 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold shadow-lg hover:shadow-xl transition-all duration-300 text-base sm:text-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
          >
            Let's Talk About Your Project
            <ArrowRight className="h-5 w-5" />
          </a>
        </motion.div>
      </motion.div>
    </main>
  );
}
