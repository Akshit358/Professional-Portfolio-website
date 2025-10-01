"use client"

import * as React from "react"
import { motion, useAnimation } from "framer-motion"
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Github, Linkedin, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

interface FormStatus {
  type: 'idle' | 'sending' | 'success' | 'error'
  message: string
}

function FloatingInput({ 
  label, 
  type = "text", 
  value, 
  onChange, 
  placeholder,
  icon: Icon,
  required = false 
}: {
  label: string
  type?: string
  value: string
  onChange: (value: string) => void
  placeholder: string
  icon: React.ReactNode
  required?: boolean
}) {
  const [isFocused, setIsFocused] = React.useState(false)
  const [hasValue, setHasValue] = React.useState(false)

  React.useEffect(() => {
    setHasValue(value.length > 0)
  }, [value])

  return (
    <motion.div
      className="relative group"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <div className="relative">
        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground group-hover:text-primary transition-colors">
          {Icon}
        </div>
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={placeholder}
          required={required}
          className="w-full pl-10 pr-4 py-3 bg-card border border-border rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 outline-none"
        />
        <motion.label
          className={`absolute left-10 transition-all duration-300 pointer-events-none ${
            isFocused || hasValue
              ? 'top-1 text-xs text-primary'
              : 'top-1/2 transform -translate-y-1/2 text-muted-foreground'
          }`}
          animate={{
            y: isFocused || hasValue ? -8 : 0,
            scale: isFocused || hasValue ? 0.85 : 1
          }}
        >
          {label} {required && <span className="text-red-500">*</span>}
        </motion.label>
      </div>
    </motion.div>
  )
}

function ContactCard({ icon: Icon, title, content, href, onClick }: {
  icon: React.ReactNode
  title: string
  content: string
  href?: string
  onClick?: () => void
}) {
  const controls = useAnimation()

  const handleHover = () => {
    controls.start({
      scale: 1.05,
      rotateY: 5,
      transition: { duration: 0.3 }
    })
  }

  const handleLeave = () => {
    controls.start({
      scale: 1,
      rotateY: 0,
      transition: { duration: 0.3 }
    })
  }

  const contentElement = (
    <motion.div
      className="p-6 bg-card border border-border rounded-xl hover:border-primary/50 transition-all duration-300 cursor-pointer group"
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
      animate={controls}
      whileTap={{ scale: 0.95 }}
    >
      <div className="flex items-center space-x-4 mb-4">
        <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
          {Icon}
        </div>
        <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
          {title}
        </h3>
      </div>
      <p className="text-muted-foreground group-hover:text-foreground transition-colors">
        {content}
      </p>
    </motion.div>
  )

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {contentElement}
      </a>
    )
  }

  if (onClick) {
    return (
      <div onClick={onClick}>
        {contentElement}
      </div>
    )
  }

  return contentElement
}

function StatusIndicator({ status }: { status: FormStatus }) {
  const getIcon = () => {
    switch (status.type) {
      case 'sending':
        return <motion.div className="w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin" />
      case 'success':
        return <CheckCircle className="w-4 h-4 text-green-500" />
      case 'error':
        return <AlertCircle className="w-4 h-4 text-red-500" />
      default:
        return null
    }
  }

  const getColor = () => {
    switch (status.type) {
      case 'sending':
        return 'text-primary'
      case 'success':
        return 'text-green-500'
      case 'error':
        return 'text-red-500'
      default:
        return 'text-muted-foreground'
    }
  }

  if (status.type === 'idle') return null

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={`flex items-center space-x-2 p-3 rounded-lg bg-card border ${
        status.type === 'success' ? 'border-green-500/20' : 
        status.type === 'error' ? 'border-red-500/20' : 
        'border-primary/20'
      }`}
    >
      {getIcon()}
      <span className={`text-sm font-medium ${getColor()}`}>
        {status.message}
      </span>
    </motion.div>
  )
}

