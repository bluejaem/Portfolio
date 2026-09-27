export interface ProfileData {
  name: string
  photoUrl: string
  role: string
  headline: string
  bio: string
  location: string
  availability: string
  github: string
  email: string
  linkedin: string
  direction?: string[]
}

export interface FormationDetailGroup {
  title: string
  items: string[]
}

export interface DimensionItem {
  id: string
  title: string
  pillar: string
  institution: string
  role: string
  course: string
  highlights: string[]
  detailGroups?: FormationDetailGroup[]
  courses?: string
  area?: string
}

export interface EducationItem {
  id: string
  institution: string
  degree: string
  level: 'Graduação' | 'Técnico'
  expectedGraduation: string
  status: string
  dimension: string
  topics: string[]
  description?: string
  focusAreas?: string[]
}

export interface ProjectItem {
  id: string
  title: string
  category: string
  badge?: string
  shortDescription: string
  problem?: string
  role?: string
  solution: string
  techStack: string[]
  architecture?: string[]
  architectureDecisions?: string[]
  features?: string[]
  learnings?: string[]
  liveUrl: string | null
  repoUrl: string | null
  imageUrl: string
}

export interface CertificationItem {
  id: string
  title: string
  issuer: string
  year: string
  hours?: string
  category: 'Dados & IA' | 'Computação & Redes' | 'Programação' | 'Idiomas & Gestão'
}

export interface HighlightCertificate {
  id: string
  title: string
  issuer: string
  year: string
  hours: string
  badge: string
  description: string
}

export interface GeneralCertificate {
  id: string
  title: string
  issuer: string
  year: string
  hours: string
  category: 'Dados & IA' | 'Computação, Redes & Hardware' | 'Programação & Web' | 'Idiomas & Comunicação'
}

export interface TrajectoryMilestone {
  year: string
  title: string
  organization: string
  badge: string
  description: string
}

export interface TrajectoryItem {
  id?: string
  year: string
  title: string
  institution?: string
  organization?: string
  category?: string
  description: string
}

export interface SkillCategory {
  category: string
  description: string
  items: string[]
}
