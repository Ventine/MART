export type TaskColor = 'green' | 'red' | 'purple' | 'lime' | 'pink';

export interface Task {
  id: string;
  titulo: string;
  descripcion: string;
  tiempo: number;
  color: TaskColor;
  dia: string;
  completed: boolean;
  order: number;
  createdAt: number;
  updatedAt: number;
}

export const TASK_COLORS: TaskColor[] = ['green', 'red', 'purple', 'lime', 'pink'];

export const QUICK_TEMPLATES = [
  { titulo: 'Cardio', descripcion: 'Rutina de Cardio', color: 'green' as TaskColor, tiempo: 100 },
  { titulo: 'Musculos', descripcion: 'Rutina brazos/piernas', color: 'red' as TaskColor, tiempo: 100 },
  { titulo: 'Meditar', descripcion: 'Relaja tu mente', color: 'purple' as TaskColor, tiempo: 100 },
  { titulo: 'Estudiar', descripcion: 'Mejora tu conocimiento', color: 'lime' as TaskColor, tiempo: 100 },
  { titulo: 'Procastinar', descripcion: 'Disfruta de tiempo libre', color: 'pink' as TaskColor, tiempo: 100 },
  { titulo: 'Siesta', descripcion: 'Descansa tu mente', color: 'green' as TaskColor, tiempo: 100 },
];
