'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { LinkedInIcon, GitHubIcon, DevpostIcon, EmailIcon, DocumentIcon } from '@/components/SocialIcons'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center px-4 pt-16">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <motion.h1 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="text-6xl md:text-8xl font-bold text-orange-100 mb-4"
        >
          Brasen Xu
        </motion.h1>
        
        <motion.h2 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="text-2xl md:text-4xl text-orange-50 mb-8"
        >
          UWaterloo Computer Science &apos;27
        </motion.h2>

        {/* Social Media Links */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="flex justify-center items-center gap-6 text-orange-100 mb-8"
        >
          <a 
            href="https://www.linkedin.com/in/brasenxu" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Visit Brasen Xu's LinkedIn profile"
            className="hover:text-blue-400 transition-colors duration-300"
          >
            <LinkedInIcon className="w-10 h-10 md:w-12 md:h-12" />
          </a>
          <a 
            href="https://github.com/brasenxu" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Visit Brasen Xu's GitHub profile"
            className="hover:text-blue-400 transition-colors duration-300"
          >
            <GitHubIcon className="w-10 h-10 md:w-12 md:h-12" />
          </a>
          <a 
            href="https://devpost.com/brasenxu" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Visit Brasen Xu's Devpost profile"
            className="hover:text-blue-400 transition-colors duration-300"
          >
            <DevpostIcon className="w-10 h-10 md:w-12 md:h-12" />
          </a>
          <a 
            href="mailto:b8xu@uwaterloo.ca" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Send email to b8xu@uwaterloo.ca"
            className="hover:text-blue-400 transition-colors duration-300"
          >
            <EmailIcon className="w-10 h-10 md:w-12 md:h-12" />
          </a>
          
          <a 
            href="/BrasenXuResume.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Download Brasen Xu's Resume PDF"
            className="text-xl md:text-2xl inline-flex items-center gap-2 px-4 py-2 border-2 border-orange-100 rounded-lg hover:text-blue-400 hover:border-blue-400 transition-all duration-300"
          >
            <DocumentIcon className="w-6 h-6" /> Resume
          </a>
        </motion.div>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="text-lg md:text-xl text-orange-50 mb-12 max-w-2xl mx-auto"
        >
          Hi! I post about my projects and work experiences on this site, feel free to take a look around!
        </motion.p>

        {/* Projects and Experience Buttons */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.5 }}
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
