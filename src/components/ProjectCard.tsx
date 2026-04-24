'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import { Project } from '@/data/projects'
import { formatMarkdownText } from '@/lib/utils'
import { GitHubIcon, DevpostIcon, YouTubeIcon, LinkIcon } from '@/components/SocialIcons'

interface ProjectCardProps {
  project: Project
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
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className={`relative overflow-hidden rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700 mb-8 group hover:border-gray-600 transition-all duration-300 ${colors.gradient} before:absolute before:inset-0 before:opacity-100 before:rounded-xl`}
    >
      <div className="relative z-10 p-6 md:p-8">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
          <div className="flex-1">
            <h2 className={`text-2xl md:text-3xl font-bold text-white mb-3 ${colors.hover} transition-colors`}>
              {project.title}
            </h2>
            
            {project.badges.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {project.badges.map((badge, badgeIndex) => {
                  const isCourse = badge.variant === 'course'
                  const baseClasses = 'px-2.5 py-0.5 rounded-full text-xs font-medium transition-colors'
                  const variantClasses = isCourse
                    ? 'bg-indigo-600 text-indigo-100 hover:bg-indigo-500'
                    : 'bg-yellow-600 text-yellow-100 hover:bg-yellow-500'
                  const className = `${baseClasses} ${variantClasses}`

                  return badge.url ? (
                    <a
                      key={badgeIndex}
                      href={badge.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={className}
                    >
                      {badge.text}
                    </a>
                  ) : (
                    <span key={badgeIndex} className={className}>
                      {badge.text}
                    </span>
                  )
                })}
              </div>
            )}
          </div>
          
          <div className="flex gap-5 text-orange-100 md:self-center">
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`${colors.hover} transition-colors`}
              >
                <GitHubIcon className="w-9 h-9" />
              </a>
            )}
            {project.links.devpost && (
              <a
                href={project.links.devpost}
                target="_blank"
                rel="noopener noreferrer"
                className={`${colors.hover} transition-colors`}
              >
                <DevpostIcon className="w-9 h-9" />
              </a>
            )}
            {project.links.youtube && (
              <a
                href={project.links.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className={`${colors.hover} transition-colors`}
              >
                <YouTubeIcon className="w-9 h-9" />
              </a>
            )}
            {project.links.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className={`${colors.hover} transition-colors`}
              >
                <LinkIcon className="w-9 h-9" />
              </a>
            )}
          </div>
        </div>

        {/* Image Carousel */}
        {project.images.length > 0 && (
          <div className="relative mb-6">
            <div className="relative h-64 md:h-80 bg-gray-900 rounded-lg overflow-hidden border border-gray-600 group/image">
              <Image
                src={project.images[currentImageIndex]}
                alt={`${project.title} - Image ${currentImageIndex + 1}`}
                fill
                className="object-contain p-4 group-hover/image:scale-105 transition-transform duration-300"
              />
              
              {project.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-gray-800/80 hover:bg-gray-700/90 text-white p-3 rounded-full transition-all duration-200 opacity-0 group-hover/image:opacity-100 hover:scale-110"
                  >
                    <ChevronLeftIcon className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-gray-800/80 hover:bg-gray-700/90 text-white p-3 rounded-full transition-all duration-200 opacity-0 group-hover/image:opacity-100 hover:scale-110"
                  >
                    <ChevronRightIcon className="w-5 h-5" />
                  </button>
                </>
              )}
              
              {/* Image counter overlay */}
              {project.images.length > 1 && (
                <div className="absolute top-3 right-3 bg-black/60 text-white px-3 py-1 rounded-full text-sm">
                  {currentImageIndex + 1} / {project.images.length}
                </div>
              )}
            </div>
            
            {project.images.length > 1 && (
              <div className="flex justify-center gap-2 mt-4">
                {project.images.map((_, imgIndex) => (
                  <button
                    key={imgIndex}
                    onClick={() => setCurrentImageIndex(imgIndex)}
                    className={`w-3 h-3 rounded-full transition-all duration-200 hover:scale-125 ${
                      imgIndex === currentImageIndex ? colors.bar + ' shadow-lg' : 'bg-gray-600 hover:bg-gray-500'
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

        <ul className="space-y-3 list-disc list-inside">
          {project.description.map((desc, descIndex) => (
            <li 
              key={descIndex}
              className="text-gray-200 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: formatMarkdownText(desc, colors.strong) }}
            />
          ))}
        </ul>
      </div>
    </motion.div>
  )
}
