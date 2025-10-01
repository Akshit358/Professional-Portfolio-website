"use client"

import * as React from "react"
import { motion, useAnimation } from "framer-motion"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Sphere, MeshDistortMaterial, Text } from "@react-three/drei"
import { Button } from "@/components/ui/button"
import { ArrowDown, Download, Github, Linkedin, Sparkles, Zap, Code, Rocket } from "lucide-react"
import { cn } from "@/lib/utils"

const downloadResume = () => {
  const link = document.createElement('a');
  link.href = '/AkshitCV.pdf';
  link.download = 'AkshitCV.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

// Enhanced 3D Sphere Component
function EnhancedAnimatedSphere() {
  return (
    <group>
      <Sphere visible args={[1, 100, 200]} scale={2}>
        <MeshDistortMaterial
          color="#3b82f6"
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0}
          metalness={0.8}
        />
      </Sphere>
      {/* Floating skill badges around the sphere */}
      {["Java", "React", "Python", "AWS", "Docker"].map((skill, index) => (
        <Text
          key={skill}
          position={[
            Math.cos((index * Math.PI * 2) / 5) * 2.5,
            Math.sin((index * Math.PI * 2) / 5) * 2.5,
            Math.sin((index * Math.PI * 2) / 5) * 0.5
          ]}
          fontSize={0.2}
          color="#6366f1"
          anchorX="center"
          anchorY="middle"
        >
          {skill}
        </Text>
      ))}
    </group>
  )
}

// Enhanced Particle System
function EnhancedParticleField() {
  const [particles, setParticles] = React.useState<Array<{
    x: number
    y: number
    z: number
    size: number
    opacity: number
    duration: number
    color: string
  }>>([])
  const [isClient, setIsClient] = React.useState(false)

  React.useEffect(() => {
    setIsClient(true)
    const colors = ["#3b82f6", "#8b5cf6", "#06b6d4", "#10b981", "#f59e0b"]
    setParticles(
      Array.from({ length: 150 }, () => ({
        x: Math.random() * 2000 - 1000,
        y: Math.random() * 2000 - 1000,
        z: Math.random() * 2000 - 1000,
        size: Math.random() * 4 + 1,
        opacity: Math.random() * 0.6 + 0.2,
        duration: Math.random() * 15 + 10,
        color: colors[Math.floor(Math.random() * colors.length)]
      }))
    )
  }, [])

  if (!isClient) {
    return <div className="absolute inset-0 overflow-hidden pointer-events-none" />
  }

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full"
          style={{
            left: particle.x,
            top: particle.y,
            width: particle.size,
            height: particle.size,
            opacity: particle.opacity,
            background: `linear-gradient(45deg, ${particle.color}, ${particle.color}80)`,
            boxShadow: `0 0 ${particle.size * 2}px ${particle.color}40`
          }}
          animate={{
            y: [particle.y, particle.y - 200, particle.y],
            x: [particle.x, particle.x + Math.sin(index) * 50, particle.x],
            opacity: [particle.opacity, particle.opacity * 0.2, particle.opacity],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}

// Enhanced Typing Animation with Multiple Effects
function EnhancedTypewriterText({ texts, className }: { texts: string[]; className?: string }) {
  const [currentTextIndex, setCurrentTextIndex] = React.useState(0)
  const [currentText, setCurrentText] = React.useState("")
  const [isDeleting, setIsDeleting] = React.useState(false)
  const [showCursor, setShowCursor] = React.useState(true)
  const [currentEffect, setCurrentEffect] = React.useState(0)

  const effects = [
    { name: "typing", icon: <Code className="h-4 w-4" /> },
    { name: "glitch", icon: <Zap className="h-4 w-4" /> },
    { name: "fade", icon: <Sparkles className="h-4 w-4" /> },
    { name: "bounce", icon: <Rocket className="h-4 w-4" /> }
  ]

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      const fullText = texts[currentTextIndex]
      
      if (isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length - 1))
        if (currentText === "") {
          setIsDeleting(false)
          setCurrentTextIndex((prev) => (prev + 1) % texts.length)
          setCurrentEffect((prev) => (prev + 1) % effects.length)
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length + 1))
        if (currentText === fullText) {
          setTimeout(() => setIsDeleting(true), 2000)
        }
      }
    }, isDeleting ? 50 : 100)

    return () => clearTimeout(timeout)
  }, [currentText, currentTextIndex, isDeleting, texts])

  React.useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 500)

    return () => clearInterval(cursorInterval)
  }, [])

  const getEffectStyles = () => {
    switch (effects[currentEffect].name) {
      case "glitch":
        return "relative before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white before:to-transparent before:animate-pulse"
      case "fade":
        return "animate-pulse"
      case "bounce":
        return "animate-bounce"
      default:
        return ""
    }
  }

  return (
    <div className="flex items-center space-x-3">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
      >
        {effects[currentEffect].icon}
      </motion.div>
      <span className={cn("typewriter text-2xl sm:text-3xl lg:text-4xl font-bold", getEffectStyles(), className)}>
        {currentText}
        <motion.span
          className="inline-block w-0.5 h-8 bg-primary ml-1"
          animate={{ opacity: showCursor ? 1 : 0 }}
          transition={{ duration: 0.1 }}
        />
      </span>
    </div>
  )
}

