
import React from 'react';
import { ServiceDefinition } from '../types';
import { getServiceMetadata, getDynamicRequirements } from '../data/serviceMetadata';
import { Clock, BadgeDollarSign, FileText, Info, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { PORTAL_THEME } from '../styles/theme';

interface ServiceDetailsProps {
  service: ServiceDefinition;
  onStart: () => void;
  onBack: () => void;
}

const ServiceDetails: React.FC<ServiceDetailsProps> = ({ service, onStart, onBack }) => {
  const metadata = getServiceMetadata(service);
  const requirements = getDynamicRequirements(service);

  return (
    <div className="max-w-5xl mx-auto px-4 pb-20 animate-fade-in-up">
      {/* Header de la Ficha */}
      <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100 mb-8">
        <div className="bg-slate-50 border-b border-slate-100 p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="p-4 bg-white rounded-2xl shadow-md border border-slate-100">
                <service.icon className="h-10 w-10 text-rose-700" />
            </div>
            <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                    <span className="px-3 py-1 rounded-full bg-rose-100 text-rose-800 text-xs font-bold uppercase tracking-wide border border-rose-200">
                        {service.category}
                    </span>
                    <span className="flex items-center text-slate-500 text-xs font-medium">
                        <Clock className="h-3.5 w-3.5 mr-1" />
                        Tiempo de Respuesta: {service.sla}
                    </span>
                </div>
                <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-2">{service.title}</h1>
                <p className="text-slate-600 text-lg leading-relaxed">{service.description}</p>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-100">
            {/* Propósito */}
            <div className="p-8">
                <div className="flex items-center mb-4">
                    <Info className="h-6 w-6 text-rose-500 mr-3" />
                    <h3 className="font-bold text-slate-900">¿Para qué sirve?</h3>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                    {metadata.purpose}
                </p>
                {metadata.legalBasis && (
                    <p className="mt-4 text-xs text-slate-400 italic">
                        Fundamento Legal: {metadata.legalBasis}
                    </p>
                )}
            </div>

            {/* Costo */}
            <div className="p-8">
                <div className="flex items-center mb-4">
                    <BadgeDollarSign className="h-6 w-6 text-emerald-600 mr-3" />
                    <h3 className="font-bold text-slate-900">Costo del Trámite</h3>
                </div>
                <div className="flex items-baseline">
                    <span className="text-3xl font-black text-slate-800 tracking-tight">{metadata.cost}</span>
                </div>
                <p className="text-xs text-slate-500 mt-2">
                    * Precios sujetos a la Ley de Ingresos vigente. Pueden aplicar cargos adicionales por recargos.
                </p>
            </div>

            {/* Tiempo */}
            <div className="p-8">
                <div className="flex items-center mb-4">
                    <Clock className="h-6 w-6 text-blue-500 mr-3" />
                    <h3 className="font-bold text-slate-900">Tiempo de Respuesta</h3>
                </div>
                <p className="text-lg font-bold text-slate-800">{service.sla}</p>
                <p className="text-sm text-slate-500 mt-1">{metadata.processTimeDetails || 'Tiempo estimado en días hábiles sujeto a carga de trabajo.'}</p>
            </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Columna Izquierda: Requisitos */}
        <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl shadow-lg border border-slate-100 p-8">
                <div className="flex items-center mb-6">
                    <FileText className="h-6 w-6 text-rose-600 mr-3" />
                    <h3 className="text-xl font-bold text-slate-900">Documentación Requerida</h3>
                </div>
                
                {requirements.length > 0 ? (
                    <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                        <p className="text-sm text-slate-500 mb-4 font-medium">Deberá adjuntar los siguientes documentos digitalizados (PDF o JPG):</p>
                        <ul className="space-y-3">
                            {requirements.map((req, idx) => (
                                <li key={idx} className="flex items-start">
                                    <CheckCircle2 className="h-5 w-5 text-rose-500 mr-3 mt-0.5 flex-shrink-0" />
                                    <span className="text-slate-700 font-medium">{req}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ) : (
                    <div className="bg-slate-50 rounded-2xl p-6 text-center text-slate-500">
                        Este trámite no requiere documentación adjunta inicial.
                    </div>
                )}

                <div className="mt-8 flex items-start p-4 bg-amber-50 rounded-xl border border-amber-100">
                    <ShieldCheck className="h-5 w-5 text-amber-600 mr-3 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-amber-800">
                        <strong>Importante:</strong> Al hacer clic en "Iniciar Trámite", usted declara que la información proporcionada será verídica. El uso indebido de documentos oficiales es un delito sancionado por la ley.
                    </p>
                </div>
            </div>
        </div>

        {/* Columna Derecha: Acciones */}
        <div className="lg:col-span-1">
            <div className="bg-gradient-to-b from-rose-50 to-white rounded-3xl shadow-lg border border-rose-100 p-8 sticky top-24">
                <h3 className="text-lg font-bold text-slate-900 mb-2">¿Listo para comenzar?</h3>
                <p className="text-sm text-slate-500 mb-6">
                    Tenga a la mano sus documentos digitalizados para agilizar el proceso.
                </p>
                
                <button
                    onClick={onStart}
                    className="w-full flex items-center justify-center py-4 px-6 bg-rose-700 hover:bg-rose-800 text-white font-bold rounded-xl shadow-lg shadow-rose-900/20 transform transition-all hover:-translate-y-1 active:scale-95 text-lg group"
                >
                    Iniciar Trámite
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                    onClick={onBack}
                    className="w-full mt-4 py-3 px-6 bg-white border border-slate-200 text-slate-600 font-semibold rounded-xl hover:bg-slate-50 hover:text-rose-700 transition-colors"
                >
                    Volver al catálogo
                </button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
