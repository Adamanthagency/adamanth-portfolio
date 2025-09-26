'use client'
import { motion } from 'framer-motion'

export default function ProjectCard({ title, description, image, github, demo }) {
  return (
    <motion.article
      whileHover={{ scale: 1.03 }}
      className="bg-gray-800 rounded-2xl shadow-lg overflow-hidden flex flex-col"
    >
      <img src={image} alt={title} className="h-48 w-full object-cover" />
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-300 flex-grow">{description}</p>
        <div className="mt-4 flex gap-4">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              GitHub
            </a>
          )}
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400 hover:underline"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.article>
  )
}
