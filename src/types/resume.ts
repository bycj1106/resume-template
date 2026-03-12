export type IconName =
  | 'github'
  | 'linkedin'
  | 'mail'
  | 'external-link'
  | 'code'
  | 'server'
  | 'cloud'
  | 'wrench'
  | 'graduation-cap'
  | 'award';

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface WorkExperience {
  id: string;
  company: string;
  position: string;
  period: string;
  description: string;
  highlights: string[];
}

export interface Project {
  id: string;
  name: string;
  description: string;
  tags: string[];
  image?: string;
  link?: string;
  github?: string;
  featured?: boolean;
}

export interface Skill {
  name: string;
  level: number;
}

export interface SkillCategory {
  name: string;
  icon: string;
  skills: Skill[];
}

export interface Education {
  id: string;
  school: string;
  degree: string;
  period: string;
  description?: string;
}

export interface Award {
  id: string;
  name: string;
  organization: string;
  period: string;
  description?: string;
}

export interface ResumeData {
  name: string;
  title: string;
  avatar: string;
  summary: string;
  about: string[];
  socials: SocialLink[];
  experiences: WorkExperience[];
  workProjects: Project[];
  personalProjects: Project[];
  skills: SkillCategory[];
  education: Education[];
  awards: Award[];
  email: string;
}
