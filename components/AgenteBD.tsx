'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, MinusSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useChatStore } from '@/lib/chat';

const AgenteBD = () => {
  const [inputMessage, setInputMessage] = useState('');
  const [isMinimized, setIsMinimized] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { isOpen, messages, setOpen, addMessage } = useChatStore();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    addMessage({ role: 'user', content: inputMessage });
    setInputMessage('');

    // Simulated AI response
    setTimeout(() => {
      addMessage({
        role: 'assistant',
        content: 'Gracias por tu mensaje. Soy el Agente BD, ¿cómo puedo ayudarte hoy? Estoy aquí para asistirte con información sobre nuestros servicios, agendar reuniones o responder cualquier pregunta que tengas.'
      });
    }, 1000);
  };

  const toggleChat = () => {
    if (!isOpen) {
      setOpen(true);
      setIsMinimized(false);
    } else {
      setIsMinimized(!isMinimized);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <AnimatePresence>
        {isOpen && !isMinimized && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="bg-white rounded-lg shadow-xl w-80 mb-4"
          >
            <div className="bg-blue-600 text-white p-4 rounded-t-lg flex justify-between items-center">
              <h3 className="font-semibold">Agente BD</h3>
              <div className="flex gap-2">
                <MinusSquare
                  className="w-5 h-5 cursor-pointer hover:text-blue-200"
                  onClick={() => setIsMinimized(true)}
                />
                <X
                  className="w-5 h-5 cursor-pointer hover:text-blue-200"
                  onClick={() => setOpen(false)}
                />
              </div>
            </div>
            
            <div className="h-96 overflow-y-auto p-4 bg-gray-50">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`mb-4 ${
                    message.role === 'user' ? 'text-right' : 'text-left'
                  }`}
                >
                  <div
                    className={`inline-block p-3 rounded-lg ${
                      message.role === 'user'
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-200 text-gray-800'
                    }`}
                  >
                    {message.content}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            <div className="p-4 border-t">
              <div className="flex gap-2">
                <Input
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Escribe tu mensaje..."
                  className="flex-grow"
                />
                <Button onClick={handleSendMessage}>
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Button
        onClick={toggleChat}
        className="bg-blue-600 hover:bg-blue-700 rounded-full p-3 h-auto"
      >
        <MessageSquare className="w-6 h-6" />
      </Button>
    </div>
  );
};

export default AgenteBD;