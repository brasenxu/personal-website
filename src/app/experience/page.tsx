'use client'

import { motion } from 'framer-motion'
import ExperienceCard from '@/components/ExperienceCard'
import { experiences } from '@/data/experiences'

export default function Experience() {
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
            Work Experience
          </h1>
          <p className="text-lg text-orange-50 max-w-2xl mx-auto">
            My journey through different companies and the impactful projects I've worked on.
          </p>
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
