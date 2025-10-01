"use client"

import * as React from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Building2, Calendar, MapPin, Award, ChevronRight, Zap, Users, Code } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

interface TimelineExperience {
  id: string
  title: string
  company: string
  type: string
  duration: string
  location: string
  description: string
  achievements: string[]
  technologies: string[]
  featured: boolean
  color: string
  icon: React.ReactNode
  stats: {
    impact: string
    scale: string
    duration: string
  }
}

const timelineExperiences: TimelineExperience[] = [
  {
    id: "1",
    title: "Full Stack Developer",
    company: "Bugbox",
    type: "Real Internship",
    duration: "Apr 2024 - Jun 2024",
    location: "Melbourne, VIC",
    description: "Developed responsive web applications using JavaScript and React, optimizing performance for 500+ users.",
    achievements: [
      "Served 500+ users with interactive coding platform",
      "Accelerated app load time by 60% through API optimization",
      "Utilized Git for version control and collaborative development"
    ],
    technologies: ["React", "Node.js", "MongoDB", "JavaScript", "REST APIs", "Git"],
    featured: true,
    color: "from-blue-500 to-cyan-500",
    icon: <Code className="h-6 w-6" />,
    stats: { impact: "500+ Users", scale: "60% Performance", duration: "3 Months" }
  },
  {
    id: "2",
    title: "Software Engineer",
    company: "JP Morgan Chase & Co",
    type: "Virtual Internship",
    duration: "Sept 2024",
    location: "Remote",
    description: "Designed Single Page Applications with React and TypeScript, implemented AWS-based deployments.",
    achievements: [
      "Configured Jenkins CI/CD pipelines for automated deployment",
      "Built Midas Banking APIs using Spring Boot architecture",
      "Implemented AWS EC2 and S3 for scalable solutions"
    ],
    technologies: ["React", "TypeScript", "AWS", "Jenkins", "Spring Boot", "Maven"],
    featured: true,
    color: "from-purple-500 to-pink-500",
    icon: <Building2 className="h-6 w-6" />,
    stats: { impact: "Enterprise Scale", scale: "CI/CD Pipeline", duration: "1 Month" }
  },
  {
    id: "3",
    title: "Software Engineer",
    company: "Telstra",
    type: "Virtual Internship",
    duration: "Aug 2024",
    location: "Remote",
    description: "Developed front-end interfaces with JavaScript and React, conducted comprehensive testing.",
    achievements: [
      "Enhanced backend services with clean architecture patterns",
      "Applied SonarQube + Checkstyle for code quality assurance",
      "Implemented unit and integration testing frameworks"
    ],
    technologies: ["JavaScript", "React", "Unit Testing", "Integration Testing", "Git", "SonarQube"],
    featured: true,
    color: "from-green-500 to-emerald-500",
    icon: <Zap className="h-6 w-6" />,
    stats: { impact: "Quality Focus", scale: "Clean Architecture", duration: "1 Month" }
  },
  {
    id: "4",
    title: "Software Engineer",
    company: "Citi Bank",
    type: "Virtual Internship",
    duration: "Jul 2024",
    location: "Remote",
    description: "Built Node.js back-end components, developed real-time stock monitoring application.",
    achievements: [
      "Developed real-time stock monitoring app with Yahoo Finance API",
      "Applied thread-safe concurrency via BlockingQueue patterns",
      "Integrated AWS Lambda for real-time data processing"
    ],
    technologies: ["Node.js", "AWS Lambda", "Jenkins", "Java", "Yahoo Finance API", "BlockingQueue"],
    featured: false,
    color: "from-orange-500 to-red-500",
    icon: <Users className="h-6 w-6" />,
    stats: { impact: "Real-time Data", scale: "Financial APIs", duration: "1 Month" }
  },
  {
    id: "5",
    title: "Software Engineer",
    company: "Hewlett Packard Enterprise",
    type: "Virtual Internship",
    duration: "Jun 2024",
    location: "Remote",
    description: "Built RESTful service with Spring Boot, implemented comprehensive unit testing.",
    achievements: [
      "Designed RESTful employee management service using Spring Boot",
      "Implemented HTTP POST support with Mockito/JUnit testing",
      "Delivered scalable CRUD operations for enterprise data"
    ],
    technologies: ["Spring Boot", "REST APIs", "Mockito", "JUnit", "Java", "Maven"],
    featured: false,
    color: "from-indigo-500 to-purple-500",
    icon: <Award className="h-6 w-6" />,
    stats: { impact: "Enterprise APIs", scale: "CRUD Operations", duration: "1 Month" }
  }
]

