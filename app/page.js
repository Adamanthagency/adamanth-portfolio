'use client'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative flex flex-col-reverse md:flex-row items-center justify-between py-16 gap-10 md:gap-16 
      bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 overflow-hidden rounded-2xl shadow-xl">
      
      {/* Decorative background effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.15),_transparent_50%)] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.15),_transparent_50%)] pointer-events-none"></div>

      {/* Content wrapper */}
      <div className="relative z-10 flex flex-col-reverse md:flex-row items-center justify-between w-full px-6 md:px-12">
        
        {/* Left side: Text with animation */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center md:text-left space-y-6 md:flex-1"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-white">Adamanth</h1>
          <p className="text-gray-300 text-base sm:text-lg max-w-md mx-auto md:mx-0">
            Ideas into Code, Code into Impact
          </p>

          <div className="flex gap-4 justify-center md:justify-start">
            <a
              href="projects"
              className="px-6 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold shadow-md hover:opacity-90 transition"
            >
              View Projects
            </a>
            <a
              href="contact"
              className="px-6 py-2 rounded-lg border border-gray-500 text-gray-300 hover:bg-gray-700 transition"
            >
              Contact
            </a>
          </div>
        </motion.div>

        {/* Right side: Logo with animation */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
          className="flex justify-center md:justify-end md:flex-1 mb-10 md:mb-0"
        >
          <img
            src="/logo.png"
            alt="Adamanth Logo"
            className="w-40 sm:w-48 md:w-64 lg:w-80 h-auto drop-shadow-2xl hover:scale-105 transition-transform duration-300"
          />
        </motion.div>
      </div>
    </section>
  )
}
