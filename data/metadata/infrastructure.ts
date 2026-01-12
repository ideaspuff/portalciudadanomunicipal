
import { ServiceMetadata } from '../serviceMetadata';

export const infrastructureMetadata: Record<string, ServiceMetadata> = {
  // --- URBANISMO ---
  'alineamiento_numero': {
    purpose: 'Oficializar los límites de su propiedad y asignar el número oficial para la contratación de servicios públicos.',
    cost: '$452.00 MXN',
    legalBasis: 'Ley de Hacienda Municipal Art. 24',
    processTimeDetails: 'Requiere inspección física por parte de topógrafos municipales.',
  },
  'licencia_construccion_mayor': {
    purpose: 'Autorización legal para realizar obras mayores a 60m2, asegurando el cumplimiento de normas estructurales.',
    cost: '$12.50 MXN por m2',
    legalBasis: 'Reglamento de Construcción Municipal Art. 45',
  },
  'ruptura_pavimento': {
    purpose: 'Permiso para realizar excavaciones en la vía pública necesarias para instalaciones subterráneas.',
    cost: '$850.00 MXN (Base)',
    processTimeDetails: 'El costo varía según los metros cuadrados afectados y el material (concreto o asfalto).',
  },
  'terminacion_obra': {
    purpose: 'Certificar que una obra fue concluida conforme al proyecto autorizado, requisito para habitar.',
    cost: '$1,200.00 MXN',
    processTimeDetails: 'Sujeto a visita final de inspección.',
  },
  'construccion_menor': {
    purpose: 'Permiso simplificado para bardas, cisternas o cuartos pequeños (menos de 60m2).',
    cost: '$450.00 MXN',
  },
  'bacheo': {
    purpose: 'Solicitud para la reparación de baches que afectan el tránsito vehicular.',
    cost: 'Gratuito',
    processTimeDetails: 'Prioridad alta en avenidas principales.',
  },
  'alumbrado': {
    purpose: 'Reporte de fallas en el sistema de iluminación pública (lámparas fundidas o postes dañados).',
    cost: 'Gratuito',
  },
  'fugas': {
    purpose: 'Atención urgente a desperdicios de agua potable en la red pública o tomas domiciliarias.',
    cost: 'Gratuito',
  },
  'drenaje': {
    purpose: 'Solicitud de camión vactor para limpieza de alcantarillas o registros obstruidos.',
    cost: 'Gratuito (Uso doméstico)',
    processTimeDetails: 'Depende de la disponibilidad de unidades Vactor.',
  },
  'pipa_agua': {
    purpose: 'Abastecimiento de agua potable en zonas con baja presión o desabasto temporal.',
    cost: 'Gratuito (Zona vulnerable) / $300 (Zona residencial)',
  },

  // --- ECOLOGÍA ---
  'recoleccion_basura': {
    purpose: 'Reporte de fallas en la ruta de recolección de residuos sólidos urbanos.',
    cost: 'Gratuito',
  },
  'limpieza_lote': {
    purpose: 'Denuncia sanitaria para obligar a propietarios a limpiar terrenos baldíos.',
    cost: 'Gratuito',
    legalBasis: 'Reglamento de Ecología y Medio Ambiente',
  },
  'poda_derribo': {
    purpose: 'Autorización para intervenir arbolado urbano, garantizando la salud vegetal y seguridad.',
    cost: '$200.00 MXN (Dictamen)',
    processTimeDetails: 'Requiere dictamen técnico previo de un biólogo municipal.',
  },
  'control_animal': {
    purpose: 'Atención a reportes de maltrato animal o perros agresivos en vía pública.',
    cost: 'Gratuito',
  },
  'mantenimiento_parques': {
    purpose: 'Solicitud de limpieza y mantenimiento de áreas verdes públicas.',
    cost: 'Gratuito',
  },
  'descacharrizacion': {
    purpose: 'Recolección especial de muebles viejos y cacharros para prevenir dengue.',
    cost: 'Gratuito',
    processTimeDetails: 'Se programa ruta específica por colonia.',
  },
  'denuncia_ambiental': {
    purpose: 'Reporte de actos que dañan el medio ambiente como quemas o ruido excesivo.',
    cost: 'Gratuito',
  },
  'donacion_plantas': {
    purpose: 'Adopción de árboles nativos para reforestación doméstica.',
    cost: 'Gratuito',
  }
};
