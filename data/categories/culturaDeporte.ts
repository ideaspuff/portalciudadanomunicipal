import { Trophy, Palette, BookOpen, Medal, GraduationCap, Ticket } from 'lucide-react';
import { ServiceDefinition, FieldType } from '../../types';
import { commonPersonalFields, commonAddressFields } from '../common/userModel';

export const culturaDeporteServices: ServiceDefinition[] = [
  {
    id: 'reserva_deportiva',
    title: 'Reserva de Espacios Deportivos',
    description: 'Solicita el uso de canchas de fútbol, básquetbol, auditorios o gimnasios municipales para eventos o torneos.',
    category: 'Cultura y Deporte',
    icon: Trophy,
    sla: '3 días hábiles',
    fields: [
      { name: 'sec_solicitante', label: '1. Datos del Solicitante o Representante', type: FieldType.SECTION_HEADER },
      ...commonPersonalFields,

      { name: 'sec_espacio', label: '2. Instalación Requerida', type: FieldType.SECTION_HEADER },
      { name: 'instalacion', label: 'Instalación Deportiva', type: FieldType.SELECT, options: ['Unidad Deportiva Centro', 'Cancha de Fútbol 7 (Pasto Sintético)', 'Gimnasio Municipal (Auditorio)', 'Alberca Olímpica', 'Pista de Atletismo'], required: true },
      { name: 'actividad', label: 'Tipo de Actividad', type: FieldType.SELECT, options: ['Partido Amistoso', 'Torneo / Liga', 'Clase Pública', 'Evento Privado'], required: true },
      
      { name: 'sec_horario', label: '3. Fecha y Hora', type: FieldType.SECTION_HEADER },
      { name: 'fecha_evento', label: 'Fecha Solicitada', type: FieldType.DATE, required: true },
      { name: 'hora_inicio', label: 'Hora de Inicio', type: FieldType.TEXT, required: true, placeholder: 'Ej. 16:00' },
      { name: 'duracion', label: 'Duración (Horas)', type: FieldType.NUMBER, required: true },
      { name: 'asistentes', label: 'Número aproximado de asistentes', type: FieldType.NUMBER, required: true }
    ]
  },
  {
    id: 'talleres_culturales',
    title: 'Inscripción a Talleres Culturales y Artísticos',
    description: 'Inscripción a clases de pintura, música, danza y artes plásticas en Casa de Cultura.',
    category: 'Cultura y Deporte',
    icon: Palette,
    sla: 'Inmediata (Cupo limitado)',
    fields: [
      { name: 'sec_alumno', label: '1. Datos del Alumno', type: FieldType.SECTION_HEADER },
      ...commonPersonalFields,
      
      { name: 'sec_taller', label: '2. Selección de Taller', type: FieldType.SECTION_HEADER },
      { name: 'sede', label: 'Sede Cultural', type: FieldType.SELECT, options: ['Casa de la Cultura Centro', 'Centro Comunitario Norte', 'Biblioteca Municipal'], required: true },
      { name: 'disciplina', label: 'Disciplina', type: FieldType.SELECT, options: ['Música (Guitarra/Piano)', 'Artes Plásticas (Pintura/Escultura)', 'Danza Folklórica', 'Ballet Clásico', 'Teatro', 'Fotografía'], required: true },
      { name: 'nivel', label: 'Nivel', type: FieldType.SELECT, options: ['Principiante', 'Intermedio', 'Avanzado'], required: true },
      { name: 'horario', label: 'Turno preferente', type: FieldType.SELECT, options: ['Matutino', 'Vespertino'], required: true },
      
      { name: 'sec_docs', label: '3. Documentación', type: FieldType.SECTION_HEADER },
      { name: 'foto_infantil', label: 'Fotografía tamaño infantil (Digital)', type: FieldType.FILE, required: true }
    ]
  },
  {
    id: 'becas_deporte_cultura',
    title: 'Becas al Talento Deportivo y Cultural',
    description: 'Solicitud de apoyo económico o en especie para atletas de alto rendimiento y artistas destacados.',
    category: 'Cultura y Deporte',
    icon: Medal,
    sla: '15 días hábiles',
    fields: [
      { name: 'sec_candidato', label: '1. Datos del Candidato', type: FieldType.SECTION_HEADER },
      ...commonPersonalFields,
      ...commonAddressFields,

      { name: 'sec_trayectoria', label: '2. Trayectoria y Méritos', type: FieldType.SECTION_HEADER },
      { name: 'categoria', label: 'Categoría', type: FieldType.SELECT, options: ['Deportista de Alto Rendimiento', 'Entrenador Deportivo', 'Creador Artístico', 'Promotor Cultural'], required: true },
      { name: 'disciplina_especifica', label: 'Disciplina Específica', type: FieldType.TEXT, required: true, placeholder: 'Ej. Judo, Piano, Atletismo...' },
      { name: 'logros', label: 'Resumen de logros recientes', type: FieldType.TEXTAREA, required: true, placeholder: 'Mencione medallas, reconocimientos o exposiciones del último año.' },
      
      { name: 'sec_evidencia', label: '3. Evidencias', type: FieldType.SECTION_HEADER },
      { name: 'curriculum', label: 'Currículum Deportivo/Artístico (PDF)', type: FieldType.FILE, required: true },
      { name: 'constancias', label: 'Constancias de premios/reconocimientos', type: FieldType.FILE, required: true },
      { name: 'plan_trabajo', label: 'Plan de trabajo anual', type: FieldType.FILE, required: true }
    ]
  },
  {
    id: 'bibliotecas',
    title: 'Credencial de Biblioteca',
    description: 'Trámite para obtener la credencial de préstamo de libros a domicilio en la red de bibliotecas municipales.',
    category: 'Cultura y Deporte',
    icon: BookOpen,
    sla: '24 horas',
    fields: [
      { name: 'sec_usuario', label: '1. Datos del Usuario', type: FieldType.SECTION_HEADER },
      ...commonPersonalFields,
      ...commonAddressFields,
      
      { name: 'sec_escolar', label: '2. Datos Escolares / Ocupación', type: FieldType.SECTION_HEADER },
      { name: 'ocupacion', label: 'Ocupación', type: FieldType.SELECT, options: ['Estudiante', 'Docente', 'Investigador', 'Empleado', 'Otro'], required: true },
      { name: 'institucion', label: 'Escuela o Institución (Opcional)', type: FieldType.TEXT, required: false },
      
      { name: 'sec_fiador', label: '3. Datos del Fiador (Obligatorio)', type: FieldType.SECTION_HEADER, helperText: 'Persona responsable en caso de no devolución del material.' },
      { name: 'fiador_nombre', label: 'Nombre Completo del Fiador', type: FieldType.TEXT, required: true },
      { name: 'fiador_telefono', label: 'Teléfono del Fiador', type: FieldType.NUMBER, required: true },
      { name: 'fiador_identificacion', label: 'INE del Fiador', type: FieldType.FILE, required: true }
    ]
  },
  {
    id: 'uso_espacios_culturales',
    title: 'Préstamo de Auditorios y Teatros',
    description: 'Solicitud para presentaciones artísticas, graduaciones o conferencias en recintos culturales.',
    category: 'Cultura y Deporte',
    icon: Ticket,
    sla: '5 días hábiles',
    fields: [
        { name: 'sec_organizador', label: '1. Datos del Organizador', type: FieldType.SECTION_HEADER },
        ...commonPersonalFields,
        
        { name: 'sec_evento', label: '2. Datos del Evento', type: FieldType.SECTION_HEADER },
        { name: 'recinto', label: 'Recinto Solicitado', type: FieldType.SELECT, options: ['Teatro de la Ciudad', 'Auditorio Municipal', 'Explanada Cultural', 'Salón de Usos Múltiples'], required: true },
        { name: 'nombre_evento', label: 'Nombre del Evento', type: FieldType.TEXT, required: true },
        { name: 'descripcion_evento', label: 'Descripción breve', type: FieldType.TEXTAREA, required: true },
        { name: 'fecha', label: 'Fecha', type: FieldType.DATE, required: true },
        { name: 'costo_boleto', label: 'Costo de entrada (Poner 0 si es gratuito)', type: FieldType.NUMBER, required: true },
        
        { name: 'sec_tecnico', label: '3. Requerimientos Técnicos', type: FieldType.SECTION_HEADER },
        { name: 'sonido_iluminacion', label: '¿Requiere equipo de sonido/luces del recinto?', type: FieldType.CHECKBOX, required: false },
        { name: 'oficio_solicitud', label: 'Oficio de Solicitud Formal (PDF)', type: FieldType.FILE, required: true }
    ]
  },
  {
    id: 'ligas_municipales',
    title: 'Registro de Ligas y Equipos',
    description: 'Afiliación oficial de ligas deportivas barriales, escolares o empresariales al Consejo Municipal del Deporte.',
    category: 'Cultura y Deporte',
    icon: GraduationCap,
    sla: '7 días hábiles',
    fields: [
        { name: 'sec_presidente', label: '1. Datos del Presidente de Liga/Equipo', type: FieldType.SECTION_HEADER },
        ...commonPersonalFields,

        { name: 'sec_liga', label: '2. Datos de la Liga/Equipo', type: FieldType.SECTION_HEADER },
        { name: 'nombre_liga', label: 'Nombre de la Liga o Equipo', type: FieldType.TEXT, required: true },
        { name: 'deporte', label: 'Deporte', type: FieldType.SELECT, options: ['Fútbol Soccer', 'Fútbol Rápido', 'Básquetbol', 'Voleibol', 'Béisbol', 'Softbol'], required: true },
        { name: 'categoria_edad', label: 'Categoría', type: FieldType.SELECT, options: ['Infantil', 'Juvenil', 'Libre', 'Veteranos'], required: true },
        { name: 'rama', label: 'Rama', type: FieldType.SELECT, options: ['Varonil', 'Femenil', 'Mixto'], required: true },
        { name: 'numero_equipos', label: 'Número de equipos/jugadores afiliados', type: FieldType.NUMBER, required: true },
        
        { name: 'sec_docs', label: '3. Documentación', type: FieldType.SECTION_HEADER },
        { name: 'reglamento', label: 'Reglamento Interno', type: FieldType.FILE, required: true },
        { name: 'rol_juegos', label: 'Rol de Juegos (Si aplica)', type: FieldType.FILE, required: false }
    ]
  }
];