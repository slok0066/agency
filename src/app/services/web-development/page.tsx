"use client";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function WebDevelopmentPage() {
  const router = useRouter();
  return (
    <main className="min-h-screen bg-gradient-to-br from-emerald-50 via-cyan-50 to-white py-4 px-2 flex flex-col items-center w-full">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="w-full max-w-3xl bg-white/95 rounded-3xl shadow-2xl p-8 border border-gray-200 animate-fade-in"
      >
        <div className="mb-4 flex items-center">
          <button
            onClick={() => router.back()}
            className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-gradient-to-r from-gray-100 to-emerald-100 hover:from-emerald-200 hover:to-cyan-100 text-emerald-700 font-semibold shadow transition-all duration-200 group focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
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
          className="text-5xl font-bold text-gray-900 mb-3 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent"
        >
          Custom Web Development That Converts
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-lg text-gray-600 mb-6"
        >
          Go beyond templates — we build custom websites and applications using
          React, Next.js, and other modern web frameworks.
        </motion.p>
        {/* Benefits Section */}
        <motion.section
          className="mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-2xl font-semibold text-emerald-600 mb-2">
            ✔️ Benefits of Custom Development
          </h2>
          <ul className="list-disc pl-5 text-gray-700 space-y-1 text-base">
            <li>Tailored to your brand and goals</li>
            <li>Better performance, SEO, and scalability</li>
            <li>Stand out from competitors</li>
          </ul>
        </motion.section>
        {/* Features Section */}
        <motion.section
          className="mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <h2 className="text-2xl font-semibold text-emerald-600 mb-2">
            ✔️ Detailed Features
          </h2>
          <ul className="list-disc pl-5 text-gray-700 space-y-1 text-base">
            <li>Responsive UI</li>
            <li>SEO Schema & Meta Tags</li>
            <li>Lighthouse Performance &gt;90</li>
            <li>Code Splitting & SSR (if Next.js)</li>
          </ul>
        </motion.section>
        {/* Process Section */}
        <motion.section
          className="mb-6"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <h2 className="text-2xl font-semibold text-emerald-600 mb-2">
            Our Process
          </h2>
          <ol className="list-decimal pl-5 text-gray-700 space-y-1 text-base">
            <li>
              <b>Discovery:</b> We learn about your goals, audience, and
              requirements.
            </li>
            <li>
              <b>Design:</b> Wireframes and UI/UX mockups are created for your
              review.
            </li>
            <li>
              <b>Development:</b> We build your site/app using modern frameworks.
            </li>
            <li>
              <b>Launch:</b> Your project goes live, fully tested and optimized.
            </li>
            <li>
              <b>Support:</b> Ongoing maintenance and improvements as needed.
            </li>
          </ol>
        </motion.section>
        {/* FAQ Section */}
        <motion.section
          className="mb-6"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <h2 className="text-2xl font-semibold text-emerald-600 mb-2">
            Frequently Asked Questions
          </h2>
          <div className="max-w-2xl mx-auto">
            <Accordion type="single" collapsible>
              <AccordionItem value="q1">
                <AccordionTrigger>
                  How long does a typical project take?
                </AccordionTrigger>
                <AccordionContent>
                  Most projects take 3-8 weeks depending on complexity and
                  requirements.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q2">
                <AccordionTrigger>What technologies do you use?</AccordionTrigger>
                <AccordionContent>
                  We use React, Next.js, Tailwind CSS, and other modern web tools.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q3">
                <AccordionTrigger>
                  How much does a custom website cost?
                </AccordionTrigger>
                <AccordionContent>
                  Pricing depends on features and scope. Contact us for a tailored
                  quote.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </motion.section>
        {/* CTA Section */}
        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <a
            href="https://koalendar.com/e/meet-with-thinkbuild"
            data-koalendar-widget
            data-koa-type="link"
            className="inline-flex items-center gap-2 px-7 py-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-bold shadow-lg hover:shadow-xl transition-all duration-300 text-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
          >
            Book a Free Consultation
            <ArrowRight className="h-5 w-5" />
          </a>
        </motion.div>
      </motion.div>
    </main>
  );
}
