"use client";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function DigitalTransformationPage() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-emerald-50 to-white py-8 px-2 sm:px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="max-w-2xl sm:max-w-3xl mx-auto bg-white/95 dark:bg-slate-900/90 rounded-3xl shadow-2xl p-4 sm:p-8 md:p-14 border border-gray-200 dark:border-white/10 animate-fade-in"
      >
        <div className="mb-4 flex items-center">
          <button
            onClick={() => router.back()}
            className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-gradient-to-r from-gray-100 to-blue-100 hover:from-blue-200 hover:to-emerald-100 text-blue-700 font-semibold shadow transition-all duration-200 group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
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
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-3 bg-gradient-to-r from-blue-600 via-emerald-600 to-cyan-600 bg-clip-text text-transparent"
        >
          Digital Transformation for Modern Enterprises
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-6"
        >
          We help businesses digitize operations with cutting-edge tools and cloud solutions.
        </motion.p>
        <motion.section
          className="mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-xl sm:text-2xl font-semibold text-blue-600 mb-2">
            🔄 What is Digital Transformation?
          </h2>
          <p className="text-gray-700 dark:text-gray-200 text-sm sm:text-base">Overview and benefits</p>
        </motion.section>
        <motion.section
          className="mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-xl sm:text-2xl font-semibold text-blue-600 mb-2">
            🛠️ Services
          </h2>
          <ul className="list-disc pl-5 text-gray-700 dark:text-gray-200 space-y-1 text-sm sm:text-base">
            <li>Workflow Automation (Zapier, n8n)</li>
            <li>Cloud Migration (AWS, GCP)</li>
            <li>System Integration (CRM, ERP)</li>
            <li>Data Dashboards & Insights</li>
          </ul>
        </motion.section>
        <motion.section
          className="mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <h2 className="text-xl sm:text-2xl font-semibold text-blue-600 mb-2">
            📊 Example of a transformation: Before vs After
          </h2>
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <img src="/images/logo.png" alt="Transformation Example" className="w-20 h-20 rounded-lg object-contain border border-emerald-200" />
            <span className="text-gray-600 dark:text-gray-300 text-sm">Before vs After transformation example here</span>
          </div>
        </motion.section>
        <motion.section
          className="mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <h2 className="text-xl sm:text-2xl font-semibold text-blue-600 mb-2">
            🏆 Benefits
          </h2>
          <ul className="list-disc pl-5 text-gray-700 dark:text-gray-200 space-y-1 text-sm sm:text-base">
            <li>Reduced manual effort</li>
            <li>Cost & time savings</li>
            <li>Real-time data access</li>
          </ul>
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
            className="inline-flex items-center gap-2 px-7 py-4 rounded-2xl bg-gradient-to-r from-blue-500 to-emerald-500 hover:from-blue-600 hover:to-emerald-600 text-white font-bold shadow-lg hover:shadow-xl transition-all duration-300 text-base sm:text-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
          >
            Request a Digital Audit
            <ArrowRight className="h-5 w-5" />
          </a>
        </motion.div>
      </motion.div>
    </main>
  );
}
