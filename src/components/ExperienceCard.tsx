'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Experience } from '@/data/experiences'
import { formatMarkdownText } from '@/lib/utils'

interface ExperienceCardProps {
  experience: Experience
  index: number
}

const colorVariants = {
  yellow: {
    gradient: 'before:bg-gradient-to-r before:from-yellow-500/10 before:to-transparent',
    bar: 'bg-yellow-500',
    accent: 'text-yellow-500',
    hover: 'hover:text-yellow-400'
  },
  green: {
    gradient: 'before:bg-gradient-to-r before:from-green-500/10 before:to-transparent', 
    bar: 'bg-green-500',
    accent: 'text-green-500',
    hover: 'hover:text-green-400'
  },
  blue: {
    gradient: 'before:bg-gradient-to-r before:from-blue-500/10 before:to-transparent',
    bar: 'bg-blue-500', 
    accent: 'text-blue-500',
    hover: 'hover:text-blue-400'
  },
  red: {
    gradient: 'before:bg-gradient-to-r before:from-red-500/10 before:to-transparent',
    bar: 'bg-red-500',
    accent: 'text-red-500', 
    hover: 'hover:text-red-400'
  }
}

export default function ExperienceCard({ experience, index }: ExperienceCardProps) {
  const colors = colorVariants[experience.color]
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`relative overflow-hidden rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700 mb-8 group hover:border-gray-600 transition-all duration-300 ${colors.gradient} before:absolute before:inset-0 before:opacity-100 before:rounded-xl`}
    >
      <div className="relative z-10 p-6 md:p-8">
        <div className="flex flex-col md:flex-row md:items-center gap-6 mb-6">
          <div className="flex-shrink-0 md:order-1">
            <div className="relative group/logo">
              <div className={`absolute inset-0 ${colors.bar.replace('bg-', 'bg-gradient-to-r from-')} to-transparent rounded-lg opacity-20 group-hover/logo:opacity-40 transition-opacity duration-300`}></div>
              <Image 
                src={experience.logo} 
                alt={`${experience.company} Logo`}
                width={100}
                height={100}
                className="relative object-contain rounded-lg bg-white/5 p-3 border border-gray-600 group-hover/logo:border-gray-500 transition-all duration-300"
              />
            </div>
          </div>
          
          <div className="flex-1 md:order-2">
            <div className="flex flex-col md:flex-row md:items-baseline md:gap-3 mb-3">
              <h2 className={`text-2xl md:text-3xl font-bold text-white ${colors.hover} transition-colors`}>
                {experience.title}
              </h2>
              <div className="flex items-center gap-2">
                <span className="text-gray-400">at</span>
                <a 
                  href={experience.companyUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`text-xl md:text-2xl font-semibold ${colors.accent} ${colors.hover} transition-colors hover:underline`}
                >
                  {experience.company}
                </a>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 text-gray-300">
              <p className="text-lg">
                <em>{experience.location}</em>
              </p>
              <span className="hidden sm:block text-gray-500">•</span>
              <p className="text-gray-400">
                <time dateTime={experience.startDate}>{experience.startDate}</time>
                {' - '}
                <time dateTime={experience.endDate}>{experience.endDate}</time>
              </p>
            </div>
          </div>
        </div>

        <motion.div 
          className={`w-1/3 h-1 rounded-full ${colors.bar} mb-6 group-hover:w-3/4 transition-all duration-300`}
        />

        <ul className="space-y-4">
          {experience.achievements.map((achievement, achievementIndex) => (
            <motion.li 
              key={achievementIndex}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 + achievementIndex * 0.1 }}
              className="text-gray-200 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: formatMarkdownText(achievement) }}
            />
          ))}
        </ul>
      </div>
    </motion.div>
  )
}
