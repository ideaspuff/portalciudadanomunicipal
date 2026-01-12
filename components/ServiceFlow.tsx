
import React, { useState } from 'react';
import { ServiceDefinition } from '../types';
import ServiceDetails from './ServiceDetails';
import ServiceForm from './ServiceForm'; // Usamos el form existente para el paso 2
import { CheckCircle, ArrowLeft, Info, Home } from 'lucide-react';
import { PORTAL_THEME } from '../styles/theme';

interface ServiceFlowProps {
  service: ServiceDefinition;
  onExit: () => void;
}

type Step = 'DETAILS' | 'FORM' | 'SUCCESS';

const ServiceFlow: React.FC<ServiceFlowProps> = ({ service, onExit }) => {
  const [currentStep, setCurrentStep] = useState<Step>('DETAILS');
  const [ticketId, setTicketId] = useState<string>('');

  // Lógica para avanzar pasos
  const handleStart = () => {
    setCurrentStep('FORM');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // El ServiceForm existente maneja su propio submit, pero necesitamos interceptar el éxito.
  // Como no queremos modificar la lógica interna del ServiceForm drásticamente,
  // pasaremos un prop especial onSuccess si modificamos ServiceForm, o envolvemos.
  // Nota: ServiceForm actualmente renderiza su propio éxito. Vamos a permitir que ServiceForm
  // haga su trabajo, pero le pasaremos un prop `externalSuccessHandler` para controlar el flujo aquí si es necesario.
  // O mejor, modificamos ServiceForm ligeramente para aceptar un callback `onSuccess` que nos devuelva el ticket.
  
  const handleSuccess = (id: string) => {
    setTicketId(id);
    setCurrentStep('SUCCESS');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={`min-h-screen ${PORTAL_THEME.colors.background}`}>
      
      {/* --- HEADER CON STEPPER --- */}
      <div className="bg-rose-950 pt-8 pb-32 relative overflow-hidden">
         {/* Background decorativo */}
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
         <div className="absolute top-0 right-0 w-96 h-96 bg-rose-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>

         <div className="max-w-5xl mx-auto px-4 relative z-10">
            {/* Nav Superior */}
            <div className="flex justify-between items-center mb-10">
                <button 
                    onClick={onExit}
                    className="flex items-center text-rose-200 hover:text-white transition-colors text-sm font-medium bg-white/5 hover:bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm"
                >
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Cancelar y Salir
                </button>
                <div className="text-white/50 text-xs font-mono uppercase tracking-widest">
                    ID: {service.id}
                </div>
            </div>

            {/* Stepper Visual */}
            <div className="flex items-center justify-between relative mb-8 px-4 md:px-12">
                {/* Línea conectora */}
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-full h-1 bg-rose-900/50 -z-0"></div>
                
                {/* Step 1 */}
                <div className={`relative z-10 flex flex-col items-center transition-all duration-500 ${currentStep === 'DETAILS' ? 'scale-110' : 'opacity-80'}`}>
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm border-4 transition-colors duration-500 ${
                        currentStep === 'DETAILS' 
                            ? 'bg-white text-rose-800 border-rose-400' 
                            : currentStep === 'FORM' || currentStep === 'SUCCESS'
                                ? 'bg-rose-500 text-white border-rose-600'
                                : 'bg-rose-900 text-rose-400 border-rose-800'
                    }`}>
                        {currentStep === 'FORM' || currentStep === 'SUCCESS' ? <CheckCircle className="h-5 w-5" /> : '1'}
                    </div>
                    <span className={`mt-2 text-xs font-bold tracking-wider uppercase transition-colors ${currentStep === 'DETAILS' ? 'text-white' : 'text-rose-300'}`}>Información</span>
                </div>

                {/* Step 2 */}
                <div className={`relative z-10 flex flex-col items-center transition-all duration-500 ${currentStep === 'FORM' ? 'scale-110' : 'opacity-80'}`}>
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm border-4 transition-colors duration-500 ${
                        currentStep === 'FORM' 
                            ? 'bg-white text-rose-800 border-rose-400' 
                            : currentStep === 'SUCCESS'
                                ? 'bg-rose-500 text-white border-rose-600'
                                : 'bg-rose-900 text-rose-400 border-rose-800'
                    }`}>
                        {currentStep === 'SUCCESS' ? <CheckCircle className="h-5 w-5" /> : '2'}
                    </div>
                    <span className={`mt-2 text-xs font-bold tracking-wider uppercase transition-colors ${currentStep === 'FORM' ? 'text-white' : 'text-rose-300'}`}>Solicitud</span>
                </div>

                {/* Step 3 */}
                <div className={`relative z-10 flex flex-col items-center transition-all duration-500 ${currentStep === 'SUCCESS' ? 'scale-110' : 'opacity-80'}`}>
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm border-4 transition-colors duration-500 ${
                        currentStep === 'SUCCESS' 
                            ? 'bg-white text-emerald-600 border-emerald-400' 
                            : 'bg-rose-900 text-rose-400 border-rose-800'
                    }`}>
                        3
                    </div>
                    <span className={`mt-2 text-xs font-bold tracking-wider uppercase transition-colors ${currentStep === 'SUCCESS' ? 'text-white' : 'text-rose-300'}`}>Confirmación</span>
                </div>
            </div>
         </div>
      </div>

      {/* --- CONTENIDO PRINCIPAL --- */}
      <div className="-mt-20 relative z-20">
        {currentStep === 'DETAILS' && (
            <ServiceDetails 
                service={service} 
                onStart={handleStart} 
                onBack={onExit} 
            />
        )}

        {currentStep === 'FORM' && (
            <ServiceForm 
                service={service} 
                onBack={() => setCurrentStep('DETAILS')}
                externalOnSuccess={handleSuccess} // Prop nuevo que añadiremos a ServiceForm
            />
        )}

        {currentStep === 'SUCCESS' && (
            <div className="max-w-3xl mx-auto px-4 py-12 animate-fade-in-up">
                <div className="bg-white rounded-3xl shadow-2xl p-10 md:p-16 text-center border border-slate-100">
                    <div className="mx-auto flex items-center justify-center h-32 w-32 rounded-full bg-rose-50 mb-8 shadow-inner ring-8 ring-rose-50/50">
                        <CheckCircle className="h-16 w-16 text-rose-600" />
                    </div>
                    <h2 className="text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">¡Solicitud Recibida!</h2>
                    <p className="text-lg text-slate-600 mb-10 max-w-lg mx-auto leading-relaxed">
                        Hemos registrado tu solicitud para <strong className="text-rose-700">{service.title}</strong> correctamente en nuestro sistema.
                    </p>
                    
                    <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 inline-block text-left w-full max-w-md relative overflow-hidden group mb-12">
                        <div className="absolute top-0 left-0 w-1 h-full bg-rose-500"></div>
                        <p className="text-xs text-slate-400 uppercase tracking-[0.2em] font-bold mb-2">Tu número de folio</p>
                        <p className="text-4xl font-mono font-black text-slate-800 tracking-tighter">{ticketId}</p>
                        <div className="mt-4 pt-4 border-t border-slate-200 flex items-start">
                             <Info className="h-4 w-4 text-rose-500 mr-2 mt-0.5" />
                             <p className="text-xs text-slate-500">Conserva este número para consultar el estatus de tu trámite posteriormente.</p>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <button 
                            onClick={onExit} // Volver al catálogo
                            className="w-full sm:w-auto px-8 py-4 bg-rose-700 hover:bg-rose-800 text-white font-bold rounded-xl shadow-lg shadow-rose-900/10 transition-all hover:-translate-y-1 flex items-center justify-center"
                        >
                            <Home className="mr-2 h-5 w-5" />
                            Ir al Inicio
                        </button>
                    </div>
                </div>
            </div>
        )}
      </div>

    </div>
  );
};

export default ServiceFlow;