// Floating Action Buttons
function FloatingActionButtons() {
  const controls = useAnimation()

  React.useEffect(() => {
    controls.start({
      y: [0, -10, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    })
  }, [controls])

  return (
    <motion.div
      animate={controls}
      className="flex flex-col sm:flex-row gap-4 mt-8"
    >
      <Button size="lg" className="group relative overflow-hidden" asChild>
        <a href="#contact">
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            whileHover={{ scale: 1.1 }}
          />
          <span className="relative z-10 flex items-center">
            Get In Touch
            <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
          </span>
        </a>
      </Button>
      
      <Button size="lg" variant="outline" className="group" onClick={downloadResume}>
        <Download className="mr-2 h-4 w-4 group-hover:animate-bounce" />
        Download Resume
      </Button>
    </motion.div>
  )
}

// Social Links with Hover Effects
function SocialLinks() {
  const socialLinks = [
    { icon: Github, href: "https://github.com/Akshit358", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/akshit-singh-aba4b51a6", label: "LinkedIn" }
  ]

  return (
    <div className="flex space-x-4 mt-8">
      {socialLinks.map(({ icon: Icon, href, label }) => (
        <motion.a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 bg-card border border-border rounded-full hover:border-primary transition-all duration-300 group"
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
        >
          <Icon className="h-5 w-5 group-hover:text-primary transition-colors" />
        </motion.a>
      ))}
    </div>
  )
}

export function EnhancedHero() {
  const roles = [
    "Graduate Software Engineer",
    "Spring Boot Developer", 
    "Full-Stack Engineer",
    "Microservices Architect",
    "React.js Specialist",
    "Java Developer",
    "Software Engineer",
    "Cloud Computing Expert",
    "Full-Stack Developer",
    "Cybersecurity Enthusiast",
    "AI & Data Science Specialist",
    "Tech Graduate",
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-muted/30">
      {/* Enhanced Particle Field */}
      <EnhancedParticleField />
      
      {/* Background gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-6"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
                Hi, I&apos;m{" "}
                <span className="gradient-text bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                  Akshit Singh
                </span>
              </h1>
              
              <EnhancedTypewriterText 
                texts={roles} 
                className="text-2xl sm:text-3xl lg:text-4xl font-bold" 
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              Proactive Deakin Software Engineering (Honours) graduate with over 3 years of experience 
              in full-stack development, specializing in JavaScript, React, Node.js, TypeScript, and AWS.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <FloatingActionButtons />
              <SocialLinks />
            </motion.div>
          </motion.div>

          {/* Right Column - 3D Scene */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-96 lg:h-[500px]"
          >
            <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} />
              <pointLight position={[-10, -10, -10]} color="#8b5cf6" />
              <pointLight position={[0, 10, 0]} color="#06b6d4" />
              
              <EnhancedAnimatedSphere />
              <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={2} />
            </Canvas>
            
            {/* Floating stats */}
            <motion.div
              className="absolute top-4 right-4 bg-card/80 backdrop-blur-sm border border-border rounded-lg p-4"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <div className="text-sm font-semibold text-primary">500+ Users Served</div>
              <div className="text-xs text-muted-foreground">Real Impact</div>
            </motion.div>
            
            <motion.div
              className="absolute bottom-4 left-4 bg-card/80 backdrop-blur-sm border border-border rounded-lg p-4"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <div className="text-sm font-semibold text-primary">60% Performance</div>
              <div className="text-xs text-muted-foreground">Improvement</div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </motion.div>
    </section>
  )
}
