import { Stethoscope, FileCheck, ShieldAlert, Dog, Bug, Ambulance } from 'lucide-react';
import { ServiceDefinition, FieldType } from '../../types';
import { commonPersonalFields, commonAddressFields } from '../common/userModel';

export const saludServices: ServiceDefinition[] = [
  {
    id: 'tarjeta_salud',
    title: 'Tarjeta de Control Sanitario',
    description: 'Documento obligatorio para personas que manipulan alimentos y bebidas (Manejadores de alimentos).',
    category: 'Salud Municipal',
    icon: FileCheck,
    sla: '3 días hábiles',
    fields: [
      { name: 'sec_trabajador', label: '1. Datos del Trabajador', type: FieldType.SECTION_HEADER },
      ...commonPersonalFields,
      
      { name: 'sec_trabajo', label: '2. Lugar de Trabajo', type: FieldType.SECTION_HEADER },
      { name: 'nombre_negocio', label: 'Negocio donde labora', type: FieldType.TEXT, required: true },
      { name: 'puesto', label: 'Puesto', type: FieldType.TEXT, required: true, placeholder: 'Ej. Cocinero, Mesero' },
      
      { name: 'sec_analisis', label: '3. Estudios Clínicos', type: FieldType.SECTION_HEADER },
      { name: 'analisis_clinicos', label: 'Análisis Clínicos Recientes (Reacciones Febriles/Copro)', type: FieldType.FILE, required: true, helperText: 'No mayor a 30 días.' },
      { name: 'foto', label: 'Fotografía Tamaño Infantil Digital', type: FieldType.FILE, required: true }
    ]
  },
  {
    id: 'esterilizacion',
    title: 'Campaña de Esterilización Gratuita',
    description: 'Agenda tu cita para la campaña de esterilización canina y felina municipal.',
    category: 'Salud Municipal',
    icon: Dog,
    sla: 'Sujeto a agenda',
    fields: [
      { name: 'sec_dueno', label: '1. Datos del Dueño', type: FieldType.SECTION_HEADER },
      ...commonPersonalFields,
      ...commonAddressFields,

      { name: 'sec_paciente', label: '2. Datos de la Mascota', type: FieldType.SECTION_HEADER },
      { name: 'nombre_mascota', label: 'Nombre de la Mascota', type: FieldType.TEXT, required: true },
      { name: 'especie', label: 'Especie', type: FieldType.SELECT, options: ['Perro', 'Gato'], required: true },
      { name: 'sexo', label: 'Sexo', type: FieldType.SELECT, options: ['Macho', 'Hembra'], required: true },
      { name: 'edad', label: 'Edad aproximada', type: FieldType.TEXT, required: true },
      { name: 'peso', label: 'Peso aproximado (kg)', type: FieldType.NUMBER, required: true },
      { name: 'ayuno', label: 'Confirmo que la mascota tendrá ayuno de 8 hrs', type: FieldType.CHECKBOX, required: true }
    ]
  },
  {
    id: 'fumigacion',
    title: 'Control de Vectores (Fumigación)',
    description: 'Solicitud de fumigación para colonias con brotes de dengue, zika o chikungunya.',
    category: 'Salud Municipal',
    icon: Bug,
    sla: '5 días hábiles',
    fields: [
      { name: 'sec_solicitante', label: '1. Datos del Solicitante', type: FieldType.SECTION_HEADER },
      ...commonPersonalFields,

      { name: 'sec_zona', label: '2. Zona Afectada', type: FieldType.SECTION_HEADER },
      ...commonAddressFields,
      
      { name: 'sec_info', label: '3. Información del Brote', type: FieldType.SECTION_HEADER },
      { name: 'tipo_plaga', label: 'Plaga detectada', type: FieldType.SELECT, options: ['Mosquito (Dengue)', 'Garrapatas', 'Cucarachas (Alcantarillas)', 'Ratas'], required: true },
      { name: 'casos_confirmados', label: '¿Hay casos médicos confirmados?', type: FieldType.SELECT, options: ['Sí, hay vecinos enfermos', 'No, es preventivo'], required: true },
      { name: 'mapa', label: 'Croquis de la zona (Opcional)', type: FieldType.FILE, required: false }
    ]
  },
  {
    id: 'certificado_medico',
    title: 'Certificado Médico Municipal',
    description: 'Expedición de certificados médicos de buena salud para trámites escolares, deportivos o laborales (DIF).',
    category: 'Salud Municipal',
    icon: Stethoscope,
    sla: '24 horas',
    fields: [
      { name: 'sec_paciente', label: '1. Datos del Paciente', type: FieldType.SECTION_HEADER },
      ...commonPersonalFields,
      
      { name: 'sec_tramite', label: '2. Motivo', type: FieldType.SECTION_HEADER },
      { name: 'tipo_certificado', label: 'Tipo', type: FieldType.SELECT, options: ['Escolar', 'Laboral', 'Deportivo', 'Prenupcial'], required: true },
      { name: 'institucion', label: 'Institución que lo solicita', type: FieldType.TEXT, required: true },
      { name: 'tip_sangre', label: 'Tipo de Sangre (Si lo conoce)', type: FieldType.TEXT, required: false }
    ]
  },
  {
    id: 'traslado_ambulancia',
    title: 'Solicitud de Traslado Programado',
    description: 'Solicitud de ambulancia para traslados no urgentes (altas médicas, citas de especialidad) para personas vulnerables.',
    category: 'Salud Municipal',
    icon: Ambulance,
    sla: '48 horas (Previa agenda)',
    fields: [
      { name: 'sec_solicitante', label: '1. Responsable del Paciente', type: FieldType.SECTION_HEADER },
      ...commonPersonalFields,
      
      { name: 'sec_traslado', label: '2. Datos del Traslado', type: FieldType.SECTION_HEADER },
      { name: 'origen', label: 'Lugar de Origen (Domicilio/Hospital)', type: FieldType.TEXT, required: true },
      { name: 'destino', label: 'Lugar de Destino', type: FieldType.TEXT, required: true },
      { name: 'fecha_hora', label: 'Fecha y Hora de la cita', type: FieldType.TEXT, required: true },
      
      { name: 'sec_paciente', label: '3. Condición del Paciente', type: FieldType.SECTION_HEADER },
      { name: 'nombre_paciente', label: 'Nombre del Paciente', type: FieldType.TEXT, required: true },
      { name: 'condicion', label: 'Condición', type: FieldType.SELECT, options: ['Camilla (Postrado)', 'Silla de Ruedas', 'Camina con dificultad'], required: true },
      { name: 'oxigeno', label: '¿Requiere Oxígeno?', type: FieldType.CHECKBOX, required: false },
      { name: 'dictamen', label: 'Hoja de Referencia Médica', type: FieldType.FILE, required: true }
    ]
  }
];