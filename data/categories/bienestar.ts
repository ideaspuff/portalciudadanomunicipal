import { GraduationCap, Apple, Home, Accessibility, HeartHandshake } from 'lucide-react';
import { ServiceDefinition, FieldType } from '../../types';
import { commonPersonalFields, commonAddressFields } from '../common/userModel';

export const bienestarServices: ServiceDefinition[] = [
  {
    id: 'becas_municipales',
    title: 'Becas Educativas Municipales',
    description: 'Programa de apoyo económico para estudiantes de nivel básico y medio superior con alto promedio.',
    category: 'Bienestar Social',
    icon: GraduationCap,
    sla: 'Convocatoria Anual',
    fields: [
      { name: 'sec_alumno', label: '1. Datos del Alumno', type: FieldType.SECTION_HEADER },
      ...commonPersonalFields,
      
      { name: 'sec_escuela', label: '2. Datos Escolares', type: FieldType.SECTION_HEADER },
      { name: 'escuela', label: 'Nombre de la Escuela', type: FieldType.TEXT, required: true },
      { name: 'nivel', label: 'Nivel', type: FieldType.SELECT, options: ['Primaria', 'Secundaria', 'Preparatoria'], required: true },
      { name: 'grado', label: 'Grado a cursar', type: FieldType.TEXT, required: true },
      { name: 'promedio', label: 'Promedio ciclo anterior', type: FieldType.NUMBER, required: true, helperText: 'Mínimo 8.5' },
      
      { name: 'sec_tutor', label: '3. Datos del Tutor', type: FieldType.SECTION_HEADER },
      { name: 'nombre_tutor', label: 'Nombre Completo', type: FieldType.TEXT, required: true },
      { name: 'ine_tutor', label: 'INE del Tutor', type: FieldType.FILE, required: true },
      { name: 'boleta', label: 'Boleta de Calificaciones', type: FieldType.FILE, required: true }
    ]
  },
  {
    id: 'apoyo_alimentario',
    title: 'Apoyo Alimentario (Despensas)',
    description: 'Solicitud de inclusión al padrón de beneficiarios para recibir despensas mensuales.',
    category: 'Bienestar Social',
    icon: Apple,
    sla: '15 días hábiles',
    fields: [
      { name: 'sec_beneficiario', label: '1. Datos del Beneficiario', type: FieldType.SECTION_HEADER },
      ...commonPersonalFields,
      ...commonAddressFields,
      
      { name: 'sec_socioeconomico', label: '2. Estudio Socioeconómico Simplificado', type: FieldType.SECTION_HEADER },
      { name: 'dependientes', label: 'Personas que dependen de usted', type: FieldType.NUMBER, required: true },
      { name: 'situacion', label: 'Situación Laboral', type: FieldType.SELECT, options: ['Desempleado', 'Ama de Casa', 'Pensionado', 'Trabajo Informal', 'Discapacidad'], required: true },
      { name: 'ingreso', label: 'Ingreso Mensual Familiar Aprox.', type: FieldType.SELECT, options: ['Menos de $3,000', '$3,000 - $6,000', 'Más de $6,000'], required: true },
      
      { name: 'sec_docs', label: '3. Documentos', type: FieldType.SECTION_HEADER },
      { name: 'comprobante_dom', label: 'Comprobante de Domicilio', type: FieldType.FILE, required: true },
      { name: 'ine', label: 'Identificación Oficial', type: FieldType.FILE, required: true }
    ]
  },
  {
    id: 'mejoramiento_vivienda',
    title: 'Material de Construcción (Techo/Piso)',
    description: 'Apoyo en especie (cemento, láminas, tinacos) para mejoramiento de viviendas vulnerables.',
    category: 'Bienestar Social',
    icon: Home,
    sla: '20 días hábiles',
    fields: [
      { name: 'sec_solicitante', label: '1. Datos del Solicitante', type: FieldType.SECTION_HEADER },
      ...commonPersonalFields,
      ...commonAddressFields,
      
      { name: 'sec_necesidad', label: '2. Necesidad', type: FieldType.SECTION_HEADER },
      { name: 'tipo_apoyo', label: 'Material Solicitado', type: FieldType.SELECT, options: ['Láminas galvanizadas', 'Bultos de Cemento', 'Tinaco', 'Impermeabilizante'], required: true },
      { name: 'area_aplicacion', label: '¿Dónde se usará?', type: FieldType.SELECT, options: ['Techo', 'Piso Firme', 'Muro', 'Baño'], required: true },
      { name: 'propiedad', label: 'Tenencia de la tierra', type: FieldType.SELECT, options: ['Propia (Escrituras)', 'Posesión', 'Rentada', 'Prestada'], required: true },
      
      { name: 'sec_evidencia', label: '3. Evidencia', type: FieldType.SECTION_HEADER },
      { name: 'fotos_casa', label: 'Fotos del área a mejorar', type: FieldType.FILE, required: true }
    ]
  },
  {
    id: 'aparatos_funcionales',
    title: 'Aparatos Funcionales y Ortopédicos',
    description: 'Solicitud gratuita de sillas de ruedas, andaderas, bastones y muletas para personas con discapacidad.',
    category: 'Bienestar Social',
    icon: Accessibility,
    sla: '10 días hábiles',
    fields: [
      { name: 'sec_beneficiario', label: '1. Datos del Beneficiario', type: FieldType.SECTION_HEADER },
      ...commonPersonalFields,
      ...commonAddressFields,
      
      { name: 'sec_solicitud', label: '2. Apoyo Solicitado', type: FieldType.SECTION_HEADER },
      { name: 'aparato', label: 'Tipo de Aparato', type: FieldType.SELECT, options: ['Silla de Ruedas Estándar', 'Silla de Ruedas PCI', 'Andadera', 'Bastón', 'Muletas'], required: true },
      { name: 'motivo_discapacidad', label: 'Causa de la necesidad', type: FieldType.TEXT, required: true },
      
      { name: 'sec_docs', label: '3. Requisitos', type: FieldType.SECTION_HEADER },
      { name: 'dictamen_medico', label: 'Certificado Médico / Discapacidad', type: FieldType.FILE, required: true },
      { name: 'ine_responsable', label: 'INE del Solicitante/Tutor', type: FieldType.FILE, required: true }
    ]
  },
  {
    id: 'apoyo_funerario',
    title: 'Apoyo Funerario',
    description: 'Asistencia económica o en especie (ataúd, condonación de panteón) para familias de escasos recursos ante un deceso.',
    category: 'Bienestar Social',
    icon: HeartHandshake,
    sla: '24 horas (Urgente)',
    fields: [
      { name: 'sec_solicitante', label: '1. Datos del Familiar Responsable', type: FieldType.SECTION_HEADER },
      ...commonPersonalFields,
      
      { name: 'sec_finado', label: '2. Datos del Finado', type: FieldType.SECTION_HEADER },
      { name: 'nombre_finado', label: 'Nombre Completo', type: FieldType.TEXT, required: true },
      { name: 'lugar_fallecimiento', label: 'Lugar de Fallecimiento', type: FieldType.TEXT, required: true },
      
      { name: 'sec_apoyo', label: '3. Tipo de Apoyo', type: FieldType.SECTION_HEADER },
      { name: 'necesidad', label: 'Requiere', type: FieldType.SELECT, options: ['Ataúd', 'Terreno en Panteón Municipal', 'Condonación de Pago de Derechos', 'Traslado'], required: true },
      { name: 'acta_defuncion', label: 'Certificado de Defunción', type: FieldType.FILE, required: true }
    ]
  }
];