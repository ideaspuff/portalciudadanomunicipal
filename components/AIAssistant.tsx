
import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Sparkles, AlertCircle } from 'lucide-react';
import { identifyService } from '../services/geminiService';
import { SERVICES } from '../constants';

interface AIAssistantProps {
    onServiceRecommended: (serviceId: string) => void;
}

const AIAssistant: React.FC<AIAssistantProps> = ({ onServiceRecommended }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<{role: 'user' | 'assistant', text: string, type?: 'text' | 'recommendation', serviceId?: string}[]>([
        { role: 'assistant', text: '¡Hola! Soy tu asistente virtual. Cuéntame qué necesitas hacer o qué problema tienes en tu colonia.' }
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isOpen]);

    const handleSend = async () => {
        if (!input.trim() || isLoading) return;

        const userMsg = input;
        setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
        setInput('');
        setIsLoading(true);

        // Call Gemini Service
        const result = await identifyService(userMsg);

        setIsLoading(false);

        if (result.serviceId) {
            const service = SERVICES.find(s => s.id === result.serviceId);
            setMessages(prev => [
                ...prev, 
                { 
                    role: 'assistant', 
                    text: result.reasoning || `Parece que necesitas el servicio: ${service?.title}.`, 
                    type: 'recommendation',
                    serviceId: result.serviceId!
                }
            ]);
        } else {
            setMessages(prev => [
                ...prev, 
                { 
                    role: 'assistant', 
                    text: result.reasoning || "No estoy seguro de qué trámite necesitas. ¿Podrías darme más detalles?",
                    type: 'text'
                }
            ]);
        }
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') handleSend();
    };

    return (
        <div className="fixed bottom-6 right-6 z-50">
            {/* Toggle Button */}
            {!isOpen && (
                <button 
                    onClick={() => setIsOpen(true)}
                    className="flex items-center justify-center h-16 w-16 rounded-full bg-gradient-to-r from-rose-600 to-rose-800 text-white shadow-2xl hover:scale-110 transition-all border-4 border-white/20"
                >
                    <MessageSquare className="h-7 w-7" />
                </button>
            )}

            {/* Chat Window */}
            {isOpen && (
                <div className="bg-white w-80 sm:w-96 rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-rose-100 animate-fade-in-up ring-1 ring-black/5" style={{maxHeight: '600px', height: '80vh'}}>
                    {/* Header */}
                    <div className="bg-gradient-to-r from-rose-900 to-rose-800 p-5 flex items-center justify-between">
                        <div className="flex items-center text-white">
                            <div className="bg-white/10 p-1.5 rounded-lg mr-2">
                                <Sparkles className="h-5 w-5 text-rose-200" />
                            </div>
                            <span className="font-bold tracking-tight">Asistente Ciudadano</span>
                        </div>
                        <button onClick={() => setIsOpen(false)} className="text-rose-200 hover:text-white transition-colors bg-white/10 rounded-full p-1 hover:bg-white/20">
                            <X className="h-5 w-5" />
                        </button>
                    </div>

                    {/* Messages Area */}
                    <div className="flex-1 overflow-y-auto p-5 bg-slate-50 space-y-5">
                        {messages.map((msg, idx) => (
                            <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                <div className={`max-w-[85%] rounded-2xl px-5 py-3.5 text-sm shadow-sm ${
                                    msg.role === 'user' 
                                        ? 'bg-rose-600 text-white rounded-br-none' 
                                        : 'bg-white text-slate-700 border border-slate-100 rounded-bl-none'
                                }`}>
                                    <p className="leading-relaxed">{msg.text}</p>
                                    
                                    {/* Action Button for Recommendations */}
                                    {msg.type === 'recommendation' && msg.serviceId && (
                                        <button 
                                            onClick={() => {
                                                onServiceRecommended(msg.serviceId!);
                                                setIsOpen(false);
                                            }}
                                            className="mt-4 w-full bg-rose-50 text-rose-800 font-bold py-2.5 rounded-xl hover:bg-rose-100 transition-colors text-xs flex items-center justify-center border border-rose-100"
                                        >
                                            Ir al trámite
                                            <Send className="h-3 w-3 ml-2" />
                                        </button>
                                    )}
                                </div>
                            </div>
                        ))}
                        {isLoading && (
                            <div className="flex justify-start">
                                <div className="bg-white rounded-2xl px-4 py-3 shadow-sm border border-slate-100 rounded-bl-none">
                                    <div className="flex space-x-1.5">
                                        <div className="w-2 h-2 bg-rose-400 rounded-full animate-bounce" style={{animationDelay: '0ms'}}></div>
                                        <div className="w-2 h-2 bg-rose-400 rounded-full animate-bounce" style={{animationDelay: '150ms'}}></div>
                                        <div className="w-2 h-2 bg-rose-400 rounded-full animate-bounce" style={{animationDelay: '300ms'}}></div>
                                    </div>
                                </div>
                            </div>
                        )}
                        {!process.env.API_KEY && (
                            <div className="flex justify-center mt-4">
                                <div className="bg-amber-50 text-amber-800 text-xs px-3 py-2 rounded-lg flex items-center border border-amber-100">
                                    <AlertCircle className="h-4 w-4 mr-2"/>
                                    Sin API Key configurada
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input Area */}
                    <div className="p-4 bg-white border-t border-slate-100">
                        <div className="flex items-center space-x-2 bg-slate-50 p-1.5 rounded-full border border-slate-200 focus-within:border-rose-300 focus-within:ring-2 focus-within:ring-rose-100 transition-all">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={handleKeyPress}
                                placeholder="Escribe tu consulta..."
                                className="flex-1 bg-transparent px-4 py-2 text-sm focus:outline-none text-slate-800 placeholder-slate-400"
                            />
                            <button 
                                onClick={handleSend}
                                disabled={!input.trim() || isLoading}
                                className="bg-rose-600 text-white p-2.5 rounded-full hover:bg-rose-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all hover:scale-105 shadow-md"
                            >
                                <Send className="h-4 w-4" />
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AIAssistant;
