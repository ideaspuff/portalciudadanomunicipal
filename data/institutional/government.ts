
import { Shield, Hammer, Heart, Lightbulb, Users, Leaf, Building2, Scale, Calculator, Stethoscope, BookOpen, BarChart3 } from 'lucide-react';
import { Official, GovernmentAxis } from '../../types';

// --- DATOS DEL PRESIDENTE ---
export const MAYOR_DATA = {
    name: "Lic. Alejandro Valtierra Ríos",
    title: "Presidente Municipal Constitucional",
    period: "2024 - 2027",
    // Nueva foto con perfil latino y profesional
    photoUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1000&auto=format&fit=crop", 
    quote: "Gobernar no es solo administrar recursos, es transformar vidas. Juntos estamos construyendo el municipio de vanguardia que nuestras familias merecen.",
    bio: "Originario de nuestro municipio, el Lic. Valtierra es egresado de la Facultad de Derecho con Maestría en Administración Pública. Con una trayectoria de 20 años en el servicio público, se ha destacado por su enfoque en la modernización administrativa y la gestión de recursos internacionales.\n\nSu administración se caracteriza por una política de 'Puertas Abiertas' y un firme compromiso con la transparencia. Cree firmemente que la tecnología es el gran igualador social y trabaja incansablemente para llevar conectividad y servicios digitales a cada rincón de la ciudad.",
    social: {
        facebook: "#",
        twitter: "#",
        instagram: "#"
    },
    // Estadísticas de impacto para el dashboard
    stats: [
        { label: "Obras Iniciadas", value: "124" },
        { label: "Inversión (MDP)", value: "$450" },
        { label: "Apoyos Entregados", value: "15k+" },
        { label: "Trámites Digitales", value: "100%" }
    ]
};

export const GOVERNMENT_AXES: GovernmentAxis[] = [
    {
        title: "Seguridad Inteligente",
        description: "Implementación del modelo de vigilancia C5, más patrullas y capacitación en derechos humanos para la policía.",
        icon: Shield
    },
    {
        title: "Infraestructura Sostenible",
        description: "Pavimentación con concreto hidráulico, red de drenaje pluvial y modernización del alumbrado público LED.",
        icon: Building2
    },
    {
        title: "Bienestar y Equidad",
        description: "Programas sociales focalizados para madres solteras, adultos mayores y personas con discapacidad.",
        icon: Heart
    },
    {
        title: "Innovación Gubernamental",
        description: "Digitalización total de trámites, ventanilla única virtual y gobierno sin papel.",
        icon: Lightbulb
    },
    {
        title: "Municipio Verde",
        description: "Rescate de parques, reforestación masiva y nuevo sistema de gestión integral de residuos.",
        icon: Leaf
    },
    {
        title: "Desarrollo Económico",
        description: "Atracción de inversión extranjera, créditos a emprendedores y simplificación administrativa para empresas.",
        icon: BarChart3
    },
    {
        title: "Educación y Cultura",
        description: "Becas de excelencia, rehabilitación de escuelas y festivales culturales en todas las colonias.",
        icon: BookOpen
    },
    {
        title: "Salud Cercana",
        description: "Clínicas municipales móviles, abasto de medicamentos garantizado y atención psicológica gratuita.",
        icon: Stethoscope
    }
];

