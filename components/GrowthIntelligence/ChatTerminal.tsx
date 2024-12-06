'use client';

import { Sparkles, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const ChatTerminal = () => {
  return (
    <div className="flex flex-col md:flex-row gap-8 bg-white rounded-lg shadow-lg p-6">
      <div className="md:w-2/3">
        <div className="bg-gray-50 rounded-lg h-[500px] flex flex-col">
          {/* Header */}
          <div className="px-4 py-3 border-b flex items-center gap-2">
            <div className="bg-blue-600 rounded-full p-1">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <span className="text-sm font-medium text-gray-700">Asistente IA</span>
          </div>

          {/* Chat Area */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4">
            <div className="flex items-start gap-3">
              <div className="bg-blue-600 rounded-full p-1.5">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <div className="bg-gray-100 rounded-lg p-3 text-gray-700 max-w-[80%]">
                Hola, soy tu asistente de Growth Business Development. Estoy aquí para ayudarte con cualquier consulta sobre desarrollo de negocios, estrategias de crecimiento o soluciones tecnológicas. ¿En qué puedo asistirte hoy?
              </div>
            </div>
          </div>

          {/* Input Area */}
          <div className="p-4 border-t">
            <div className="flex gap-2">
              <Input 
                type="text" 
                placeholder="Escribe tu mensaje..." 
                className="flex-grow bg-white border-gray-200"
              />
              <Button className="bg-blue-600 hover:bg-blue-700 px-4">
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="md:w-1/3 flex flex-col justify-center">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          Prueba Nuestro Asistente IA
        </h3>
        <p className="text-gray-600 mb-6">
          Experimenta el poder de la inteligencia artificial aplicada al desarrollo de negocios. Nuestro asistente está listo para responder tus preguntas y ayudarte a explorar soluciones para tu empresa.
        </p>
        <ul className="space-y-2 text-gray-600">
          <li className="flex items-center gap-2">
            <div className="w-1 h-1 bg-blue-600 rounded-full"></div>
            Consulta sobre estrategias de crecimiento
          </li>
          <li className="flex items-center gap-2">
            <div className="w-1 h-1 bg-blue-600 rounded-full"></div>
            Obtén información sobre nuestros servicios
          </li>
          <li className="flex items-center gap-2">
            <div className="w-1 h-1 bg-blue-600 rounded-full"></div>
            Resuelve dudas técnicas al instante
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ChatTerminal;