import { 
  NewsletterSubscription, 
  ContactForm, 
  ChatMessage,
  ExpansionRequest,
  DemoRequest,
  ApiResponse 
} from './api-types';

const API_BASE = process.env.NEXT_PUBLIC_API_URL || '';

async function fetchApi<T>(
  endpoint: string, 
  options: RequestInit
): Promise<ApiResponse<T>> {
  try {
    const response = await fetch(`${API_BASE}${endpoint}`, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || 'Something went wrong');
    }

    return { success: true, data };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error occurred'
    };
  }
}

export const api = {
  newsletter: {
    subscribe: (data: NewsletterSubscription) =>
      fetchApi('/api/newsletter', {
        method: 'POST',
        body: JSON.stringify(data),
      }),
  },

  contact: {
    send: (data: ContactForm) =>
      fetchApi('/api/contact', {
        method: 'POST',
        body: JSON.stringify(data),
      }),
  },

  chat: {
    sendMessage: (data: ChatMessage) =>
      fetchApi('/api/chat', {
        method: 'POST',
        body: JSON.stringify(data),
      }),
  },

  expansion: {
    request: (data: ExpansionRequest) =>
      fetchApi('/api/expansion', {
        method: 'POST',
        body: JSON.stringify(data),
      }),
  },

  growthIntelligence: {
    requestDemo: (data: DemoRequest) =>
      fetchApi('/api/growth-intelligence', {
        method: 'POST',
        body: JSON.stringify(data),
      }),
  },
};