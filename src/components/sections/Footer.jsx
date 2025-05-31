import { motion } from 'framer-motion'
import { Heart, Coffee, Github, Linkedin, Twitter, Mail } from 'lucide-react'
import { Link } from 'react-router-dom'

const footerLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Services', href: '#services' },
  { name: 'Contact', href: '#contact' },
]

const socialLinks = [
  { name: 'GitHub', url: 'https://github.com/victor', icon: Github },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/victor', icon: Linkedin },
  { name: 'Twitter', url: 'https://twitter.com/victor', icon: Twitter },
  { name: 'Email', url: 'mailto:victor@example.com', icon: Mail },
]

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                Victor Victor Matthew
                <span className="text-yellow-400 animate-pulse">✦</span>
              </h3>
              <p className="text-gray-400">
                Making the web more interesting one component at a time.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {footerLinks.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.href} 
                      className="text-gray-400 hover:text-white transition"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Connect</h4>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <motion.div
                    key={social.name}
                    whileHover={{ y: -5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <a 
                      href={social.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition"
                      aria-label={social.name}
                    >
                      <social.icon className="size-6" />
                    </a>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Legal Stuff</h4>
              <p className="text-gray-400 text-sm mb-2">
                © {new Date().getFullYear()} Victor Victor Matthew
              </p>
              <p className="text-gray-400 text-sm italic">
                No developers were harmed in the making of this portfolio.
              </p>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-500 text-sm flex items-center justify-center gap-1">
              Made with <Heart className="text-red-500 size-4" />, 
              <Coffee className="text-yellow-600 size-4" />, 
              and questionable life choices
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}