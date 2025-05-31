import { useState } from 'react'
import { motion } from 'framer-motion'
import { Code2, ArrowRight } from 'lucide-react'
import SectionWrapper from '../common/SectionWrapper'
import ProjectCard from '../ui/ProjectCard'
import ProjectDetails from '../ui/ProjectDetails'
import projects from '../../data/projects'

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <SectionWrapper id="portfolio" className="bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-3 mb-12">
          <Code2 className="text-blue-500 size-8" />
          <h2 className="text-3xl md:text-4xl font-bold">
            My Projects
          </h2>
          <span className="text-sm bg-purple-100 text-purple-800 px-2 py-1 rounded-full ml-2">
            Click to Explore
          </span>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(project => (
            <ProjectCard 
              key={project.id}
              project={project}
              onViewDetails={setSelectedProject}
            />
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 text-center"
        >
          <a
            href="https://github.com/victor"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-600 font-medium"
          >
            View more projects on GitHub <ArrowRight className="size-5" />
          </a>
        </motion.div>
        
        <ProjectDetails 
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </SectionWrapper>
  )
}