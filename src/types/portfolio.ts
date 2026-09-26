export interface Profile {
  name: string
  role: string
  headline: string
  bio: string
  location: string
  availability: string
  direction: string[]
}

export interface SocialLinks {
  github: string
  email: string
  linkedin: string
}

export interface EducationItem {
  id: string
  institution: string
  degree: string
  level: 'Graduação' | 'Técnico'
  status: string
  expectedGraduation: string
  focusAreas: string[]
  description: string
}

export interface PillarArticulation {
  area: string
  course: string
  role: string
}

export interface ProjectItem {
  id: string
  title: string
  badge?: string
  shortDescription: string
  problem: string
  solution: string
  role: string
  techStack: string[]
  architectureDecisions: string[]
  features: string[]
  learnings: string[]
  liveUrl: string | null
  repoUrl: string | null
}

export interface TrajectoryHighlight {
  id: string
  year: string
  title: string
  category: string
  organization: string
  description: string
}

export interface SkillCategory {
  category: string
  description: string
  items: string[]
}
