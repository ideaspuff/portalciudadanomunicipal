import { Landmark, FileText, BadgeDollarSign, Scale, Store, Receipt } from 'lucide-react';
import { ServiceDefinition, FieldType } from '../../types';
import { commonPersonalFields, commonAddressFields, commonFiscalFields } from '../common/userModel';

export const tesoreriaServices: ServiceDefinition[] = [
  {
    id: 'convenio_predial',
    title: 'Convenio de Pago Predial',
    description: 'Solicitud de pago en parcialidades para adeudos del impuesto predial mayores a un año.',
    category: 'Tesorería y Finanzas',
    icon: BadgeDollarSign,
    sla: '5 días hábiles',
    fields: [
      { name: 'sec_propietario', label: '1. Datos del Propietario', type: FieldType.SECTION_HEADER },
      ...commonPersonalFields,
      
      { name: 'sec_predio', label: '2. Datos del Predio', type: FieldType.SECTION_HEADER },
      { name: 'clave_catastral', label: 'Clave Catastral', type: FieldType.TEXT, required: true },
      ...commonAddressFields,
      
      { name: 'sec_adeudo', label: '3. Reconocimiento de Adeudo', type: FieldType.SECTION_HEADER },
      { name: 'anos_adeudo', label: 'Años adeudados (Aprox)', type: FieldType.NUMBER, required: true },
      { name: 'motivo', label: 'Motivo de la solicitud', type: FieldType.TEXTAREA, required: true, placeholder: 'Explique su situación económica...' },
      { name: 'propuesta', label: 'Propuesta de plazo', type: FieldType.SELECT, options: ['3 Meses', '6 Meses', '9 Meses', '12 Meses'], required: true }
    ]
  },
  {
    id: 'licencia_alcoholes',
    title: 'Refrendo de Licencia de Alcoholes',
    description: 'Pago y actualización anual de la licencia para venta de bebidas alcohólicas.',
    category: 'Tesorería y Finanzas',
    icon: Store,
    sla: '10 días hábiles',
    fields: [
      { name: 'sec_fiscal', label: '1. Datos Fiscales', type: FieldType.SECTION_HEADER },
      ...commonFiscalFields,

      { name: 'sec_licencia', label: '2. Datos de la Licencia', type: FieldType.SECTION_HEADER },
      { name: 'num_licencia', label: 'Número de Licencia', type: FieldType.TEXT, required: true },
      { name: 'giro', label: 'Giro', type: FieldType.SELECT, options: ['Deposito', 'Restaurante-Bar', 'Cantina', 'Supermercado'], required: true },
      
      { name: 'sec_docs', label: '3. Requisitos', type: FieldType.SECTION_HEADER },
      { name: 'licencia_anterior', label: 'Licencia del año anterior', type: FieldType.FILE, required: true },
      { name: 'pago_derechos', label: 'Comprobante de Pago de Derechos', type: FieldType.FILE, required: true },
      { name: 'carta_antecedentes', label: 'Carta de No Antecedentes Penales (Titular)', type: FieldType.FILE, required: true }
    ]
  },
  {
    id: 'baja_licencia',
    title: 'Baja de Licencia Comercial',
    description: 'Trámite para notificar el cierre definitivo de un negocio y detener el cobro de derechos.',
    category: 'Tesorería y Finanzas',
    icon: FileText,
    sla: '3 días hábiles',
    fields: [
      { name: 'sec_contribuyente', label: '1. Datos del Contribuyente', type: FieldType.SECTION_HEADER },
      ...commonFiscalFields,
      
      { name: 'sec_negocio', label: '2. Datos del Negocio', type: FieldType.SECTION_HEADER },
      { name: 'licencia', label: 'Licencia Municipal', type: FieldType.TEXT, required: true },
      { name: 'fecha_cierre', label: 'Fecha de Cierre', type: FieldType.DATE, required: true },
      { name: 'motivo', label: 'Motivo de Baja', type: FieldType.SELECT, options: ['Cierre definitivo', 'Cambio de domicilio', 'Cambio de propietario', 'Quiebra'], required: true },
      
      { name: 'sec_entrega', label: '3. Documentos a devolver', type: FieldType.SECTION_HEADER },
      { name: 'licencia_original', label: 'Foto de licencia original destruida/cancelada', type: FieldType.FILE, required: true },
      { name: 'constancia_no_adeudo', label: 'Constancia de No Adeudo', type: FieldType.FILE, required: true }
    ]
  },
  {
    id: 'pago_lo_indebido',
    title: 'Solicitud de Devolución (Pago de lo Indebido)',
    description: 'Solicitud de reembolso por pagos duplicados o cobros erróneos en contribuciones municipales.',
    category: 'Tesorería y Finanzas',
    icon: Receipt,
    sla: '15 días hábiles',
    fields: [
      { name: 'sec_solicitante', label: '1. Datos del Solicitante', type: FieldType.SECTION_HEADER },
      ...commonFiscalFields,
      
      { name: 'sec_pago', label: '2. Datos del Pago Erróneo', type: FieldType.SECTION_HEADER },
      { name: 'concepto', label: 'Concepto pagado', type: FieldType.TEXT, required: true, placeholder: 'Ej. Predial 2024' },
      { name: 'folio_recibo', label: 'Folio del Recibo', type: FieldType.TEXT, required: true },
      { name: 'fecha_pago', label: 'Fecha de Pago', type: FieldType.DATE, required: true },
      { name: 'monto', label: 'Monto a devolver', type: FieldType.NUMBER, required: true },
      { name: 'causa', label: 'Causa', type: FieldType.SELECT, options: ['Pago Duplicado', 'Error en Caja', 'Cancelación de Trámite', 'Descuento no aplicado'], required: true },
      
      { name: 'sec_cuenta', label: '3. Datos Bancarios', type: FieldType.SECTION_HEADER },
      { name: 'banco', label: 'Banco', type: FieldType.TEXT, required: true },
      { name: 'clabe', label: 'CLABE Interbancaria', type: FieldType.TEXT, required: true, helperText: 'A nombre del contribuyente.' },
      { name: 'estado_cuenta', label: 'Carátula de Estado de Cuenta', type: FieldType.FILE, required: true }
    ]
  },
  {
    id: 'constancia_fiscal_municipal',
    title: 'Constancia de Situación Fiscal Municipal',
    description: 'Documento que certifica el registro en el padrón municipal de contribuyentes.',
    category: 'Tesorería y Finanzas',
    icon: Scale,
    sla: '24 horas',
    fields: [
      { name: 'sec_datos', label: '1. Datos Fiscales', type: FieldType.SECTION_HEADER },
      ...commonFiscalFields,
      ...commonAddressFields,
      
      { name: 'sec_motivo', label: '2. Motivo', type: FieldType.SECTION_HEADER },
      { name: 'uso_constancia', label: 'Uso del documento', type: FieldType.SELECT, options: ['Trámite Bancario', 'Proveedor Municipal', 'Trámite Estatal/Federal', 'Licitación'], required: true }
    ]
  }
];