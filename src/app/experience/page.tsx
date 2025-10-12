'use client'

import { motion } from 'framer-motion'
import ExperienceCard from '@/components/ExperienceCard'
import { experiences } from '@/data/experiences'

export default function Experience() {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="mt-4 mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-orange-100">
            Work Experience
          </h1>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <ExperienceCard 
              key={experience.id} 
              experience={experience} 
              index={index} 
            />
          ))}
        </div>
      </div>
    </div>
  )
}
