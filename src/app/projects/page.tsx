'use client'

import { motion } from 'framer-motion'
import ProjectCard from '@/components/ProjectCard'
import { projects } from '@/data/projects'

export default function Projects() {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-orange-100 mb-4">
            Projects
          </h1>
          <p className="text-lg text-orange-50 max-w-2xl mx-auto">
            A collection of my personal projects, hackathon wins, and technical experiments.
          </p>
        </motion.div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={index} 
            />
          ))}
        </div>
      </div>
    </div>
  )
}
