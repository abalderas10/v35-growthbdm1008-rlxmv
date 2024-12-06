import { create } from 'zustand';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

interface ChatState {
  isOpen: boolean;
  messages: Message[];
  setOpen: (open: boolean) => void;
  addMessage: (message: Message) => void;
  addWelcomeMessage: (content: string) => void;
  clearMessages: () => void;
}

export const useChatStore = create<ChatState>((set) => ({
  isOpen: false,
  messages: [],
  setOpen: (open) => set({ isOpen: open }),
  addMessage: (message) => set((state) => ({ 
    messages: [...state.messages, message] 
  })),
  addWelcomeMessage: (content) => set(() => ({
    isOpen: true,
    messages: [{ role: 'assistant', content }]
  })),
  clearMessages: () => set({ messages: [] })
}));