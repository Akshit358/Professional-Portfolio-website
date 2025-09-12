"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Download, MapPin, Calendar, Award, Code, Users, Lightbulb, GraduationCap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const stats = [
  { icon: Code, label: "Projects Completed", value: "15+" },
  { icon: Users, label: "Team Members Led", value: "11" },
  { icon: Award, label: "Certifications", value: "3+" },
  { icon: Lightbulb, label: "Support Tickets Resolved", value: "40+/week" },
]

const achievements = [
  {
    year: "2024",
    title: "Bachelor of Software Engineering (Honours)",
    company: "Deakin University, Melbourne",
    description: "Graduated with strong foundation in software engineering, cloud computing, and cybersecurity"
  },
  {
    year: "2024",
    title: "Full Stack Developer (Internship)",
    company: "Bugbox",
    description: "Optimized backend performance, debugged front-end features, and developed Python IDE with 40% user engagement boost"
  },
  {
    year: "2024",
    title: "IT Helpdesk Specialist",
    company: "AssetOne Solutions",
    description: "Resolved 40+ support tickets weekly with 90% first-call resolution rate, administered Active Directory"
  },
  {
    year: "2024",
    title: "CommBank Forage Virtual Experience",
    company: "Virtual Internship",
    description: "Analyzed financial data for sustainability-driven loan strategies and delivered executive presentations"
  }
]

export function About() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
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
                <span className="text-muted-foreground">Available for new opportunities</span>
              </div>
              <div className="flex items-center space-x-3">
                <GraduationCap className="h-5 w-5 text-primary" />
                <span className="text-muted-foreground">Fresh Graduate - Ready to make an impact</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group">
                <Download className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                Download Resume
              </Button>
              <Button variant="outline" size="lg">
                Let&apos;s Connect
              </Button>
            </div>
          </motion.div>

          {/* Right Column - Stats & Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center p-6 bg-card border border-border rounded-lg hover:border-primary/50 transition-all duration-300"
                >
                  <stat.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                  <div className="text-2xl font-bold mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Skills Tags */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Core Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {["Python", "Java", "JavaScript", "React", "Node.js", "AWS", "Docker", "TensorFlow", "MongoDB", "Flutter"].map((tech) => (
                  <Badge key={tech} variant="secondary" className="text-sm">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Timeline Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20"
        >
          <h3 className="text-3xl font-bold text-center mb-12">
            My <span className="gradient-text">Journey</span>
          </h3>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border"></div>
            
            <div className="space-y-8">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.year}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative flex items-start space-x-6"
                >
                  {/* Timeline Dot */}
                  <div className="flex-shrink-0 w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">
                    {achievement.year}
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all duration-300">
                    <h4 className="text-xl font-semibold mb-2">{achievement.title}</h4>
                    <p className="text-primary font-medium mb-2">{achievement.company}</p>
                    <p className="text-muted-foreground">{achievement.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
