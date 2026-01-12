
import { ServiceMetadata } from '../serviceMetadata';

export const adminMetadata: Record<string, ServiceMetadata> = {
  // --- DESARROLLO ECONÓMICO ---
  'sare': {
    purpose: 'Obtención expedita de licencia municipal para negocios de bajo riesgo.',
    cost: '$850.00 MXN',
    processTimeDetails: 'Emisión en 72 horas si cumple todos los requisitos.',
  },
  'licencia_funcionamiento': {
    purpose: 'Autorización legal para operar comercios, industrias o servicios de alto impacto.',
    cost: 'Variable según giro y m2',
    legalBasis: 'Ley de Ingresos Municipal Vigente',
  },
  'venta_temporada': {
    purpose: 'Permiso temporal para ejercer comercio en vía pública en fechas festivas.',
    cost: '$150.00 MXN por día',
  },
  'espectaculos_publicos': {
    purpose: 'Permiso para realizar eventos con cobro de entrada y venta de alcohol.',
    cost: '12% del boletaje total + Derechos',
    legalBasis: 'Reglamento de Espectáculos Públicos',
  },
  'permiso_anuncios': {
    purpose: 'Regularización de publicidad exterior visible desde la vía pública.',
    cost: '$450.00 MXN por m2',
  },
  'renovacion_licencia': {
    purpose: 'Actualización anual obligatoria del padrón de licencias comerciales.',
    cost: 'Variable según giro',
  },
  'padron_proveedores': {
    purpose: 'Registro oficial para poder vender productos o servicios al Ayuntamiento.',
    cost: '$1,200.00 MXN (Anual)',
  },
  'comercio_via_publica': {
    purpose: 'Regularización de puestos semifijos en tianguis y mercados.',
    cost: '$25.00 MXN por metro diario',
  },

  // --- TESORERÍA ---
  'convenio_predial': {
    purpose: 'Facilidad administrativa para pagar adeudos de predial en parcialidades.',
    cost: 'Gratuito (El trámite)',
    processTimeDetails: 'Se requiere pago inicial del 30% del adeudo.',
  },
  'licencia_alcoholes': {
    purpose: 'Refrendo anual de la licencia para venta y consumo de bebidas alcohólicas.',
    cost: 'Variable según giro (Ej. Abarrotes vs Bar)',
    legalBasis: 'Ley de Alcoholes del Estado',
  },
  'baja_licencia': {
    purpose: 'Notificación oficial de cierre de negocio para detener cobros fiscales.',
    cost: '$150.00 MXN',
  },
  'pago_lo_indebido': {
    purpose: 'Devolución de cantidades pagadas indebidamente al fisco municipal.',
    cost: 'Gratuito',
  },
  'constancia_fiscal_municipal': {
    purpose: 'Acreditación de situación fiscal al corriente con el municipio.',
    cost: '$180.00 MXN',
  },

  // --- CATASTRO ---
  'predial': {
    purpose: 'Corrección de datos erróneos en el padrón catastral.',
    cost: 'Gratuito',
  },
  'certificado_adeudo': {
    purpose: 'Certifica la existencia o inexistencia de adeudos prediales (Para Notarías).',
    cost: '$230.00 MXN',
  },
  'traslado_dominio': {
    purpose: 'Impuesto y registro por cambio de propietario de un bien inmueble.',
    cost: '2% del valor de operación',
    legalBasis: 'Ley de Hacienda Municipal',
  },
  'manifestacion_construccion': {
    purpose: 'Declaración de mejoras al inmueble para actualizar su valor catastral.',
    cost: 'Gratuito (Si es voluntario)',
  },
  'deslinde_catastral': {
    purpose: 'Verificación oficial de medidas y colindancias de un predio.',
    cost: '$600.00 MXN',
  }
};
