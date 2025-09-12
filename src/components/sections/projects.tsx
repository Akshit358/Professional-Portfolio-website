"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { ExternalLink, Github, Star, GitFork, Eye, Users, Zap } from "lucide-react"
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
  liveUrl: string
  featured: boolean
  stars: number
  forks: number
  views: number
  category: string
}

const projects: Project[] = [
  {
    id: "1",
    title: "EV Charging Station Chatbot",
    description: "Team project: Website for EV charging station company with chatbot integration",
    longDescription: "Led a team of 11 to design and develop a comprehensive website for an EV charging station company. Features include real-time charging station availability, payment processing, user accounts, and an intelligent chatbot for customer support.",
    image: "/api/placeholder/600/400",
    technologies: ["React", "Node.js", "MongoDB", "OpenAI API", "Stripe", "WebSocket"],
    githubUrl: "https://github.com/Akshit358/EVCFLO",
    liveUrl: "https://youtu.be/NrVbrMy55E0?si=fBCsL-N5fUtxXc7E",
    featured: true,
    stars: 15,
    forks: 3,
    views: 250,
    category: "Full-Stack"
  },
  {
    id: "2",
    title: "Python IDE with Input Features",
    description: "Custom Python IDE with enhanced input capabilities and user engagement",
    longDescription: "Developed a Python IDE with advanced input features that boosted user engagement by 40%. Features include syntax highlighting, code completion, debugging tools, and integrated terminal.",
    image: "/api/placeholder/600/400",
    technologies: ["Python", "Tkinter", "PyQt", "CodeMirror", "Jupyter"],
    githubUrl: "https://github.com/Akshit358",
    liveUrl: "#",
    featured: true,
    stars: 8,
    forks: 2,
    views: 120,
    category: "Desktop App"
  },
  {
    id: "3",
    title: "CommBank Financial Analytics",
    description: "Financial data analysis for sustainability-driven loan strategies",
    longDescription: "Analyzed financial data to propose sustainability-driven loan strategies for CommBank. Created stakeholder communication plans and delivered executive presentations showcasing analytical and problem-solving skills.",
    image: "/api/placeholder/600/400",
    technologies: ["Python", "Pandas", "NumPy", "Matplotlib", "Jupyter", "Excel"],
    githubUrl: "#",
    liveUrl: "#",
    featured: false,
    stars: 5,
    forks: 1,
    views: 80,
    category: "Data Analysis"
  },
  {
    id: "4",
    title: "IT Support Dashboard",
    description: "Helpdesk management system with ticket tracking and resolution analytics",
    longDescription: "Developed a comprehensive IT support dashboard for managing helpdesk tickets, user accounts, and system monitoring. Achieved 90% first-call resolution rate and streamlined support processes.",
    image: "/api/placeholder/600/400",
    technologies: ["React", "Node.js", "PostgreSQL", "Active Directory", "Chart.js"],
    githubUrl: "#",
    liveUrl: "#",
    featured: false,
    stars: 3,
    forks: 1,
    views: 60,
    category: "Web App"
  },
  {
    id: "5",
    title: "AI-Powered Security Scanner",
    description: "Cybersecurity tool for vulnerability assessment and threat detection",
    longDescription: "Built an AI-powered security scanner using machine learning algorithms to detect vulnerabilities and potential threats. Integrates with OWASP guidelines and provides detailed security reports.",
    image: "/api/placeholder/600/400",
    technologies: ["Python", "TensorFlow", "Scikit-learn", "OWASP", "Wireshark", "Burp Suite"],
    githubUrl: "#",
    liveUrl: "#",
    featured: false,
    stars: 12,
    forks: 4,
    views: 150,
    category: "Cybersecurity"
  },
  {
    id: "6",
    title: "Cloud Infrastructure Manager",
    description: "AWS-based infrastructure management with automated deployment",
    longDescription: "Developed a cloud infrastructure management system using AWS services including EC2, S3, and IAM. Features automated deployment pipelines, monitoring, and cost optimization.",
    image: "/api/placeholder/600/400",
    technologies: ["AWS", "Docker", "Terraform", "Jenkins", "CloudFormation", "Lambda"],
    githubUrl: "#",
    liveUrl: "#",
    featured: false,
    stars: 7,
    forks: 2,
    views: 90,
    category: "Cloud/DevOps"
  }
]

const categories = ["All", "Full-Stack", "Desktop App", "Data Analysis", "Web App", "Cybersecurity", "Cloud/DevOps"]

export function Projects() {
  const [selectedCategory, setSelectedCategory] = React.useState("All")
  const [hoveredProject, setHoveredProject] = React.useState<string | null>(null)

  const filteredProjects = projects.filter(project => 
    selectedCategory === "All" || project.category === selectedCategory
  )

  return (
    <section className="py-20 bg-muted/30">
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
            Explore my portfolio of innovative projects that showcase my skills in software development, 
            cloud computing, cybersecurity, and creative problem-solving as a fresh tech graduate.
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
              className="transition-all duration-200 hover:scale-105"
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
                    <Button size="sm" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live
                      </a>
                    </Button>
                  </div>

                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary text-primary-foreground px-2 py-1 rounded-full text-xs font-medium">
                        Featured
                      </span>
                    </div>
                  )}

                  {/* Special Badges */}
                  {project.id === "1" && (
                    <div className="absolute top-4 right-4">
                      <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center">
                        <Users className="h-3 w-3 mr-1" />
                        Team Lead
                      </span>
                    </div>
                  )}
                  {project.id === "2" && (
                    <div className="absolute top-4 right-4">
                      <span className="bg-yellow-500 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center">
                        <Zap className="h-3 w-3 mr-1" />
                        +40% Engagement
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

                  {/* Stats */}
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4" />
                        <span>{project.stars}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <GitFork className="h-4 w-4" />
                        <span>{project.forks}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Eye className="h-4 w-4" />
                        <span>{project.views}</span>
                      </div>
                    </div>
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
            <a href="https://github.com/Akshit358" target="_blank" rel="noopener noreferrer">
              View All Projects on GitHub
              <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
