import Link from 'next/link'
import { NAME, MOTTO } from '@/lib/constants'

export default function Home(){
  return (
    <section className="space-y-8">
      <div className="grid gap-6 md:grid-cols-2 items-center">
        <div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">{NAME}</h1>
          <p className="mt-4 text-xl text-gray-300">{MOTTO}</p>
          <div className="mt-6 flex gap-4">
            <Link href="/projects" className="px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-600 to-teal-500 text-white text-sm shadow-lg">View Projects</Link>
            <Link href="/contact" className="px-4 py-2 rounded-lg border border-gray-700 text-gray-200 text-sm">Contact</Link>
          </div>
        </div>
        <div className="p-6 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700">
          <div className="h-56 rounded-md bg-gray-800 flex items-center justify-center text-gray-500">Hero / Illustration Placeholder</div>
        </div>
      </div>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold">Quick Links</h2>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link href="/about" className="p-4 rounded-xl bg-gray-800 border border-gray-700">About</Link>
          <Link href="/resume" className="p-4 rounded-xl bg-gray-800 border border-gray-700">Resume</Link>
          <Link href="/testimonials" className="p-4 rounded-xl bg-gray-800 border border-gray-700">Testimonials</Link>
        </div>
      </section>
    </section>
  )
}
