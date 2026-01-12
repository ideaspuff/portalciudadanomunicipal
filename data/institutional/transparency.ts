
import { FileText, DollarSign, Briefcase, Users, Gavel, FileCheck, Building, Search, Plane, Gift, Box, FileSearch, UserCheck, BarChart3, Receipt, Scale } from 'lucide-react';
import { TransparencyCategory } from '../../types';

export const TRANSPARENCY_CATEGORIES: TransparencyCategory[] = [
    {
        id: 'normatividad',
        title: 'Marco Normativo',
        description: 'Leyes, reglamentos, bandos de policía y manuales administrativos.',
        icon: Gavel,
        articleRef: 'Fracc. I',
        link: '#'
    },
    {
        id: 'estructura',
        title: 'Estructura Orgánica',
        description: 'Organigrama, atribuciones y currículum de funcionarios.',
        icon: Users,
        articleRef: 'Fracc. II',
        link: '#'
    },
    {
        id: 'finanzas',
        title: 'Finanzas Públicas',
        description: 'Presupuesto de egresos, ley de ingresos, cuenta pública y deuda.',
        icon: DollarSign,
        articleRef: 'Fracc. XXI',
        link: '#'
    },
    {
        id: 'sueldos',
        title: 'Sueldos y Salarios',
        description: 'Remuneración mensual bruta y neta de todos los servidores públicos.',
        icon: Receipt,
        articleRef: 'Fracc. VIII',
        link: '#'
    },
    {
        id: 'viaticos',
        title: 'Viáticos y Gastos',
        description: 'Gastos de representación y viáticos de funcionarios.',
        icon: Plane,
        articleRef: 'Fracc. IX',
        link: '#'
    },
    {
        id: 'contratos',
        title: 'Contratos y Licitaciones',
        description: 'Información sobre licitaciones, adjudicaciones y contratos de obra.',
        icon: Briefcase,
        articleRef: 'Fracc. XXVIII',
        link: '#'
    },
    {
        id: 'subsidios',
        title: 'Programas y Subsidios',
        description: 'Padrón de beneficiarios y reglas de operación de programas sociales.',
        icon: Gift,
        articleRef: 'Fracc. XV',
        link: '#'
    },
    {
        id: 'actas',
        title: 'Actas y Sesiones',
        description: 'Calendario de sesiones y actas aprobadas por el Ayuntamiento.',
        icon: FileText,
        articleRef: 'Fracc. XXXIX',
        link: '#'
    },
    {
        id: 'tramites',
        title: 'Trámites y Servicios',
        description: 'Catálogo de trámites, requisitos, costos y tiempos de respuesta.',
        icon: FileCheck,
        articleRef: 'Fracc. XX',
        link: '#'
    },
    {
        id: 'obras',
        title: 'Obras Públicas',
        description: 'Listado de obras ejecutadas, ubicación, inversión y beneficiarios.',
        icon: Building,
        articleRef: 'Fracc. XXX',
        link: '#'
    },
    {
        id: 'patrimonio',
        title: 'Patrimonio e Inventario',
        description: 'Inventario de bienes muebles e inmuebles propiedad del municipio.',
        icon: Box,
        articleRef: 'Fracc. XXXIV',
        link: '#'
    },
    {
        id: 'auditorias',
        title: 'Auditorías',
        description: 'Resultados de auditorías realizadas al ejercicio presupuestal.',
        icon: FileSearch,
        articleRef: 'Fracc. XXIV',
        link: '#'
    },
    {
        id: 'declaraciones',
        title: 'Declaraciones',
        description: 'Declaraciones patrimoniales, fiscales y de intereses de funcionarios.',
        icon: UserCheck,
        articleRef: 'Fracc. XII',
        link: '#'
    },
    {
        id: 'indicadores',
        title: 'Indicadores',
        description: 'Indicadores de desempeño y cumplimiento de objetivos.',
        icon: BarChart3,
        articleRef: 'Fracc. VI',
        link: '#'
    },
    {
        id: 'recomendaciones',
        title: 'Recomendaciones DH',
        description: 'Recomendaciones emitidas por organismos de Derechos Humanos.',
        icon: Scale,
        articleRef: 'Fracc. XXXVI',
        link: '#'
    },
    {
        id: 'denuncias',
        title: 'Denuncias',
        description: 'Mecanismos de participación ciudadana y denuncias.',
        icon: Search,
        articleRef: 'Fracc. XXXIX',
        link: '#'
    }
];
