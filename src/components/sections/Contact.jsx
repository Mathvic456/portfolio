import { motion, AnimatePresence } from 'framer-motion'
import { Mail, Phone, MapPin, CalendarClock, Send, X, Loader2, Check, AlertCircle } from 'lucide-react'
import { useState } from 'react'
import SectionWrapper from '../common/SectionWrapper'
import Button from '../ui/Button'
import { useForm, ValidationError } from '@formspree/react'

const navItems = [
  { name: 'Home', path: '#hero' },
  { name: 'About', path: '#about' },
  { name: 'Experience', path: '#experience' },
  { name: 'Services', path: '#services' },
  { name: 'Contact', path: '#contact' },
  { name: 'Projects', path: '#portfolio' },
]

export default function COntact() {
  const [isOpen, setIsOpen] = useState(false)
  const [showSuccessModal, setShowSuccessModal] = useState(false)
  const [showErrorModal, setShowErrorModal] = useState(false)
  const [showBookingModal, setShowBookingModal] = useState(false)
  const [selectedDate, setSelectedDate] = useState(null)
  const [selectedTime, setSelectedTime] = useState(null)

  // Formspree integration for contact form
  const [contactState, contactHandleSubmit] = useForm('https://formspree.io/f/myzwrlqg')

  // Formspree integration for booking form
  const [bookingState, bookingHandleSubmit] = useForm('https://formspree.io/f/myzwrlqg')

  // Sample available dates and times
  const availableDates = [
    { date: '2023-06-05', day: 'Monday, June 5', times: ['10:00 AM', '2:00 PM', '4:00 PM'] },
    { date: '2023-06-06', day: 'Tuesday, June 6', times: ['9:00 AM', '1:00 PM', '3:30 PM'] },
    { date: '2023-06-07', day: 'Wednesday, June 7', times: ['11:00 AM', '2:30 PM', '5:00 PM'] },
  ]

  const handleBookingSubmit = (e) => {
    e.preventDefault()
    if (!selectedDate || !selectedTime) return
    
    // Create hidden inputs for date and time
    const dateInput = document.createElement('input')
    dateInput.type = 'hidden'
    dateInput.name = 'date'
    dateInput.value = selectedDate
    
    const timeInput = document.createElement('input')
    timeInput.type = 'hidden'
    timeInput.name = 'time'
    timeInput.value = selectedTime
    
    e.target.appendChild(dateInput)
    e.target.appendChild(timeInput)
    
    // Submit to Formspree
    bookingHandleSubmit(e)
  }

  const handleNavClick = (path) => {
    if (path.startsWith('#')) {
      setIsOpen(false)
      const targetId = path.substring(1)
      const targetElement = document.getElementById(targetId)
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth'
        })
      }
    }
  }

  // Handle Formspree submission states
  if (contactState.succeeded && !showSuccessModal) {
    setShowSuccessModal(true)
  } else if (contactState.errors && !showErrorModal) {
    setShowErrorModal(true)
  }

  if (bookingState.succeeded && !showSuccessModal) {
    setShowBookingModal(false)
    setShowSuccessModal(true)
    setSelectedDate(null)
    setSelectedTime(null)
  } else if (bookingState.errors && !showErrorModal) {
    setShowErrorModal(true)
  }

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
          {/* Contact Form */}
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
            
            <form 
              onSubmit={contactHandleSubmit}
              className="space-y-4"
            >
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                whileHover={{ scale: 1.01 }}
              >
                <input 
                  type="text" 
                  name="name"
                  id="name"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <ValidationError 
                  prefix="Name" 
                  field="name"
                  errors={contactState.errors}
                  className="text-red-500 text-sm"
                />
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                whileHover={{ scale: 1.01 }}
              >
                <input 
                  type="email" 
                  name="email"
                  id="email"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <ValidationError 
                  prefix="Email" 
                  field="email"
                  errors={contactState.errors}
                  className="text-red-500 text-sm"
                />
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                whileHover={{ scale: 1.01 }}
              >
                <textarea 
                  name="message"
                  id="message"
                  placeholder="Your Message" 
                  rows="4"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <ValidationError 
                  prefix="Message" 
                  field="message"
                  errors={contactState.errors}
                  className="text-red-500 text-sm"
                />
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }}
                className="pt-2"
              >
                <Button 
                  type="submit" 
                  disabled={contactState.submitting}
                  className="flex items-center justify-center gap-2 w-full"
                >
                  {contactState.submitting ? (
                    <>
                      <Loader2 className="size-4 animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="size-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </Button>
              </motion.div>
            </form>
          </div>
          
          {/* Booking Section */}
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
                    onClick={() => setShowBookingModal(true)}
                    className="inline-flex items-center justify-center gap-2 w-full"
                  >
                    <CalendarClock className="size-4" />
                    <span>Open Booking Widget</span>
                  </Button>
                </div>
              </motion.div>
              
              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="text-blue-500 size-5" />
                  <span>Vmatthew727@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="text-blue-500 size-5" />
                  <span>+234 7062391997</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="text-blue-500 size-5" />
                  <span>I can be anywhere you need me to be, even in your dreams.</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      <AnimatePresence>
        {showSuccessModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            onClick={() => setShowSuccessModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              className="bg-white rounded-xl max-w-md w-full p-6 relative text-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowSuccessModal(false)}
                className="absolute top-4 right-4 p-1 rounded-full hover:bg-gray-100"
              >
                <X className="size-5" />
              </button>

              <div className="mx-auto size-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Check className="size-8 text-green-500" />
              </div>
              
              <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
              <p className="text-gray-600 mb-6">
                Thanks for reaching out! I'll get back to you soon.
                <br />
                (Unless my cat deletes your email)
              </p>
              
              <Button 
                onClick={() => setShowSuccessModal(false)}
                className="flex items-center justify-center gap-2 mx-auto"
              >
                <Check className="size-4" />
                <span>Awesome, thanks!</span>
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Error Modal */}
      <AnimatePresence>
        {showErrorModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            onClick={() => setShowErrorModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              className="bg-white rounded-xl max-w-md w-full p-6 relative text-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowErrorModal(false)}
                className="absolute top-4 right-4 p-1 rounded-full hover:bg-gray-100"
              >
                <X className="size-5" />
              </button>

              <div className="mx-auto size-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                <AlertCircle className="size-8 text-red-500" />
              </div>
              
              <h3 className="text-2xl font-bold mb-2">Oops! Something went wrong</h3>
              <p className="text-gray-600 mb-6">
                My email gremlins must be on strike today.
                <br />
                Try again or contact me through carrier pigeon.
              </p>
              
              <Button 
                onClick={() => setShowErrorModal(false)}
                className="bg-red-500 hover:bg-red-600 flex items-center justify-center gap-2 mx-auto"
              >
                <AlertCircle className="size-4" />
                <span>Try Again</span>
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Booking Modal */}
      <AnimatePresence>
        {showBookingModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            onClick={() => setShowBookingModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              className="bg-white rounded-xl max-w-2xl w-full p-6 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowBookingModal(false)}
                className="absolute top-4 right-4 p-1 rounded-full hover:bg-gray-100"
              >
                <X className="size-5" />
              </button>

              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <CalendarClock className="text-blue-500" /> Book a Call
                  </h3>
                  
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Select Date
                    </label>
                    <div className="grid grid-cols-1 gap-2">
                      {availableDates.map((dateObj) => (
                        <button
                          key={dateObj.date}
                          type="button"
                          onClick={() => {
                            setSelectedDate(dateObj.date)
                            setSelectedTime(null)
                          }}
                          className={`p-3 text-left rounded-lg border ${
                            selectedDate === dateObj.date
                              ? 'border-blue-500 bg-blue-50'
                              : 'border-gray-200 hover:border-blue-300'
                          }`}
                        >
                          <div className="font-medium">{dateObj.day}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {selectedDate && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Available Times
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        {availableDates
                          .find(d => d.date === selectedDate)
                          ?.times.map((time) => (
                            <button
                              key={time}
                              type="button"
                              onClick={() => setSelectedTime(time)}
                              className={`p-2 text-center rounded-lg border ${
                                selectedTime === time
                                  ? 'border-blue-500 bg-blue-50'
                                  : 'border-gray-200 hover:border-blue-300'
                              }`}
                            >
                              {time}
                            </button>
                          ))}
                      </div>
                    </div>
                  )}
                </div>
                
                <div className="md:w-1/2">
                  <form onSubmit={handleBookingSubmit}>
                    <h4 className="font-bold mb-4">Your Information</h4>
                    <div className="space-y-4">
                      <input
                        type="text"
                        name="name"
                        id="booking-name"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                      <ValidationError 
                        prefix="Name" 
                        field="name"
                        errors={bookingState.errors}
                        className="text-red-500 text-sm"
                      />
                      
                      <input
                        type="email"
                        name="email"
                        id="booking-email"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                      <ValidationError 
                        prefix="Email" 
                        field="email"
                        errors={bookingState.errors}
                        className="text-red-500 text-sm"
                      />
                      
                      <textarea
                        name="notes"
                        id="booking-notes"
                        placeholder="What would you like to discuss?"
                        rows="3"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <ValidationError 
                        prefix="Notes" 
                        field="notes"
                        errors={bookingState.errors}
                        className="text-red-500 text-sm"
                      />
                      
                      {selectedDate && selectedTime ? (
                        <div className="bg-blue-50 p-3 rounded-lg mb-4">
                          <p className="text-sm text-gray-600">Selected appointment:</p>
                          <p className="font-medium">
                            {availableDates.find(d => d.date === selectedDate)?.day} at {selectedTime}
                          </p>
                        </div>
                      ) : (
                        <div className="bg-yellow-50 p-3 rounded-lg mb-4">
                          <p className="text-sm text-yellow-700">Please select a date and time</p>
                        </div>
                      )}
                      
                      <Button
                        type="submit"
                        className="w-full flex justify-center items-center gap-2"
                        disabled={!selectedDate || !selectedTime || bookingState.submitting}
                      >
                        {bookingState.submitting ? (
                          <>
                            <Loader2 className="size-4 animate-spin" />
                            <span>Booking...</span>
                          </>
                        ) : (
                          <>
                            <Send className="size-4" />
                            <span>Confirm Booking</span>
                          </>
                        )}
                      </Button>
                    </div>
                  </form>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </SectionWrapper>
  )
}