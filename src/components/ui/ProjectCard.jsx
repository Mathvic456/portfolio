import { motion } from 'framer-motion'
import { Github, ExternalLink, ArrowRight } from 'lucide-react'
import { useState } from 'react'

export default function ProjectCard({ project, onViewDetails }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-48 overflow-hidden">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          animate={{
            scale: isHovered ? 1.05 : 1,
          }}
          transition={{ duration: 0.3 }}
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          className="absolute inset-0 bg-black/50 flex items-center justify-center gap-4"
        >
          {project.github && (
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-white p-2 rounded-full text-gray-800"
              aria-label="GitHub repository"
            >
              <Github className="size-5" />
            </motion.a>
          )}
          {project.link && (
            <motion.a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-white p-2 rounded-full text-gray-800"
              aria-label="Live project"
            >
              <ExternalLink className="size-5" />
            </motion.a>
          )}
        </motion.div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map(tag => (
            <span 
              key={tag}
              className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <motion.button
          onClick={() => onViewDetails(project)}
          whileHover={{ x: 5 }}
          className="flex items-center gap-1 text-blue-500 font-medium"
        >
          View Details <ArrowRight className="size-4" />
        </motion.button>
      </div>
    </motion.div>
  )
}