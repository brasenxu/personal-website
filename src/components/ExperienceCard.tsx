'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Experience } from '@/data/experiences'

interface ExperienceCardProps {
  experience: Experience
  index: number
}

const colorVariants = {
  yellow: {
    gradient: 'before:bg-gradient-to-r before:from-yellow-500/10 before:to-transparent',
    bar: 'bg-yellow-500',
    accent: 'text-yellow-500',
    hover: 'hover:text-yellow-400',
    strong: 'text-yellow-400'
  },
  green: {
    gradient: 'before:bg-gradient-to-r before:from-green-500/10 before:to-transparent', 
    bar: 'bg-green-500',
    accent: 'text-green-500',
    hover: 'hover:text-green-400',
    strong: 'text-green-400'
  },
  blue: {
    gradient: 'before:bg-gradient-to-r before:from-blue-500/10 before:to-transparent',
    bar: 'bg-blue-500', 
    accent: 'text-blue-500',
    hover: 'hover:text-blue-400',
    strong: 'text-blue-400'
  },
  red: {
    gradient: 'before:bg-gradient-to-r before:from-red-500/10 before:to-transparent',
    bar: 'bg-red-500',
    accent: 'text-red-500',
    hover: 'hover:text-red-400',
    strong: 'text-red-400'
  },
  purple: {
    gradient: 'before:bg-gradient-to-r before:from-purple-500/10 before:to-transparent',
    bar: 'bg-purple-500',
    accent: 'text-purple-500',
    hover: 'hover:text-purple-400',
    strong: 'text-purple-400'
  },
  orange: {
    gradient: 'before:bg-gradient-to-r before:from-orange-500/10 before:to-transparent',
    bar: 'bg-orange-500',
    accent: 'text-orange-500',
    hover: 'hover:text-orange-400',
    strong: 'text-orange-400'
  }
}

export default function ExperienceCard({ experience, index }: ExperienceCardProps) {
  const colors = colorVariants[experience.color]
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className={`relative overflow-hidden rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700 mb-8 group hover:border-gray-600 transition-all duration-300 ${colors.gradient} before:absolute before:inset-0 before:opacity-100 before:rounded-xl`}
    >
      <div className="relative z-10 p-6 md:p-8">
        <div className="mb-6">
          <div className="flex flex-wrap items-baseline gap-2 mb-4">
            <h2 className={`text-2xl md:text-3xl font-bold text-white ${colors.hover} transition-colors`}>
              {experience.title}
            </h2>
            <span className="text-xl md:text-2xl text-gray-400">at</span>
            <a 
              href={experience.companyUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className={`text-2xl md:text-3xl font-bold ${colors.accent} ${colors.hover} transition-colors hover:underline`}
            >
              {experience.company}
            </a>
          </div>
          
          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 text-gray-300">
            <p className="text-base md:text-lg">
              <em>{experience.location}</em>
            </p>
            <span className="hidden sm:block text-gray-500">•</span>
            <p className="text-base md:text-lg text-gray-400">
              <time dateTime={experience.startDate}>{experience.startDate}</time>
              {' - '}
              <time dateTime={experience.endDate}>{experience.endDate}</time>
            </p>
          </div>
        </div>

        <motion.div 
          className={`w-1/3 h-1 rounded-full ${colors.bar} mb-6 group-hover:w-3/4 transition-all duration-300`}
        />

        <div className="flex justify-center items-center relative h-32">
          <Image
            src={experience.logo}
            alt={`${experience.company} logo`}
            width={384}
            height={128}
            className="object-contain"
            priority={index < 2}
          />
        </div>
      </div>
    </motion.div>
  )
}
