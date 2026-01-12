import { Car, Lightbulb, Droplets, Construction, Waves, Truck, Building2, Ruler, ClipboardCheck, Hammer } from 'lucide-react';
import { ServiceDefinition, FieldType } from '../../types';
import { commonAddressFields, commonPersonalFields, commonFiscalFields } from '../common/userModel';

export const urbanismoServices: ServiceDefinition[] = [
  // --- TRAMITES ADMINISTRATIVOS (ALTO NIVEL) ---
  {
    id: 'alineamiento_numero',
    title: 'Alineamiento y Número Oficial',
    description: 'Documento oficial que señala la traza urbana, restricciones de construcción y asigna el número oficial del predio.',
    category: 'Urbanismo',
    icon: Ruler,
    sla: '5 días hábiles',
    fields: [
        { name: 'sec_prop', label: '1. Datos del Propietario', type: FieldType.SECTION_HEADER },
        ...commonPersonalFields,
        
        { name: 'sec_ubic', label: '2. Ubicación del Predio', type: FieldType.SECTION_HEADER },
        { name: 'clave_catastral', label: 'Clave Catastral', type: FieldType.TEXT, required: true },
        ...commonAddressFields,

        { name: 'sec_frente', label: '3. Datos del Terreno', type: FieldType.SECTION_HEADER },
        { name: 'frente_terreno', label: 'Metros de frente', type: FieldType.NUMBER, required: true },
        { name: 'fondo_terreno', label: 'Metros de fondo', type: FieldType.NUMBER, required: true },
        
        { name: 'sec_docs', label: '4. Documentación', type: FieldType.SECTION_HEADER },
        { name: 'escrituras', label: 'Escrituras (Copia simple)', type: FieldType.FILE, required: true },
        { name: 'predial', label: 'Pago de Predial Actualizado', type: FieldType.FILE, required: true }
    ]
  },
  {
    id: 'licencia_construccion_mayor',
    title: 'Licencia de Construcción (Obra Mayor)',
    description: 'Permiso para obras mayores a 60m2, locales comerciales, edificios o fraccionamientos.',
    category: 'Urbanismo',
    icon: Building2,
    sla: '15 días hábiles',
    fields: [
      { name: 'sec_solicitante', label: '1. Datos del Solicitante / Propietario', type: FieldType.SECTION_HEADER },
      ...commonFiscalFields,
      
      { name: 'sec_dro', label: '2. Director Responsable de Obra (DRO)', type: FieldType.SECTION_HEADER, helperText: 'Profesional certificado encargado de la obra.' },
      { name: 'dro_nombre', label: 'Nombre del DRO', type: FieldType.TEXT, required: true },
      { name: 'dro_registro', label: 'Número de Registro Municipal', type: FieldType.TEXT, required: true },
      { name: 'dro_celular', label: 'Celular del DRO', type: FieldType.NUMBER, required: true },

      { name: 'sec_obra', label: '3. Datos de la Obra', type: FieldType.SECTION_HEADER },
      { name: 'direccion_obra', label: 'Dirección Completa de la Obra', type: FieldType.TEXT, required: true },
      { name: 'giro_construccion', label: 'Giro', type: FieldType.SELECT, options: ['Habitacional Unifamiliar', 'Habitacional Plurifamiliar', 'Comercial', 'Industrial', 'Mixto'], required: true },
      { name: 'm2_construccion', label: 'Metros cuadrados a construir', type: FieldType.NUMBER, required: true },
      { name: 'niveles', label: 'Número de Niveles', type: FieldType.NUMBER, required: true },

      { name: 'sec_planos', label: '4. Expediente Técnico', type: FieldType.SECTION_HEADER },
      { name: 'alineamiento_previo', label: 'Alineamiento y No. Oficial Vigente', type: FieldType.FILE, required: true },
      { name: 'planos_arq', label: 'Planos Arquitectónicos', type: FieldType.FILE, required: true },
      { name: 'planos_est', label: 'Planos Estructurales y Memoria de Cálculo', type: FieldType.FILE, required: true },
      { name: 'mecanica_suelos', label: 'Estudio de Mecánica de Suelos', type: FieldType.FILE, required: true }
    ]
  },
  {
    id: 'ruptura_pavimento',
    title: 'Permiso de Ruptura de Pavimento',
    description: 'Solicitud para romper banqueta o vía pública para instalación de drenaje, agua potable, gas o fibra óptica.',
    category: 'Urbanismo',
    icon: Hammer,
    sla: '5 días hábiles',
    fields: [
      { name: 'sec_solicitante', label: '1. Datos del Solicitante', type: FieldType.SECTION_HEADER },
      ...commonPersonalFields,
      
      { name: 'sec_ubicacion', label: '2. Lugar de los Trabajos', type: FieldType.SECTION_HEADER },
      ...commonAddressFields,

      { name: 'sec_trabajo', label: '3. Detalles de la Ruptura', type: FieldType.SECTION_HEADER },
      { name: 'motivo', label: 'Motivo de la ruptura', type: FieldType.SELECT, options: ['Conexión a Drenaje', 'Toma de Agua Potable', 'Instalación de Gas Natural', 'Reparación de Fuga Interna', 'Cableado Subterráneo'], required: true },
      { name: 'superficie', label: 'Superficie afectada', type: FieldType.SELECT, options: ['Banqueta (Concreto)', 'Arroyo Vehicular (Asfalto)', 'Arroyo Vehicular (Concreto Hidráulico)', 'Empedrado'], required: true },
      { name: 'metros_lineales', label: 'Metros lineales a romper', type: FieldType.NUMBER, required: true },
      { name: 'empresa_responsable', label: 'Empresa o Albañil responsable', type: FieldType.TEXT, required: true },
      
      { name: 'sec_fianza', label: '4. Garantía', type: FieldType.SECTION_HEADER, helperText: 'Se requiere pago de derechos por reposición de pavimento.' },
      { name: 'predial', label: 'Recibo de Predial Vigente', type: FieldType.FILE, required: true },
      { name: 'croquis', label: 'Croquis de la excavación', type: FieldType.FILE, required: true }
    ]
  },
  {
    id: 'terminacion_obra',
    title: 'Constancia de Terminación de Obra',
    description: 'Trámite final para certificar que una obra fue concluida conforme al proyecto autorizado. Necesario para habitar.',
    category: 'Urbanismo',
    icon: ClipboardCheck,
    sla: '7 días hábiles',
    fields: [
        { name: 'sec_gral', label: '1. Datos Generales', type: FieldType.SECTION_HEADER },
        ...commonPersonalFields,
        { name: 'licencia_previa', label: 'Número de Licencia de Construcción', type: FieldType.TEXT, required: true },
        
        { name: 'sec_inspeccion', label: '2. Solicitud de Inspección', type: FieldType.SECTION_HEADER },
        { name: 'fecha_terminacion', label: 'Fecha real de término', type: FieldType.DATE, required: true },
        { name: 'cambios_proyecto', label: '¿Hubo cambios al proyecto original?', type: FieldType.SELECT, options: ['No, es idéntico', 'Sí, cambios menores', 'Sí, ampliaciones'], required: true },
        
        { name: 'sec_evidencia', label: '3. Evidencia', type: FieldType.SECTION_HEADER },
        { name: 'fotos_finales', label: 'Reporte fotográfico final (PDF)', type: FieldType.FILE, required: true },
        { name: 'bitacora', label: 'Bitácora de Obra firmada por DRO', type: FieldType.FILE, required: true }
    ]
  },

  // --- REPORTES Y SERVICIOS BASICOS ---
  {
    id: 'construccion_menor',
    title: 'Permiso de Construcción Menor',
    description: 'Para obras menores a 60m2, bardas perimetrales, cisternas o remodelaciones de fachada que no afectan estructura.',
    category: 'Urbanismo',
    icon: Construction,
    sla: '5 días hábiles',
    fields: [
      { name: 'sec_datos', label: '1. Datos del Solicitante', type: FieldType.SECTION_HEADER },
      ...commonPersonalFields,
      
      { name: 'sec_obra', label: '2. Detalle de la Obra', type: FieldType.SECTION_HEADER },
      { name: 'direccion_obra', label: 'Dirección de la Obra', type: FieldType.TEXT, required: true },
      { name: 'tipo_obra', label: 'Tipo de Obra', type: FieldType.SELECT, options: ['Barda Perimetral', 'Cuarto adicional (<60m2)', 'Remodelación Fachada', 'Cisterna', 'Enjarres/Pisos'], required: true },
      { name: 'm2_trabajo', label: 'Metros cuadrados / lineales', type: FieldType.NUMBER, required: true },
      
      { name: 'sec_req', label: '3. Requisitos', type: FieldType.SECTION_HEADER },
      { name: 'croquis', label: 'Croquis sencillo de la obra', type: FieldType.FILE, required: true },
      { name: 'escrituras', label: 'Copia de Escrituras (Primer hoja)', type: FieldType.FILE, required: true }
    ]
  },
  {
    id: 'bacheo',
    title: 'Reparación de Baches',
    description: 'Reporta daños en el pavimento de calles y avenidas principales.',
    category: 'Urbanismo',
    icon: Car,
    sla: '72 horas',
    fields: [
      { name: 'sec_ubicacion', label: '1. Ubicación del Reporte', type: FieldType.SECTION_HEADER },
      { name: 'calle', label: 'Calle Principal', type: FieldType.TEXT, required: true, placeholder: 'Ej. Av. Reforma' },
      { name: 'cruce_1', label: 'Entre Calle', type: FieldType.TEXT, required: true },
      { name: 'cruce_2', label: 'Y Calle', type: FieldType.TEXT, required: true },
      { name: 'colonia', label: 'Colonia', type: FieldType.TEXT, required: true },
      { name: 'referencia', label: 'Referencia visual', type: FieldType.TEXTAREA, required: false, placeholder: 'Frente a la tienda roja...' },
      
      { name: 'sec_evidencia', label: '2. Evidencia', type: FieldType.SECTION_HEADER },
      { name: 'evidencia', label: 'Foto del Bache', type: FieldType.FILE, required: true },
    ]
  },
  {
    id: 'alumbrado',
    title: 'Alumbrado Público',
    description: 'Reporte de luminarias apagadas, rotas o con intermitencia.',
    category: 'Urbanismo',
    icon: Lightbulb,
    sla: '48 horas',
    fields: [
      { name: 'sec_datos', label: '1. Datos del Reporte', type: FieldType.SECTION_HEADER },
      { name: 'ubicacion', label: 'Dirección / Ubicación', type: FieldType.TEXT, required: true },
      { name: 'numero_poste', label: 'Número de Poste (Etiqueta amarilla/blanca)', type: FieldType.TEXT, required: false, placeholder: 'Ej. N-2453' },
      { name: 'problema', label: 'Tipo de Falla', type: FieldType.SELECT, options: ['Lámpara apagada', 'Lámpara parpadeando (Estrobo)', 'Lámpara prendida de día', 'Poste chocado/caído', 'Cables expuestos'], required: true },
      { name: 'referencias', label: 'Referencias Adicionales', type: FieldType.TEXTAREA, required: false }
    ]
  },
  {
    id: 'fugas',
    title: 'Fugas de Agua Potable',
    description: 'Reporte urgente de desperdicio de agua en vía pública o medidores.',
    category: 'Urbanismo',
    icon: Droplets,
    sla: '24 horas',
    fields: [
      { name: 'sec_ubic', label: '1. Ubicación', type: FieldType.SECTION_HEADER },
      ...commonAddressFields,
      
      { name: 'sec_detalle', label: '2. Detalle de la Fuga', type: FieldType.SECTION_HEADER },
      { name: 'ubicacion_fuga', label: 'Ubicación exacta', type: FieldType.SELECT, options: ['Banqueta', 'Arroyo vehicular (Calle)', 'Cuadro del medidor', 'Toma domiciliaria'], required: true },
      { name: 'intensidad', label: 'Intensidad', type: FieldType.SELECT, options: ['Humedad', 'Goteo constante', 'Chorro moderado', 'Gran desperdicio (Fuente)'], required: true },
      { name: 'foto', label: 'Foto (Opcional)', type: FieldType.FILE, required: false }
    ]
  },
  {
    id: 'drenaje',
    title: 'Desazolve de Drenaje',
    description: 'Solicitud de camión vactor para limpieza de alcantarillas o drenaje obstruido.',
    category: 'Urbanismo',
    icon: Waves,
    sla: '24 horas',
    fields: [
      { name: 'sec_ubic', label: '1. Ubicación del Problema', type: FieldType.SECTION_HEADER },
      ...commonAddressFields,
      
      { name: 'sec_det', label: '2. Descripción', type: FieldType.SECTION_HEADER },
      { name: 'ubicacion_problema', label: 'Ubicación', type: FieldType.SELECT, options: ['Registro domiciliario (Interior)', 'Registro domiciliario (Banqueta)', 'Alcantarilla en calle', 'Boca de tormenta'], required: true },
      { name: 'tipo_falla', label: 'Falla presentada', type: FieldType.SELECT, options: ['Aguas negras brotando', 'Drenaje lento', 'Mal olor excesivo', 'Obstrucción por basura'], required: true },
      { name: 'descripcion', label: 'Comentarios adicionales', type: FieldType.TEXTAREA, required: false }
    ]
  },
  {
    id: 'pipa_agua',
    title: 'Solicitud de Pipa de Agua',
    description: 'Solicitud de abastecimiento de agua potable por camión cisterna para colonias con desabasto.',
    category: 'Urbanismo',
    icon: Truck,
    sla: '24 a 48 horas',
    fields: [
      { name: 'sec_usuario', label: '1. Datos del Usuario', type: FieldType.SECTION_HEADER },
      { name: 'nombre_solicitante', label: 'Quien recibe', type: FieldType.TEXT, required: true },
      { name: 'num_contrato', label: 'Número de Contrato (Recibo de Agua)', type: FieldType.TEXT, required: true },
      
      { name: 'sec_entrega', label: '2. Lugar de Entrega', type: FieldType.SECTION_HEADER },
      ...commonAddressFields,
      
      { name: 'sec_capacidad', label: '3. Requerimiento', type: FieldType.SECTION_HEADER },
      { name: 'capacidad', label: 'Capacidad necesaria', type: FieldType.SELECT, options: ['Tinaco (450 - 1,100 L)', 'Cisterna pequeña (1,000 - 5,000 L)', 'Cisterna grande (5,000 - 10,000 L)', 'Tambos'], required: true },
      { name: 'accesibilidad', label: '¿El camión puede entrar fácilmente a la calle?', type: FieldType.SELECT, options: ['Sí, calle amplia', 'Calle angosta (Difícil acceso)', 'Calle de terracería'], required: true }
    ]
  }
];