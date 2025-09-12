"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

interface Skill {
  name: string
  level: number
  category: string
  icon: string
  color: string
  description: string
}

const skills: Skill[] = [
  {
    name: "Python",
    level: 95,
    category: "Programming",
    icon: "🐍",
    color: "from-yellow-400 to-orange-500",
    description: "Advanced Python development with data science, AI/ML, and automation"
  },
  {
    name: "Java",
    level: 90,
    category: "Programming",
    icon: "☕",
    color: "from-orange-500 to-red-500",
    description: "Object-oriented programming, Spring framework, and enterprise applications"
  },
  {
    name: "JavaScript",
    level: 88,
    category: "Programming",
    icon: "🟨",
    color: "from-yellow-400 to-yellow-600",
    description: "Modern ES6+, async programming, and full-stack development"
  },
  {
    name: "React",
    level: 85,
    category: "Frontend",
    icon: "⚛️",
    color: "from-blue-400 to-blue-600",
    description: "Component-based UI development with hooks and state management"
  },
  {
    name: "Node.js",
    level: 80,
    category: "Backend",
    icon: "🟢",
    color: "from-green-500 to-green-700",
    description: "Server-side JavaScript with Express and API development"
  },
  {
    name: "AWS",
    level: 85,
    category: "Cloud",
    icon: "☁️",
    color: "from-orange-400 to-orange-600",
    description: "EC2, IAM, S3, and cloud infrastructure management"
  },
  {
    name: "Docker",
    level: 75,
    category: "DevOps",
    icon: "🐳",
    color: "from-blue-400 to-cyan-500",
    description: "Containerization and deployment automation"
  },
  {
    name: "TensorFlow",
    level: 70,
    category: "AI/ML",
    icon: "🧠",
    color: "from-purple-400 to-purple-600",
    description: "Machine learning and deep learning model development"
  },
  {
    name: "MongoDB",
    level: 80,
    category: "Database",
    icon: "🍃",
    color: "from-green-400 to-green-600",
    description: "NoSQL database design and management"
  },
  {
    name: "Flutter",
    level: 75,
    category: "Mobile",
    icon: "📱",
    color: "from-blue-500 to-cyan-500",
    description: "Cross-platform mobile app development"
  },
  {
    name: "Git",
    level: 90,
    category: "Tools",
    icon: "📝",
    color: "from-gray-600 to-gray-800",
    description: "Version control and collaborative development"
  },
  {
    name: "Cybersecurity",
    level: 70,
    category: "Security",
    icon: "🔒",
    color: "from-red-400 to-red-600",
    description: "Ethical hacking, OWASP, and security best practices"
  }
]

const categories = ["All", "Programming", "Frontend", "Backend", "Cloud", "DevOps", "AI/ML", "Database", "Mobile", "Tools", "Security"]

export function Skills() {
  const [selectedCategory, setSelectedCategory] = React.useState("All")
  const [hoveredSkill, setHoveredSkill] = React.useState<string | null>(null)

  const filteredSkills = skills.filter(skill => 
    selectedCategory === "All" || skill.category === selectedCategory
  )

  const getLevelColor = (level: number) => {
    if (level >= 90) return "from-green-400 to-green-600"
    if (level >= 80) return "from-blue-400 to-blue-600"
    if (level >= 70) return "from-yellow-400 to-yellow-600"
    return "from-red-400 to-red-600"
  }

  const getLevelText = (level: number) => {
    if (level >= 90) return "Expert"
    if (level >= 80) return "Advanced"
    if (level >= 70) return "Intermediate"
    return "Beginner"
  }

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise across programming languages, 
            cloud computing, cybersecurity, and modern development frameworks.
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
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 hover:scale-105",
                selectedCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              )}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <div className="relative p-6 bg-card border border-border rounded-lg hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                {/* Skill Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{skill.icon}</span>
                    <div>
                      <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                        {skill.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">{skill.category}</p>
                    </div>
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {getLevelText(skill.level)}
                  </Badge>
                </div>

                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-muted-foreground">Proficiency</span>
                    <span className="font-medium">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                    <motion.div
                      className={cn("h-full bg-gradient-to-r", getLevelColor(skill.level))}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                    />
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {skill.description}
                </p>

                {/* Hover Effect */}
                {hoveredSkill === skill.name && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="absolute inset-0 bg-primary/5 rounded-lg pointer-events-none"
                  />
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">Fresh</div>
            <div className="text-muted-foreground">Graduate Ready</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">12+</div>
            <div className="text-muted-foreground">Technologies Mastered</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">15+</div>
            <div className="text-muted-foreground">Projects Completed</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
