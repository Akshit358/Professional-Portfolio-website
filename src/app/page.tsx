import { EnhancedHero } from "@/components/sections/enhanced-hero"
import { About } from "@/components/sections/about"
import { Skills } from "@/components/sections/skills"
import { SkillRadar } from "@/components/sections/skill-radar"
import { InteractiveProjects } from "@/components/sections/interactive-projects"
import { InteractiveTimeline } from "@/components/sections/interactive-timeline"
import { Certifications } from "@/components/sections/certifications"
import { InteractiveContact } from "@/components/sections/interactive-contact"
import { ScrollProgress } from "@/components/layout/scroll-progress"

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <EnhancedHero />
      <About />
      <Skills />
      <SkillRadar />
      <InteractiveProjects />
      <InteractiveTimeline />
      <Certifications />
      <InteractiveContact />
    </>
  )
}
