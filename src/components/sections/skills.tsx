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
    name: "Java",
    level: 95,
    category: "Programming",
    icon: "☕",
    color: "from-orange-500 to-red-500",
    description: "Object-oriented programming, Spring framework, and enterprise applications"
  },
  {
    name: "Spring Boot",
    level: 90,
    category: "Frameworks",
    icon: "🌱",
    color: "from-green-500 to-green-700",
    description: "Enterprise-grade microservices and REST API development"
  },
  {
    name: "Python",
    level: 88,
    category: "Programming",
    icon: "🐍",
    color: "from-yellow-400 to-orange-500",
    description: "Data science, automation, and backend development"
  },
  {
    name: "JavaScript",
    level: 85,
    category: "Programming",
    icon: "🟨",
    color: "from-yellow-400 to-yellow-600",
    description: "Modern ES6+, async programming, and full-stack development"
  },
  {
    name: "TypeScript",
    level: 85,
    category: "Programming",
    icon: "🔷",
    color: "from-blue-500 to-blue-700",
    description: "Type-safe JavaScript for scalable applications"
  },
  {
    name: "React.js",
    level: 88,
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
    name: "Next.js",
    level: 85,
    category: "Frontend",
    icon: "▲",
    color: "from-gray-600 to-gray-800",
    description: "React framework for production-ready applications"
  },
  {
    name: "Express.js",
    level: 80,
    category: "Backend",
    icon: "🚀",
    color: "from-green-400 to-green-600",
    description: "Fast, unopinionated web framework for Node.js"
  },
  {
    name: "Django",
    level: 75,
    category: "Backend",
    icon: "🎯",
    color: "from-green-600 to-green-800",
    description: "High-level Python web framework for rapid development"
  },
  {
    name: "PostgreSQL",
    level: 90,
    category: "Database",
    icon: "🐘",
    color: "from-blue-600 to-blue-800",
    description: "Advanced relational database with ACID compliance"
  },
  {
    name: "MongoDB",
    level: 85,
    category: "Database",
    icon: "🍃",
    color: "from-green-400 to-green-600",
    description: "NoSQL document database for scalable applications"
  },
  {
    name: "MySQL",
    level: 80,
    category: "Database",
    icon: "🐬",
    color: "from-orange-500 to-orange-700",
    description: "Relational database management system"
  },
  {
    name: "Redis",
    level: 75,
    category: "Database",
    icon: "🔴",
    color: "from-red-500 to-red-700",
    description: "In-memory data structure store for caching"
  },
  {
    name: "Docker",
    level: 85,
    category: "DevOps",
    icon: "🐳",
    color: "from-blue-400 to-cyan-500",
    description: "Containerization and deployment automation"
  },
  {
    name: "Kubernetes",
    level: 80,
    category: "DevOps",
    icon: "⚙️",
    color: "from-blue-500 to-blue-700",
    description: "Container orchestration and management"
  },
  {
    name: "Git",
    level: 90,
    category: "Tools",
    icon: "🐙",
    color: "from-orange-500 to-red-500",
    description: "Version control and collaborative development"
  },
  {
    name: "GitHub Actions",
    level: 85,
    category: "DevOps",
    icon: "⚡",
    color: "from-gray-600 to-gray-800",
    description: "CI/CD automation and workflow management"
  },
  {
    name: "AWS",
    level: 80,
    category: "Cloud",
    icon: "☁️",
    color: "from-orange-400 to-orange-600",
    description: "Cloud infrastructure and services"
  },
  {
    name: "Vercel",
    level: 85,
    category: "DevOps",
    icon: "▲",
    color: "from-gray-700 to-black",
    description: "Frontend deployment and hosting platform"
  },
  {
    name: "Apache Kafka",
    level: 80,
    category: "Tools",
    icon: "🚀",
    color: "from-red-500 to-red-700",
    description: "Distributed streaming platform for real-time data"
  },
  {
    name: "REST APIs",
    level: 90,
    category: "Backend",
    icon: "🔗",
    color: "from-blue-500 to-blue-700",
    description: "RESTful web service design and implementation"
  },
  {
    name: "GraphQL",
    level: 75,
    category: "Backend",
    icon: "🔷",
    color: "from-pink-500 to-purple-500",
    description: "Query language for APIs and runtime"
  },
  {
    name: "Microservices",
    level: 85,
    category: "Architecture",
    icon: "🏗️",
    color: "from-indigo-500 to-purple-500",
    description: "Distributed system architecture design"
  },
  {
    name: "OAuth",
    level: 80,
    category: "Security",
    icon: "🔐",
    color: "from-green-500 to-blue-500",
    description: "Authorization framework for secure access"
  },
  {
    name: "JWT",
    level: 85,
    category: "Security",
    icon: "🎫",
    color: "from-purple-500 to-pink-500",
    description: "JSON Web Token for secure authentication"
  },
  {
    name: "JUnit",
    level: 85,
    category: "Testing",
    icon: "🧪",
    color: "from-green-500 to-green-700",
    description: "Unit testing framework for Java applications"
  },
  {
    name: "Mockito",
    level: 80,
    category: "Testing",
    icon: "🎭",
    color: "from-blue-500 to-blue-700",
    description: "Mocking framework for Java unit tests"
  },
  {
    name: "Jest",
    level: 80,
    category: "Testing",
    icon: "✨",
    color: "from-orange-500 to-red-500",
    description: "JavaScript testing framework"
  },
  {
    name: "Cypress",
    level: 75,
    category: "Testing",
    icon: "🌲",
    color: "from-green-500 to-green-700",
    description: "End-to-end testing framework"
  },
  {
    name: "Testcontainers",
    level: 70,
    category: "Testing",
    icon: "📦",
    color: "from-blue-500 to-blue-700",
    description: "Integration testing with Docker containers"
  },
  {
    name: "C++",
    level: 75,
    category: "Programming",
    icon: "💻",
    color: "from-blue-600 to-blue-800",
    description: "System programming and performance optimization"
  },
  {
    name: "SQL",
    level: 85,
    category: "Database",
    icon: "📊",
    color: "from-blue-500 to-blue-700",
    description: "Database query language and optimization"
  },
  {
    name: "HTML/CSS",
    level: 90,
    category: "Frontend",
    icon: "🌐",
    color: "from-orange-500 to-pink-500",
    description: "Web markup and styling languages"
  },
  {
    name: "Three.js",
    level: 80,
    category: "Frontend",
    icon: "🎮",
    color: "from-purple-500 to-pink-500",
    description: "3D graphics library for web applications"
  },
  {
    name: "Framer Motion",
    level: 85,
    category: "Frontend",
    icon: "🎬",
    color: "from-pink-500 to-purple-500",
    description: "Animation library for React applications"
  }
]

const categories = ["All", "Programming", "Frameworks", "Frontend", "Backend", "Database", "DevOps", "Cloud", "Tools", "Architecture", "Security", "Testing"]

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
    <section id="skills" className="py-20 bg-background">
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
