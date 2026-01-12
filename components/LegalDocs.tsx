
import React from 'react';
import { ArrowLeft, Shield, Scale, FileText, Lock } from 'lucide-react';
import { PORTAL_THEME } from '../styles/theme';

interface LegalDocsProps {
  type: 'privacy' | 'terms';
  onBack: () => void;
}

const LegalDocs: React.FC<LegalDocsProps> = ({ type, onBack }) => {
  const isPrivacy = type === 'privacy';

  return (
    <div className="min-h-screen bg-slate-50 animate-fade-in-up">
      {/* Header Institucional - Usamos bg-rose-900 explícito para asegurar que se genere el color vino */}
      <div className="bg-rose-900 sticky top-0 z-30 shadow-md">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <button 
            onClick={onBack}
            className="flex items-center text-rose-100 hover:text-white font-medium transition-colors"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Volver
          </button>
          <div className="flex items-center text-white font-bold text-lg tracking-tight">
             {isPrivacy ? <Shield className="h-5 w-5 mr-2 text-rose-200" /> : <Scale className="h-5 w-5 mr-2 text-rose-200" />}
             {isPrivacy ? 'Aviso de Privacidad' : 'Términos y Condiciones'}
          </div>
          <div className="w-20"></div> {/* Spacer for centering */}
        </div>
      </div>

      {/* Content Container */}
      <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-16 border border-slate-200">
            
            {/* Título del Documento */}
            <div className="text-center mb-12 border-b border-slate-200 pb-8">
                {/* Texto negro (slate-900) explícito para alto contraste */}
                <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
                    {isPrivacy ? 'Aviso de Privacidad Integral' : 'Términos y Condiciones de Uso'}
                </h1>
                <p className="text-slate-900 text-lg max-w-2xl mx-auto font-medium">
                    {isPrivacy 
                        ? 'En cumplimiento con la Ley General de Protección de Datos Personales en Posesión de Sujetos Obligados.'
                        : 'Reglas generales para el uso de la Ventanilla Única Digital Municipal.'
                    }
                </p>
                <p className="text-xs text-rose-600 mt-4 uppercase tracking-widest font-bold">
                    Última actualización: {new Date().getFullYear()}
                </p>
            </div>

            {/* Contenido Dinámico con Alto Contraste 
                Usamos clases estáticas para asegurar que prose tome los colores correctos 
            */}
            <div className="prose prose-lg prose-slate max-w-none text-slate-900 
                prose-headings:text-slate-900 
                prose-p:text-slate-900 
                prose-li:text-slate-900
                prose-strong:text-slate-900
                prose-a:text-rose-600 hover:prose-a:text-rose-800">
                
                {isPrivacy ? (
                    <>
                        <h3>1. Identidad y Domicilio del Responsable</h3>
                        <p>
                            El <strong>H. Ayuntamiento Constitucional</strong> (en adelante "El Municipio"), a través de sus diversas dependencias administrativas, es el responsable del tratamiento de los datos personales que nos proporcione, los cuales serán protegidos conforme a lo dispuesto por la <strong>Ley General de Protección de Datos Personales en Posesión de Sujetos Obligados</strong> y demás normatividad que resulte aplicable.
                        </p>

                        <h3>2. Datos Personales que se recaban</h3>
                        <p>
                            Para llevar a cabo las gestiones y trámites municipales disponibles en esta plataforma digital, utilizaremos los siguientes datos personales, dependiendo de la naturaleza específica del servicio solicitado:
                        </p>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-base mt-4 mb-6 list-none pl-0">
                            <li className="flex items-start"><FileText className="h-5 w-5 mr-2 mt-1 text-rose-600 flex-shrink-0"/> <span><strong>Datos de Identificación:</strong> Nombre completo, CURP, fecha de nacimiento, firma autógrafa digitalizada.</span></li>
                            <li className="flex items-start"><FileText className="h-5 w-5 mr-2 mt-1 text-rose-600 flex-shrink-0"/> <span><strong>Datos de Contacto:</strong> Domicilio particular, número de teléfono celular o fijo, correo electrónico.</span></li>
                            <li className="flex items-start"><FileText className="h-5 w-5 mr-2 mt-1 text-rose-600 flex-shrink-0"/> <span><strong>Datos Patrimoniales:</strong> RFC, información catastral, escrituras de propiedad, datos de vehículos.</span></li>
                            <li className="flex items-start"><FileText className="h-5 w-5 mr-2 mt-1 text-rose-600 flex-shrink-0"/> <span><strong>Datos Fiscales:</strong> Domicilio fiscal, régimen fiscal, constancia de situación fiscal.</span></li>
                        </ul>
                        
                        <div className="p-6 rounded-xl border border-rose-200 bg-rose-50 not-prose">
                            <p className="m-0 text-sm font-bold text-rose-600">Datos Sensibles</p>
                            <p className="m-0 mt-2 text-sm text-slate-900">
                                Se informa que, para ciertos trámites específicos de <em>Salud Municipal</em> o <em>Bienestar Social</em>, se podrán recabar datos sensibles relacionados con el estado de salud presente o futuro, discapacidades o situación socioeconómica vulnerable, los cuales serán tratados bajo medidas de seguridad estrictas.
                            </p>
                        </div>

                        <h3>3. Finalidades del Tratamiento</h3>
                        <p>Los datos personales que recabamos los utilizaremos para las siguientes finalidades necesarias para el servicio que solicita:</p>
                        <ul>
                            <li>Gestionar, tramitar y dar seguimiento a las solicitudes de servicios públicos municipales (licencias, permisos, reportes, etc.).</li>
                            <li>Verificar y validar la identidad del solicitante y la veracidad de la información proporcionada.</li>
                            <li>Integrar los expedientes administrativos y padrones municipales correspondientes.</li>
                            <li>Notificar sobre el estatus de sus trámites, así como enviar resoluciones o prevenciones.</li>
                            <li>Fines estadísticos y de mejora en la calidad del servicio (previo procedimiento de disociación).</li>
                        </ul>

                        <h3>4. Transferencia de Datos</h3>
                        <p>
                            Se informa que no se realizarán transferencias de datos personales, salvo aquéllas que sean necesarias para atender requerimientos de información de una autoridad competente, que estén debidamente fundados y motivados, o bien, aquellas transferencias previstas en los artículos 22, 66 y 70 de la Ley General de Protección de Datos Personales en Posesión de Sujetos Obligados.
                        </p>

                        <h3>5. Ejercicio de Derechos ARCO</h3>
                        <p>
                            Usted tiene derecho a conocer qué datos personales tenemos de usted, para qué los utilizamos y las condiciones del uso que les damos (<strong>Acceso</strong>). Asimismo, es su derecho solicitar la corrección de su información personal en caso de que esté desactualizada, sea inexacta o incompleta (<strong>Rectificación</strong>); que la eliminemos de nuestros registros o bases de datos cuando considere que la misma no está siendo utilizada conforme a los principios, deberes y obligaciones previstas en la normativa (<strong>Cancelación</strong>); así como oponerse al uso de sus datos personales para fines específicos (<strong>Oposición</strong>).
                        </p>
                        <p>
                            Para el ejercicio de cualquiera de los derechos ARCO, usted podrá presentar solicitud por escrito ante la Unidad de Transparencia Municipal o a través de la Plataforma Nacional de Transparencia.
                        </p>

                        <h3>6. Cambios al Aviso de Privacidad</h3>
                        <p>
                            El presente aviso de privacidad puede sufrir modificaciones, cambios o actualizaciones derivadas de nuevos requerimientos legales o de nuestras propias necesidades por los servicios que ofrecemos. Nos comprometemos a mantenerlo informado sobre los cambios que pueda sufrir el presente aviso a través de este mismo portal.
                        </p>
                    </>
                ) : (
                    <>
                        <h3>1. Aceptación de los Términos</h3>
                        <p>
                            Al acceder y utilizar el Portal de Servicios Municipales, el ciudadano (en adelante "El Usuario") acepta los presentes Términos y Condiciones de Uso. Si no está de acuerdo con alguno de estos términos, le sugerimos abstenerse de utilizar la plataforma.
                        </p>

                        <h3>2. Uso del Portal</h3>
                        <p>
                            Esta plataforma tiene como objetivo facilitar la gestión de trámites y servicios municipales de manera digital. El Usuario se compromete a utilizar el portal únicamente para fines lícitos y relacionados con la administración pública municipal.
                        </p>

                        <h3>3. Veracidad de la Información</h3>
                        <div className="flex items-start p-6 bg-amber-50 border border-amber-200 rounded-xl mb-8 not-prose">
                            <Lock className="h-6 w-6 text-amber-700 mr-4 flex-shrink-0 mt-1" />
                            <div>
                                <h4 className="text-amber-900 font-bold text-base mb-2">Declaración Bajo Protesta de Decir Verdad</h4>
                                <p className="text-amber-950 text-base m-0 leading-relaxed">
                                    El Usuario declara que toda la información y documentación proporcionada a través de los formularios digitales es verídica, auténtica y corresponde a su situación real. El Municipio se reserva el derecho de verificar la información y, en caso de detectar falsedad, cancelar el trámite e iniciar las acciones legales correspondientes.
                                </p>
                            </div>
                        </div>

                        <h3>4. Responsabilidad y Disponibilidad</h3>
                        <p>
                            El Municipio realiza sus mejores esfuerzos para mantener la disponibilidad y funcionamiento del portal las 24 horas del día. Sin embargo, no garantiza la disponibilidad continua e ininterrumpida del servicio debido a posibles fallas técnicas, mantenimiento o causas de fuerza mayor. El Municipio no será responsable por daños o perjuicios derivados del uso o imposibilidad de uso del portal.
                        </p>

                        <h3>5. Propiedad Intelectual</h3>
                        <p>
                            Los logotipos, escudos, textos, diseños e interfaces contenidos en este sitio son propiedad del Ayuntamiento o se utilizan con autorización. Queda prohibida su reproducción total o parcial con fines de lucro o ajenos a la difusión institucional sin autorización expresa.
                        </p>

                        <h3>6. Notificaciones Electrónicas</h3>
                        <p>
                            El Usuario acepta recibir notificaciones relacionadas con sus trámites a través del correo electrónico proporcionado o mediante el tablero de avisos dentro de la plataforma, las cuales surtirán efectos legales conforme a la normativa municipal aplicable.
                        </p>

                        <h3>7. Legislación Aplicable</h3>
                        <p>
                            Para la interpretación y cumplimiento de los presentes términos, así como para todo lo no previsto en los mismos, las partes se someten a las leyes y reglamentos municipales y estatales vigentes, así como a la jurisdicción de los tribunales competentes de la entidad federativa correspondiente.
                        </p>
                    </>
                )}
            </div>
            
            <div className="mt-12 pt-10 border-t border-slate-200 flex justify-center">
                <button 
                    onClick={onBack}
                    className="px-10 py-4 bg-rose-900 text-white font-bold rounded-xl shadow-lg shadow-rose-900/20 hover:brightness-110 transition-transform hover:-translate-y-0.5 text-lg"
                >
                    Entendido, volver al portal
                </button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default LegalDocs;
