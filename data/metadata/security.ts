
import { ServiceMetadata } from '../serviceMetadata';

export const securityMetadata: Record<string, ServiceMetadata> = {
  // --- TRÁNSITO Y VIALIDAD ---
  'multas': {
    purpose: 'Gestión administrativa para el pago o impugnación de infracciones viales.',
    cost: 'Variable según infracción',
    processTimeDetails: 'Pagos se reflejan de inmediato. Calificaciones toman 24 horas.',
  },
  'permiso_carga': {
    purpose: 'Autorización para circulación de vehículos pesados en zonas restringidas.',
    cost: '$350.00 MXN por día',
  },
  'estacionamiento_exclusivo': {
    purpose: 'Asignación de espacio exclusivo en vía pública para uso particular o comercial.',
    cost: '$2,500.00 MXN por metro lineal (Anual)',
  },
  'senaletica': {
    purpose: 'Solicitud para instalación de dispositivos de control de tráfico (topes, señales).',
    cost: 'Gratuito',
    processTimeDetails: 'Sujeto a dictamen de ingeniería vial.',
  },
  'semaforos': {
    purpose: 'Reporte de fallas en la red de semáforos municipal.',
    cost: 'Gratuito',
  },
  'obstruccion_vial': {
    purpose: 'Solicitud de intervención de tránsito para liberar cocheras o vías bloqueadas.',
    cost: 'Gratuito (El servicio de grúa lo paga el infractor)',
  },
  'copia_parte_accidente': {
    purpose: 'Obtención de copia certificada del peritaje de un accidente vial.',
    cost: '$180.00 MXN',
  },
  'permiso_circular_sin_placas': {
    purpose: 'Permiso provisional para circular sin láminas por 30 días.',
    cost: '$400.00 MXN',
  },
  'constancia_no_infraccion': {
    purpose: 'Documento que avala no tener adeudos por multas de tránsito.',
    cost: '$120.00 MXN',
  },

  // --- SEGURIDAD PÚBLICA ---
  'reporte_seguridad': {
    purpose: 'Canal directo para reportar situaciones de riesgo no urgentes.',
    cost: 'Gratuito',
  },
  'vigilancia_especial': {
    purpose: 'Solicitud de rondines preventivos por ausencia temporal o eventos.',
    cost: 'Gratuito',
  },
  'registro_bicicletas': {
    purpose: 'Registro preventivo de propiedad de bicicletas.',
    cost: 'Gratuito',
  },
  'queja_policial': {
    purpose: 'Mecanismo para denunciar malas prácticas de servidores públicos de seguridad.',
    cost: 'Gratuito',
  },
  'pre_denuncia': {
    purpose: 'Constancia administrativa de hechos por extravío de documentos.',
    cost: 'Gratuito',
  },
  'boton_panico_comercio': {
    purpose: 'Conexión de alarma silenciosa al C4 municipal.',
    cost: 'Gratuito (Requiere equipo compatible)',
  },

  // --- PROTECCIÓN CIVIL ---
  'visto_bueno_pc': {
    purpose: 'Certificación de cumplimiento de medidas de seguridad en establecimientos.',
    cost: 'Variable según m2 y riesgo',
    legalBasis: 'Reglamento de Protección Civil',
  },
  'analisis_riesgo': {
    purpose: 'Estudio de factibilidad para nuevos proyectos de construcción.',
    cost: 'Variable según magnitud',
  },
  'capacitacion_pc': {
    purpose: 'Cursos oficiales de brigadas de emergencia para empresas.',
    cost: '$500.00 MXN por persona',
  },
  'inspeccion_eventos': {
    purpose: 'Supervisión de seguridad para eventos masivos.',
    cost: 'Variable según aforo',
  }
};
