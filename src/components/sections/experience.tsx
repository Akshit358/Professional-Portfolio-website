"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Building2, Calendar, MapPin, ExternalLink, Award, Users, Zap, Target } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

interface Experience {
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
}

const experiences: Experience[] = [
  {
    id: "1",
    title: "Full Stack Developer (Internship)",
    company: "Bugbox",
    type: "Real Internship",
    duration: "Apr 2024 - Jun 2024",
    location: "Melbourne, VIC",
    description: "Developed responsive web applications using JavaScript and React, optimizing performance for 500+ users. Built Node.js back-end services with RESTful APIs, ensuring seamless integration and testing.",
    achievements: [
      "Served 500+ users with interactive coding platform",
      "Accelerated app load time by 60% through API and UI optimization",
      "Utilized Git for version control, resolving merge conflicts and adhering to branching strategies"
    ],
    technologies: ["React", "Node.js", "MongoDB", "JavaScript", "REST APIs", "Git"],
    featured: true
  },
  {
    id: "2",
    title: "Software Engineer",
    company: "JP Morgan Chase & Co",
    type: "Virtual Internship",
    duration: "Sept 2024",
    location: "Remote",
    description: "Designed Single Page Applications with React and TypeScript, focusing on adaptive design principles. Implemented AWS-based deployments (EC2, S3), enhancing scalability of financial solutions.",
    achievements: [
      "Configured Jenkins CI/CD pipelines to automate testing and deployment processes",
      "Built Midas Banking APIs for balances and incentives using Spring Boot",
      "Followed enterprise Spring Boot + Maven architecture patterns"
    ],
    technologies: ["React", "TypeScript", "AWS", "Jenkins", "Spring Boot", "Maven"],
    featured: true
  },
  {
    id: "3",
    title: "Software Engineer",
    company: "Telstra",
    type: "Virtual Internship",
    duration: "Aug 2024",
    location: "Remote",
    description: "Developed front-end interfaces with JavaScript and React, ensuring responsive design across devices. Conducted unit testing and integration testing to validate application functionality.",
    achievements: [
      "Enhanced backend services with clean architecture and automated testing",
      "Applied SonarQube + Checkstyle for code quality and reliability",
      "Collaborated using Git, managing merges and maintaining code quality"
    ],
    technologies: ["JavaScript", "React", "Unit Testing", "Integration Testing", "Git", "SonarQube"],
    featured: true
  },
  {
    id: "4",
    title: "Software Engineer",
    company: "Citi Bank",
    type: "Virtual Internship",
    duration: "Jul 2024",
    location: "Remote",
    description: "Built Node.js back-end components, integrating with AWS Lambda for real-time processing. Performed automation testing within CI/CD workflows using Jenkins.",
    achievements: [
      "Developed real-time stock monitoring app in Java with Yahoo Finance API",
      "Applied thread-safe concurrency via BlockingQueue",
      "Supported data-driven product features with strong testing focus"
    ],
    technologies: ["Node.js", "AWS Lambda", "Jenkins", "Java", "Yahoo Finance API", "BlockingQueue"],
    featured: false
  },
  {
    id: "5",
    title: "Software Engineer",
    company: "Hewlett Packard Enterprise",
    type: "Virtual Internship",
    duration: "Jun 2024",
    location: "Remote",
    description: "Built a RESTful service exposing /employees endpoint with sample employee records. Modular design with EmployeeManager + Controller classes.",
    achievements: [
      "Designed RESTful employee management service using Spring Boot",
      "Implemented HTTP POST support and unit tests with Mockito/JUnit",
      "Delivered scalable CRUD operations for employee data"
    ],
    technologies: ["Spring Boot", "REST APIs", "Mockito", "JUnit", "Java", "Maven"],
    featured: false
  }
]

export function Experience() {
  const [selectedType, setSelectedType] = React.useState("All")

  const filteredExperiences = experiences.filter(exp => 
    selectedType === "All" || exp.type === selectedType
  )

  const experienceTypes = ["All", "Real Internship", "Virtual Internship"]

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A journey through virtual internships at top companies and real-world development experience, 
            building enterprise-grade solutions and honing technical expertise.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {experienceTypes.map((type) => (
            <Button
              key={type}
              variant={selectedType === type ? "default" : "outline"}
              onClick={() => setSelectedType(type)}
              className="transition-all duration-300"
            >
              {type}
            </Button>
          ))}
        </motion.div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden lg:block"></div>

          <div className="space-y-8">
            {filteredExperiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                <div className="flex items-start space-x-6">
                  {/* Timeline Dot */}
                  <div className="flex-shrink-0 w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm relative z-10 hidden lg:flex">
                    {experience.duration.split(' ')[0]}
                  </div>

                  {/* Content Card */}
                  <div className="flex-1 bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                    {/* Header */}
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold mb-1">{experience.title}</h3>
                        <div className="flex items-center space-x-2 text-primary font-medium">
                          <Building2 className="h-4 w-4" />
                          <span>{experience.company}</span>
                          <Badge variant="secondary" className="text-xs">
                            {experience.type}
                          </Badge>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground mt-2 lg:mt-0">
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{experience.duration}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin className="h-4 w-4" />
                          <span>{experience.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {experience.description}
                    </p>

                    {/* Achievements */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold mb-2 flex items-center">
                        <Award className="h-4 w-4 mr-2" />
                        Key Achievements
                      </h4>
                      <ul className="space-y-1">
                        {experience.achievements.map((achievement, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-start">
                            <span className="text-primary mr-2">•</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8"
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">4</div>
            <div className="text-muted-foreground">Virtual Internships</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">1</div>
            <div className="text-muted-foreground">Real Internship</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">5</div>
            <div className="text-muted-foreground">Companies</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">3+</div>
            <div className="text-muted-foreground">Years Experience</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
