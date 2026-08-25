export type ScreenView = 'home' | 'case-studies' | 'projects' | 'about' | 'contact';

export interface Project {
  id: string;
  title: string;
  category: string;
  categoryTag: string;
  year: string;
  description: string;
  longDescription: string;
  tags: string[];
  image: string;
  client: string;
  role: string;
  deliverables: string[];
  metrics: { label: string; value: string }[];
  accentColor?: string;
  offset?: boolean;
}

export interface LabExperiment {
  id: string;
  expNumber: string;
  title: string;
  subtitle: string;
  description: string;
  type: 'audio-reactive' | 'kinetic-type' | 'glsl-shader' | '3d-mesh';
  image?: string;
  codeSnippet: string;
}

export interface ArsenalItem {
  id: string;
  category: string;
  title: string;
  description: string;
  iconName: string;
  fluidityScore?: number;
  highlight?: boolean;
  colSpan?: string;
}

export interface TransmissionLog {
  id: string;
  designation: string;
  email: string;
  subject: string;
  payload: string;
  timestamp: string;
  frequency: string;
  status: 'SENT' | 'ENCRYPTED' | 'ACKNOWLEDGED';
}
