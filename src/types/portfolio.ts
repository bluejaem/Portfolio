export interface Profile {
  name: string
  title: string
  location: string
  email: string
  phone: string
  summary: string
  availability: string
}

export interface SocialLink {
  label: string
  href: string
  icon: string
}

export interface Skill {
  name: string
  category: string
  level?: 'Fundamental' | 'Intermediário' | 'Avançado'
}

export interface Project {
  name: string
  summary: string
  description: string
  tags: string[]
  featured?: boolean
  link?: string
  repository?: string
}

export interface Education {
  institution: string
  degree: string
  period: string
  description: string
}

export interface Certification {
  name: string
  issuer: string
  year: string
  credential?: string
}