export function InteractiveContact() {
  const [formData, setFormData] = React.useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  
  const [status, setStatus] = React.useState<FormStatus>({
    type: 'idle',
    message: ''
  })

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/AkshitCV.pdf';
    link.download = 'AkshitCV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus({ type: 'sending', message: 'Sending message...' })

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))

    // Simulate success/error
    const isSuccess = Math.random() > 0.3
    setStatus({
      type: isSuccess ? 'success' : 'error',
      message: isSuccess ? 'Message sent successfully! I\'ll get back to you soon.' : 'Failed to send message. Please try again.'
    })

    if (isSuccess) {
      setFormData({ name: '', email: '', subject: '', message: '' })
    }
  }

  const handleInputChange = (field: keyof FormData) => (value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

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
            Let&apos;s <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to collaborate or have a project in mind? I&apos;d love to hear from you. 
            Let&apos;s discuss how we can work together to build something amazing.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                I&apos;m always interested in new opportunities and exciting projects. 
                Whether you have a question, want to collaborate, or just want to say hi, 
                I&apos;d love to hear from you!
              </p>
            </div>

            <div className="space-y-6">
              <ContactCard
                icon={<Mail className="h-5 w-5 text-primary" />}
                title="Email"
                content="ak2040deau@gmail.com"
                href="mailto:ak2040deau@gmail.com"
              />
              
              <ContactCard
                icon={<Phone className="h-5 w-5 text-primary" />}
                title="Phone"
                content="+61 431906964"
                href="tel:+61431906964"
              />
              
              <ContactCard
                icon={<MapPin className="h-5 w-5 text-primary" />}
                title="Location"
                content="Melbourne, VIC, Australia"
              />
            </div>

            {/* Social Links */}
            <div className="pt-8">
              <h4 className="text-lg font-semibold mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                <ContactCard
                  icon={<Github className="h-5 w-5" />}
                  title="GitHub"
                  content="github.com/Akshit358"
                  href="https://github.com/Akshit358"
                />
                <ContactCard
                  icon={<Linkedin className="h-5 w-5" />}
                  title="LinkedIn"
                  content="linkedin.com/in/akshit-singh-aba4b51a6"
                  href="https://www.linkedin.com/in/akshit-singh-aba4b51a6"
                />
              </div>
            </div>

            {/* Download Resume */}
            <div className="pt-8">
              <ContactCard
                icon={<Download className="h-5 w-5" />}
                title="Download Resume"
                content="Get my latest resume in PDF format"
                onClick={downloadResume}
              />
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-card border border-border rounded-2xl p-8 shadow-lg"
          >
            <h3 className="text-2xl font-semibold mb-6">Send Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <FloatingInput
                label="Full Name"
                value={formData.name}
                onChange={handleInputChange('name')}
                placeholder="Enter your full name"
                icon={<Mail className="h-4 w-4" />}
                required
              />
              
              <FloatingInput
                label="Email Address"
                type="email"
                value={formData.email}
                onChange={handleInputChange('email')}
                placeholder="Enter your email address"
                icon={<Mail className="h-4 w-4" />}
                required
              />
              
              <FloatingInput
                label="Subject"
                value={formData.subject}
                onChange={handleInputChange('subject')}
                placeholder="What's this about?"
                icon={<Mail className="h-4 w-4" />}
                required
              />
              
              <motion.div
                className="relative group"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <textarea
                  value={formData.message}
                  onChange={(e) => handleInputChange('message')(e.target.value)}
                  placeholder="Tell me about your project or just say hello!"
                  required
                  rows={5}
                  className="w-full p-4 bg-card border border-border rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 outline-none resize-none"
                />
                <motion.label
                  className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                    formData.message.length > 0
                      ? 'top-1 text-xs text-primary'
                      : 'top-4 text-muted-foreground'
                  }`}
                  animate={{
                    y: formData.message.length > 0 ? -8 : 0,
                    scale: formData.message.length > 0 ? 0.85 : 1
                  }}
                >
                  Message <span className="text-red-500">*</span>
                </motion.label>
              </motion.div>

              <StatusIndicator status={status} />

              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full group"
                  disabled={status.type === 'sending'}
                >
                  {status.type === 'sending' ? (
                    <motion.div className="flex items-center space-x-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Sending...</span>
                    </motion.div>
                  ) : (
                    <div className="flex items-center space-x-2">
                      <Send className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      <span>Send Message</span>
                    </div>
                  )}
                </Button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