function TimelineNode({ experience, index, isActive }: { experience: TimelineExperience; index: number; isActive: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`relative ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}
    >
      {/* Timeline line connector */}
      <div className={`absolute top-8 ${index % 2 === 0 ? 'right-0' : 'left-0'} w-8 h-0.5 bg-border hidden md:block`} />
      
      {/* Node content */}
      <div className="relative">
        {/* Timeline dot */}
        <motion.div
          className={`absolute top-6 ${index % 2 === 0 ? 'right-0' : 'left-0'} w-4 h-4 rounded-full border-4 border-background shadow-lg transform -translate-y-1/2 z-10`}
          style={{ background: `linear-gradient(135deg, ${experience.color.split(' ')[1]}, ${experience.color.split(' ')[3]})` }}
          animate={{ scale: isActive ? 1.2 : 1 }}
          transition={{ duration: 0.3 }}
        />
        
        {/* Experience card */}
        <motion.div
          className={`bg-card border border-border rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 ${
            index % 2 === 0 ? 'md:mr-16' : 'md:ml-16'
          }`}
          whileHover={{ scale: 1.02, y: -5 }}
          animate={{ 
            borderColor: isActive ? `hsl(var(--primary))` : `hsl(var(--border))`,
            boxShadow: isActive ? '0 0 20px hsl(var(--primary) / 0.3)' : '0 4px 6px -1px rgb(0 0 0 / 0.1)'
          }}
        >
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div 
                className="p-2 rounded-lg"
                style={{ background: `linear-gradient(135deg, ${experience.color.split(' ')[1]}, ${experience.color.split(' ')[3]})` }}
              >
                {experience.icon}
              </div>
              <div>
                <h3 className="text-lg font-semibold">{experience.title}</h3>
                <div className="flex items-center space-x-2 text-sm text-primary">
                  <Building2 className="h-4 w-4" />
                  <span>{experience.company}</span>
                  <Badge variant="secondary" className="text-xs">
                    {experience.type}
                  </Badge>
                </div>
              </div>
            </div>
          </div>

          {/* Duration and location */}
          <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
            <div className="flex items-center space-x-1">
              <Calendar className="h-4 w-4" />
              <span>{experience.duration}</span>
            </div>
            <div className="flex items-center space-x-1">
              <MapPin className="h-4 w-4" />
              <span>{experience.location}</span>
            </div>
          </div>

          {/* Description */}
          <p className="text-muted-foreground mb-4 leading-relaxed">
            {experience.description}
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mb-4">
            <div className="text-center p-2 bg-muted rounded-lg">
              <div className="text-sm font-semibold text-primary">{experience.stats.impact}</div>
              <div className="text-xs text-muted-foreground">Impact</div>
            </div>
            <div className="text-center p-2 bg-muted rounded-lg">
              <div className="text-sm font-semibold text-primary">{experience.stats.scale}</div>
              <div className="text-xs text-muted-foreground">Scale</div>
            </div>
            <div className="text-center p-2 bg-muted rounded-lg">
              <div className="text-sm font-semibold text-primary">{experience.stats.duration}</div>
              <div className="text-xs text-muted-foreground">Duration</div>
            </div>
          </div>

          {/* Key achievements */}
          <div className="mb-4">
            <h4 className="text-sm font-semibold mb-2 flex items-center">
              <Award className="h-4 w-4 mr-2" />
              Key Achievements
            </h4>
            <ul className="space-y-1">
              {experience.achievements.slice(0, 2).map((achievement, idx) => (
                <li key={idx} className="text-sm text-muted-foreground flex items-start">
                  <ChevronRight className="h-3 w-3 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  {achievement}
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {experience.technologies.slice(0, 4).map((tech) => (
              <Badge key={tech} variant="outline" className="text-xs">
                {tech}
              </Badge>
            ))}
            {experience.technologies.length > 4 && (
              <Badge variant="outline" className="text-xs">
                +{experience.technologies.length - 4} more
              </Badge>
            )}
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export function InteractiveTimeline() {
  const [activeIndex, setActiveIndex] = React.useState(0)
  const containerRef = React.useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, -50])

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Interactive <span className="gradient-text">Experience Timeline</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore my professional journey through an interactive timeline with detailed insights and achievements.
          </p>
        </motion.div>

        <div ref={containerRef} className="relative">
          {/* Central timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-secondary to-primary hidden md:block" />
          
          {/* Timeline content */}
          <motion.div style={{ y }} className="space-y-16">
            {timelineExperiences.map((experience, index) => (
              <TimelineNode
                key={experience.id}
                experience={experience}
                index={index}
                isActive={activeIndex === index}
              />
            ))}
          </motion.div>
        </div>

        {/* Navigation dots */}
        <div className="flex justify-center space-x-4 mt-12">
          {timelineExperiences.map((_, index) => (
            <motion.button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeIndex === index ? 'bg-primary scale-125' : 'bg-muted'
              }`}
              onClick={() => setActiveIndex(index)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
