import { Home, FileCheck, ArrowRightLeft, Ruler, LandPlot } from 'lucide-react';
import { ServiceDefinition, FieldType } from '../../types';
import { commonPersonalFields, commonAddressFields, commonFiscalFields } from '../common/userModel';

export const catastroServices: ServiceDefinition[] = [
  {
    id: 'predial',
    title: 'Aclaración y Corrección de Predial',
    description: 'Solicitud para corrección de nombre, superficie o aclaración de adeudos en el impuesto predial.',
    category: 'Catastro',
    icon: Home,
    sla: '5 días hábiles',
    fields: [
      { name: 'sec_personal', label: '1. Datos del Solicitante', type: FieldType.SECTION_HEADER },
      ...commonPersonalFields,
      
      { name: 'sec_predio', label: '2. Identificación del Predio', type: FieldType.SECTION_HEADER },
      { name: 'clave_catastral', label: 'Clave Catastral', type: FieldType.TEXT, required: true, placeholder: 'Ej. 001-023-004', helperText: 'Se encuentra en la parte superior de su recibo anterior.' },
      { name: 'cuenta_predial', label: 'Número de Cuenta Predial', type: FieldType.TEXT, required: true },
      ...commonAddressFields,

      { name: 'sec_solicitud', label: '3. Detalle de la Solicitud', type: FieldType.SECTION_HEADER },
      { name: 'tipo_aclaracion', label: 'Tipo de Aclaración', type: FieldType.SELECT, options: ['Corrección de Nombre del Propietario', 'Error en Superficie de Terreno', 'Error en Superficie de Construcción', 'Pagos no reconocidos', 'Homologación de Clave'], required: true },
      { name: 'motivo', label: 'Descripción detallada del problema', type: FieldType.TEXTAREA, required: true },
      { name: 'evidencia_pago', label: 'Comprobante de pago anterior (Opcional)', type: FieldType.FILE, required: false },
      { name: 'escrituras', label: 'Copia de Escrituras o Título de Propiedad', type: FieldType.FILE, required: true }
    ]
  },
  {
    id: 'certificado_adeudo',
    title: 'Certificado de No Adeudo',
    description: 'Documento oficial que acredita que el predio se encuentra al corriente en sus pagos (Agua y Predial).',
    category: 'Catastro',
    icon: FileCheck,
    sla: '24 a 48 horas',
    fields: [
      { name: 'sec_fiscal', label: '1. Datos Fiscales (Para Facturación)', type: FieldType.SECTION_HEADER, helperText: 'A nombre de quién saldrá el certificado y la factura.' },
      ...commonFiscalFields,

      { name: 'sec_predio', label: '2. Datos del Inmueble', type: FieldType.SECTION_HEADER },
      { name: 'clave_catastral', label: 'Clave Catastral', type: FieldType.TEXT, required: true },
      ...commonAddressFields,

      { name: 'sec_tramite', label: '3. Tipo de Certificado', type: FieldType.SECTION_HEADER },
      { name: 'tipo_servicio', label: 'Servicio a certificar', type: FieldType.SELECT, options: ['Impuesto Predial', 'Servicios de Agua Potable y Alcantarillado', 'Obras por Cooperación'], required: true },
      { name: 'destino_tramite', label: '¿Para qué trámite se requiere?', type: FieldType.SELECT, options: ['Escrituración / Notaría', 'Crédito Bancario', 'Trámite Municipal', 'Informativo'], required: true }
    ]
  },
  {
    id: 'traslado_dominio',
    title: 'Traslado de Dominio',
    description: 'Trámite obligatorio para legalizar el cambio de propietario de un inmueble (Compra-venta, donación, herencia).',
    category: 'Catastro',
    icon: ArrowRightLeft,
    sla: '10 días hábiles',
    fields: [
        { name: 'sec_comprador', label: '1. Datos del Adquirente (Nuevo Dueño)', type: FieldType.SECTION_HEADER },
        ...commonPersonalFields,
        { name: 'rfc_adquirente', label: 'RFC del Adquirente', type: FieldType.TEXT, required: true },

        { name: 'sec_vendedor', label: '2. Datos del Enajenante (Vendedor)', type: FieldType.SECTION_HEADER },
        { name: 'vendedor_nombre', label: 'Nombre completo del vendedor', type: FieldType.TEXT, required: true },
        { name: 'vendedor_rfc', label: 'RFC del Vendedor', type: FieldType.TEXT, required: true },

        { name: 'sec_predio', label: '3. Datos del Predio', type: FieldType.SECTION_HEADER },
        { name: 'clave_catastral', label: 'Clave Catastral Actual', type: FieldType.TEXT, required: true },
        { name: 'escritura_publica', label: 'Número de Escritura Pública', type: FieldType.TEXT, required: true },
        { name: 'fecha_escritura', label: 'Fecha de Escrituración', type: FieldType.DATE, required: true },
        { name: 'valor_operacion', label: 'Valor de la Operación (MXN)', type: FieldType.NUMBER, required: true },
        { name: 'notario', label: 'Número y Nombre de Notaría', type: FieldType.TEXT, required: true },
        
        { name: 'sec_docs', label: '4. Documentación', type: FieldType.SECTION_HEADER },
        { name: 'doc_escrituras', label: 'Copia certificada de Escrituras', type: FieldType.FILE, required: true },
        { name: 'doc_isai', label: 'Pago del ISAI (Impuesto Sobre Adquisición)', type: FieldType.FILE, required: true },
        { name: 'doc_avaluo', label: 'Avalúo Catastral Vigente', type: FieldType.FILE, required: true }
    ]
  },
  {
    id: 'manifestacion_construccion',
    title: 'Manifestación de Construcción',
    description: 'Declaración de nuevas construcciones, ampliaciones o remodelaciones para actualizar el valor catastral.',
    category: 'Catastro',
    icon: Ruler,
    sla: '15 días hábiles',
    fields: [
        { name: 'sec_propietario', label: '1. Datos del Propietario', type: FieldType.SECTION_HEADER },
        ...commonPersonalFields,

        { name: 'sec_ubicacion', label: '2. Ubicación de la Obra', type: FieldType.SECTION_HEADER },
        ...commonAddressFields,
        { name: 'clave_catastral', label: 'Clave Catastral', type: FieldType.TEXT, required: true },

        { name: 'sec_tecnica', label: '3. Datos Técnicos', type: FieldType.SECTION_HEADER },
        { name: 'tipo_manifestacion', label: 'Tipo de Manifestación', type: FieldType.SELECT, options: ['Obra Nueva', 'Ampliación', 'Demolición Parcial', 'Remodelación'], required: true },
        { name: 'superficie_terreno', label: 'Superficie Total del Terreno (m2)', type: FieldType.NUMBER, required: true },
        { name: 'superficie_construida_anterior', label: 'Construcción Anterior (m2)', type: FieldType.NUMBER, required: true },
        { name: 'superficie_construida_nueva', label: 'Nueva Construcción a declarar (m2)', type: FieldType.NUMBER, required: true },
        { name: 'terminacion_obra', label: 'Fecha de terminación de obra', type: FieldType.DATE, required: true },

        { name: 'sec_docs', label: '4. Planos y Licencias', type: FieldType.SECTION_HEADER },
        { name: 'doc_licencia', label: 'Licencia de Construcción', type: FieldType.FILE, required: true },
        { name: 'doc_planos', label: 'Planos Arquitectónicos (PDF)', type: FieldType.FILE, required: true },
        { name: 'fotos_fachada', label: 'Fotografías de Fachada e Interiores', type: FieldType.FILE, required: true }
    ]
  },
  {
    id: 'deslinde_catastral',
    title: 'Deslinde Catastral',
    description: 'Solicitud para que peritos oficiales verifiquen y certifiquen las medidas y colindancias físicas del predio.',
    category: 'Catastro',
    icon: LandPlot,
    sla: '10 días hábiles',
    fields: [
        { name: 'sec_datos', label: '1. Datos Generales', type: FieldType.SECTION_HEADER },
        ...commonPersonalFields,
        { name: 'clave_catastral', label: 'Clave Catastral', type: FieldType.TEXT, required: true },
        ...commonAddressFields,

        { name: 'sec_motivo', label: '2. Motivo del Deslinde', type: FieldType.SECTION_HEADER },
        { name: 'razon', label: 'Razón de la solicitud', type: FieldType.SELECT, options: ['Invasión de colindantes', 'Duda en medidas', 'Corrección de escrituras', 'Fusión de predios', 'Subdivisión'], required: true },
        { name: 'nombre_perito', label: 'Perito Externo (Si cuenta con uno)', type: FieldType.TEXT, required: false },
        
        { name: 'sec_adjuntos', label: '3. Documentación', type: FieldType.SECTION_HEADER },
        { name: 'plano_actual', label: 'Plano o Croquis actual', type: FieldType.FILE, required: true },
        { name: 'pago_derechos', label: 'Pago de derechos de deslinde', type: FieldType.FILE, required: true }
    ]
  }
];