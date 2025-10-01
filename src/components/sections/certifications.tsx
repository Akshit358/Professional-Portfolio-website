"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Award, ExternalLink, Calendar, Building2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface Certification {
  id: string
  title: string
  issuer: string
  date: string
  description: string
  credentialId?: string
  credentialUrl?: string
  status: "completed" | "in-progress" | "planned"
  category: string
}

const certifications: Certification[] = [
  {
    id: "1",
    title: "Forage Virtual Internships",
    issuer: "Forage",
    date: "2024",
    description: "Completed virtual internships at JP Morgan Chase, Telstra, Citi Bank, and Hewlett Packard Enterprise, gaining hands-on experience in enterprise software development.",
    credentialUrl: "https://drive.google.com/drive/folders/1DuZ1AP7giNxRRwiRDUeUPCns8w3c84d?usp=sharing",
    status: "completed",
    category: "Professional Development"
  },
  {
    id: "2",
    title: "Google Technical Support Fundamentals",
    issuer: "Google",
    date: "2024",
    description: "Comprehensive course covering technical support fundamentals, troubleshooting methodologies, and customer service best practices.",
    credentialUrl: "https://drive.google.com/file/d/16q7fbR5OpeVl6Cc8t8iQoFZVZZUZUbj/view?usp=drivelink",
    status: "completed",
    category: "Technical Support"
  },
  {
    id: "3",
    title: "AWS Certification",
    issuer: "Amazon Web Services",
    date: "October 2024",
    description: "AWS Cloud Practitioner certification covering cloud computing concepts, AWS services, security, and billing.",
    status: "in-progress",
    category: "Cloud Computing"
  }
]

const categories = ["All", "Professional Development", "Technical Support", "Cloud Computing"]

export function Certifications() {
  const [selectedCategory, setSelectedCategory] = React.useState("All")

  const filteredCertifications = certifications.filter(cert => 
    selectedCategory === "All" || cert.category === selectedCategory
  )

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-500"
      case "in-progress":
        return "bg-yellow-500"
      case "planned":
        return "bg-blue-500"
      default:
        return "bg-gray-500"
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case "completed":
        return "Completed"
      case "in-progress":
        return "In Progress"
      case "planned":
        return "Planned"
      default:
        return "Unknown"
    }
  }

  return (
    <section id="certifications" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="gradient-text">Certifications</span> & Achievements
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional certifications and achievements that demonstrate my commitment to continuous learning 
            and technical excellence in software engineering and cloud computing.
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

        {/* Certifications Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredCertifications.map((certification, index) => (
            <motion.div
              key={certification.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative p-6 bg-card border border-border rounded-lg hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                {/* Status Badge */}
                <div className="absolute top-4 right-4">
                  <Badge 
                    variant="secondary" 
                    className={`text-xs ${getStatusColor(certification.status)} text-white`}
                  >
                    {getStatusText(certification.status)}
                  </Badge>
                </div>

                {/* Certification Header */}
                <div className="flex items-start space-x-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold group-hover:text-primary transition-colors mb-1">
                      {certification.title}
                    </h3>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <Building2 className="h-4 w-4" />
                      <span>{certification.issuer}</span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {certification.description}
                </p>

                {/* Date */}
                <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-4">
                  <Calendar className="h-4 w-4" />
                  <span>{certification.date}</span>
                </div>

                {/* Action Button */}
                {certification.credentialUrl && (
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                    asChild
                  >
                    <a 
                      href={certification.credentialUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center space-x-2"
                    >
                      <span>View Credential</span>
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">2</div>
            <div className="text-muted-foreground">Completed Certifications</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">1</div>
            <div className="text-muted-foreground">In Progress</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">4+</div>
            <div className="text-muted-foreground">Virtual Internships</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
