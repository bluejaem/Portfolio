export interface ProfileData {
  name: string
  role: string
  headline: string
  bio: string
  location: string
  availability: string
  direction?: string[]
}

export interface DimensionItem {
  id: string
  title: string
  pillar: string
  role: string
  courses: string
  highlights: string[]
  area?: string
  course?: string
}

export interface EducationItem {
  id: string
  institution: string
  degree: string
  level: 'Graduação' | 'Técnico'
  expectedGraduation: string
  status: string
  dimension: string
  description: string
  topics: string[]
  focusAreas?: string[]
}

export interface ProjectItem {
  id: string
  title: string
  badge: string
  shortDescription: string
  problem: string
  solution: string
  techStack: string[]
  architecture: string[]
  features: string[]
  liveUrl: string | null
  repoUrl: string | null
  role?: string
  architectureDecisions?: string[]
  learnings?: string[]
}

export interface TrajectoryItem {
  id?: string
  year: string
  title: string
  institution: string
  category: string
  description: string
  organization?: string
}

export interface SkillCategory {
  category: string
  description: string
  items: string[]
}
