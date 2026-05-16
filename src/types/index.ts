export interface AsIsToBe {
  asIs: string;
  toBe: string;
}

export interface Subsection {
  title: string;
  description?: string;
  asIsToBe?: AsIsToBe;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  period: string;
  platform?: string;
  links?: { label: string; url: string }[];
  logo?: string;
  image?: string;
  overview: string;
  role: string;
  roleDetails: string[];
  skills: string[];
  subsections: Subsection[];
  retrospective?: string;
}

export interface OtherProject {
  title: string;
  period: string;
  role: string;
  description: string;
  contributions: string[];
  extra?: string;
  links?: { label: string; url: string }[];
}

export interface OpenSourceItem {
  date: string;
  repo: string;
  description: string;
}
