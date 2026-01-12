
import { ServiceDefinition, FieldType } from '../types';

// IMPORTACIÓN MODULAR DE METADATOS
// Separamos la lógica en archivos por categoría para evitar monolitos y facilitar el mantenimiento.
import { infrastructureMetadata } from './metadata/infrastructure';
import { adminMetadata } from './metadata/admin';
import { securityMetadata } from './metadata/security';
import { socialMetadata } from './metadata/social';

export interface ServiceMetadata {
  purpose: string; // ¿Para qué sirve este trámite?
  cost: string; // Formato "$XX.00" o "Gratuito"
  legalBasis?: string; // Opcional: Fundamento legal
  requirementsOverride?: string[]; // Si queremos listar requisitos manuales, si no, se calculan del form
  processTimeDetails?: string; // Detalle extra sobre el Tiempo de Respuesta
}

// CONSOLIDACIÓN DE DICCIONARIOS
const METADATA_DB: Record<string, ServiceMetadata> = {
  ...infrastructureMetadata,
  ...adminMetadata,
  ...securityMetadata,
  ...socialMetadata
};

// HELPER PARA OBTENER METADATOS
// Si el servicio no está en la DB, genera datos genéricos basados en su categoría.
export const getServiceMetadata = (service: ServiceDefinition): ServiceMetadata => {
  const specific = METADATA_DB[service.id];
  if (specific) return specific;

  // Lógica por defecto (Fallback inteligente) para servicios nuevos no catalogados
  let defaultCost = '$0.00';
  if (['Urbanismo', 'Desarrollo Económico', 'Catastro', 'Tránsito y Vialidad', 'Tesorería y Finanzas'].includes(service.category)) {
    defaultCost = 'Según tabulador vigente';
  } else {
    defaultCost = 'Gratuito';
  }

  return {
    purpose: `Trámite oficial para la gestión de ${service.title.toLowerCase()} ante la autoridad municipal.`,
    cost: defaultCost,
    processTimeDetails: 'Sujeto a carga de trabajo de la dependencia.',
  };
};

// HELPER PARA EXTRAER REQUISITOS DEL FORMULARIO EXISTENTE
export const getDynamicRequirements = (service: ServiceDefinition): string[] => {
  // Busca campos tipo FILE en la definición original del servicio
  const fileFields = service.fields.filter(f => f.type === FieldType.FILE);
  return fileFields.map(f => f.label);
};
