import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, CalendarClock, Send } from 'lucide-react'
import SectionWrapper from '../common/SectionWrapper'
import Button from '../ui/Button'

export default function Contact() {
  return (
    <SectionWrapper id="contact">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-3 mb-12">
          <Mail className="text-blue-500 size-8" />
          <h2 className="text-3xl md:text-4xl font-bold">
            Let's Talk
          </h2>
          <span className="text-sm bg-red-100 text-red-800 px-2 py-1 rounded-full ml-2">
            I Don't Bite (Often)
          </span>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-lg mb-8"
            >
              Have a project in mind? Need a personal assistant? Want to brainstorm the next big thing?
              Or just want to say hi? I promise I'll respond (unless your email gets lost in spam).
            </motion.p>
            
            <motion.form
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="space-y-4"
            >
              <motion.div whileHover={{ scale: 1.01 }}>
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.01 }}>
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.01 }}>
                <textarea 
                  placeholder="Your Message" 
                  rows="4"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </motion.div>
              
              <motion.div 
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }}
                className="pt-2"
              >
                <Button type="submit" icon="send">
                  Send Message
                </Button>
              </motion.div>
            </motion.form>
          </div>
          
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white p-8 rounded-xl shadow-lg h-full"
            >
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <CalendarClock className="text-blue-500" /> Book a Chat
              </h3>
              
              <p className="mb-6">
                Want to pick my brain? Schedule a call. I'm available for:
              </p>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span>Frontend consulting</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span>Personal assistant gigs</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span>Ideation sessions</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span>General life advice (quality not guaranteed)</span>
                </li>
              </ul>
              
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-blue-50 p-6 rounded-lg border border-blue-200"
              >
                <div className="text-center">
                  <CalendarClock className="mx-auto size-10 text-blue-500 mb-4" />
                  <p className="font-medium mb-4">Pick a time that works for you</p>
                  <Button 
                    as="a" 
                    href="https://calendly.com/victor" 
                    target="_blank"
                    className="inline-flex"
                  >
                    Open Booking Widget
                  </Button>
                </div>
              </motion.div>
              
              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="text-blue-500 size-5" />
                  <span>victor@example.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="text-blue-500 size-5" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="text-blue-500 size-5" />
                  <span>Digital Nomad (Currently in Internet)</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}