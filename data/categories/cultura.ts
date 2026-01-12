import { Palette } from 'lucide-react';
import { ServiceDefinition, FieldType } from '../../types';

export const culturaServices: ServiceDefinition[] = [
  {
    id: 'talleres_culturales',
    title: 'Inscripción a Talleres Culturales',
    description: 'Inscripción a clases de pintura, música, danza y actividades artísticas en Casa de Cultura.',
    category: 'Cultura y Deporte',
    icon: Palette,
    sla: 'Inmediata (Cupo limitado)',
    fields: [
      { name: 'alumno', label: 'Nombre del Alumno', type: FieldType.TEXT, required: true },
      { name: 'edad', label: 'Edad', type: FieldType.NUMBER, required: true },
      { name: 'taller', label: 'Taller de interés', type: FieldType.SELECT, options: ['Guitarra', 'Pintura al óleo', 'Danza Folklórica', 'Teatro', 'Cerámica'], required: true },
      { name: 'turno', label: 'Turno preferente', type: FieldType.SELECT, options: ['Matutino', 'Vespertino'], required: true }
    ]
  }
];