import { ShieldAlert, ShieldCheck, UserX, FileWarning, Bike, Radio } from 'lucide-react';
import { ServiceDefinition, FieldType } from '../../types';
import { commonAddressFields, commonPersonalFields } from '../common/userModel';

export const seguridadServices: ServiceDefinition[] = [
  // --- SEGURIDAD PÚBLICA (POLICÍA Y JUSTICIA) ---
  {
    id: 'reporte_seguridad',
    title: 'Reporte de Actividad Sospechosa',
    description: 'Reporte anónimo o nominal sobre actividades sospechosas, vandalismo o zonas de riesgo.',
    category: 'Seguridad',
    icon: ShieldAlert,
    sla: '24 horas',
    fields: [
      { name: 'sec_ubicacion', label: '1. Ubicación del Incidente', type: FieldType.SECTION_HEADER },
      ...commonAddressFields,

      { name: 'sec_detalles', label: '2. Descripción de los Hechos', type: FieldType.SECTION_HEADER },
      { name: 'tipo_incidente', label: 'Tipo de Incidente', type: FieldType.SELECT, options: ['Personas sospechosas', 'Consumo de sustancias en vía pública', 'Vandalismo / Grafiti', 'Lote baldío abierto / Riesgo', 'Falta de iluminación'], required: true },
      { name: 'descripcion', label: 'Describa detalladamente qué sucede', type: FieldType.TEXTAREA, required: true },
      { name: 'evidencia', label: 'Foto o Video (Opcional)', type: FieldType.FILE, required: false },
      
      { name: 'sec_contacto', label: '3. Contacto (Opcional)', type: FieldType.SECTION_HEADER, helperText: 'Si desea permanecer anónimo, deje estos campos vacíos.' },
      { name: 'nombre_reportante', label: 'Nombre', type: FieldType.TEXT, required: false },
      { name: 'telefono_reportante', label: 'Teléfono', type: FieldType.NUMBER, required: false }
    ]
  },
  {
    id: 'vigilancia_especial',
    title: 'Solicitud de Vigilancia Especial',
    description: 'Solicitud de rondines policiacos por periodo vacacional, eventos escolares o situaciones de riesgo temporal.',
    category: 'Seguridad',
    icon: ShieldCheck,
    sla: '48 horas',
    fields: [
      { name: 'sec_solicitante', label: '1. Datos del Solicitante', type: FieldType.SECTION_HEADER },
      ...commonPersonalFields,

      { name: 'sec_lugar', label: '2. Lugar a Vigilar', type: FieldType.SECTION_HEADER },
      ...commonAddressFields,

      { name: 'sec_motivo', label: '3. Justificación', type: FieldType.SECTION_HEADER },
      { name: 'motivo_solicitud', label: 'Motivo', type: FieldType.SELECT, options: ['Periodo Vacacional (Casa sola)', 'Evento Escolar', 'Fiesta Patronal', 'Amenazas recientes', 'Apertura/Cierre de Negocio'], required: true },
      { name: 'fechas', label: 'Fechas y Horarios requeridos', type: FieldType.TEXT, required: true },
      { name: 'comentarios', label: 'Observaciones adicionales para los oficiales', type: FieldType.TEXTAREA, required: false }
    ]
  },
  {
    id: 'registro_bicicletas',
    title: 'Registro Municipal de Bicicletas',
    description: 'Padrón preventivo de bicicletas para facilitar su recuperación en caso de robo.',
    category: 'Seguridad',
    icon: Bike,
    sla: 'Inmediato',
    fields: [
        { name: 'sec_propietario', label: '1. Datos del Propietario', type: FieldType.SECTION_HEADER },
        ...commonPersonalFields,
        
        { name: 'sec_bici', label: '2. Datos de la Bicicleta', type: FieldType.SECTION_HEADER },
        { name: 'marca', label: 'Marca', type: FieldType.TEXT, required: true },
        { name: 'modelo', label: 'Modelo / Tipo', type: FieldType.TEXT, required: true },
        { name: 'color', label: 'Color', type: FieldType.TEXT, required: true },
        { name: 'numero_serie', label: 'Número de Serie (Cuadro)', type: FieldType.TEXT, required: true, helperText: 'Suele estar debajo de los pedales.' },
        { name: 'rasgos', label: 'Rasgos particulares (Calcomanías, rayones)', type: FieldType.TEXTAREA, required: true },
        
        { name: 'sec_fotos', label: '3. Fotos', type: FieldType.SECTION_HEADER },
        { name: 'foto_bici', label: 'Foto de la Bicicleta', type: FieldType.FILE, required: true },
        { name: 'foto_serie', label: 'Foto del Número de Serie', type: FieldType.FILE, required: true }
    ]
  },
  {
    id: 'queja_policial',
    title: 'Queja contra Elemento de Seguridad',
    description: 'Canal directo con Asuntos Internos para reportar abuso de autoridad o mala conducta policial.',
    category: 'Seguridad',
    icon: UserX,
    sla: '5 días hábiles',
    fields: [
      { name: 'sec_hechos', label: '1. Datos del Incidente', type: FieldType.SECTION_HEADER },
      { name: 'fecha_hora', label: 'Fecha y Hora', type: FieldType.TEXT, required: true, placeholder: 'Ej. 20 Oct, 10:30 PM' },
      { name: 'ubicacion', label: 'Lugar de los hechos', type: FieldType.TEXT, required: true },
      
      { name: 'sec_unidad', label: '2. Identificación del Elemento', type: FieldType.SECTION_HEADER },
      { name: 'numero_patrulla', label: 'Número de Patrulla', type: FieldType.TEXT, required: false },
      { name: 'nombre_oficial', label: 'Nombre del Oficial (Si lo tiene)', type: FieldType.TEXT, required: false },
      { name: 'descripcion_fisica', label: 'Descripción física del elemento', type: FieldType.TEXTAREA, required: false },
      
      { name: 'sec_motivo', label: '3. Motivo de la Queja', type: FieldType.SECTION_HEADER },
      { name: 'falta', label: 'Tipo de Falta', type: FieldType.SELECT, options: ['Abuso de autoridad', 'Solicitud de dinero (Mordida)', 'Agresión física/verbal', 'Negligencia', 'Acoso'], required: true },
      { name: 'evidencia', label: 'Video o Audio (Opcional)', type: FieldType.FILE, required: false },
      { name: 'relato', label: 'Relato detallado', type: FieldType.TEXTAREA, required: true }
    ]
  },
  {
    id: 'pre_denuncia',
    title: 'Pre-Denuncia de Extravío',
    description: 'Constancia administrativa ante Juez Cívico por extravío de documentos oficiales.',
    category: 'Seguridad',
    icon: FileWarning,
    sla: '24 horas',
    fields: [
      { name: 'sec_afectado', label: '1. Datos del Afectado', type: FieldType.SECTION_HEADER },
      ...commonPersonalFields,

      { name: 'sec_hechos', label: '2. Narrativa de los Hechos', type: FieldType.SECTION_HEADER },
      { name: 'objeto_extraviado', label: 'Objeto/Documento Extraviado', type: FieldType.SELECT, options: ['Credencial INE', 'Pasaporte', 'Licencia de Conducir', 'Cartera con documentos', 'Teléfono Celular'], required: true },
      { name: 'fecha_extravio', label: 'Fecha aproximada', type: FieldType.DATE, required: true },
      { name: 'lugar_extravio', label: 'Lugar (si se sabe)', type: FieldType.TEXT, required: true },
      { name: 'narrativa', label: '¿Cómo sucedieron los hechos?', type: FieldType.TEXTAREA, required: true },
      
      { name: 'sec_id', label: '3. Identificación', type: FieldType.SECTION_HEADER },
      { name: 'identificacion', label: 'Identificación Oficial (Escaneo)', type: FieldType.FILE, required: true }
    ]
  },
  {
    id: 'boton_panico_comercio',
    title: 'Conexión a Botón de Pánico (Comercios)',
    description: 'Solicitud para conectar sistema de alarma vecinal o comercial al C4 Municipal.',
    category: 'Seguridad',
    icon: Radio,
    sla: '10 días hábiles',
    fields: [
        { name: 'sec_negocio', label: '1. Datos del Negocio', type: FieldType.SECTION_HEADER },
        ...commonAddressFields,
        { name: 'nombre_comercial', label: 'Nombre del Negocio', type: FieldType.TEXT, required: true },
        
        { name: 'sec_contacto', label: '2. Contactos de Emergencia', type: FieldType.SECTION_HEADER },
        { name: 'contacto_1', label: 'Nombre Contacto 1', type: FieldType.TEXT, required: true },
        { name: 'celular_1', label: 'Celular Contacto 1', type: FieldType.NUMBER, required: true },
        { name: 'contacto_2', label: 'Nombre Contacto 2', type: FieldType.TEXT, required: true },
        { name: 'celular_2', label: 'Celular Contacto 2', type: FieldType.NUMBER, required: true },
        
        { name: 'sec_tecnica', label: '3. Datos Técnicos', type: FieldType.SECTION_HEADER },
        { name: 'proveedor_internet', label: 'Proveedor de Internet', type: FieldType.TEXT, required: true },
        { name: 'comprobante_domicilio', label: 'Comprobante de Domicilio', type: FieldType.FILE, required: true }
    ]
  }
];