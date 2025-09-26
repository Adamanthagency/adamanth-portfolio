import { NAME } from '@/lib/constants'

export default function About(){
  return (
    <section className="space-y-4">
      <h1 className="text-3xl font-semibold">About — {NAME}</h1>
      <p className="text-gray-300">
        I’m a web developer who’s unapologetically nerdy, playful, and curious about the strange beauty of the world. I love combining creativity with critical thinking, bringing ideas to life on the web.
      </p>
      <p className="text-gray-300">Skills include: HTML, CSS, JavaScript, React, Next.js, Tailwind CSS.</p>
    </section>
  )
}
