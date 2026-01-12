import { Trash2, Trees, Dog, Flower2, Armchair, Sprout, Factory, LandPlot } from 'lucide-react';
import { ServiceDefinition, FieldType } from '../../types';
import { commonPersonalFields, commonAddressFields } from '../common/userModel';

export const ecologiaServices: ServiceDefinition[] = [
  {
    id: 'recoleccion_basura',
    title: 'Reporte de Recolección de Basura',
    description: 'Reportar que el camión no pasó en el día programado o solicitar recolección en puntos críticos.',
    category: 'Ecología',
    icon: Trash2,
    sla: '24 horas',
    fields: [
      { name: 'sec_contacto', label: '1. Datos de Contacto', type: FieldType.SECTION_HEADER },
      ...commonPersonalFields,

      { name: 'sec_ubicacion', label: '2. Ubicación', type: FieldType.SECTION_HEADER },
      ...commonAddressFields,

      { name: 'sec_detalle', label: '3. Detalle del Reporte', type: FieldType.SECTION_HEADER },
      { name: 'tipo_problema', label: 'Incidencia', type: FieldType.SELECT, options: ['Camión no pasó en día y hora', 'Camión pasó pero no se llevó la basura', 'Personal solicitó dádiva (propina)', 'Basura tirada por el camión'], required: true },
      { name: 'fecha_incidente', label: 'Fecha del incidente', type: FieldType.DATE, required: true },
      { name: 'num_camion', label: 'Número de Camión (Si lo vio)', type: FieldType.TEXT, required: false }
    ]
  },
  {
    id: 'limpieza_lote',
    title: 'Solicitud de Limpieza de Lote Baldío',
    description: 'Denuncia sanitaria para obligar a propietarios a limpiar terrenos abandonados con maleza o basura.',
    category: 'Ecología',
    icon: LandPlot,
    sla: '7 días hábiles (Inspección)',
    fields: [
      { name: 'sec_denunciante', label: '1. Datos del Denunciante', type: FieldType.SECTION_HEADER },
      ...commonPersonalFields,
      
      { name: 'sec_lote', label: '2. Ubicación del Terreno', type: FieldType.SECTION_HEADER },
      { name: 'calle_lote', label: 'Calle', type: FieldType.TEXT, required: true },
      { name: 'entre_calles', label: 'Entre Calles', type: FieldType.TEXT, required: true },
      { name: 'colonia', label: 'Colonia', type: FieldType.TEXT, required: true },
      { name: 'referencia', label: 'Referencia visual', type: FieldType.TEXT, required: false, placeholder: 'Junto a la casa azul...' },
      
      { name: 'sec_problema', label: '3. Condición del Lote', type: FieldType.SECTION_HEADER },
      { name: 'condicion', label: 'Estado del terreno', type: FieldType.SELECT, options: ['Maleza alta', 'Acumulación de basura', 'Presencia de fauna nociva (Ratas)', 'Escombro tirado'], required: true },
      { name: 'propietario', label: 'Nombre del dueño (Si lo conoce)', type: FieldType.TEXT, required: false },
      { name: 'evidencia', label: 'Foto del lugar', type: FieldType.FILE, required: true }
    ]
  },
  {
    id: 'poda_derribo',
    title: 'Poda o Derribo de Árboles',
    description: 'Solicitud de dictamen y permiso para poda o derribo de árboles en propiedad privada o vía pública.',
    category: 'Ecología',
    icon: Trees,
    sla: '5 días hábiles',
    fields: [
      { name: 'sec_solicitante', label: '1. Datos del Solicitante', type: FieldType.SECTION_HEADER },
      ...commonPersonalFields,

      { name: 'sec_arbol', label: '2. Ubicación del Árbol', type: FieldType.SECTION_HEADER },
      ...commonAddressFields,

      { name: 'sec_motivo', label: '3. Motivo de la Solicitud', type: FieldType.SECTION_HEADER },
      { name: 'tipo_accion', label: 'Acción Requerida', type: FieldType.SELECT, options: ['Poda de Aclareo (Ramas)', 'Poda de Altura', 'Poda de Raíz', 'Derribo Total (Árbol seco/Riesgo)'], required: true },
      { name: 'ubicacion_arbol', label: '¿Dónde está el árbol?', type: FieldType.SELECT, options: ['Vía Pública (Banqueta)', 'Camellón', 'Propiedad Privada (Interior)', 'Parque'], required: true },
      { name: 'justificacion', label: 'Justificación', type: FieldType.SELECT, options: ['Riesgo de caída', 'Obstruye cables de luz', 'Levanta banqueta/Daña tubería', 'Árbol seco/Plaga', 'Obstruye visibilidad vial'], required: true },
      
      { name: 'sec_evidencia', label: '4. Evidencia', type: FieldType.SECTION_HEADER },
      { name: 'fotos', label: 'Fotografías del árbol (Panorámica y Daño)', type: FieldType.FILE, required: true }
    ]
  },
  {
    id: 'control_animal',
    title: 'Reporte de Maltrato Animal',
    description: 'Atención a reportes de maltrato animal o perros agresivos en vía pública.',
    category: 'Ecología',
    icon: Dog,
    sla: '48 horas',
    fields: [
      { name: 'sec_reportante', label: '1. Datos del Reportante', type: FieldType.SECTION_HEADER },
      ...commonPersonalFields,

      { name: 'sec_ubicacion', label: '2. Ubicación del Reporte', type: FieldType.SECTION_HEADER },
      ...commonAddressFields,

      { name: 'sec_caso', label: '3. Descripción del Caso', type: FieldType.SECTION_HEADER },
      { name: 'motivo', label: 'Motivo', type: FieldType.SELECT, options: ['Maltrato Animal', 'Perro Agresivo en Vía Pública', 'Jauría Peligrosa', 'Animal en situación de calle enfermo'], required: true },
      { name: 'descripcion', label: 'Detalles (Color, Tamaño, Raza aparente)', type: FieldType.TEXTAREA, required: true },
      { name: 'evidencia', label: 'Evidencia (Foto/Video)', type: FieldType.FILE, required: false }
    ]
  },
  {
    id: 'mantenimiento_parques',
    title: 'Mantenimiento de Áreas Verdes',
    description: 'Solicitud de limpieza, riego o reparación de juegos en parques y jardines municipales.',
    category: 'Ecología',
    icon: Flower2,
    sla: '7 días hábiles',
    fields: [
      { name: 'sec_ciudadano', label: '1. Datos del Ciudadano', type: FieldType.SECTION_HEADER },
      ...commonPersonalFields,

      { name: 'sec_parque', label: '2. Identificación del Parque', type: FieldType.SECTION_HEADER },
      { name: 'nombre_parque', label: 'Nombre del Parque o Área Verde', type: FieldType.TEXT, required: true },
      { name: 'calle_parque', label: 'Calle Principal', type: FieldType.TEXT, required: true },
      { name: 'colonia_parque', label: 'Colonia', type: FieldType.TEXT, required: true },
      
      { name: 'sec_solicitud', label: '3. Requerimiento', type: FieldType.SECTION_HEADER },
      { name: 'tipo_servicio', label: 'Servicio Solicitado', type: FieldType.SELECT, options: ['Corte de Pasto / Deshierbe', 'Limpieza General', 'Reparación de Juegos Infantiles', 'Pintura de Guarniciones', 'Reparación de Alumbrado del Parque'], required: true },
      { name: 'foto', label: 'Foto del estado actual', type: FieldType.FILE, required: false }
    ]
  },
  {
    id: 'descacharrizacion',
    title: 'Descacharrización (Tiliches)',
    description: 'Recolección gratuita a domicilio de muebles viejos, colchones, electrodomésticos y cacharros.',
    category: 'Ecología',
    icon: Armchair,
    sla: '3 a 5 días hábiles',
    fields: [
      { name: 'sec_solicitante', label: '1. Datos del Solicitante', type: FieldType.SECTION_HEADER },
      ...commonPersonalFields,

      { name: 'sec_recoleccion', label: '2. Dirección de Recolección', type: FieldType.SECTION_HEADER },
      ...commonAddressFields,

      { name: 'sec_objetos', label: '3. Objetos a Recolectar', type: FieldType.SECTION_HEADER },
      { name: 'lista_objetos', label: 'Describa los objetos', type: FieldType.TEXTAREA, required: true, placeholder: 'Ej. 1 Sofá, 2 Colchones matrimoniales, 1 Llantas...' },
      { name: 'volumen', label: 'Volumen aproximado', type: FieldType.SELECT, options: ['Poco (Cabe en una camioneta pick-up)', 'Medio (Media caja de camión)', 'Mucho (Camión completo)'], required: true },
      { name: 'foto', label: 'Foto de los objetos', type: FieldType.FILE, required: false }
    ]
  },
  {
    id: 'denuncia_ambiental',
    title: 'Denuncia por Contaminación',
    description: 'Reporte de quema de basura, tiraderos clandestinos, vertido de residuos o ruido excesivo industrial.',
    category: 'Ecología',
    icon: Factory,
    sla: '48 horas',
    fields: [
        { name: 'sec_denuncia', label: '1. Datos de la Denuncia', type: FieldType.SECTION_HEADER },
        { name: 'tipo_contaminacion', label: 'Tipo', type: FieldType.SELECT, options: ['Quema de basura/Llantas', 'Ruido excesivo (Industrial/Comercial)', 'Vertido de líquidos en calle', 'Tiradero clandestino'], required: true },
        { name: 'ubicacion', label: 'Ubicación de la fuente contaminante', type: FieldType.TEXT, required: true },
        { name: 'descripcion', label: 'Descripción de hechos', type: FieldType.TEXTAREA, required: true },
        
        { name: 'sec_evidencia', label: '2. Evidencia', type: FieldType.SECTION_HEADER },
        { name: 'foto_video', label: 'Foto o Video', type: FieldType.FILE, required: true },
        
        { name: 'sec_anonimo', label: '3. Datos del Denunciante', type: FieldType.SECTION_HEADER },
        { name: 'anonimo', label: 'Denuncia Anónima', type: FieldType.CHECKBOX, required: false }
    ]
  },
  {
    id: 'donacion_plantas',
    title: 'Donación de Árboles y Plantas',
    description: 'Solicitud de adopción de árboles nativos para reforestación de banquetas o jardines particulares.',
    category: 'Ecología',
    icon: Sprout,
    sla: '3 días hábiles',
    fields: [
        { name: 'sec_solicitante', label: '1. Datos del Solicitante', type: FieldType.SECTION_HEADER },
        ...commonPersonalFields,
        
        { name: 'sec_plantacion', label: '2. Lugar de Plantación', type: FieldType.SECTION_HEADER },
        ...commonAddressFields,
        
        { name: 'sec_especies', label: '3. Especies', type: FieldType.SECTION_HEADER },
        { name: 'cantidad', label: 'Cantidad solicitada', type: FieldType.NUMBER, required: true, helperText: 'Máximo 5 por persona particular.' },
        { name: 'espacio', label: 'Espacio disponible', type: FieldType.SELECT, options: ['Banqueta (Espacio reducido)', 'Jardín Frontal', 'Patio Trasero', 'Terreno amplio'], required: true },
        { name: 'compromiso', label: 'Me comprometo al riego y cuidado de los árboles', type: FieldType.CHECKBOX, required: true }
    ]
  }
];