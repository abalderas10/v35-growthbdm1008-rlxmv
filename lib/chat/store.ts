import { create } from 'zustand';
import { ChatState, Message } from './types';

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