"use client"

import * as React from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { ExternalLink, Github, Star, Zap, Users, Code } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface InteractiveProject {
  id: string
  title: string
  description: string
  longDescription: string
  image: string
  technologies: string[]
  githubUrl: string
  liveUrl?: string
  featured: boolean
  category: string
  stats: {
    stars: number
    forks: number
    contributors: number
    commits: number
  }
  gradient: string
}

const interactiveProjects: InteractiveProject[] = [
  {
    id: "1",
    title: "FinWise - AI Financial Platform",
    description: "AI-powered financial risk analyzer with real-time insights",
    longDescription: "Revolutionary financial platform combining machine learning with real-time market data to provide intelligent investment recommendations and risk assessment.",
    image: "/api/placeholder/600/400",
    technologies: ["React.js", "FastAPI", "AWS", "Machine Learning", "PostgreSQL"],
    githubUrl: "https://github.com/Akshit358/FinWise",
    liveUrl: "#",
    featured: true,
    category: "FinTech",
    stats: { stars: 42, forks: 18, contributors: 3, commits: 156 },
    gradient: "from-purple-500 via-pink-500 to-red-500"
  },
  {
    id: "2",
    title: "Customer Loyalty Platform",
    description: "Full-stack loyalty management with analytics",
    longDescription: "Comprehensive loyalty management system built with .NET 8 and React 18, featuring real-time analytics and customer engagement tools.",
    image: "/api/placeholder/600/400",
    technologies: [".NET 8", "React 18", "SQLite", "JWT", "Entity Framework"],
    githubUrl: "https://github.com/Akshit358/Customer-Loyalty-Analytics-Platform",
    liveUrl: "#",
    featured: true,
    category: "Enterprise",
    stats: { stars: 28, forks: 12, contributors: 2, commits: 89 },
    gradient: "from-blue-500 via-cyan-500 to-teal-500"
  },
  {
    id: "3",
    title: "Midas Core - Transaction Engine",
    description: "High-volume financial transaction processing",
    longDescription: "Enterprise-grade transaction processing system handling thousands of transactions per second with microservices architecture.",
    image: "/api/placeholder/600/400",
    technologies: ["Java", "Spring Boot", "Kafka", "PostgreSQL", "Docker"],
    githubUrl: "https://github.com/Akshit358/Midas-Core---Financial-Transaction-Processing-System",
    liveUrl: "#",
    featured: true,
    category: "Enterprise",
    stats: { stars: 67, forks: 23, contributors: 4, commits: 234 },
    gradient: "from-orange-500 via-red-500 to-pink-500"
  }
]

function InteractiveProjectCard({ project, index }: { project: InteractiveProject; index: number }) {
  const [isHovered, setIsHovered] = React.useState(false)
  const [isFlipped, setIsFlipped] = React.useState(false)
  
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  
  const rotateX = useSpring(useTransform(y, [-300, 300], [15, -15]))
  const rotateY = useSpring(useTransform(x, [-300, 300], [-15, 15]))
  
  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    x.set(event.clientX - centerX)
    y.set(event.clientY - centerY)
  }
  
  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
    setIsHovered(false)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative h-96 perspective-1000"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={() => setIsHovered(true)}
    >
      <motion.div
        className="relative w-full h-full transform-style-preserve-3d transition-transform duration-700"
        style={{
          rotateX: isHovered ? rotateX : 0,
          rotateY: isHovered ? rotateY : 0,
          transformStyle: "preserve-3d"
        }}
        animate={{ 
          rotateY: isFlipped ? 180 : 0,
          scale: isHovered ? 1.05 : 1
        }}
        transition={{ duration: 0.6 }}
      >
        {/* Front of card */}
        <div className="absolute inset-0 w-full h-full backface-hidden">
          <div className={`relative h-full rounded-2xl bg-gradient-to-br ${project.gradient} p-1 overflow-hidden`}>
            <div className="h-full bg-card rounded-xl p-6 flex flex-col">
              {/* Header with stats */}
              <div className="flex justify-between items-start mb-4">
                <div className="flex space-x-2">
                  {project.stats.stars > 0 && (
                    <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      <span>{project.stats.stars}</span>
                    </div>
                  )}
                  <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                    <Code className="h-3 w-3" />
                    <span>{project.stats.commits}</span>
                  </div>
                </div>
                <Badge variant="secondary" className="text-xs">
                  {project.category}
                </Badge>
              </div>

              {/* Project title and description */}
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 3 && (
                  <span className="text-xs text-muted-foreground">
                    +{project.technologies.length - 3} more
                  </span>
                )}
              </div>

              {/* Action buttons */}
              <div className="flex space-x-2">
                <Button size="sm" variant="outline" className="flex-1" asChild>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </a>
                </Button>
                {project.liveUrl && project.liveUrl !== "#" && (
                  <Button size="sm" className="flex-1" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Back of card */}
        <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180">
          <div className="h-full bg-card rounded-2xl p-6 flex flex-col">
            <div className="text-center mb-4">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <Badge variant="outline">{project.category}</Badge>
            </div>
            
            <div className="flex-1">
              <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                {project.longDescription}
              </p>
              
              {/* Detailed stats */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center p-3 bg-muted rounded-lg">
                  <div className="flex items-center justify-center mb-1">
                    <Star className="h-4 w-4 text-yellow-500 mr-1" />
                    <span className="font-semibold">{project.stats.stars}</span>
                  </div>
                  <div className="text-xs text-muted-foreground">Stars</div>
                </div>
                <div className="text-center p-3 bg-muted rounded-lg">
                  <div className="flex items-center justify-center mb-1">
                    <Users className="h-4 w-4 text-blue-500 mr-1" />
                    <span className="font-semibold">{project.stats.contributors}</span>
                  </div>
                  <div className="text-xs text-muted-foreground">Contributors</div>
                </div>
              </div>
            </div>

            <Button 
              size="sm" 
              variant="outline" 
              className="w-full"
              onClick={() => setIsFlipped(false)}
            >
              Flip Back
            </Button>
          </div>
        </div>
      </motion.div>

      {/* Flip button */}
      <motion.button
        className="absolute top-4 right-4 p-2 bg-primary/10 hover:bg-primary/20 rounded-full transition-colors"
        onClick={() => setIsFlipped(!isFlipped)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Zap className="h-4 w-4 text-primary" />
      </motion.button>

      {/* Glow effect */}
      <motion.div
        className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${project.gradient} opacity-0 blur-xl`}
        animate={{ opacity: isHovered ? 0.3 : 0 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  )
}

export function InteractiveProjects() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Interactive <span className="gradient-text">Project Showcase</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore my featured projects with interactive 3D cards. Hover, tilt, and flip to discover more details.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {interactiveProjects.map((project, index) => (
            <InteractiveProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
