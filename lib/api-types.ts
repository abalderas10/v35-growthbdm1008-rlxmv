export interface NewsletterSubscription {
  email: string;
}

export interface ContactForm {
  name: string;
  email: string;
  company?: string;
  message: string;
}

export interface ChatMessage {
  message: string;
  sessionId: string;
}

export interface ExpansionRequest {
  serviceType: string;
  industry: string;
  budget: number;
  details?: string;
}

export interface DemoRequest {
  requestType: 'demo' | 'trial' | 'consultation';
  email: string;
  details?: string;
  company?: string;
}

export type ApiResponse<T> = {
  success: boolean;
  data?: T;
  error?: string;
};