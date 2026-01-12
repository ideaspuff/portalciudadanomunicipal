
import React, { useState, FormEvent } from 'react';
import { ServiceDefinition, FieldType } from '../types';
import { ArrowLeft, CheckCircle, UploadCloud, ChevronRight, Info, ShieldCheck } from 'lucide-react';
import { FORM_THEME } from '../styles/formTheme';
import { PORTAL_THEME } from '../styles/theme';

interface ServiceFormProps {
  service: ServiceDefinition;
  onBack: () => void;
  externalOnSuccess?: (ticketId: string) => void; // Nuevo prop para delegar el éxito al padre
}

const ServiceForm: React.FC<ServiceFormProps> = ({ service, onBack, externalOnSuccess }) => {
  const [formData, setFormData] = useState<Record<string, any>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  // Estados legacy para funcionamiento standalone (si se usara sin el orquestador)
  const [isSuccess, setIsSuccess] = useState(false);
  const [ticketId, setTicketId] = useState('');

  const handleInputChange = (name: string, value: any) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const generatedTicket = `FOLIO-${Math.floor(Math.random() * 100000)}`;

    setIsSubmitting(false);

    if (externalOnSuccess) {
        // Si hay un manejador externo (modo Pasos), delegamos
        externalOnSuccess(generatedTicket);
    } else {
        // Modo Legacy (Standalone)
        setTicketId(generatedTicket);
        setIsSuccess(true);
    }
  };

  // --- MODO LEGACY SUCCESS (Solo si no hay orquestador externo) ---
  if (isSuccess && !externalOnSuccess) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-24 text-center animate-fade-in-up">
        {/* ... (Contenido de éxito original mantenido por seguridad) ... */}
        <div className="mx-auto flex items-center justify-center h-28 w-28 rounded-full bg-rose-50 mb-10 shadow-xl shadow-rose-100 ring-8 ring-rose-50/50">
          <CheckCircle className="h-14 w-14 text-rose-600" />
        </div>
        <h2 className="text-4xl font-extrabold text-slate-900 mb-6 tracking-tight">¡Solicitud Recibida!</h2>
        <p className="text-xl text-slate-600 mb-10 max-w-lg mx-auto leading-relaxed">
          Hemos registrado tu solicitud para <strong className="text-rose-700">{service.title}</strong> correctamente.
        </p>
        <p className="text-5xl font-mono font-black text-slate-800 mb-6 tracking-tighter">{ticketId}</p>
        <button onClick={onBack} className="text-rose-700 font-bold text-lg hover:underline">
            &larr; Volver al catálogo
        </button>
      </div>
    );
  }

  return (
    <div className={!externalOnSuccess ? `min-h-screen ${PORTAL_THEME.colors.background}` : ''}>
        
        {/* Banner Superior - SOLO VISIBLE EN MODO STANDALONE (Si no hay orquestador) */}
        {!externalOnSuccess && (
            <div className="bg-rose-950 pb-32 pt-12 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                <div className="max-w-5xl mx-auto px-4 relative z-10">
                    <button onClick={onBack} className="flex items-center text-rose-200 hover:text-white mb-8 transition-colors font-medium bg-white/10 px-5 py-2.5 rounded-full backdrop-blur-sm">
                        <ArrowLeft className="h-4 w-4 mr-2" /> Cancelar
                    </button>
                    <h1 className="text-3xl font-extrabold text-white">{service.title}</h1>
                </div>
            </div>
        )}

      {/* Contenedor del Formulario */}
      {/* Si hay orquestador, quitamos el margen negativo superior para que fluya con el stepper */}
      <div className={`max-w-5xl mx-auto px-4 pb-20 relative z-20 ${!externalOnSuccess ? '-mt-20' : 'animate-fade-in-up'}`}>
        <div className="bg-white shadow-xl rounded-3xl overflow-hidden border border-slate-200/60">
            
            {/* Header interno del formulario si está en modo Pasos */}
            {externalOnSuccess && (
                <div className="bg-slate-50 px-8 py-6 border-b border-slate-100 flex items-center">
                    <div className="mr-4 p-3 bg-white rounded-xl shadow-sm border border-slate-100">
                        <service.icon className="h-6 w-6 text-rose-700" />
                    </div>
                    <div>
                        <h2 className="text-lg font-bold text-slate-900">Formulario de Solicitud</h2>
                        <p className="text-xs text-slate-500">Complete todos los campos requeridos marcados con *</p>
                    </div>
                </div>
            )}

            <form onSubmit={handleSubmit} className="p-8 md:p-12 space-y-8">
            
            {/* Aviso de Seguridad */}
            <div className="bg-rose-50 border border-rose-100 rounded-xl p-4 flex items-start mb-8">
                <ShieldCheck className="h-6 w-6 text-rose-600 mr-3 flex-shrink-0 mt-0.5" />
                <div>
                    <h4 className="text-sm font-bold text-rose-800">Sitio Seguro</h4>
                    <p className="text-sm text-rose-700/80 mt-1">Sus datos son encriptados y protegidos conforme a la Ley de Protección de Datos Personales.</p>
                </div>
            </div>

            {service.fields.map((field, idx) => {
                
                if (field.type === FieldType.SECTION_HEADER) {
                    return (
                        <div key={`section-${idx}`} className={FORM_THEME.sectionContainer}>
                            <h3 className={FORM_THEME.sectionTitle}>{field.label}</h3>
                            {field.helperText && <p className={FORM_THEME.sectionHelper}>{field.helperText}</p>}
                        </div>
                    );
                }

                return (
                <div key={field.name} className={FORM_THEME.fieldContainer}>
                    {field.type !== FieldType.CHECKBOX && (
                        <label htmlFor={field.name} className={FORM_THEME.label}>
                            {field.label} {field.required && <span className={FORM_THEME.requiredAsterisk}>*</span>}
                        </label>
                    )}

                    {field.type === FieldType.TEXT && (
                        <input type="text" id={field.name} required={field.required} placeholder={field.placeholder} readOnly={field.readOnly} defaultValue={field.defaultValue} className={`${FORM_THEME.input} ${field.readOnly ? FORM_THEME.readOnly : ''}`} onChange={(e) => handleInputChange(field.name, e.target.value)} />
                    )}

                    {field.type === FieldType.TEXTAREA && (
                        <textarea id={field.name} required={field.required} rows={4} placeholder={field.placeholder} className={FORM_THEME.textarea} onChange={(e) => handleInputChange(field.name, e.target.value)} />
                    )}

                    {field.type === FieldType.NUMBER && (
                        <input type="number" id={field.name} required={field.required} placeholder={field.placeholder} className={FORM_THEME.input} onChange={(e) => handleInputChange(field.name, e.target.value)} />
                    )}
                    
                    {field.type === FieldType.EMAIL && (
                        <input type="email" id={field.name} required={field.required} placeholder={field.placeholder} className={FORM_THEME.input} onChange={(e) => handleInputChange(field.name, e.target.value)} />
                    )}

                    {field.type === FieldType.SELECT && (
                        <div className="relative">
                            <select id={field.name} required={field.required} className={FORM_THEME.select} onChange={(e) => handleInputChange(field.name, e.target.value)} defaultValue="">
                                <option value="" disabled className="text-gray-400">Selecciona una opción</option>
                                {field.options?.map(opt => (
                                    <option key={opt} value={opt} className="text-slate-900 bg-white py-2">{opt}</option>
                                ))}
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
                                <ChevronRight className="h-5 w-5 rotate-90" />
                            </div>
                        </div>
                    )}

                    {field.type === FieldType.DATE && (
                        <input type="date" id={field.name} required={field.required} className={FORM_THEME.input} onChange={(e) => handleInputChange(field.name, e.target.value)} />
                    )}

                    {field.type === FieldType.FILE && (
                        <div className={FORM_THEME.fileUploadContainer}>
                            <div className="space-y-3 text-center w-full relative z-10">
                                <UploadCloud className={FORM_THEME.fileUploadIcon} />
                                <div className="flex flex-col text-sm text-slate-600 justify-center">
                                <label htmlFor={field.name} className={FORM_THEME.fileUploadText}>
                                    <span>Clic para cargar documento</span>
                                    <input id={field.name} name={field.name} type="file" className="sr-only" required={field.required} onChange={(e) => handleInputChange(field.name, e.target.files?.[0])} />
                                </label>
                                <span className="text-xs text-slate-400 mt-2 font-medium">Formatos aceptados: PDF, JPG (Máx 5MB)</span>
                                </div>
                                {formData[field.name] && (
                                    <div className="flex items-center justify-center mt-4 text-rose-700 bg-rose-50 py-3 px-6 rounded-xl text-sm font-bold border border-rose-200 shadow-sm animate-fade-in-up">
                                        <CheckCircle className="h-5 w-5 mr-2"/>
                                        {formData[field.name].name}
                                    </div>
                                )}
                            </div>
                        </div>
                    )}

                    {field.type === FieldType.CHECKBOX && (
                        <div className={FORM_THEME.checkboxWrapper}>
                            <input id={field.name} name={field.name} type="checkbox" className={FORM_THEME.checkbox} onChange={(e) => handleInputChange(field.name, e.target.checked)} />
                            <label htmlFor={field.name} className={FORM_THEME.checkboxLabel}>{field.label}</label>
                        </div>
                    )}
                    
                    {field.helperText && (
                        <p className={FORM_THEME.helperText}>
                            <Info className="h-3.5 w-3.5 mr-1.5" />
                            {field.helperText}
                        </p>
                    )}
                </div>
                );
            })}

            <div className="pt-10 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4">
                <button
                    type="button"
                    onClick={onBack}
                    className="w-full md:w-auto px-6 py-4 border border-slate-200 text-slate-600 font-bold rounded-xl hover:bg-slate-50 transition-colors"
                >
                    Atrás
                </button>
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`${FORM_THEME.submitButton} md:w-auto md:min-w-[300px]`}
                >
                    {isSubmitting ? 'Procesando...' : 'Firmar Digitalmente y Enviar'}
                </button>
            </div>
            </form>
        </div>
      </div>
    </div>
  );
};

export default ServiceForm;
