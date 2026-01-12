import { Ticket, TrafficCone, Ban, Signpost, Truck, Accessibility, Car, FileText, Siren } from 'lucide-react';
import { ServiceDefinition, FieldType } from '../../types';
import { commonAddressFields, commonFiscalFields, commonPersonalFields } from '../common/userModel';

export const transitoServices: ServiceDefinition[] = [
  {
    id: 'multas',
    title: 'Pago y Calificación de Infracciones',
    description: 'Consulta, pago, solicitud de descuento o calificación de multas de tránsito municipales.',
    category: 'Tránsito y Vialidad',
    icon: Ticket,
    sla: '48 horas',
    fields: [
      { name: 'sec_vehiculo', label: '1. Datos del Vehículo', type: FieldType.SECTION_HEADER },
      { name: 'placa', label: 'Placa del Vehículo', type: FieldType.TEXT, required: true },
      { name: 'folio_infraccion', label: 'Folio de la boleta de infracción', type: FieldType.TEXT, required: true },
      
      { name: 'sec_tramite', label: '2. Tipo de Trámite', type: FieldType.SECTION_HEADER },
      { name: 'tipo_gestion', label: '¿Qué desea realizar?', type: FieldType.SELECT, options: ['Pagar Multa', 'Solicitar Calificación (Descuento)', 'Aclaración / Impugnación', 'Liberación de Vehículo (Corralón)'], required: true },
      
      { name: 'sec_docs', label: '3. Documentos', type: FieldType.SECTION_HEADER },
      { name: 'tarjeta_circulacion', label: 'Tarjeta de Circulación', type: FieldType.FILE, required: true },
      { name: 'identificacion', label: 'INE del Propietario', type: FieldType.FILE, required: true },
      { name: 'garantia', label: 'Foto de documento retenido (Licencia/Placa)', type: FieldType.FILE, required: false }
    ]
  },
  {
    id: 'permiso_carga',
    title: 'Permiso de Carga y Descarga',
    description: 'Autorización para vehículos pesados para maniobras en zonas restringidas o Centro Histórico.',
    category: 'Tránsito y Vialidad',
    icon: Truck,
    sla: '3 días hábiles',
    fields: [
      { name: 'sec_solicitante', label: '1. Datos de la Empresa/Solicitante', type: FieldType.SECTION_HEADER },
      ...commonFiscalFields,

      { name: 'sec_unidad', label: '2. Datos de la Unidad', type: FieldType.SECTION_HEADER },
      { name: 'tipo_vehiculo', label: 'Tipo de Vehículo', type: FieldType.SELECT, options: ['Camioneta 3.5 Ton', 'Camión Rabón', 'Torton', 'Trailer / Quinta Rueda'], required: true },
      { name: 'placas', label: 'Placas', type: FieldType.TEXT, required: true },
      { name: 'modelo', label: 'Marca y Modelo', type: FieldType.TEXT, required: true },

      { name: 'sec_maniobra', label: '3. Datos de la Maniobra', type: FieldType.SECTION_HEADER },
      { name: 'lugar_maniobra', label: 'Dirección exacta de descarga', type: FieldType.TEXT, required: true },
      { name: 'fecha', label: 'Fecha de la maniobra', type: FieldType.DATE, required: true },
      { name: 'horario', label: 'Horario solicitado', type: FieldType.TEXT, required: true },
      { name: 'mercancia', label: 'Tipo de Mercancía', type: FieldType.TEXT, required: true }
    ]
  },
  {
    id: 'estacionamiento_exclusivo',
    title: 'Solicitud de Cajón Exclusivo',
    description: 'Pintado y señalización de cajón exclusivo para residencias (discapacidad) o comercios.',
    category: 'Tránsito y Vialidad',
    icon: Accessibility,
    sla: '10 días hábiles',
    fields: [
      { name: 'sec_solicitante', label: '1. Datos del Solicitante', type: FieldType.SECTION_HEADER },
      ...commonPersonalFields,

      { name: 'sec_ubicacion', label: '2. Ubicación del Cajón', type: FieldType.SECTION_HEADER },
      ...commonAddressFields,

      { name: 'sec_tipo', label: '3. Tipo de Exclusivo', type: FieldType.SECTION_HEADER },
      { name: 'tipo_cajon', label: 'Modalidad', type: FieldType.SELECT, options: ['Residencial - Personas con Discapacidad', 'Comercial - Carga y Descarga', 'Comercial - Clientes'], required: true },
      { name: 'metros', label: 'Metros lineales requeridos', type: FieldType.NUMBER, required: true },
      
      { name: 'sec_docs', label: '4. Requisitos', type: FieldType.SECTION_HEADER },
      { name: 'dictamen_medico', label: 'Certificado de Discapacidad (Si aplica)', type: FieldType.FILE, required: false },
      { name: 'predial', label: 'Pago de Predial al corriente', type: FieldType.FILE, required: true },
      { name: 'visto_bueno', label: 'Factibilidad de Tránsito (Si ya cuenta con ella)', type: FieldType.FILE, required: false }
    ]
  },
  {
    id: 'senaletica',
    title: 'Solicitud de Señalética Vial',
    description: 'Petición ciudadana para instalación de topes, balizamiento (pintura de calles) o señales de alto.',
    category: 'Tránsito y Vialidad',
    icon: Signpost,
    sla: '15 días hábiles',
    fields: [
      { name: 'sec_ubicacion', label: '1. Ubicación', type: FieldType.SECTION_HEADER },
      { name: 'calle_principal', label: 'Calle Principal', type: FieldType.TEXT, required: true },
      { name: 'entre_calles', label: 'Entre calles', type: FieldType.TEXT, required: true },
      { name: 'colonia', label: 'Colonia', type: FieldType.TEXT, required: true },
      
      { name: 'sec_solicitud', label: '2. Detalle de la Solicitud', type: FieldType.SECTION_HEADER },
      { name: 'tipo_infraestructura', label: 'Infraestructura requerida', type: FieldType.SELECT, options: ['Tope / Reductor de velocidad', 'Señal de ALTO', 'Paso Peatonal (Cebra)', 'Pintura de carril / guarnición', 'Espejo cóncavo'], required: true },
      { name: 'justificacion', label: 'Justificación (Accidentes frecuentes, zona escolar, etc.)', type: FieldType.TEXTAREA, required: true },
      { name: 'firmas_vecinos', label: 'Firmas de conformidad de vecinos (PDF)', type: FieldType.FILE, required: true, helperText: 'Se requiere el consenso de los vecinos de la cuadra.' }
    ]
  },
  {
    id: 'semaforos',
    title: 'Reporte de Fallas en Semáforos',
    description: 'Atención urgente a semáforos apagados, desincronizados o dañados por choques.',
    category: 'Tránsito y Vialidad',
    icon: TrafficCone,
    sla: '24 horas',
    fields: [
      { name: 'sec_ubicacion', label: '1. Ubicación', type: FieldType.SECTION_HEADER },
      { name: 'interseccion', label: 'Cruce exacto (Calle 1 y Calle 2)', type: FieldType.TEXT, required: true },
      { name: 'referencia', label: 'Referencia visual', type: FieldType.TEXT, required: false },
      
      { name: 'sec_falla', label: '2. Detalle de la Falla', type: FieldType.SECTION_HEADER },
      { name: 'tipo_falla', label: 'Problema', type: FieldType.SELECT, options: ['Apagado totalmente', 'Luz roja fundida', 'Luz verde fundida', 'Semáforo girado / No visible', 'Intermitente'], required: true },
      { name: 'orientacion', label: 'Sentido afectado (Ej. Norte a Sur)', type: FieldType.TEXT, required: true },
      { name: 'foto', label: 'Foto (Opcional)', type: FieldType.FILE, required: false }
    ]
  },
  {
    id: 'obstruccion_vial',
    title: 'Reporte de Obstrucción Vial',
    description: 'Solicitud de grúa para retirar vehículos que bloquean cocheras, rampas de discapacidad o doble fila.',
    category: 'Tránsito y Vialidad',
    icon: Ban,
    sla: 'Inmediata',
    fields: [
      { name: 'sec_ubicacion', label: '1. Ubicación', type: FieldType.SECTION_HEADER },
      ...commonAddressFields,
      
      { name: 'sec_vehiculo', label: '2. Vehículo Infractor', type: FieldType.SECTION_HEADER },
      { name: 'placa', label: 'Placas', type: FieldType.TEXT, required: true },
      { name: 'color_modelo', label: 'Color y Modelo aproximado', type: FieldType.TEXT, required: true },
      { name: 'tipo_obstruccion', label: 'Obstrucción', type: FieldType.SELECT, options: ['Cochera particular', 'Rampa de discapacidad', 'Paso peatonal', 'Doble fila'], required: true },
      { name: 'evidencia', label: 'Foto de la infracción', type: FieldType.FILE, required: true }
    ]
  },
  {
    id: 'copia_parte_accidente',
    title: 'Copia Certificada de Parte de Accidente',
    description: 'Documento oficial del reporte de tránsito por choque o siniestro (Requerido por aseguradoras).',
    category: 'Tránsito y Vialidad',
    icon: Siren,
    sla: '3 días hábiles',
    fields: [
        { name: 'sec_interesado', label: '1. Datos del Interesado', type: FieldType.SECTION_HEADER },
        ...commonPersonalFields,

        { name: 'sec_siniestro', label: '2. Datos del Accidente', type: FieldType.SECTION_HEADER },
        { name: 'fecha_siniestro', label: 'Fecha del Accidente', type: FieldType.DATE, required: true },
        { name: 'ubicacion_siniestro', label: 'Ubicación exacta', type: FieldType.TEXT, required: true },
        { name: 'placas_vehiculo', label: 'Placas de su vehículo', type: FieldType.TEXT, required: true },
        { name: 'nombre_conductor', label: 'Nombre del conductor al momento', type: FieldType.TEXT, required: true },
        
        { name: 'sec_docs', label: '3. Requisitos', type: FieldType.SECTION_HEADER },
        { name: 'identificacion', label: 'Identificación Oficial', type: FieldType.FILE, required: true },
        { name: 'tarjeta_circulacion', label: 'Tarjeta de Circulación', type: FieldType.FILE, required: true },
        { name: 'pago_derechos', label: 'Pago de derechos', type: FieldType.FILE, required: true }
    ]
  },
  {
    id: 'permiso_circular_sin_placas',
    title: 'Permiso Provisional sin Placas',
    description: 'Permiso temporal (30 días) para vehículos nuevos o con baja de placas reciente.',
    category: 'Tránsito y Vialidad',
    icon: Car,
    sla: '24 horas',
    fields: [
        { name: 'sec_propietario', label: '1. Datos del Propietario', type: FieldType.SECTION_HEADER },
        ...commonPersonalFields,
        ...commonAddressFields,

        { name: 'sec_vehiculo', label: '2. Datos del Vehículo', type: FieldType.SECTION_HEADER },
        { name: 'marca', label: 'Marca', type: FieldType.TEXT, required: true },
        { name: 'modelo', label: 'Modelo (Año)', type: FieldType.NUMBER, required: true },
        { name: 'tipo', label: 'Línea / Tipo', type: FieldType.TEXT, required: true },
        { name: 'color', label: 'Color', type: FieldType.TEXT, required: true },
        { name: 'serie_vin', label: 'Número de Serie (VIN)', type: FieldType.TEXT, required: true },
        { name: 'motor', label: 'Número de Motor', type: FieldType.TEXT, required: true },

        { name: 'sec_docs', label: '3. Documentación', type: FieldType.SECTION_HEADER },
        { name: 'factura', label: 'Factura o Carta Factura (PDF)', type: FieldType.FILE, required: true },
        { name: 'baja_placas', label: 'Baja de placas anteriores (Si aplica)', type: FieldType.FILE, required: false },
        { name: 'seguro', label: 'Póliza de Seguro Vigente', type: FieldType.FILE, required: true },
        { name: 'licencia', label: 'Licencia de Conducir Vigente', type: FieldType.FILE, required: true }
    ]
  },
  {
    id: 'constancia_no_infraccion',
    title: 'Constancia de No Infracción',
    description: 'Certificado que avala que un vehículo o licencia no cuenta con multas pendientes de pago.',
    category: 'Tránsito y Vialidad',
    icon: FileText,
    sla: '24 horas',
    fields: [
        { name: 'sec_solicitante', label: '1. Datos del Solicitante', type: FieldType.SECTION_HEADER },
        ...commonPersonalFields,

        { name: 'sec_consulta', label: '2. Objeto de la Consulta', type: FieldType.SECTION_HEADER },
        { name: 'tipo_busqueda', label: 'Buscar por', type: FieldType.SELECT, options: ['Placa Vehicular', 'Número de Licencia'], required: true },
        { name: 'dato_busqueda', label: 'Dato (Placa o Licencia)', type: FieldType.TEXT, required: true },
        
        { name: 'sec_docs', label: '3. Requisitos', type: FieldType.SECTION_HEADER },
        { name: 'identificacion', label: 'Identificación Oficial', type: FieldType.FILE, required: true },
        { name: 'tarjeta', label: 'Tarjeta de Circulación (Si es por placa)', type: FieldType.FILE, required: false }
    ]
  }
];