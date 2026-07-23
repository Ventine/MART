import localForage from 'localforage';
import dayjs from 'dayjs';
import { Task, TaskColor } from '../types/task';
import { generateId } from './id';

const LEGACY_KEY = 'tareasGuardadas';

export async function migrateLocalStorage(): Promise<void> {
  const raw = localStorage.getItem(LEGACY_KEY);
  if (!raw) return;

  try {
    const oldTasks = JSON.parse(raw) as any[];
    const migrated: Task[] = oldTasks.map((t) => ({
      id: generateId(),
      titulo: t.titulo ?? '',
      descripcion: t.descripcion ?? '',
      tiempo: Number(t.tiempo) || 0,
      color: (['green', 'red', 'purple', 'lime', 'pink'].includes(t.color) ? t.color : 'green') as TaskColor,
      dia: dayjs(t.dia).isValid() ? dayjs(t.dia).format('YYYY-MM-DD') : dayjs().format('YYYY-MM-DD'),
      completed: t.titulo?.startsWith('√') ?? false,
      order: 0,
      createdAt: t.id ?? Date.now(),
      updatedAt: Date.now(),
    }));

    await localForage.setItem('mart-tasks', { state: { tasks: migrated }, version: 0 });
    localStorage.removeItem(LEGACY_KEY);
  } catch (e) {
    console.error('Migration failed:', e);
  }
}
