import { FieldType, FormField, UserSession } from '../../types';

// ==========================================
// 1. REUSABLE FIELD DEFINITIONS (Form Logic)
// ==========================================
// Estos arrays se pueden esparcir (...commonAddressFields) dentro de la definición 
// de cualquier servicio en los archivos de categorías para estandarizar los inputs.

export const commonAddressFields: FormField[] = [
  { name: 'addr_alias', label: 'Nombre de la dirección', type: FieldType.TEXT, placeholder: 'Ej. Casa, Oficina, Negocio', required: true },
  { name: 'addr_street', label: 'Calle', type: FieldType.TEXT, required: true },
  { name: 'addr_extNum', label: 'Número Exterior', type: FieldType.TEXT, required: true },
  { name: 'addr_intNum', label: 'Número Interior', type: FieldType.TEXT, required: false },
  { name: 'addr_colonia', label: 'Colonia', type: FieldType.TEXT, required: true },
  { name: 'addr_zipCode', label: 'Código Postal', type: FieldType.NUMBER, required: true },
  { name: 'addr_municipality', label: 'Municipio', type: FieldType.TEXT, required: true, defaultValue: 'Tu Municipio', readOnly: true },
  { name: 'addr_state', label: 'Estado', type: FieldType.TEXT, required: true, defaultValue: 'Tu Estado', readOnly: true },
  { name: 'addr_between1', label: 'Entre calle', type: FieldType.TEXT, required: false },
  { name: 'addr_between2', label: 'Y calle', type: FieldType.TEXT, required: false },
  { name: 'addr_reference', label: 'Referencias del domicilio', type: FieldType.TEXTAREA, required: false, placeholder: 'Fachada color azul, portón negro...' },
];

export const commonPersonalFields: FormField[] = [
  { name: 'per_firstName', label: 'Nombre(s)', type: FieldType.TEXT, required: true },
  { name: 'per_middleName', label: 'Segundo Nombre', type: FieldType.TEXT, required: false },
  { name: 'per_paternalLastName', label: 'Apellido Paterno', type: FieldType.TEXT, required: true },
  { name: 'per_maternalLastName', label: 'Apellido Materno', type: FieldType.TEXT, required: true },
  { name: 'per_curp', label: 'CURP', type: FieldType.TEXT, required: true, placeholder: '18 caracteres' },
  { name: 'per_birthDate', label: 'Fecha de Nacimiento', type: FieldType.DATE, required: true },
  { name: 'per_email', label: 'Correo Electrónico', type: FieldType.EMAIL, required: true },
  { name: 'per_phone', label: 'Teléfono Celular', type: FieldType.NUMBER, required: true },
];

export const commonFiscalFields: FormField[] = [
  { name: 'fis_type', label: 'Tipo de Persona', type: FieldType.SELECT, options: ['Física', 'Moral'], required: true },
  { name: 'fis_rfc', label: 'RFC', type: FieldType.TEXT, required: true },
  { name: 'fis_legalName', label: 'Razón Social (Solo Moral)', type: FieldType.TEXT, required: false, helperText: 'Dejar en blanco si es Persona Física' },
  { name: 'fis_commercialName', label: 'Nombre Comercial', type: FieldType.TEXT, required: false },
];

// ==========================================
// 2. MOCK DATA (Backend Simulation)
// ==========================================
// Datos simulados de "Mi Cuenta" para pruebas de pre-llenado.

export const MOCK_USER_SESSION: UserSession = {
  profile: {
    id: 'user_12345',
    firstName: 'Juan',
    middleName: 'Carlos',
    paternalLastName: 'Pérez',
    maternalLastName: 'López',
    curp: 'PELJ850101HDFRNR05',
    birthDate: '1985-01-01',
    email: 'juan.perez@email.com',
    phone: '5512345678',
    addresses: [
      {
        id: 'addr_1',
        alias: 'Casa',
        street: 'Av. Independencia',
        extNum: '102',
        colonia: 'Centro',
        municipality: 'Tu Municipio',
        state: 'Tu Estado',
        zipCode: '12345',
        reference: 'Casa blanca con rejas negras',
        betweenStreet1: 'Hidalgo',
        betweenStreet2: 'Morelos'
      },
      {
        id: 'addr_2',
        alias: 'Oficina',
        street: 'Blvd. Tecnológico',
        extNum: '500',
        intNum: '3B',
        colonia: 'Parque Industrial',
        municipality: 'Tu Municipio',
        state: 'Tu Estado',
        zipCode: '12399',
        reference: 'Edificio de cristal'
      }
    ]
  },
  fiscalEntities: [
    {
      id: 'fis_1',
      type: 'fisica',
      rfc: 'PELJ850101A1B',
      commercialName: 'Consultoría Pérez',
      taxAddress: {
        id: 'addr_1', // Reusing home address logic
        alias: 'Fiscal',
        street: 'Av. Independencia',
        extNum: '102',
        colonia: 'Centro',
        municipality: 'Tu Municipio',
        state: 'Tu Estado',
        zipCode: '12345'
      }
    },
    {
      id: 'fis_2',
      type: 'moral',
      rfc: 'CON123456789',
      legalName: 'Constructora del Norte S.A. de C.V.',
      commercialName: 'Constructora Norte',
      representativeName: 'Juan Carlos Pérez López',
      taxAddress: {
        id: 'addr_2', // Reusing office address logic
        alias: 'Fiscal Moral',
        street: 'Blvd. Tecnológico',
        extNum: '500',
        intNum: '3B',
        colonia: 'Parque Industrial',
        municipality: 'Tu Municipio',
        state: 'Tu Estado',
        zipCode: '12399'
      }
    }
  ]
};