// --- DIRECTORIO DE FUNCIONARIOS ---
export const OFFICIALS_DIRECTORY: Official[] = [
    // --- CABILDO (10 Integrantes) ---
    { id: 'cab_1', name: 'Lic. María Elena Torres', position: 'Síndico Municipal', area: 'Cabildo', photoUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200', email: 'sindicatura@municipio.gob.mx', phoneExtension: '102' },
    { id: 'cab_2', name: 'Ing. Roberto Méndez', position: '1er Regidor (Obras Públicas)', area: 'Cabildo', photoUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200', email: 'regidor1@municipio.gob.mx', phoneExtension: '105' },
    { id: 'cab_3', name: 'Lic. Laura Sánchez', position: '2da Regidora (Hacienda)', area: 'Cabildo', photoUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200', email: 'regidor2@municipio.gob.mx', phoneExtension: '106' },
    { id: 'cab_4', name: 'Dr. Carlos Ruiz', position: '3er Regidor (Salud)', area: 'Cabildo', photoUrl: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=200', email: 'regidor3@municipio.gob.mx', phoneExtension: '107' },
    { id: 'cab_5', name: 'Mtra. Sofía Herrera', position: '4ta Regidora (Educación)', area: 'Cabildo', photoUrl: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?auto=format&fit=crop&q=80&w=200', email: 'regidor4@municipio.gob.mx', phoneExtension: '108' },
    { id: 'cab_6', name: 'Lic. Javier Orozco', position: '5to Regidor (Seguridad)', area: 'Cabildo', photoUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200', email: 'regidor5@municipio.gob.mx', phoneExtension: '109' },
    { id: 'cab_7', name: 'Arq. Mónica Galindo', position: '6ta Regidora (Desarrollo Urbano)', area: 'Cabildo', photoUrl: 'https://images.unsplash.com/photo-1598550874175-4d7112ee7f38?auto=format&fit=crop&q=80&w=200', email: 'regidor6@municipio.gob.mx', phoneExtension: '110' },
    { id: 'cab_8', name: 'Lic. Pedro Almaraz', position: '7mo Regidor (Comercio)', area: 'Cabildo', photoUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=200', email: 'regidor7@municipio.gob.mx', phoneExtension: '111' },
    { id: 'cab_9', name: 'Profa. Carmen Salinas', position: '8va Regidora (Cultura)', area: 'Cabildo', photoUrl: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=200', email: 'regidor8@municipio.gob.mx', phoneExtension: '112' },
    { id: 'cab_10', name: 'Ing. David Burgos', position: '9no Regidor (Ecología)', area: 'Cabildo', photoUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200', email: 'regidor9@municipio.gob.mx', phoneExtension: '113' },

    // --- GABINETE (12 Integrantes) ---
    { id: 'gab_1', name: 'Lic. Fernando López', position: 'Secretario del Ayuntamiento', area: 'Gabinete', photoUrl: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80&w=200', email: 'secretaria@municipio.gob.mx', phoneExtension: '201', location: 'Palacio Municipal, Planta Alta' },
    { id: 'gab_2', name: 'C.P. Ana María Campos', position: 'Tesorera Municipal', area: 'Gabinete', photoUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200', email: 'tesoreria@municipio.gob.mx', phoneExtension: '305', location: 'Edificio Anexo A' },
    { id: 'gab_3', name: 'Arq. Jorge Estévez', position: 'Director de Obras Públicas', area: 'Gabinete', photoUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200', email: 'obras@municipio.gob.mx', phoneExtension: '400', location: 'Edificio Obras Públicas' },
    { id: 'gab_4', name: 'Cmdte. Luis Hernández', position: 'Comisario de Seguridad Pública', area: 'Gabinete', photoUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200', email: 'seguridad@municipio.gob.mx', phoneExtension: '911', location: 'Comandancia C4' },
    { id: 'gab_5', name: 'Lic. Patricia Vega', position: 'Directora de Desarrollo Social', area: 'Gabinete', photoUrl: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=200', email: 'desarrollo@municipio.gob.mx', phoneExtension: '220', location: 'Palacio Municipal, Planta Baja' },
    { id: 'gab_6', name: 'Ing. Mario Dávila', position: 'Director de Servicios Públicos', area: 'Gabinete', photoUrl: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&q=80&w=200', email: 'servicios@municipio.gob.mx', phoneExtension: '550', location: 'Corralón Municipal' },
    { id: 'gab_7', name: 'Lic. Claudia Jiménez', position: 'Contralora Municipal', area: 'Gabinete', photoUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200', email: 'contraloria@municipio.gob.mx', phoneExtension: '601', location: 'Edificio Anexo B' },
    { id: 'gab_8', name: 'Mtro. Felipe Calderón', position: 'Director de Desarrollo Económico', area: 'Gabinete', photoUrl: 'https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?auto=format&fit=crop&q=80&w=200', email: 'economia@municipio.gob.mx', phoneExtension: '230', location: 'Centro de Negocios' },
    { id: 'gab_9', name: 'Biól. Ernesto Zedillo', position: 'Director de Medio Ambiente', area: 'Gabinete', photoUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200', email: 'ecologia@municipio.gob.mx', phoneExtension: '560', location: 'Vivero Municipal' },
    { id: 'gab_10', name: 'Dra. Beatriz Paredes', position: 'Directora del DIF Municipal', area: 'Gabinete', photoUrl: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=200', email: 'dif@municipio.gob.mx', phoneExtension: '700', location: 'Instalaciones DIF' },
    { id: 'gab_11', name: 'Lic. Enrique Peña', position: 'Director de Catastro', area: 'Gabinete', photoUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200', email: 'catastro@municipio.gob.mx', phoneExtension: '310', location: 'Edificio Anexo A' },
    { id: 'gab_12', name: 'Ing. Gabriel Quadri', position: 'Director de Protección Civil', area: 'Gabinete', photoUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200', email: 'proteccioncivil@municipio.gob.mx', phoneExtension: '912', location: 'Base de Bomberos' }
];
