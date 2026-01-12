import { Briefcase, Store, BadgePercent, LayoutTemplate, RefreshCcw, FileText, CalendarRange, Music } from 'lucide-react';
import { ServiceDefinition, FieldType } from '../../types';
import { commonFiscalFields, commonAddressFields, commonPersonalFields } from '../common/userModel';

export const desarrolloEconomicoServices: ServiceDefinition[] = [
  {
    id: 'sare',
    title: 'SARE (Apertura Rápida de Empresas)',
    description: 'Trámite simplificado para abrir negocios de bajo riesgo en menos de 72 horas (Abarrotes, Papelerías, Ropa, etc.).',
    category: 'Desarrollo Económico',
    icon: Briefcase,
    sla: '72 horas',
    fields: [
      { name: 'sec_datos', label: '1. Datos del Solicitante o Empresa', type: FieldType.SECTION_HEADER },
      ...commonFiscalFields,

      { name: 'sec_ubicacion', label: '2. Ubicación del Negocio', type: FieldType.SECTION_HEADER },
      ...commonAddressFields,

      { name: 'sec_negocio', label: '3. Detalles del Negocio', type: FieldType.SECTION_HEADER },
      { name: 'nombre_comercial', label: 'Nombre Comercial del Negocio', type: FieldType.TEXT, required: true },
      { name: 'giro_sare', label: 'Giro (Catálogo SARE)', type: FieldType.SELECT, options: ['Abarrotes sin alcohol', 'Papelería y Regalos', 'Tienda de Ropa / Zapatería', 'Estética / Barbería', 'Consultorio Médico', 'Cafetería sin alcohol', 'Ciber café'], required: true },
      { name: 'superficie', label: 'Superficie del local (m2)', type: FieldType.NUMBER, required: true, helperText: 'Debe ser menor a 100m2 para SARE' },
      { name: 'inversion', label: 'Monto de Inversión Estimada (MXN)', type: FieldType.NUMBER, required: true },
      { name: 'empleados', label: 'Número de Empleados', type: FieldType.NUMBER, required: true },

      { name: 'sec_docs', label: '4. Documentación Digital', type: FieldType.SECTION_HEADER },
      { name: 'uso_suelo', label: 'Dictamen de Uso de Suelo', type: FieldType.FILE, required: true },
      { name: 'proteccion_civil', label: 'Visto Bueno de Protección Civil', type: FieldType.FILE, required: true }
    ]
  },
  {
    id: 'licencia_funcionamiento',
    title: 'Licencia de Funcionamiento (Giro Reglamentado)',
    description: 'Para negocios de alto impacto, venta de alcohol, industrias o superficies mayores a 100m2.',
    category: 'Desarrollo Económico',
    icon: FileText,
    sla: '15 a 20 días hábiles',
    fields: [
      { name: 'sec_fiscal', label: '1. Datos Fiscales', type: FieldType.SECTION_HEADER },
      ...commonFiscalFields,
      
      { name: 'sec_establecimiento', label: '2. Datos del Establecimiento', type: FieldType.SECTION_HEADER },
      { name: 'nombre_negocio', label: 'Nombre del Establecimiento', type: FieldType.TEXT, required: true },
      ...commonAddressFields,
      
      { name: 'sec_detalles', label: '3. Características Operativas', type: FieldType.SECTION_HEADER },
      { name: 'tipo_giro', label: 'Giro Específico', type: FieldType.SELECT, options: ['Restaurante-Bar', 'Bar / Cantina', 'Discoteca / Centro Nocturno', 'Industria / Fábrica', 'Hotel / Motel', 'Gasolinera'], required: true },
      { name: 'horario', label: 'Horario de Funcionamiento', type: FieldType.TEXT, required: true, placeholder: 'Ej. Lunes a Domingo de 10:00 a 02:00' },
      
      { name: 'sec_req', label: '4. Requisitos Especiales', type: FieldType.SECTION_HEADER },
      { name: 'impacto_ambiental', label: 'Dictamen de Impacto Ambiental', type: FieldType.FILE, required: true },
      { name: 'anuencia_vecinal', label: 'Anuencia de Vecinos (Firmas)', type: FieldType.FILE, required: true },
      { name: 'poliza_seguro', label: 'Póliza de Seguro de Responsabilidad Civil', type: FieldType.FILE, required: true }
    ]
  },
  {
    id: 'venta_temporada',
    title: 'Permiso para Venta de Temporada',
    description: 'Autorización temporal para vender en fechas específicas (Día de las Madres, Navidad, San Valentín) en vía pública.',
    category: 'Desarrollo Económico',
    icon: CalendarRange,
    sla: '5 días hábiles',
    fields: [
      { name: 'sec_comerciante', label: '1. Datos del Comerciante', type: FieldType.SECTION_HEADER },
      ...commonPersonalFields,
      
      { name: 'sec_temp', label: '2. Temporada y Producto', type: FieldType.SECTION_HEADER },
      { name: 'temporada', label: 'Temporada', type: FieldType.SELECT, options: ['Día de Reyes (Enero)', 'San Valentín (14 Feb)', 'Día de las Madres (10 May)', 'Día de Muertos (Nov)', 'Navidad / Fin de Año'], required: true },
      { name: 'producto', label: 'Producto a vender', type: FieldType.TEXT, required: true, placeholder: 'Ej. Flores, Juguetes, Artículos Navideños' },
      { name: 'dias_permiso', label: 'Días solicitados', type: FieldType.TEXT, required: true, placeholder: 'Ej. Del 12 al 14 de Febrero' },
      
      { name: 'sec_ubic', label: '3. Ubicación', type: FieldType.SECTION_HEADER },
      { name: 'ubicacion_solicitada', label: 'Ubicación exacta (Calle/Cruce)', type: FieldType.TEXT, required: true },
      { name: 'medidas', label: 'Medidas del puesto', type: FieldType.TEXT, required: true, placeholder: 'Ej. 2x2 metros' },
      { name: 'foto_stand', label: 'Foto del puesto o estructura', type: FieldType.FILE, required: true }
    ]
  },
  {
    id: 'espectaculos_publicos',
    title: 'Permiso para Espectáculos Públicos',
    description: 'Trámite para organizar bailes, rodeos, conciertos, kermeses o eventos con cobro de entrada.',
    category: 'Desarrollo Económico',
    icon: Music,
    sla: '10 días hábiles',
    fields: [
      { name: 'sec_org', label: '1. Organizador', type: FieldType.SECTION_HEADER },
      ...commonFiscalFields,
      
      { name: 'sec_evento', label: '2. Datos del Evento', type: FieldType.SECTION_HEADER },
      { name: 'nombre_evento', label: 'Nombre del Evento', type: FieldType.TEXT, required: true },
      { name: 'tipo_espectaculo', label: 'Tipo', type: FieldType.SELECT, options: ['Baile Popular', 'Concierto', 'Jaripeo / Rodeo', 'Circo', 'Feria', 'Evento Deportivo Profesional'], required: true },
      { name: 'lugar', label: 'Lugar / Recinto', type: FieldType.TEXT, required: true },
      { name: 'fecha_hora', label: 'Fecha y Hora', type: FieldType.TEXT, required: true },
      { name: 'aforo', label: 'Aforo esperado', type: FieldType.NUMBER, required: true },
      { name: 'venta_alcohol', label: '¿Habrá venta de alcohol?', type: FieldType.CHECKBOX, required: false },
      
      { name: 'sec_seguridad', label: '3. Seguridad y Requisitos', type: FieldType.SECTION_HEADER },
      { name: 'contrato_seguridad', label: 'Contrato de Seguridad Privada', type: FieldType.FILE, required: true },
      { name: 'visto_bueno_pc', label: 'Visto Bueno de Protección Civil', type: FieldType.FILE, required: true },
      { name: 'fianza', label: 'Pago de Fianza (Garantía)', type: FieldType.FILE, required: true }
    ]
  },
  {
    id: 'permiso_anuncios',
    title: 'Permiso de Anuncios Publicitarios',
    description: 'Autorización para la instalación de anuncios adosados, pintados, espectaculares o luminosos.',
    category: 'Desarrollo Económico',
    icon: LayoutTemplate,
    sla: '5 días hábiles',
    fields: [
      { name: 'sec_solicitante', label: '1. Datos del Solicitante', type: FieldType.SECTION_HEADER },
      ...commonFiscalFields,

      { name: 'sec_anuncio', label: '2. Características del Anuncio', type: FieldType.SECTION_HEADER },
      { name: 'tipo_anuncio', label: 'Tipo de Anuncio', type: FieldType.SELECT, options: ['Adosado a fachada', 'Pintado / Mural', 'Toldo', 'Luminoso / Neón', 'Unipolar (Espectacular)'], required: true },
      { name: 'dimensiones', label: 'Dimensiones Totales (m2)', type: FieldType.NUMBER, required: true },
      { name: 'leyenda', label: 'Texto o Leyenda del Anuncio', type: FieldType.TEXTAREA, required: true, placeholder: 'Escriba exactamente lo que dice el anuncio' },
      
      { name: 'sec_adjuntos', label: '3. Evidencia Visual', type: FieldType.SECTION_HEADER },
      { name: 'render', label: 'Fotomontaje o Render del anuncio', type: FieldType.FILE, required: true },
      { name: 'plano_estructural', label: 'Plano y memoria de cálculo (Solo estructurales)', type: FieldType.FILE, required: false }
    ]
  },
  {
    id: 'renovacion_licencia',
    title: 'Renovación de Licencia Municipal',
    description: 'Refrendo anual de la licencia de funcionamiento para negocios ya establecidos.',
    category: 'Desarrollo Económico',
    icon: RefreshCcw,
    sla: '3 días hábiles',
    fields: [
      { name: 'sec_licencia', label: '1. Identificación de Licencia', type: FieldType.SECTION_HEADER },
      { name: 'numero_licencia', label: 'Número de Licencia Anterior', type: FieldType.TEXT, required: true, placeholder: 'Ej. LF-2023-0054' },
      { name: 'rfc', label: 'RFC Registrado', type: FieldType.TEXT, required: true },
      
      { name: 'sec_confirmacion', label: '2. Estado del Negocio', type: FieldType.SECTION_HEADER },
      { name: 'cambios', label: '¿Ha realizado cambios en el local?', type: FieldType.SELECT, options: ['No, todo sigue igual', 'Sí, hubo ampliación', 'Sí, cambio de nombre'], required: true },
      
      { name: 'sec_docs', label: '3. Documentos Vigentes', type: FieldType.SECTION_HEADER },
      { name: 'predial_vigente', label: 'Pago de Predial (Año en curso)', type: FieldType.FILE, required: true },
      { name: 'pago_basura', label: 'Recibo de Recolección de Basura', type: FieldType.FILE, required: true }
    ]
  },
  {
    id: 'padron_proveedores',
    title: 'Inscripción al Padrón de Proveedores',
    description: 'Registro para empresas interesadas en vender productos o servicios al Gobierno Municipal.',
    category: 'Desarrollo Económico',
    icon: BadgePercent,
    sla: '10 días hábiles',
    fields: [
      { name: 'sec_empresa', label: '1. Datos de la Empresa', type: FieldType.SECTION_HEADER },
      ...commonFiscalFields,
      { name: 'acta_constitutiva', label: 'Acta Constitutiva (Solo Personas Morales)', type: FieldType.FILE, required: false },
      
      { name: 'sec_contacto', label: '2. Datos de Contacto y Venta', type: FieldType.SECTION_HEADER },
      { name: 'contacto_nombre', label: 'Nombre del Contacto de Ventas', type: FieldType.TEXT, required: true },
      { name: 'contacto_email', label: 'Correo de Ventas', type: FieldType.EMAIL, required: true },
      { name: 'telefono_oficina', label: 'Teléfono de Oficina', type: FieldType.NUMBER, required: true },
      
      { name: 'sec_giro', label: '3. Productos y Servicios', type: FieldType.SECTION_HEADER },
      { name: 'sector', label: 'Sector', type: FieldType.SELECT, options: ['Papelería y Oficina', 'Construcción', 'Tecnología y Cómputo', 'Mobiliario', 'Servicios de Consultoría', 'Mantenimiento Vehicular', 'Limpieza'], required: true },
      { name: 'catalogo', label: 'Catálogo de Productos / Servicios (PDF)', type: FieldType.FILE, required: true },
      { name: 'opinion_sat', label: 'Opinión de Cumplimiento SAT (Positiva)', type: FieldType.FILE, required: true }
    ]
  },
  {
    id: 'comercio_via_publica',
    title: 'Permiso Comercio en Vía Pública',
    description: 'Permisos temporales para venta en tianguis, mercados sobre ruedas o puestos semifijos.',
    category: 'Desarrollo Económico',
    icon: Store,
    sla: '10 días hábiles',
    fields: [
      { name: 'sec_personal', label: '1. Datos del Comerciante', type: FieldType.SECTION_HEADER },
      ...commonPersonalFields,
      
      { name: 'sec_puesto', label: '2. Datos del Puesto', type: FieldType.SECTION_HEADER },
      { name: 'ubicacion_solicitada', label: 'Calle y Cruces Solicitados', type: FieldType.TEXT, required: true },
      { name: 'giro_venta', label: '¿Qué va a vender?', type: FieldType.TEXT, required: true, placeholder: 'Ej. Verduras, Ropa, Artesanías' },
      { name: 'tipo_puesto', label: 'Tipo de Estructura', type: FieldType.SELECT, options: ['Puesto Metálico Semifijo', 'Tablón / Mesa', 'Vehículo / Food Truck', 'Manta en piso'], required: true },
      { name: 'medidas', label: 'Medidas (Frente x Fondo)', type: FieldType.TEXT, required: true, placeholder: 'Ej. 2x2 metros' },
      { name: 'dias', label: 'Días de trabajo', type: FieldType.SELECT, options: ['Diario', 'Fines de Semana', 'Solo Domingos (Tianguis)'], required: true },
      
      { name: 'sec_salud', label: '3. Requisitos de Salud', type: FieldType.SECTION_HEADER, helperText: 'Solo para venta de alimentos' },
      { name: 'manejo_alimentos', label: 'Constancia de Manejo de Alimentos (Si aplica)', type: FieldType.FILE, required: false }
    ]
  }
];