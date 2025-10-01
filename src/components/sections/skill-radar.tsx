"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Canvas, useFrame } from "@react-three/fiber"
import { Text, Sphere, MeshDistortMaterial } from "@react-three/drei"
import * as THREE from "three"

interface SkillData {
  name: string
  level: number
  color: string
  position: [number, number, number]
}

const skills: SkillData[] = [
  { name: "Java", level: 95, color: "#f97316", position: [2, 1, 0] },
  { name: "React", level: 88, color: "#3b82f6", position: [-2, 1, 0] },
  { name: "Python", level: 88, color: "#eab308", position: [0, 2, 0] },
  { name: "Node.js", level: 80, color: "#22c55e", position: [0, -2, 0] },
  { name: "AWS", level: 80, color: "#f59e0b", position: [1.5, 0, 1.5] },
  { name: "Docker", level: 85, color: "#06b6d4", position: [-1.5, 0, 1.5] },
  { name: "TypeScript", level: 85, color: "#8b5cf6", position: [0, 0, 2] },
  { name: "PostgreSQL", level: 90, color: "#6366f1", position: [0, 0, -2] },
]

function SkillOrb({ skill, index }: { skill: SkillData; index: number }) {
  const meshRef = React.useRef<THREE.Mesh>(null)
  const [hovered, setHovered] = React.useState(false)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01
      meshRef.current.rotation.x += 0.005
      meshRef.current.position.y = skill.position[1] + Math.sin(state.clock.elapsedTime + index) * 0.1
    }
  })

  return (
    <group position={skill.position}>
      <Sphere
        ref={meshRef}
        args={[0.3 + (skill.level / 100) * 0.2, 32, 32]}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <MeshDistortMaterial
          color={skill.color}
          attach="material"
          distort={hovered ? 0.4 : 0.1}
          speed={hovered ? 2 : 1}
          roughness={0.1}
          metalness={0.8}
        />
      </Sphere>
      <Text
        position={[0, 0.8, 0]}
        fontSize={0.2}
        color="white"
        anchorX="center"
        anchorY="middle"
        visible={hovered}
      >
        {skill.name}
      </Text>
      <Text
        position={[0, 0.6, 0]}
        fontSize={0.15}
        color={skill.color}
        anchorX="center"
        anchorY="middle"
        visible={hovered}
      >
        {skill.level}%
      </Text>
    </group>
  )
}

function SkillRadar3D() {
  return (
    <div className="w-full h-96">
      <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <pointLight position={[-10, -10, -10]} color="#3b82f6" />
        
        {skills.map((skill, index) => (
          <SkillOrb key={skill.name} skill={skill} index={index} />
        ))}
        
        {/* Central connecting lines */}
        {skills.map((skill, index) => (
          <mesh key={`line-${index}`}>
            <cylinderGeometry args={[0.01, 0.01, 4]} />
            <meshBasicMaterial color="#3b82f6" opacity={0.3} transparent />
          </mesh>
        ))}
      </Canvas>
    </div>
  )
}

export function SkillRadar() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="w-full"
    >
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold mb-4">Interactive 3D Skills Visualization</h3>
        <p className="text-muted-foreground">
          Hover over the orbs to explore my technical expertise in 3D space
        </p>
      </div>
      <SkillRadar3D />
    </motion.div>
  )
}
