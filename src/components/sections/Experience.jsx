import { motion } from 'framer-motion'
import { Briefcase, Building2, Code, Rocket, School, BookOpen, Coffee } from 'lucide-react'
import SectionWrapper from '../common/SectionWrapper'
import { useState } from 'react'

export default function Experience() {
  const [showTechJourney, setShowTechJourney] = useState(false)

  // Funny journey data - your real story with humorous twists
  const funnyExperiences = [
    {
      id: 1,
      role: "Professional Code Magician",
      company: "The RootHub",
      duration: "The Enlightenment Era",
      description: "Where I discovered that semicolons are like relationships - sometimes optional but often necessary to avoid catastrophic errors.",
      funnyNote: "Also learned that 'Hello World' is the only phrase programmers can reliably make appear on screen."
    },
    {
      id: 2,
      role: "Self-Taught Debugger",
      company: "Google University",
      duration: "The Dark Ages (Pre-RootHub)",
      description: "Mastered the ancient art of copy-pasting from Stack Overflow while pretending I knew what I was doing.",
      funnyNote: "Developed a sixth sense for when the problem would be fixed by just restarting the computer."
    },
    {
      id: 3,
      role: "CS Enthusiast",
      company: "Secondary School",
      duration: "The Primordial Soup Days",
      description: "Fell in love with computers after realizing they don't talk back (unless you count error messages).",
      funnyNote: "First program was a calculator that could only add. We all start somewhere!"
    },
    {
      id: 4,
      role: "Actual Human Developer",
      company: "Real World",
      duration: "Present Day",
      description: "Now building things that sometimes work on the first try (but usually the 47th).",
      funnyNote: "Current project: An app that reminds me to stop coding and eat lunch."
    }
  ]

  // Actual tech journey data
  const techJourney = [
    {
      id: 1,
      role: "Frontend Developer",
      company: "Freelance & Personal Projects",
      duration: "2022 - Present",
      description: "Building responsive web applications with React, Next.js, and modern frameworks. Currently specializing in creating intuitive user interfaces.",
      skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Framer Motion"]
    },
    {
      id: 2,
      role: "Web Development Training",
      company: "The RootHub",
      duration: "2021 - 2022",
      description: "Completed intensive training program covering full-stack development fundamentals and modern web technologies.",
      skills: ["JavaScript", "Node.js", "Express", "MongoDB", "Git"]
    },
    {
      id: 3,
      role: "Self-Taught Programmer",
      company: "Independent Learning",
      duration: "2019 - 2021",
      description: "Built foundational knowledge through online courses, tutorials, and personal projects.",
      skills: ["HTML/CSS", "JavaScript", "Python", "Problem Solving"]
    },
    {
      id: 4,
      role: "Computer Science Interest",
      company: "Secondary School",
      duration: "2014 - 2019",
      description: "Developed initial passion for technology and programming through school curriculum and extracurricular exploration.",
      skills: ["Logical Thinking", "Algorithms", "Basic Programming"]
    }
  ]

  return (
    <SectionWrapper id="experience">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-12">
          <div className="flex items-center gap-3">
            <Briefcase className="text-blue-500 size-8" />
            <h2 className="text-3xl md:text-4xl font-bold">
              My Journey
            </h2>
            <span className="text-sm bg-purple-100 text-purple-800 px-2 py-1 rounded-full ml-2">
              {showTechJourney ? "Tech Evolution" : "Mostly Uphill"}
            </span>
          </div>
          
          <div className="flex gap-2 bg-gray-100 p-1 rounded-lg">
            <motion.button
              onClick={() => setShowTechJourney(false)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                !showTechJourney
                  ? 'bg-white text-blue-600 shadow-sm'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
              aria-pressed={!showTechJourney}
            >
              <div className="flex items-center gap-2">
                <Coffee className="size-4" />
                <span>Funny Version</span>
              </div>
            </motion.button>
            
            <motion.button
              onClick={() => setShowTechJourney(true)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                showTechJourney
                  ? 'bg-white text-green-600 shadow-sm'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
              aria-pressed={showTechJourney}
            >
              <div className="flex items-center gap-2">
                <Code className="size-4" />
                <span>Tech Journey</span>
              </div>
            </motion.button>
          </div>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 h-full w-0.5 bg-gray-200 -translate-x-1/2"></div>
          
          {(showTechJourney ? techJourney : funnyExperiences).map((exp, index) => (
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
                  <div className={`absolute -left-2 md:left-auto md:-right-2 -top-2 ${showTechJourney ? 'bg-green-500' : 'bg-blue-500'} text-white p-2 rounded-full`}>
                    {showTechJourney ? (
                      <Code className="size-4" />
                    ) : index === 0 ? (
                      <School className="size-4" />
                    ) : index === 1 ? (
                      <BookOpen className="size-4" />
                    ) : (
                      <Rocket className="size-4" />
                    )}
                  </div>
                  <h3 className="text-xl font-bold mb-1">{exp.role}</h3>
                  <p className="text-gray-600 mb-2">{exp.company} • {exp.duration}</p>
                  <p className="mb-3">{exp.description}</p>
                  
                  {showTechJourney ? (
                    <div className="mt-4">
                      <h4 className="text-sm font-medium text-gray-700 mb-2">Key Skills:</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map(skill => (
                          <span key={skill} className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <p className="text-sm text-gray-500 italic">
                      {exp.funnyNote}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}