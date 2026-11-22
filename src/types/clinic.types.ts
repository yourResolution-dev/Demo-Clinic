export interface Speciality {
  id: string;
  name: string;
  slug: string;
  iconName: string;
  description: string;
  doctorCount: number;
  commonConditions: string[];
  procedures: string[];
  highlights: string[];
}

export interface Doctor {
  id: string;
  name: string;
  title: string;
  speciality: string;
  specialityId: string;
  experienceYears: number;
  rating: number;
  reviewsCount: number;
  image: string;
  qualifications: string;
  education: string;
  bio: string;
  availableDays: string[];
  opdTiming: string;
  consultationFee: string;
  languages: string[];
  badge?: string;
}

export interface Facility {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  features: string[];
  availability: string;
  inCharge: string;
}

export interface Testimonial {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  feedback: string;
  treatment: string;
  doctorConsulted?: string;
  date: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'Appointment' | 'Emergency' | 'Diagnostics' | 'Insurance' | 'Billing';
}

export interface HealthPackage {
  id: string;
  name: string;
  tag: string;
  price: string;
  originalPrice: string;
  testsCount: number;
  description: string;
  includes: string[];
  recommendedFor: string;
}

export interface AppointmentFormData {
  fullName: string;
  phone: string;
  email?: string;
  speciality: string;
  preferredDoctor: string;
  preferredDate: string;
  preferredTime: string;
  notes?: string;
}

export interface AppointmentConfirmation {
  bookingId: string;
  formData: AppointmentFormData;
  timestamp: string;
  doctorName?: string;
  specialityName?: string;
}
