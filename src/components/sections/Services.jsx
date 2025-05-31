import { motion } from 'framer-motion'
import { Code, Wand2, ClipboardList, MessageSquare } from 'lucide-react'
import SectionWrapper from '../common/SectionWrapper'
import services from '../../data/services'

export default function Services() {
  return (
    <SectionWrapper id="services" className="bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-3 mb-12">
          <Wand2 className="text-blue-500 size-8" />
          <h2 className="text-3xl md:text-4xl font-bold">
            What I Do
          </h2>
          <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded-full ml-2">
            Mostly Legal
          </span>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-blue-500"
            >
              <div className="text-blue-500 mb-4">
                {service.icon === 'code' && <Code className="size-8" />}
                {service.icon === 'wand' && <Wand2 className="size-8" />}
                {service.icon === 'clipboard' && <ClipboardList className="size-8" />}
                {service.icon === 'message' && <MessageSquare className="size-8" />}
              </div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <p className="text-sm text-gray-500 italic">
                {service.disclaimer}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}