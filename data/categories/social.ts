import { Megaphone, PartyPopper, Users, HandHeart } from 'lucide-react';
import { ServiceDefinition, FieldType } from '../../types';
import { commonPersonalFields, commonAddressFields } from '../common/userModel';

export const socialServices: ServiceDefinition[] = [
  {
    id: 'denuncia_ciudadana',
    title: 'Denuncia Ciudadana y Quejas',
    description: 'Reporte de ruido excesivo, obstrucción de vía pública, vecinos conflictivos o comercio informal.',
    category: 'Bienestar Social',
    icon: Megaphone,
    sla: '72 horas',
    fields: [
      { name: 'sec_reportante', label: '1. Datos del Reportante', type: FieldType.SECTION_HEADER, helperText: 'Sus datos son confidenciales y solo para seguimiento.' },
      ...commonPersonalFields,

      { name: 'sec_ubicacion', label: '2. Ubicación del Problema', type: FieldType.SECTION_HEADER },
      ...commonAddressFields,

      { name: 'sec_hechos', label: '3. Detalle de la Queja', type: FieldType.SECTION_HEADER },
      { name: 'tipo_queja', label: 'Motivo', type: FieldType.SELECT, options: ['Ruido Excesivo / Fiestas', 'Obstrucción de Banqueta/Calle', 'Comercio Informal sin Permiso', 'Quema de Basura / Llantas', 'Lote Baldío Sucio', 'Maltrato a Inmobiliario Urbano'], required: true },
      { name: 'descripcion', label: 'Descripción detallada', type: FieldType.TEXTAREA, required: true, placeholder: 'Describa qué sucede, horarios frecuentes, etc.' },
      { name: 'evidencia', label: 'Evidencia (Foto/Video)', type: FieldType.FILE, required: false }
    ]
  },
  {
    id: 'permiso_evento_publico',
    title: 'Permiso para Eventos en Vía Pública',
    description: 'Autorización para realizar fiestas patronales, desfiles, procesiones o eventos comunitarios en la calle.',
    category: 'Bienestar Social',
    icon: PartyPopper,
    sla: '10 días hábiles',
    fields: [
      { name: 'sec_responsable', label: '1. Datos del Responsable del Evento', type: FieldType.SECTION_HEADER },
      ...commonPersonalFields,

      { name: 'sec_ubicacion', label: '2. Lugar del Evento', type: FieldType.SECTION_HEADER },
      { name: 'calle_cierre', label: 'Calle(s) a utilizar/cerrar', type: FieldType.TEXT, required: true },
      { name: 'entre_calles', label: 'Entre calles', type: FieldType.TEXT, required: true },
      { name: 'colonia', label: 'Colonia', type: FieldType.TEXT, required: true },
      
      { name: 'sec_detalle', label: '3. Logística del Evento', type: FieldType.SECTION_HEADER },
      { name: 'tipo_evento', label: 'Tipo de Evento', type: FieldType.SELECT, options: ['Fiesta Patronal / Religiosa', 'Evento Cultural / Artístico', 'Kermés / Verbena Popular', 'Desfile / Caravana', 'Evento Deportivo en Calle'], required: true },
      { name: 'fecha_evento', label: 'Fecha del Evento', type: FieldType.DATE, required: true },
      { name: 'horario_inicio', label: 'Hora de Inicio', type: FieldType.TEXT, required: true, placeholder: '00:00' },
      { name: 'horario_fin', label: 'Hora de Fin', type: FieldType.TEXT, required: true, placeholder: '00:00' },
      { name: 'aforo_estimado', label: 'Aforo Estimado (Personas)', type: FieldType.NUMBER, required: true },

      { name: 'sec_requisitos', label: '4. Requisitos', type: FieldType.SECTION_HEADER },
      { name: 'anuencia_vecinal', label: 'Firmas de Conformidad Vecinal', type: FieldType.FILE, required: true, helperText: 'Documento con firmas de los vecinos de la cuadra afectada.' },
      { name: 'croquis', label: 'Croquis de ubicación y cierres', type: FieldType.FILE, required: true }
    ]
  },
  {
    id: 'apoyos_sociales',
    title: 'Solicitud de Apoyos Sociales',
    description: 'Gestión de despensas, láminas, cobijas o aparatos funcionales (sillas de ruedas, bastones) para personas vulnerables.',
    category: 'Bienestar Social',
    icon: HandHeart,
    sla: '15 días hábiles',
    fields: [
        { name: 'sec_beneficiario', label: '1. Datos del Beneficiario', type: FieldType.SECTION_HEADER },
        ...commonPersonalFields,
        ...commonAddressFields,

        { name: 'sec_solicitud', label: '2. Tipo de Apoyo', type: FieldType.SECTION_HEADER },
        { name: 'tipo_apoyo', label: 'Apoyo Solicitado', type: FieldType.SELECT, options: ['Despensa Alimentaria', 'Material de Construcción (Láminas/Cemento)', 'Aparato Funcional (Silla de ruedas/Muletas)', 'Cobijas / Ropa de Invierno', 'Apoyo Económico por Salud'], required: true },
        { name: 'justificacion', label: 'Estudio Socioeconómico Breve (Motivo)', type: FieldType.TEXTAREA, required: true, placeholder: 'Explique la situación de necesidad...' },
        
        { name: 'sec_docs', label: '3. Documentación', type: FieldType.SECTION_HEADER },
        { name: 'ine_copia', label: 'Copia de INE', type: FieldType.FILE, required: true },
        { name: 'comprobante_domicilio', label: 'Comprobante de Domicilio', type: FieldType.FILE, required: true },
        { name: 'dictamen_medico', label: 'Dictamen Médico (Si aplica)', type: FieldType.FILE, required: false }
    ]
  },
  {
    id: 'mediacion_vecinal',
    title: 'Mediación Comunitaria',
    description: 'Solicitud de intervención para resolver conflictos pacíficos entre vecinos sin llegar a instancias legales.',
    category: 'Bienestar Social',
    icon: Users,
    sla: '5 días hábiles',
    fields: [
        { name: 'sec_solicitante', label: '1. Datos del Solicitante', type: FieldType.SECTION_HEADER },
        ...commonPersonalFields,

        { name: 'sec_conflicto', label: '2. Datos del Conflicto', type: FieldType.SECTION_HEADER },
        { name: 'vecino_nombre', label: 'Nombre del Vecino (Otra parte)', type: FieldType.TEXT, required: false },
        { name: 'direccion_conflicto', label: 'Dirección donde ocurre el conflicto', type: FieldType.TEXT, required: true },
        { name: 'motivo', label: 'Motivo del conflicto', type: FieldType.SELECT, options: ['Límites de propiedad', 'Humedad / Fugas compartidas', 'Árboles / Basura', 'Ruidos / Convivencia', 'Uso de áreas comunes'], required: true },
        { name: 'descripcion', label: 'Descripción de la situación', type: FieldType.TEXTAREA, required: true }
    ]
  }
];