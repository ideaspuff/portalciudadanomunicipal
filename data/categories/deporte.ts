import { Trophy } from 'lucide-react';
import { ServiceDefinition, FieldType } from '../../types';

export const deporteServices: ServiceDefinition[] = [
  {
    id: 'reserva_deportiva',
    title: 'Reserva de Espacios Deportivos',
    description: 'Solicita el uso de canchas de fútbol, básquetbol o gimnasios municipales.',
    category: 'Cultura y Deporte',
    icon: Trophy,
    sla: '3 días hábiles',
    fields: [
      { name: 'solicitante', label: 'Nombre del Equipo o Representante', type: FieldType.TEXT, required: true },
      { name: 'espacio', label: 'Instalación Deportiva', type: FieldType.SELECT, options: ['Unidad Deportiva Centro', 'Cancha de Fútbol 7', 'Gimnasio Municipal', 'Alberca Olímpica'], required: true },
      { name: 'fecha_hora', label: 'Fecha y Hora Requerida', type: FieldType.DATE, required: true },
      { name: 'duracion', label: 'Duración (Horas)', type: FieldType.NUMBER, required: true }
    ]
  }
];