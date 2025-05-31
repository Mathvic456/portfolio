import { motion } from 'framer-motion'
import { Briefcase, Building2 } from 'lucide-react'
import SectionWrapper from '../common/SectionWrapper'
import experiences from '../../data/experiences'

export default function Experience() {
  return (
    <SectionWrapper id="experience">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-3 mb-12">
          <Briefcase className="text-blue-500 size-8" />
          <h2 className="text-3xl md:text-4xl font-bold">
            My Journey
          </h2>
          <span className="text-sm bg-purple-100 text-purple-800 px-2 py-1 rounded-full ml-2">
            Mostly Uphill
          </span>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 h-full w-0.5 bg-gray-200 -translate-x-1/2"></div>
          
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`mb-12 flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-start`}
            >
              <div className="hidden md:block md:w-1/2"></div>
              
              <div className="flex-1 md:px-8">
                <div className="bg-white p-6 rounded-xl shadow-lg relative">
                  <div className="absolute -left-2 md:left-auto md:-right-2 -top-2 bg-blue-500 text-white p-2 rounded-full">
                    <Building2 className="size-4" />
                  </div>
                  <h3 className="text-xl font-bold mb-1">{exp.role}</h3>
                  <p className="text-gray-600 mb-2">{exp.company} • {exp.duration}</p>
                  <p className="mb-3">{exp.description}</p>
                  <p className="text-sm text-gray-500 italic">
                    {exp.funnyNote}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}