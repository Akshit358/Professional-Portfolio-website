"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Download, MapPin, Calendar, Code, Users, Award, Zap, Briefcase, GraduationCap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function About() {
  const stats = [
    { icon: Code, label: "Projects Completed", value: "6+" },
    { icon: Users, label: "Virtual Internships", value: "6" },
    { icon: Award, label: "Certifications", value: "3+" },
    { icon: Zap, label: "TPS Achieved", value: "10,000+" }
  ]

  const achievements = [
    {
      icon: Briefcase,
      title: "JP Morgan Chase & Co - Virtual Internship",
      period: "Sept 2025",
      description: "Software Engineer - Engineered Midas Core environment with Spring Boot, Kafka, SQL, and REST APIs"
    },
    {
      icon: Briefcase,
      title: "Hewlett Packard Enterprise - Virtual Internship",
      period: "Aug 2025",
      description: "Software Engineer - Designed RESTful employee management service on GreenLake Cloud using Spring Boot"
    },
    {
      icon: Briefcase,
      title: "Electronic Arts - Virtual Internship",
      period: "Jul 2025",
      description: "Software Engineer - Spearheaded gameplay feature proposals and class diagram design"
    },
    {
      icon: Briefcase,
      title: "Citi Bank - Virtual Internship",
      period: "June 2025",
      description: "Software Engineer - Visualized loan workflows with UML state diagrams and proposed ML-driven credit risk models"
    },
    {
      icon: Briefcase,
      title: "Telstra - Virtual Internship",
      period: "Apr 2025",
      description: "Software Engineer - Orchestrated SIM activation REST controller in Spring Boot"
    },
    {
      icon: Briefcase,
      title: "Commonwealth Bank - Virtual Internship",
      period: "Oct 2024",
      description: "Software Engineer - Accomplished intuitive iOS home-screen widgets by creating 3 scalable layouts"
    },
    {
      icon: Briefcase,
      title: "Bugbox - Full Stack Developer",
      period: "Apr-Jun 2024",
      description: "Built web interface using React, Node.js, and MongoDB for 500+ users"
    },
    {
      icon: GraduationCap,
      title: "Deakin University",
      period: "Oct 2020 – Jun 2024",
      description: "Bachelor of Software Engineering (Honours)"
    }
  ]

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - About Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                About <span className="gradient-text">Me</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                I&apos;m an innovative IT Graduate with hands-on experience in cloud computing, 
                software development, and cybersecurity. I have a strong knack for solving 
                real-world problems through technology and am eager to contribute fresh ideas, 
                strong technical skills, and a growth mindset to dynamic teams.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                As a recent graduate from Deakin University with a Bachelor of Software Engineering (Honours), 
                I bring fresh perspectives and modern technical skills to every project. I&apos;m passionate 
                about continuous learning and staying up-to-date with the latest technologies.
              </p>
            </div>

            {/* Personal Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-primary" />
                <span className="text-muted-foreground">Melbourne, VIC, 3000</span>
              </div>
              <div className="flex items-center space-x-3">
                <Calendar className="h-5 w-5 text-primary" />
                <span className="text-muted-foreground">Available for opportunities</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button size="lg" className="group">
                <Download className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                Download Resume
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="https://www.linkedin.com/in/akshit-singh-aba4b51a6/" target="_blank" rel="noopener noreferrer">
                  Let&apos;s Connect
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Right Column - Stats & Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-card border border-border rounded-lg p-6 text-center hover:border-primary/50 transition-all duration-300"
                >
                  <stat.icon className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Core Technologies */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Core Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {["Java", "Spring Boot", "PostgreSQL", "Docker", "Kubernetes", "React.js", "Node.js", "AWS", "Kafka", "Microservices"].map((tech) => (
                  <Badge key={tech} variant="secondary" className="text-sm">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Timeline */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Experience Timeline</h3>
              <div className="space-y-4">
                {achievements.slice(0, 4).map((achievement, index) => (
                  <motion.div
                    key={achievement.title}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-start space-x-3"
                  >
                    <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                      <achievement.icon className="h-4 w-4 text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium">{achievement.title}</h4>
                      <p className="text-sm text-muted-foreground">{achievement.period}</p>
                      <p className="text-sm text-muted-foreground mt-1">{achievement.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
