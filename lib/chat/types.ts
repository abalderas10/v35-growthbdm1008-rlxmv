export interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export interface ChatState {
  isOpen: boolean;
  messages: Message[];
  setOpen: (open: boolean) => void;
  addMessage: (message: Message) => void;
  addWelcomeMessage: (content: string) => void;
  clearMessages: () => void;
}