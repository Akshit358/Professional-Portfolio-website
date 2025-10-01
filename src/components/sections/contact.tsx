"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Linkedin, Github, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function Contact() {
  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/AkshitCV.pdf';
    link.download = 'AkshitCV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to collaborate or have a project in mind? I&apos;d love to hear from you. 
            Let&apos;s discuss how we can work together to build something amazing.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold mb-6">Let&apos;s Connect</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                I&apos;m always interested in new opportunities and exciting projects. 
                Whether you have a question, want to collaborate, or just want to say hi, 
                feel free to reach out!
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <a 
                    href="mailto:ak2040deau@gmail.com" 
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    ak2040deau@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold">Phone</h4>
                  <a 
                    href="tel:+61431906964" 
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +61 431906964
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold">Location</h4>
                  <p className="text-muted-foreground">Melbourne, VIC, 3000</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h4 className="font-semibold">Follow Me</h4>
              <div className="flex space-x-4">
                <Button variant="outline" size="sm" asChild>
                  <a href="https://www.linkedin.com/in/akshit-singh-aba4b51a6" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-4 w-4 mr-2" />
                    LinkedIn
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <a href="https://github.com/Akshit358" target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-2" />
                    GitHub
                  </a>
                </Button>
              </div>
            </div>

            {/* Download Resume */}
            <div className="pt-4">
              <Button size="lg" onClick={downloadResume} className="group">
                <Download className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                Download Resume
              </Button>
            </div>
          </motion.div>

          {/* Right Column - Status & Availability */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Status Card */}
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Current Status</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Availability</span>
                  <Badge variant="secondary" className="bg-green-100 text-green-800">
                    Available
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Response Time</span>
                  <span className="font-medium">Within 24 hours</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Preferred Contact</span>
                  <span className="font-medium">Email or LinkedIn</span>
                </div>
              </div>
            </div>

            {/* Skills Highlight */}
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">What I Can Help With</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm">Full-Stack Web Development</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm">Enterprise Software Solutions</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm">Microservices Architecture</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm">Database Design & Optimization</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm">API Development & Integration</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm">Code Review & Mentoring</span>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-lg p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">Ready to Start a Project?</h3>
              <p className="text-muted-foreground mb-4">
                Let&apos;s discuss your ideas and bring them to life with clean, efficient code.
              </p>
              <Button asChild>
                <a href="mailto:ak2040deau@gmail.com">
                  Send me an email
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
