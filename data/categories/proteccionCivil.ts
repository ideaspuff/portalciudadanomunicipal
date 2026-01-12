import { HardHat, FireExtinguisher, FileCheck, Building } from 'lucide-react';
import { ServiceDefinition, FieldType } from '../../types';
import { commonAddressFields, commonFiscalFields, commonPersonalFields } from '../common/userModel';

export const proteccionCivilServices: ServiceDefinition[] = [
  {
    id: 'visto_bueno_pc',
    title: 'Visto Bueno de Protección Civil',
    description: 'Inspección obligatoria para validar las medidas de seguridad de comercios, industrias y servicios.',
    category: 'Protección Civil',
    icon: FileCheck,
    sla: '10 días hábiles',
    fields: [
      { name: 'sec_fiscal', label: '1. Datos Fiscales del Solicitante', type: FieldType.SECTION_HEADER },
      ...commonFiscalFields,

      { name: 'sec_establecimiento', label: '2. Datos del Establecimiento', type: FieldType.SECTION_HEADER },
      { name: 'nombre_comercial', label: 'Nombre Comercial', type: FieldType.TEXT, required: true },
      ...commonAddressFields,

      { name: 'sec_caracteristicas', label: '3. Características del Inmueble', type: FieldType.SECTION_HEADER },
      { name: 'giro', label: 'Giro o Actividad', type: FieldType.TEXT, required: true },
      { name: 'm2_construccion', label: 'Metros Cuadrados Construidos', type: FieldType.NUMBER, required: true },
      { name: 'niveles', label: 'Niveles / Pisos', type: FieldType.NUMBER, required: true },
      { name: 'aforo', label: 'Aforo Máximo (Personas)', type: FieldType.NUMBER, required: true },
      { name: 'riesgo', label: 'Grado de Riesgo (Autoevaluación)', type: FieldType.SELECT, options: ['Bajo', 'Medio', 'Alto'], required: true },

      { name: 'sec_docs', label: '4. Documentación Técnica', type: FieldType.SECTION_HEADER },
      { name: 'plan_contingencia', label: 'Programa Interno / Plan de Contingencia (PDF)', type: FieldType.FILE, required: true },
      { name: 'dictamen_electrico', label: 'Dictamen de Instalación Eléctrica', type: FieldType.FILE, required: true },
      { name: 'dictamen_gas', label: 'Dictamen de Instalación de Gas (Si aplica)', type: FieldType.FILE, required: false },
      { name: 'capacitacion', label: 'Constancias de Capacitación (Brigadas)', type: FieldType.FILE, required: true }
    ]
  },
  {
    id: 'analisis_riesgo',
    title: 'Factibilidad y Análisis de Riesgo',
    description: 'Dictamen para nuevas construcciones, fraccionamientos o proyectos de alto impacto.',
    category: 'Protección Civil',
    icon: Building,
    sla: '15 días hábiles',
    fields: [
      { name: 'sec_propietario', label: '1. Datos del Propietario / Desarrollador', type: FieldType.SECTION_HEADER },
      ...commonFiscalFields,

      { name: 'sec_predio', label: '2. Ubicación del Proyecto', type: FieldType.SECTION_HEADER },
      ...commonAddressFields,
      
      { name: 'sec_proyecto', label: '3. Detalles del Proyecto', type: FieldType.SECTION_HEADER },
      { name: 'tipo_proyecto', label: 'Tipo de Proyecto', type: FieldType.SELECT, options: ['Fraccionamiento Habitacional', 'Plaza Comercial', 'Edificio Vertical', 'Gasolinera / Gasera', 'Industria Química'], required: true },
      { name: 'descripcion_obra', label: 'Descripción breve de la obra', type: FieldType.TEXTAREA, required: true },
      
      { name: 'sec_tecnica', label: '4. Documentación', type: FieldType.SECTION_HEADER },
      { name: 'estudio_riesgo', label: 'Estudio de Análisis de Riesgo', type: FieldType.FILE, required: true },
      { name: 'planos', label: 'Planos del Proyecto (PDF)', type: FieldType.FILE, required: true }
    ]
  },
  {
    id: 'capacitacion_pc',
    title: 'Solicitud de Capacitación',
    description: 'Cursos oficiales impartidos por bomberos y protección civil para empresas y escuelas (Primeros Auxilios, Evacuación, Extintores).',
    category: 'Protección Civil',
    icon: FireExtinguisher,
    sla: '5 días hábiles',
    fields: [
      { name: 'sec_solicitante', label: '1. Datos del Solicitante', type: FieldType.SECTION_HEADER },
      ...commonPersonalFields,
      
      { name: 'sec_curso', label: '2. Detalles del Curso', type: FieldType.SECTION_HEADER },
      { name: 'tema', label: 'Tema de Interés', type: FieldType.SELECT, options: ['Primeros Auxilios Básicos', 'Uso y Manejo de Extintores', 'Evacuación, Búsqueda y Rescate', 'Formación de Brigadas'], required: true },
      { name: 'lugar_imparticion', label: 'Lugar donde se impartirá', type: FieldType.TEXT, required: true },
      { name: 'numero_participantes', label: 'Número de Participantes', type: FieldType.NUMBER, required: true },
      { name: 'fecha_tentativa', label: 'Fecha Tentativa', type: FieldType.DATE, required: true }
    ]
  },
  {
    id: 'inspeccion_eventos',
    title: 'Seguridad en Eventos Masivos',
    description: 'Validación de medidas de seguridad y presencia de unidades de emergencia para eventos con gran afluencia.',
    category: 'Protección Civil',
    icon: HardHat,
    sla: '7 días hábiles',
    fields: [
        { name: 'sec_organizador', label: '1. Organizador Responsable', type: FieldType.SECTION_HEADER },
        ...commonPersonalFields,

        { name: 'sec_evento', label: '2. Datos del Evento', type: FieldType.SECTION_HEADER },
        { name: 'nombre_evento', label: 'Nombre del Evento', type: FieldType.TEXT, required: true },
        { name: 'lugar_evento', label: 'Lugar / Recinto', type: FieldType.TEXT, required: true },
        { name: 'fecha_hora', label: 'Fecha y Hora', type: FieldType.TEXT, required: true },
        { name: 'aforo_esperado', label: 'Aforo Esperado', type: FieldType.NUMBER, required: true },
        
        { name: 'sec_requerimientos', label: '3. Requerimientos', type: FieldType.SECTION_HEADER },
        { name: 'ambulancia', label: '¿Requiere Ambulancia en sitio?', type: FieldType.CHECKBOX, required: false },
        { name: 'bomberos', label: '¿Requiere Camión de Bomberos?', type: FieldType.CHECKBOX, required: false },
        { name: 'plan_operativo', label: 'Plan Operativo del Evento (PDF)', type: FieldType.FILE, required: true }
    ]
  }
];