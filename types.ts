
import { LucideIcon } from 'lucide-react';

export enum FieldType {
  TEXT = 'text',
  TEXTAREA = 'textarea',
  NUMBER = 'number',
  EMAIL = 'email',
  DATE = 'date',
  SELECT = 'select',
  FILE = 'file',
  CHECKBOX = 'checkbox',
  LOCATION = 'location', // Logical type for lat/lng
  // New logical types for grouping
  SECTION_HEADER = 'section_header' 
}

export interface FormField {
  name: string;
  label: string;
  type: FieldType;
  required?: boolean;
  placeholder?: string;
  options?: string[]; // For SELECT type
  helperText?: string;
  readOnly?: boolean; // For pre-filled data that shouldn't change
  defaultValue?: any;
}

export interface ServiceDefinition {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  category: 'Urbanismo' | 'Seguridad' | 'Tránsito y Vialidad' | 'Ecología' | 'Bienestar Social' | 'Catastro' | 'Protección Civil' | 'Cultura y Deporte' | 'Turismo' | 'Desarrollo Económico' | 'Tesorería y Finanzas' | 'Salud Municipal' | 'Participación Ciudadana';
  fields: FormField[];
  sla: string; // Service Level Agreement (Tiempo de respuesta)
}

export interface ServiceRequestData {
  serviceId: string;
  timestamp: number;
  data: Record<string, any>;
  status: 'pending' | 'in_progress' | 'resolved' | 'rejected';
}

export type AIChatMessage = {
  role: 'user' | 'model';
  text: string;
  suggestedServiceId?: string;
};

// --- COMMON DATA STRUCTURES (Backend Models) ---

export interface Address {
  id: string;
  alias: string; // "Casa", "Oficina", "Local"
  street: string;
  extNum: string;
  intNum?: string;
  colonia: string;
  municipality: string;
  state: string;
  zipCode: string;
  reference?: string;
  betweenStreet1?: string;
  betweenStreet2?: string;
}

export interface UserProfile {
  id: string;
  firstName: string;
  middleName?: string;
  paternalLastName: string;
  maternalLastName: string;
  curp: string;
  birthDate: string; // ISO Date
  email: string;
  phone: string;
  addresses: Address[];
}

export interface FiscalEntity {
  id: string;
  type: 'fisica' | 'moral';
  rfc: string;
  legalName?: string; // Razón Social (Solo Moral)
  commercialName?: string; // Nombre Comercial
  representativeName?: string; // Representante Legal
  taxAddress: Address; // Domicilio Fiscal
}

// Session Simulation
export interface UserSession {
  profile: UserProfile;
  fiscalEntities: FiscalEntity[];
}

// --- NEW INSTITUTIONAL TYPES ---

export interface Official {
  id: string;
  name: string;
  position: string;
  area: string; // "Cabildo", "Gabinete", "Descentralizado"
  photoUrl: string;
  email: string;
  phoneExtension?: string;
  location?: string;
}

export interface TransparencyCategory {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  articleRef?: string; // Art. 70 Fracción...
  link: string;
}

export interface NewsArticle {
  id: string;
  title: string;
  summary: string;
  content: string; // HTML or Markdown
  date: string;
  category: 'Comunicado' | 'Aviso' | 'Obra' | 'Evento' | 'Seguridad' | 'Salud' | 'Cultura' | 'Tesorería' | 'Ecología';
  imageUrl: string;
  tags: string[];
}

export interface GovernmentAxis {
  title: string;
  description: string;
  icon: LucideIcon;
}