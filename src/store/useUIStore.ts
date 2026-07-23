import { create } from 'zustand';

interface UIStore {
  mesIndex: number;
  setMesIndex: (index: number) => void;
  calendarioPequenomes: number | null;
  setCalendarioPequenomes: (index: number | null) => void;
  diaSelected: string;
  setDiaSelected: (dia: string) => void;
  showNodal: boolean;
  setShowNodal: (show: boolean) => void;
  eventoSeleccionado: any | null;
  setEventoSeleccionado: (evento: any | null) => void;
  selectedDay: string;
  setSelectedDay: (day: string) => void;
}

export const useUIStore = create<UIStore>((set) => ({
  mesIndex: new Date().getMonth(),
  setMesIndex: (index) => set({ mesIndex: index }),
  calendarioPequenomes: null,
  setCalendarioPequenomes: (index) => set({ calendarioPequenomes: index }),
  diaSelected: new Date().toISOString().split('T')[0],
  setDiaSelected: (dia) => set({ diaSelected: dia }),
  showNodal: false,
  setShowNodal: (show) => set({ showNodal: show }),
  eventoSeleccionado: null,
  setEventoSeleccionado: (evento) => set({ eventoSeleccionado: evento }),
  selectedDay: new Date().toISOString().split('T')[0],
  setSelectedDay: (day) => set({ selectedDay: day }),
}));
