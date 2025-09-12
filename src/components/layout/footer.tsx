"use client"

import * as React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Github, Linkedin, Mail, MapPin, Phone, GraduationCap } from "lucide-react"
import { Button } from "@/components/ui/button"

const socialLinks = [
  { name: "GitHub", href: "https://github.com/Akshit358", icon: Github },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/akshit-singh-aba4b51a6", icon: Linkedin },
  { name: "Email", href: "mailto:akshit.singh0319@gmail.com", icon: Mail },
]

const quickLinks = [
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Skills", href: "/skills" },
  { name: "Contact", href: "/contact" },
]

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold gradient-text">Akshit Singh</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Innovative IT Graduate with hands-on experience in cloud computing, 
              software development, and cybersecurity. Ready to make an impact in the tech industry.
            </p>
            <div className="flex space-x-2">
              {socialLinks.map((link) => (
                <Button
                  key={link.name}
                  variant="ghost"
                  size="sm"
                  asChild
                  className="h-9 w-9 rounded-full hover:bg-primary hover:text-primary-foreground"
                >
                  <Link href={link.href} aria-label={link.name} target="_blank" rel="noopener noreferrer">
                    <link.icon className="h-4 w-4" />
                  </Link>
                </Button>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold">Contact</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>akshit.singh0319@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+61 431906964</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Melbourne, VIC, 3000</span>
              </div>
            </div>
          </motion.div>

          {/* Education & Status */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold">Status</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <GraduationCap className="h-4 w-4 text-primary" />
                <div className="text-sm">
                  <div className="font-medium">Fresh Graduate</div>
                  <div className="text-muted-foreground">Deakin University</div>
                </div>
              </div>
              <div className="text-sm text-muted-foreground">
                <div className="font-medium">Available for opportunities</div>
                <div>Open to full-time positions</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 pt-8 border-t border-border"
        >
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Akshit Singh. All rights reserved.
            </p>
            <div className="flex space-x-4 text-sm text-muted-foreground">
              <span>Software Engineer & Tech Graduate</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
