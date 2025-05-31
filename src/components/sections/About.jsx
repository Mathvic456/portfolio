import { motion } from 'framer-motion'
import { User, Lightbulb, Code } from 'lucide-react'
import SectionWrapper from '../common/SectionWrapper'
import skills from '../../data/skills'

export default function About() {
  return (
    <SectionWrapper id="about" className="bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-3 mb-12">
            <User className="text-blue-500 size-8" />
            <h2 className="text-3xl md:text-4xl font-bold">
              About Me
            </h2>
            <span className="text-sm bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full ml-2">
              Not a Robot (Probably)
            </span>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white p-8 rounded-xl shadow-lg font-bold" 
              >
                <p className="text-lg mb-4">
                  I'm Victor Victor Matthew (yes, my parents really liked the name Victor or my dad just felt lazy lol). 
                  I build things for the web that don't make people cry (unless they're tears of joy).
                </p>
                <p className="text-lg mb-4">
                  When I'm not coding, I'm probably coming up with business ideas that range from 
                  "genius" to "why would anyone need this?"
                </p>
                <p className="text-lg">
                  My superpower? Making complex things simple and simple things unnecessarily complex 
                  (just kidding... mostly).
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-4"
              >
                <div className="bg-white p-4 rounded-lg shadow-sm flex items-center gap-3">
                  <Code className="text-blue-500 size-6" />
                  <div>
                    <p className="font-bold">100+</p>
                    <p className="text-sm text-gray-500">Projects</p>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm flex items-center gap-3">
                  <Lightbulb className="text-yellow-500 size-6" />
                  <div>
                    <p className="font-bold">∞</p>
                    <p className="text-sm text-gray-500">Ideas</p>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm flex items-center gap-3">
                  <User className="text-purple-500 size-6" />
                  <div>
                    <p className="font-bold">5+</p>
                    <p className="text-sm text-gray-500">Years Exp</p>
                  </div>
                </div>
              </motion.div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                My Skills
                <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                  Constantly Evolving
                </span>
              </h3>
              
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white p-4 rounded-lg shadow-sm"
                  >
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className={`h-2 rounded-full ${skill.color}`}
                      />
                    </div>
                    <p className="text-sm text-gray-500 mt-2 italic">
                      {skill.funnyComment}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}