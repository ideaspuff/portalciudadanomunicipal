import { GoogleGenAI, Type, Schema } from "@google/genai";
import { SERVICES } from "../constants";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

// Intent Detection Model
const INTENT_MODEL = "gemini-3-flash-preview"; 

export const identifyService = async (userInput: string): Promise<{ serviceId: string | null; reasoning: string }> => {
  if (!process.env.API_KEY) {
    console.warn("API Key not found");
    return { serviceId: null, reasoning: "Servicio de IA no disponible." };
  }

  const serviceList = SERVICES.map(s => `- ID: ${s.id}, Nombre: ${s.title}, Descripción: ${s.description}`).join('\n');

  const prompt = `
    Eres un asistente virtual de un ayuntamiento en México. Tu trabajo es ayudar a los ciudadanos a identificar qué trámite necesitan realizar basándote en su descripción.
    
    Lista de Servicios Disponibles:
    ${serviceList}

    El usuario dice: "${userInput}"

    Identifica el ID del servicio más apropiado. Si ninguno coincide claramente, devuelve null.
    Explica brevemente tu razonamiento en español.
  `;

  const schema: Schema = {
    type: Type.OBJECT,
    properties: {
      serviceId: {
        type: Type.STRING,
        description: "El ID exacto del servicio de la lista proporcionada, o null si no hay coincidencia.",
        nullable: true,
      },
      reasoning: {
        type: Type.STRING,
        description: "Una explicación breve y amable para el ciudadano de por qué seleccionaste ese servicio.",
      },
    },
    required: ["reasoning"],
  };

  try {
    const response = await ai.models.generateContent({
      model: INTENT_MODEL,
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: schema,
      },
    });

    const text = response.text;
    if (!text) throw new Error("No response from AI");
    
    return JSON.parse(text);
  } catch (error) {
    console.error("Error identifying service:", error);
    return { serviceId: null, reasoning: "Lo siento, tuve un problema analizando tu solicitud." };
  }
};

export const chatWithAssistant = async (history: { role: string; text: string }[], newMessage: string): Promise<string> => {
    // Basic chat function for general questions
    try {
        const chat = ai.chats.create({
            model: INTENT_MODEL,
            config: {
                systemInstruction: "Eres un asistente amable y formal de un ayuntamiento mexicano. Ayudas a la gente con dudas sobre trámites municipales. Responde de forma concisa.",
            }
        });
        
        // Feed history manually if needed, but for simplicity in this stateless example, we just send the new message with context if possible, 
        // or rely on a fresh request. Here we assume a single turn for simplicity or we could rebuild history.
        // For this demo, let's just generate content based on the last prompt.
        
        const response = await ai.models.generateContent({
            model: INTENT_MODEL,
            contents: `El usuario pregunta: "${newMessage}". Responde amablemente como funcionario público.`,
        });
        
        return response.text || "Lo siento, no puedo responder en este momento.";
    } catch (e) {
        return "Error de conexión con el asistente.";
    }
}