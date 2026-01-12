import { Ear, UsersRound, Landmark, Mail, ShieldAlert, HeartHandshake, ScrollText, FileBadge, UserCheck } from 'lucide-react';
import { ServiceDefinition, FieldType } from '../../types';
import { commonPersonalFields, commonAddressFields } from '../common/userModel';

export const participacionCiudadanaServices: ServiceDefinition[] = [
  // --- TRAMITES DE SECRETARÍA / CONSTANCIAS ---
  {
    id: 'constancia_residencia',
    title: 'Constancia de Residencia',
    description: 'Documento oficial que acredita el domicilio actual de una persona en el municipio (para INE, empleos, etc.).',
    category: 'Participación Ciudadana',
    icon: FileBadge,
    sla: '3 días hábiles',
    fields: [
      { name: 'sec_solicitante', label: '1. Datos del Solicitante', type: FieldType.SECTION_HEADER },
      ...commonPersonalFields,
      
      { name: 'sec_domicilio', label: '2. Domicilio a Certificar', type: FieldType.SECTION_HEADER },
      ...commonAddressFields,
      { name: 'antiguedad', label: 'Tiempo residiendo en este domicilio (Años)', type: FieldType.NUMBER, required: true },
      
      { name: 'sec_docs', label: '3. Documentación', type: FieldType.SECTION_HEADER },
      { name: 'ine_copia', label: 'Identificación Oficial (INE/Pasaporte)', type: FieldType.FILE, required: true },
      { name: 'comprobante_domicilio', label: 'Comprobante de Domicilio (Luz/Agua)', type: FieldType.FILE, required: true },
      { name: 'foto_infantil', label: 'Fotografía Tamaño Infantil (Digital)', type: FieldType.FILE, required: true }
    ]
  },
  {
    id: 'modo_honesto_vivir',
    title: 'Constancia de Modo Honesto de Vivir',
    description: 'Carta que certifica que el ciudadano se dedica a actividades lícitas. Requerida para trabajos de seguridad o corporaciones.',
    category: 'Participación Ciudadana',
    icon: UserCheck,
    sla: '3 días hábiles',
    fields: [
      { name: 'sec_solicitante', label: '1. Datos del Solicitante', type: FieldType.SECTION_HEADER },
      ...commonPersonalFields,
      ...commonAddressFields,

      { name: 'sec_ocupacion', label: '2. Actividad Económica', type: FieldType.SECTION_HEADER },
      { name: 'ocupacion', label: 'Ocupación / Profesión Actual', type: FieldType.TEXT, required: true },
      { name: 'lugar_trabajo', label: 'Lugar de Trabajo (Nombre de empresa o "Por cuenta propia")', type: FieldType.TEXT, required: true },
      
      { name: 'sec_testigos', label: '3. Referencias', type: FieldType.SECTION_HEADER },
      { name: 'testigo_1', label: 'Nombre de Referencia 1', type: FieldType.TEXT, required: true },
      { name: 'telefono_1', label: 'Teléfono Referencia 1', type: FieldType.NUMBER, required: true },
      
      { name: 'sec_docs', label: '4. Requisitos', type: FieldType.SECTION_HEADER },
      { name: 'ine', label: 'INE del Solicitante', type: FieldType.FILE, required: true },
      { name: 'carta_solicitud', label: 'Carta de solicitud firmada (PDF)', type: FieldType.FILE, required: true }
    ]
  },
  // --- PARTICIPACIÓN Y DEMOCRACIA ---
  {
    id: 'audiencia_publica',
    title: 'Solicitud de Audiencia Pública',
    description: 'Solicita una cita directa con el Presidente Municipal o Directores de Área para exponer casos no resueltos.',
    category: 'Participación Ciudadana',
    icon: Ear,
    sla: '5 a 10 días hábiles',
    fields: [
      { name: 'sec_solicitante', label: '1. Datos del Solicitante', type: FieldType.SECTION_HEADER },
      ...commonPersonalFields,

      { name: 'sec_solicitud', label: '2. Detalle de la Audiencia', type: FieldType.SECTION_HEADER },
      { name: 'funcionario', label: '¿Con quién solicita hablar?', type: FieldType.SELECT, options: ['Presidente Municipal', 'Secretario del Ayuntamiento', 'Director de Obras Públicas', 'Director de Seguridad', 'Director de Servicios Públicos'], required: true },
      { name: 'asunto', label: 'Tema Principal', type: FieldType.TEXT, required: true },
      { name: 'descripcion', label: 'Exposición de Motivos', type: FieldType.TEXTAREA, required: true, placeholder: 'Explique brevemente por qué requiere la audiencia personal.' },
      
      { name: 'sec_antecedentes', label: '3. Antecedentes', type: FieldType.SECTION_HEADER },
      { name: 'folios_previos', label: 'Folios de reportes anteriores (Si existen)', type: FieldType.TEXT, required: false, helperText: 'Ayuda a agilizar su caso si ya tiene reportes previos.' }
    ]
  },
  {
    id: 'registro_comite',
    title: 'Registro de Comité Vecinal',
    description: 'Trámite para dar formalidad y personalidad jurídica a la mesa directiva de vecinos de una colonia.',
    category: 'Participación Ciudadana',
    icon: UsersRound,
    sla: '15 días hábiles',
    fields: [
      { name: 'sec_representante', label: '1. Datos del Representante (Presidente)', type: FieldType.SECTION_HEADER },
      ...commonPersonalFields,

      { name: 'sec_zona', label: '2. Zona de Representación', type: FieldType.SECTION_HEADER },
      ...commonAddressFields,

      { name: 'sec_estructura', label: '3. Mesa Directiva', type: FieldType.SECTION_HEADER },
      { name: 'nombre_secretario', label: 'Nombre del Secretario(a)', type: FieldType.TEXT, required: true },
      { name: 'nombre_tesorero', label: 'Nombre del Tesorero(a)', type: FieldType.TEXT, required: true },
      { name: 'nombre_vocal', label: 'Nombre del Primer Vocal', type: FieldType.TEXT, required: true },
      
      { name: 'sec_docs', label: '4. Documentación', type: FieldType.SECTION_HEADER },
      { name: 'acta_asamblea', label: 'Acta de Asamblea de Elección (PDF)', type: FieldType.FILE, required: true },
      { name: 'lista_asistencia', label: 'Lista de asistencia y firmas de vecinos', type: FieldType.FILE, required: true }
    ]
  },
  {
    id: 'cabildo_abierto',
    title: 'Participación en Cabildo Abierto',
    description: 'Solicitud para tener derecho de voz durante una Sesión de Cabildo para exponer un tema de interés público.',
    category: 'Participación Ciudadana',
    icon: Landmark,
    sla: 'Sujeto a calendario de sesiones',
    fields: [
      { name: 'sec_ciudadano', label: '1. Datos del Ciudadano', type: FieldType.SECTION_HEADER },
      ...commonPersonalFields,
      
      { name: 'sec_ponencia', label: '2. Datos de la Ponencia', type: FieldType.SECTION_HEADER },
      { name: 'tema', label: 'Tema a exponer', type: FieldType.TEXT, required: true },
      { name: 'resumen', label: 'Resumen de la participación', type: FieldType.TEXTAREA, required: true },
      { name: 'beneficio', label: 'Beneficio social de la propuesta', type: FieldType.TEXTAREA, required: true },
      
      { name: 'sec_requisitos', label: '3. Requisitos', type: FieldType.SECTION_HEADER },
      { name: 'ine', label: 'Identificación Oficial (INE)', type: FieldType.FILE, required: true },
      { name: 'comprobante', label: 'Comprobante de Domicilio (Debe residir en el municipio)', type: FieldType.FILE, required: true }
    ]
  },
  {
    id: 'buzon_alcalde',
    title: 'Buzón del Alcalde',
    description: 'Canal directo para enviar sugerencias, felicitaciones o comentarios constructivos a la presidencia.',
    category: 'Participación Ciudadana',
    icon: Mail,
    sla: '3 a 5 días hábiles (Acuse)',
    fields: [
      { name: 'sec_mensaje', label: '1. Mensaje', type: FieldType.SECTION_HEADER },
      { name: 'tipo_mensaje', label: 'Tipo', type: FieldType.SELECT, options: ['Sugerencia de Mejora', 'Felicitación', 'Queja Administrativa', 'Petición Simple'], required: true },
      { name: 'asunto', label: 'Asunto', type: FieldType.TEXT, required: true },
      { name: 'mensaje', label: 'Su mensaje', type: FieldType.TEXTAREA, required: true },
      
      { name: 'sec_contacto', label: '2. Datos de Contacto (Opcional)', type: FieldType.SECTION_HEADER, helperText: 'Llene esto solo si desea recibir una respuesta.' },
      { name: 'nombre', label: 'Nombre Completo', type: FieldType.TEXT, required: false },
      { name: 'email', label: 'Correo Electrónico', type: FieldType.EMAIL, required: false },
      { name: 'telefono', label: 'Teléfono', type: FieldType.NUMBER, required: false }
    ]
  },
  {
    id: 'contraloria_social',
    title: 'Contraloría Social (Anticorrupción)',
    description: 'Denuncia actos de corrupción, desvío de recursos o malas prácticas de servidores públicos.',
    category: 'Participación Ciudadana',
    icon: ShieldAlert,
    sla: '10 días hábiles',
    fields: [
        { name: 'sec_hechos', label: '1. Datos de la Denuncia', type: FieldType.SECTION_HEADER },
        { name: 'funcionario', label: 'Nombre del Funcionario (Si lo conoce)', type: FieldType.TEXT, required: false },
        { name: 'dependencia', label: 'Dependencia / Área', type: FieldType.TEXT, required: true },
        { name: 'fecha_hechos', label: 'Fecha de los hechos', type: FieldType.DATE, required: true },
        { name: 'descripcion', label: 'Narración detallada de los hechos', type: FieldType.TEXTAREA, required: true },
        
        { name: 'sec_evidencia', label: '2. Pruebas', type: FieldType.SECTION_HEADER, helperText: 'Fotos, videos, documentos o audios que sustenten la denuncia.' },
        { name: 'archivo_prueba', label: 'Adjuntar Evidencia', type: FieldType.FILE, required: true },
        
        { name: 'sec_anonimato', label: '3. Datos del Denunciante', type: FieldType.SECTION_HEADER, helperText: 'Puede denunciar anónimamente. Si proporciona datos, se garantiza confidencialidad.' },
        { name: 'anonimo', label: '¿Desea que la denuncia sea anónima?', type: FieldType.CHECKBOX, required: false },
        { name: 'nombre', label: 'Nombre (Opcional)', type: FieldType.TEXT, required: false },
        { name: 'contacto', label: 'Email o Teléfono para seguimiento (Opcional)', type: FieldType.TEXT, required: false }
    ]
  },
  {
    id: 'voluntariado',
    title: 'Voluntariado "Adopta un Espacio"',
    description: 'Programa para que ciudadanos o empresas adopten un parque, camellón o rotonda para su cuidado y mantenimiento.',
    category: 'Participación Ciudadana',
    icon: HeartHandshake,
    sla: '5 días hábiles',
    fields: [
        { name: 'sec_padrino', label: '1. Datos del Padrino (Voluntario)', type: FieldType.SECTION_HEADER },
        ...commonPersonalFields,
        { name: 'empresa', label: 'Empresa u Organización (Si aplica)', type: FieldType.TEXT, required: false },

        { name: 'sec_espacio', label: '2. Espacio a Adoptar', type: FieldType.SECTION_HEADER },
        { name: 'tipo_espacio', label: 'Tipo de Espacio', type: FieldType.SELECT, options: ['Camellón', 'Parque / Jardín', 'Rotonda', 'Jardinera de Banqueta'], required: true },
        { name: 'ubicacion_espacio', label: 'Ubicación (Calle y Colonia)', type: FieldType.TEXT, required: true },
        { name: 'referencia', label: 'Referencias', type: FieldType.TEXT, required: true },

        { name: 'sec_compromiso', label: '3. Compromiso', type: FieldType.SECTION_HEADER },
        { name: 'acciones', label: 'Acciones propuestas', type: FieldType.SELECT, options: ['Riego y Limpieza', 'Poda y Reforestación', 'Pintura y Mantenimiento', 'Todas las anteriores'], required: true },
        { name: 'duracion', label: 'Tiempo de adopción', type: FieldType.SELECT, options: ['6 meses', '1 año', 'Indefinido'], required: true }
    ]
  },
  {
    id: 'iniciativa_ciudadana',
    title: 'Iniciativa Ciudadana de Reglamento',
    description: 'Presenta una propuesta formal para modificar, crear o derogar reglamentos municipales.',
    category: 'Participación Ciudadana',
    icon: ScrollText,
    sla: 'Turno a comisión en sig. sesión',
    fields: [
        { name: 'sec_proponente', label: '1. Datos del Proponente', type: FieldType.SECTION_HEADER },
        ...commonPersonalFields,
        
        { name: 'sec_propuesta', label: '2. La Propuesta', type: FieldType.SECTION_HEADER },
        { name: 'reglamento', label: 'Reglamento a impactar', type: FieldType.TEXT, required: true, placeholder: 'Ej. Reglamento de Tránsito, Bando de Policía...' },
        { name: 'titulo_iniciativa', label: 'Título de la Iniciativa', type: FieldType.TEXT, required: true },
        { name: 'exposicion_motivos', label: 'Exposición de Motivos (Resumen)', type: FieldType.TEXTAREA, required: true },
        
        { name: 'sec_adjuntos', label: '3. Documento Completo', type: FieldType.SECTION_HEADER },
        { name: 'documento_iniciativa', label: 'Iniciativa Completa (PDF)', type: FieldType.FILE, required: true },
        { name: 'respaldo', label: 'Firmas de respaldo (Si cuenta con ellas)', type: FieldType.FILE, required: false }
    ]
  }
];