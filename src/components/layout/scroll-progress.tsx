"use client"

import * as React from "react"
import { motion, useScroll, useSpring } from "framer-motion"
import { ArrowUp, Home, User, Code, Briefcase, Award, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

const sections = [
  { id: "hero", label: "Home", icon: Home },
  { id: "about", label: "About", icon: User },
  { id: "skills", label: "Skills", icon: Code },
  { id: "projects", label: "Projects", icon: Code },
  { id: "experience", label: "Experience", icon: Briefcase },
  { id: "certifications", label: "Certifications", icon: Award },
  { id: "contact", label: "Contact", icon: Mail },
]

export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  const [activeSection, setActiveSection] = React.useState("hero")
  const [isVisible, setIsVisible] = React.useState(false)
  const [showScrollIndicator, setShowScrollIndicator] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100
      
      for (const section of sections) {
        const element = document.getElementById(section.id)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id)
            break
          }
        }
      }

      setIsVisible(window.scrollY > 300)
      setShowScrollIndicator(window.scrollY < 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary/20 z-50"
        style={{ scaleX }}
        initial={{ scaleX: 0 }}
      />

      {/* Navigation Dots */}
      <motion.div
        className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 space-y-2"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
      >
        {sections.map((section) => {
          const Icon = section.icon
          return (
            <motion.button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 group ${
                activeSection === section.id
                  ? 'bg-primary text-primary-foreground scale-110'
                  : 'bg-card/80 backdrop-blur-sm border border-border hover:border-primary/50 text-muted-foreground hover:text-primary'
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon className="h-5 w-5" />
              <motion.div
                className="absolute right-14 bg-card border border-border rounded-lg px-3 py-1 text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ opacity: 0, x: 10 }}
                whileHover={{ opacity: 1, x: 0 }}
              >
                {section.label}
              </motion.div>
            </motion.button>
          )
        })}
      </motion.div>

      {/* Back to Top Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-40"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ 
          opacity: isVisible ? 1 : 0, 
          scale: isVisible ? 1 : 0 
        }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Button
            size="lg"
            className="rounded-full w-14 h-14 shadow-lg"
            onClick={scrollToTop}
          >
            <ArrowUp className="h-5 w-5" />
          </Button>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-40"
        initial={{ opacity: 0, y: 20 }}
        animate={{ 
          opacity: showScrollIndicator ? 1 : 0,
          y: showScrollIndicator ? 0 : 20
        }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="flex flex-col items-center text-muted-foreground"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-sm mb-2">Scroll to explore</span>
          <motion.div
            className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div
              className="w-1 h-3 bg-muted-foreground rounded-full mt-2"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  )
}
