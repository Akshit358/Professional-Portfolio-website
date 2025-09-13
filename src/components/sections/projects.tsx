"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface Project {
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
}

const projects: Project[] = [
  {
    id: "1",
    title: "Midas Core - Financial Transaction Processing System",
    description: "Enterprise-grade financial transaction processing system with microservices architecture",
    longDescription: "Accomplished enterprise-grade financial transaction processing system by architecting microservices with Spring Boot, Kafka, PostgreSQL, and 25+ REST APIs, resulting in 10,000+ TPS with 99.9% uptime and PCI DSS compliance. Enhanced system reliability and performance by implementing 95% test coverage, Docker/Kubernetes CI/CD pipeline, and Prometheus monitoring.",
    image: "/api/placeholder/600/400",
    technologies: ["Spring Boot", "Apache Kafka", "PostgreSQL", "Docker", "Kubernetes", "REST APIs", "Microservices"],
    githubUrl: "https://github.com/Akshit358/Midas-Core---Financial-Transaction-Processing-System",
    liveUrl: "#",
    featured: true,
    category: "Enterprise"
  },
  {
    id: "2",
    title: "Professional Portfolio Website",
    description: "Modern, responsive portfolio website with 3D animations and optimized performance",
    longDescription: "Designed and developed a modern, responsive portfolio using Next.js 15, React 19, TypeScript, and Tailwind CSS, showcasing technical skills, projects, and professional achievements. Implemented interactive 3D animations, particle effects, and smooth transitions with Three.js and Framer Motion, achieving 95+ Lighthouse scores and sub-2 second load times.",
    image: "/api/placeholder/600/400",
    technologies: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "Three.js", "Framer Motion", "Vercel"],
    githubUrl: "https://github.com/Akshit358/Professional-Portfolio-website",
    liveUrl: "#",
    featured: true,
    category: "Frontend"
  },
  {
    id: "3",
    title: "Job Tracker CRM (Full-Stack Web Application)",
    description: "Full-stack job application tracker with role-based access control and analytics",
    longDescription: "Developed a full-stack job application tracker with React.js frontend and Django REST backend, supporting 3+ user roles and 15+ sample applications for efficient workflow management. Implemented JWT-based authentication, email verification, and role-based access control, with dynamic dashboards using Recharts for interactive analytics.",
    image: "/api/placeholder/600/400",
    technologies: ["React.js", "Django", "PostgreSQL", "JWT", "Recharts", "Email Verification", "REST API"],
    githubUrl: "https://github.com/Akshit358/Job-Tracker-CRM",
    liveUrl: "#",
    featured: true,
    category: "Full-Stack"
  },
  {
    id: "4",
    title: "EV Charging Station Chatbot",
    description: "Team project: Website for EV charging station company with chatbot integration",
    longDescription: "Led a team of 11 to design and develop a comprehensive website for an EV charging station company. Features include real-time charging station availability, payment processing, user accounts, and an intelligent chatbot for customer support.",
    image: "/api/placeholder/600/400",
    technologies: ["React", "Node.js", "MongoDB", "OpenAI API", "Stripe", "WebSocket"],
    githubUrl: "https://github.com/Akshit358/EVCFLO",
    liveUrl: "https://youtu.be/NrVbrMy55E0?si=fBCsL-N5fUtxXc7E",
    featured: false,
    category: "Full-Stack"
  },
  {
    id: "5",
    title: "Bugbox Web Interface",
    description: "Web interface for 500+ users with dual-mode interactive coding experience",
    longDescription: "Built web interface using React, Node.js, and MongoDB for 500+ users. Integrated Blockly and scripts to enable dual-mode interactive coding experience. Accelerated app load time by 60% through API and UI optimization.",
    image: "/api/placeholder/600/400",
    technologies: ["React", "Node.js", "MongoDB", "Blockly", "API Optimization", "UI/UX"],
    githubUrl: "https://github.com/Akshit358",
    liveUrl: "#",
    featured: false,
    category: "Web App"
  },
  {
    id: "6",
    title: "Real-time Stock Monitoring App",
    description: "Java application with Yahoo Finance API integration for stock market insights",
    longDescription: "Developed real-time stock monitoring app in Java with Yahoo Finance API and JavaFX, providing actionable insights for internal teams. Visualized loan workflows with UML state diagrams and proposed ML-driven credit risk models for Citi Bank virtual internship.",
    image: "/api/placeholder/600/400",
    technologies: ["Java", "JavaFX", "Yahoo Finance API", "UML", "Machine Learning", "Data Visualization"],
    githubUrl: "https://github.com/Akshit358",
    liveUrl: "#",
    featured: false,
    category: "Desktop App"
  }
]

const categories = ["All", "Enterprise", "Frontend", "Full-Stack", "Web App", "Desktop App"]

export function Projects() {
  const [selectedCategory, setSelectedCategory] = React.useState("All")
  const [hoveredProject, setHoveredProject] = React.useState<string | null>(null)

  const filteredProjects = projects.filter(project => 
    selectedCategory === "All" || project.category === selectedCategory
  )

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my most impactful projects, from enterprise-grade financial systems 
            to modern web applications, demonstrating expertise across the full technology stack.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className="transition-all duration-300"
            >
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative overflow-hidden rounded-lg bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                    <div className="text-4xl font-bold text-primary/50">
                      {project.title.charAt(0)}
                    </div>
                  </div>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    <Button size="sm" variant="secondary" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    {project.liveUrl && project.liveUrl !== "#" && (
                      <Button size="sm" asChild>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Live
                        </a>
                      </Button>
                    )}
                  </div>

                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary text-primary-foreground px-2 py-1 rounded-full text-xs font-medium">
                        Featured
                      </span>
                    </div>
                  )}
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
                      {project.category}
                    </span>
                  </div>

                  <p className="text-muted-foreground mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="text-xs bg-primary/10 text-primary px-2 py-1 rounded"
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
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Button size="lg" variant="outline" className="group" asChild>
            <a href="https://github.com/dashboard" target="_blank" rel="noopener noreferrer">
              View All Projects
              <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
