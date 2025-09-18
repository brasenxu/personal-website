'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center px-4 pt-16">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-8xl font-bold text-orange-100 mb-4"
        >
          Brasen Xu
        </motion.h1>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-2xl md:text-4xl text-orange-50 mb-8"
        >
          UWaterloo Computer Science &apos;27
        </motion.h2>

        {/* Social Media Links */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex justify-center items-center gap-6 text-4xl md:text-5xl text-orange-100 mb-8"
        >
          <a 
            href="https://www.linkedin.com/in/brasenxu" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors duration-300"
          >
            <i className="si si-linkedin"></i>
          </a>
          <a 
            href="https://github.com/brasenxu" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors duration-300"
          >
            <i className="si si-github"></i>
          </a>
          <a 
            href="https://devpost.com/brasenxu" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors duration-300"
          >
            <i className="si si-devpost"></i>
          </a>
          <a 
            href="mailto:b8xu@uwaterloo.ca" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors duration-300"
          >
            <i className="si si-maildotru"></i>
          </a>
          
          <a 
            href="/BrasenXuResume.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-xl md:text-2xl inline-flex items-center gap-2 px-4 py-2 border-2 border-orange-100 rounded-lg hover:text-blue-400 hover:border-blue-400 transition-all duration-300"
          >
            <i className="si si-googledocs"></i> Resume
          </a>
        </motion.div>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-lg md:text-xl text-orange-50 mb-12 max-w-2xl mx-auto"
        >
          Hi! I post about my projects and work experiences on this site, feel free to take a look around!
        </motion.p>

        {/* Projects and Experience Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <Link 
            href="/projects" 
            className="text-xl md:text-2xl px-6 py-3 border-2 border-orange-100 rounded-lg text-orange-100 hover:text-blue-400 hover:border-blue-400 transition-all duration-300 min-w-[200px]"
          >
            Projects
          </Link>
          <Link 
            href="/experience" 
            className="text-xl md:text-2xl px-6 py-3 border-2 border-orange-100 rounded-lg text-orange-100 hover:text-blue-400 hover:border-blue-400 transition-all duration-300 min-w-[200px]"
          >
            Work Experience
          </Link>
        </motion.div>
      </motion.div>
    </div>
  )
}
