'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { NAV, NAME } from '@/lib/constants'

export default function Navbar(){
  const path = usePathname()
  return (
    <nav className="w-full border-b border-gray-800 bg-transparent">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="font-semibold text-lg">{NAME}</Link>
        <div className="hidden md:flex gap-6 items-center">
          {NAV.map(item => (
            <motion.div key={item.href} whileHover={{ y: -3 }}>
              <Link href={item.href}
                className={`text-sm ${path === item.href ? 'text-white font-medium' : 'text-gray-300 hover:text-white'}`}>
                {item.name}
              </Link>
            </motion.div>
          ))}
        </div>
        <div className="md:hidden">
          <Link href="/contact" className="text-sm text-gray-300 hover:text-white">Contact</Link>
        </div>
      </div>
    </nav>
  )
}
