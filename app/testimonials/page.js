"use client"

import { motion } from "framer-motion"

export default function Page() {
  const testimonials = [
    {
      name: "Olivia Martinez",
      role: "Startup Founder",
      image: "https://i.pravatar.cc/100?img=47",
      text: "Adamanth built us a professional website that instantly gave our business more credibility. Communication was smooth and the results exceeded expectations."
    },
    {
      name: "James Walker",
      role: "Creative Director",
      image: "https://i.pravatar.cc/100?img=12",
      text: "Working with Adamanth was a game-changer. He understood exactly what I needed, delivered on time, and the site looks amazing."
    },
    {
      name: "Sophia Adeyemi",
      role: "Entrepreneur",
      image: "https://i.pravatar.cc/100?img=5",
      text: "Fast, reliable, and highly skilled. If you need someone who actually listens and delivers quality, Adamanth is the person."
    }
  ]

  return (
    <section className="py-16">
      <h1 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
        Testimonials
      </h1>
      <p className="text-center text-gray-400 max-w-xl mx-auto">
        What clients are saying about working with me:
      </p>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="p-6 rounded-2xl bg-gray-800/60 border border-gray-700 backdrop-blur-sm shadow-md hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-4">
              <img
                src={t.image}
                alt={t.name}
                className="w-12 h-12 rounded-full border border-gray-600 object-cover"
              />
              <div>
                <h3 className="text-lg font-semibold text-white">{t.name}</h3>
                <p className="text-sm text-gray-400">{t.role}</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed italic">
              “{t.text}”
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
