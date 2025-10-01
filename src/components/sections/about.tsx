"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Download, MapPin, Calendar, Code, Users, Award, Zap, Briefcase, GraduationCap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function About() {
  const stats = [
    { icon: Code, label: "Projects Completed", value: "15+" },
    { icon: Users, label: "Users Served", value: "500+" },
    { icon: Award, label: "Certifications", value: "3+" },
    { icon: Zap, label: "Performance Improvement", value: "60%" }
  ]

  const achievements = [
    {
      icon: Briefcase,
      title: "Bugbox - Full Stack Developer (Real Internship)",
      period: "Apr-Jun 2024",
      description: "Developed responsive web applications using JavaScript and React, optimizing performance for 500+ users"
    },
    {
      icon: Briefcase,
      title: "JP Morgan Chase & Co - Virtual Internship",
      period: "Sept 2024",
      description: "Designed Single Page Applications with React and TypeScript, implemented AWS-based deployments"
    },
    {
      icon: Briefcase,
      title: "Telstra - Virtual Internship",
      period: "Aug 2024",
      description: "Developed front-end interfaces with JavaScript and React, conducted unit and integration testing"
    },
    {
      icon: Briefcase,
      title: "Citi Bank - Virtual Internship",
      period: "Jul 2024",
      description: "Built Node.js back-end components, developed real-time stock monitoring app with Yahoo Finance API"
    },
    {
      icon: Briefcase,
      title: "Hewlett Packard Enterprise - Virtual Internship",
      period: "Jun 2024",
      description: "Built RESTful service with Spring Boot, implemented unit tests with Mockito/JUnit"
    },
    {
      icon: GraduationCap,
      title: "Deakin University",
      period: "Oct 2020 – Jun 2024",
      description: "Bachelor of Software Engineering (Honours) - Led team project using JavaScript and React"
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
                I&apos;m a proactive Deakin Software Engineering (Honours) graduate with over 3 years of experience 
                in full-stack development, specializing in JavaScript, React, Node.js, TypeScript, and AWS. 
                I have a strong focus on responsive design, unit testing, and CI/CD pipelines using Jenkins and Git. 
                I&apos;m passionate about building innovative, customer-facing solutions in collaborative, data-driven environments.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                With experience serving 500+ users and achieving 60% performance improvements, I bring both 
                technical expertise and real-world impact to every project. I&apos;m particularly passionate about 
                FinTech, AI-powered solutions, and building scalable enterprise applications that solve complex problems.
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
