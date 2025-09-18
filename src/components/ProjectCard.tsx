'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import { Project } from '@/data/projects'
import { formatMarkdownText } from '@/lib/utils'

interface ProjectCardProps {
  project: Project
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

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const colors = colorVariants[project.color]

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`relative overflow-hidden rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700 mb-8 group ${colors.gradient} before:absolute before:inset-0 before:opacity-100 before:rounded-xl`}
    >
      <div className="relative z-10 p-6 md:p-8">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6">
          <div className="flex-1">
            <h2 className={`text-2xl md:text-3xl font-bold text-white mb-4 ${colors.hover} transition-colors`}>
              {project.title}
            </h2>
            
            {project.badges.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {project.badges.map((badge, badgeIndex) => (
                  <a
                    key={badgeIndex}
                    href={badge.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-yellow-600 text-yellow-100 px-3 py-1 rounded-full text-sm font-medium hover:bg-yellow-500 transition-colors"
                  >
                    {badge.text}
                  </a>
                ))}
              </div>
            )}
          </div>
          
          <div className="flex gap-4 text-3xl text-orange-100">
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors"
              >
                <i className="si si-github"></i>
              </a>
            )}
            {project.links.devpost && (
              <a
                href={project.links.devpost}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors"
              >
                <i className="si si-devpost"></i>
              </a>
            )}
            {project.links.youtube && (
              <a
                href={project.links.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors"
              >
                <i className="si si-youtube"></i>
              </a>
            )}
            {project.links.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors"
              >
                <i className="si si-link"></i>
              </a>
            )}
          </div>
        </div>

        <motion.div 
          className={`w-1/3 h-1 rounded-full ${colors.bar} mb-6 group-hover:w-3/4 transition-all duration-300`}
        />

        {/* Image Carousel */}
        {project.images.length > 0 && (
          <div className="relative mb-6">
            <div className="relative aspect-video bg-gray-900 rounded-lg overflow-hidden">
              <Image
                src={project.images[currentImageIndex]}
                alt={`${project.title} - Image ${currentImageIndex + 1}`}
                fill
                className="object-contain"
              />
              
              {project.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                  >
                    <ChevronLeftIcon className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                  >
                    <ChevronRightIcon className="w-5 h-5" />
                  </button>
                </>
              )}
            </div>
            
            {project.images.length > 1 && (
              <div className="flex justify-center gap-2 mt-4">
                {project.images.map((_, imgIndex) => (
                  <button
                    key={imgIndex}
                    onClick={() => setCurrentImageIndex(imgIndex)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      imgIndex === currentImageIndex ? colors.bar : 'bg-gray-600'
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
        )}

        <motion.div 
          className={`w-1/3 h-1 rounded-full ${colors.bar} mb-6 group-hover:w-3/4 transition-all duration-300`}
        />

        <ul className="space-y-4">
          {project.description.map((desc, descIndex) => (
            <motion.li 
              key={descIndex}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 + descIndex * 0.1 }}
              className="text-gray-200 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: formatMarkdownText(desc) }}
            />
          ))}
        </ul>
      </div>
    </motion.div>
  )
}
