import { Camera, ClipboardList, Video, LifeBuoy, Landmark, CalendarDays, Map, Tent } from 'lucide-react';
import { ServiceDefinition, FieldType } from '../../types';
import { commonFiscalFields, commonAddressFields, commonPersonalFields } from '../common/userModel';

export const turismoServices: ServiceDefinition[] = [
  {
    id: 'registro_turismo',
    title: 'Registro Nacional de Turismo (RNT)',
    description: 'Inscripción o renovación de prestadores de servicios turísticos en el directorio oficial municipal y federal.',
    category: 'Turismo',
    icon: ClipboardList,
    sla: '5 días hábiles',
    fields: [
      { name: 'sec_fiscal', label: '1. Datos del Prestador de Servicios', type: FieldType.SECTION_HEADER },
      ...commonFiscalFields,

      { name: 'sec_establecimiento', label: '2. Datos del Establecimiento', type: FieldType.SECTION_HEADER },
      ...commonAddressFields,
      
      { name: 'sec_servicio', label: '3. Detalles del Servicio', type: FieldType.SECTION_HEADER },
      { name: 'tipo_servicio', label: 'Categoría', type: FieldType.SELECT, options: ['Hotel / Hospedaje', 'Agencia de Viajes', 'Alimentos y Bebidas (Turístico)', 'Guía de Turistas', 'Transportadora Turística', 'Artesanías'], required: true },
      { name: 'capacidad', label: 'Capacidad de atención (Personas/Habitaciones)', type: FieldType.NUMBER, required: true },
      
      { name: 'sec_docs', label: '4. Documentación', type: FieldType.SECTION_HEADER },
      { name: 'constancia_sat', label: 'Constancia de Situación Fiscal', type: FieldType.FILE, required: true },
      { name: 'licencia_funcionamiento', label: 'Licencia de Funcionamiento Vigente', type: FieldType.FILE, required: true },
      { name: 'fotos', label: 'Fotografías del establecimiento (PDF)', type: FieldType.FILE, required: true }
    ]
  },
  {
    id: 'permiso_filmacion',
    title: 'Permiso de Filmación y Fotografía',
    description: 'Autorización para sesiones fotográficas, comerciales o grabaciones en zonas históricas y vía pública.',
    category: 'Turismo',
    icon: Video,
    sla: '3 días hábiles',
    fields: [
      { name: 'sec_responsable', label: '1. Datos del Responsable', type: FieldType.SECTION_HEADER },
      ...commonPersonalFields,
      { name: 'empresa_productora', label: 'Empresa Productora (Opcional)', type: FieldType.TEXT, required: false },

      { name: 'sec_proyecto', label: '2. Datos del Proyecto', type: FieldType.SECTION_HEADER },
      { name: 'tipo_produccion', label: 'Tipo de Producción', type: FieldType.SELECT, options: ['Fotografía Social (Bodas/XV)', 'Comercial / Publicidad', 'Cine / Documental', 'Estudiantil / Académico', 'Videoclip Musical'], required: true },
      { name: 'nombre_proyecto', label: 'Nombre del Proyecto', type: FieldType.TEXT, required: true },
      
      { name: 'sec_logistica', label: '3. Logística', type: FieldType.SECTION_HEADER },
      { name: 'lugar', label: 'Locación Solicitada', type: FieldType.TEXT, required: true, placeholder: 'Ej. Plaza Principal, Callejón del Beso...' },
      { name: 'fecha', label: 'Fecha de grabación', type: FieldType.DATE, required: true },
      { name: 'horario', label: 'Horario (Inicio a Fin)', type: FieldType.TEXT, required: true },
      { name: 'equipo_tecnico', label: 'Equipo a ingresar (Cámaras, Drones, Plantas de luz)', type: FieldType.TEXTAREA, required: true },
      { name: 'personal_total', label: 'Total de personas (Staff + Talento)', type: FieldType.NUMBER, required: true }
    ]
  },
  {
    id: 'espacios_historicos',
    title: 'Renta de Espacios Históricos',
    description: 'Solicitud para realizar eventos culturales, sociales o corporativos en recintos municipales.',
    category: 'Turismo',
    icon: Landmark,
    sla: '10 días hábiles',
    fields: [
      { name: 'sec_solicitante', label: '1. Datos del Solicitante', type: FieldType.SECTION_HEADER },
      ...commonPersonalFields,

      { name: 'sec_evento', label: '2. Detalles del Evento', type: FieldType.SECTION_HEADER },
      { name: 'espacio', label: 'Espacio Solicitado', type: FieldType.SELECT, options: ['Patio Central de Palacio', 'Teatro de la Ciudad', 'Ex-Hacienda Municipal', 'Explanada del Museo'], required: true },
      { name: 'tipo_evento', label: 'Tipo de Evento', type: FieldType.SELECT, options: ['Boda / Social', 'Concierto / Cultural', 'Corporativo / Congreso', 'Exposición de Arte'], required: true },
      { name: 'fecha_evento', label: 'Fecha del Evento', type: FieldType.DATE, required: true },
      { name: 'aforo', label: 'Aforo Estimado', type: FieldType.NUMBER, required: true },
      
      { name: 'sec_montaje', label: '3. Montaje', type: FieldType.SECTION_HEADER },
      { name: 'requerimientos', label: 'Descripción del montaje (Escenario, mesas, sillas)', type: FieldType.TEXTAREA, required: true },
      { name: 'proveedores_externos', label: '¿Ingresan proveedores externos?', type: FieldType.CHECKBOX, required: false }
    ]
  },
  {
    id: 'tour_municipal',
    title: 'Solicitud de Guias Turísticos',
    description: 'Solicitud de guías certificados para recorridos escolares o grupos grandes.',
    category: 'Turismo',
    icon: Map,
    sla: '5 días hábiles',
    fields: [
      { name: 'sec_contacto', label: '1. Contacto del Grupo', type: FieldType.SECTION_HEADER },
      { name: 'nombre_responsable', label: 'Nombre del Responsable', type: FieldType.TEXT, required: true },
      { name: 'telefono', label: 'Teléfono de Contacto', type: FieldType.NUMBER, required: true },
      { name: 'procedencia', label: 'Institución o Procedencia', type: FieldType.TEXT, required: true },

      { name: 'sec_recorrido', label: '2. Detalles del Recorrido', type: FieldType.SECTION_HEADER },
      { name: 'fecha_visita', label: 'Fecha de Visita', type: FieldType.DATE, required: true },
      { name: 'cantidad_personas', label: 'Cantidad de Personas', type: FieldType.NUMBER, required: true },
      { name: 'idioma', label: 'Idioma requerido', type: FieldType.SELECT, options: ['Español', 'Inglés', 'Francés'], required: true },
      { name: 'interes', label: 'Enfoque del recorrido', type: FieldType.SELECT, options: ['Histórico', 'Gastronómico', 'Leyendas', 'General'], required: true }
    ]
  },
  {
    id: 'asistencia_turistica',
    title: 'Atención al Turista',
    description: 'Reporte de incidentes, quejas por cobros excesivos o solicitud de apoyo informativo.',
    category: 'Turismo',
    icon: LifeBuoy,
    sla: '24 horas',
    fields: [
      { name: 'sec_incidente', label: '1. Datos del Incidente', type: FieldType.SECTION_HEADER },
      { name: 'tipo_reporte', label: 'Tipo de Reporte', type: FieldType.SELECT, options: ['Queja por mal servicio', 'Cobro excesivo / Fraude', 'Discriminación', 'Objeto extraviado', 'Solicitud de información'], required: true },
      { name: 'lugar_hechos', label: 'Lugar de los hechos (Establecimiento)', type: FieldType.TEXT, required: true },
      { name: 'descripcion', label: 'Narrativa de lo sucedido', type: FieldType.TEXTAREA, required: true },
      
      { name: 'sec_contacto', label: '2. Datos de Contacto (Opcional)', type: FieldType.SECTION_HEADER },
      { name: 'nombre', label: 'Nombre', type: FieldType.TEXT, required: false },
      { name: 'email', label: 'Correo para seguimiento', type: FieldType.EMAIL, required: false }
    ]
  }
];