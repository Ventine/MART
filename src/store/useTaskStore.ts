import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import localForage from 'localforage';
import { Task } from '../types/task';
import { generateId } from '../utils/id';
import { today } from '../utils/date';

interface TaskStore {
  tasks: Task[];
  addTask: (data: Omit<Task, 'id' | 'createdAt' | 'updatedAt' | 'completed'>) => void;
  updateTask: (id: string, patch: Partial<Task>) => void;
  deleteTask: (id: string) => void;
  clearAll: () => void;
  getTasksByDay: (day: string) => Task[];
  getTasksByRange: (from: string, to: string) => Task[];
}

const forageStorage = createJSONStorage(() => localForage);

export const useTaskStore = create<TaskStore>()(
  persist(
    (set, get) => ({
      tasks: [],

      addTask: (data) => {
        const now = Date.now();
        const newTask: Task = {
          ...data,
          id: generateId(),
          completed: false,
          createdAt: now,
          updatedAt: now,
        };
        set((state) => ({ tasks: [...state.tasks, newTask] }));
      },

      updateTask: (id, patch) => {
        set((state) => ({
          tasks: state.tasks.map((t) =>
            t.id === id ? { ...t, ...patch, updatedAt: Date.now() } : t
          ),
        }));
      },

      deleteTask: (id) => {
        set((state) => ({
          tasks: state.tasks.filter((t) => t.id !== id),
        }));
      },

      clearAll: () => {
        set({ tasks: [] });
      },

      getTasksByDay: (day) => {
        return get().tasks.filter((t) => t.dia === day);
      },

      getTasksByRange: (from, to) => {
        return get().tasks.filter((t) => t.dia >= from && t.dia <= to);
      },
    }),
    {
      name: 'mart-tasks',
      storage: forageStorage,
    }
  )
);
