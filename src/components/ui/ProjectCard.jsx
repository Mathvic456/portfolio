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
      className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200 hover:shadow-2xl transition-shadow duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-60 overflow-hidden group">
        {project.link ? (
          <iframe
            src={project.link}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            title={`Live preview of ${project.title}`}
            sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
            <span className="text-gray-500 font-medium">No live preview available</span>
          </div>
        )}
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-end p-6"
        >
          <div className="flex gap-3">
            {project.github && (
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/90 backdrop-blur-sm text-gray-900 px-4 py-2 rounded-lg flex items-center gap-2 text-sm font-medium shadow-sm hover:bg-white transition-all"
                aria-label="GitHub repository"
              >
                <Github className="size-4" /> Code
              </motion.a>
            )}
            {project.link && (
              <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 text-sm font-medium shadow-sm hover:bg-blue-700 transition-all"
                aria-label="Live project"
              >
                <ExternalLink className="size-4" /> Visit
              </motion.a>
            )}
          </div>
        </motion.div>
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
          <motion.button
            onClick={() => onViewDetails(project)}
            whileHover={{ x: 3 }}
            className="text-blue-600 hover:text-blue-800 flex items-center gap-1 text-sm font-medium"
          >
            Details <ArrowRight className="size-4" />
          </motion.button>
        </div>
        
        <p className="text-gray-600 mb-5 line-clamp-2">{project.description}</p>
        
        <div className="flex flex-wrap gap-2">
          {project.tags.map(tag => (
            <span 
              key={tag}
              className="text-xs bg-gray-100 text-gray-800 px-3 py-1 rounded-full font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}