export interface ClubPlan {
  id: number;
  name: string;
  fullPrice: number;
  color: string;
  category: string;
  badge?: string;
  description: string;
  features: string[];
  sampleGyms: string[];
}

export interface SimulatorState {
  employees: number;
  adhesionRate: number; // percentage, e.g. 25
  coparticipation: number; // in R$, e.g. 40
}

export interface Modality {
  id: string;
  name: string;
  iconName: string;
  count: string;
  description: string;
}

export interface GymPartner {
  id: string;
  name: string;
  city: string;
  state: string;
  modality: string;
  minClub: number;
  rating: number;
  badge?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  company: string;
  employeesCount: string;
  economy: string;
  quote: string;
  avatarUrl: string;
}
