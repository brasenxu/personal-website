'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 w-full bg-gray-900/90 backdrop-blur-sm border-b border-gray-700 z-50"
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center space-x-3 text-3xl lg:text-4xl font-semibold text-orange-100 hover:text-blue-400 transition-colors">
            <Image src="/favicon.ico" alt="Logo" width={40} height={40} className="rounded" />
            <span>Brasen Xu</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-10">
            <Link href="/projects" className="text-orange-50 hover:text-blue-400 transition-colors text-xl font-medium px-4 py-2 rounded-lg hover:bg-gray-800/50">
              Projects
            </Link>
            <Link href="/experience" className="text-orange-50 hover:text-blue-400 transition-colors text-xl font-medium px-4 py-2 rounded-lg hover:bg-gray-800/50">
              Work Experience
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-orange-100 hover:text-blue-400 transition-colors p-2"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden pb-4"
          >
            <div className="flex flex-col space-y-3">
              <Link 
                href="/projects" 
                className="text-orange-50 hover:text-blue-400 transition-colors py-3 px-4 rounded-lg text-lg font-medium hover:bg-gray-800/50"
                onClick={() => setIsOpen(false)}
              >
                Projects
              </Link>
              <Link 
                href="/experience" 
                className="text-orange-50 hover:text-blue-400 transition-colors py-3 px-4 rounded-lg text-lg font-medium hover:bg-gray-800/50"
                onClick={() => setIsOpen(false)}
              >
                Work Experience
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}
