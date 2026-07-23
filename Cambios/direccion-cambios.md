# MART - Dirección de Implementación de Cambios

> Generado desde `changesProyecto.md` + `architect.md`. Guía ejecutable para agentes y desarrolladores.

---

## 1. ESTRUCTURA Y MÓDULOS

### Árbol objetivo (ver `changesProyecto.md` §8)

```
src/
├── store/              # Estado global (Zustand)
├── hooks/              # Lógica reutilizable (selectores, helpers)
├── components/
│   ├── ui/             # Design system atómico
│   ├── calendar/       # Calendario + celdas + DnD
│   ├── tasks/          # Formularios + cards + plantillas
│   └── layout/         # Shell: sidebar + header + outlet
├── pages/              # Vistas de ruta
├── utils/              # Pure functions (date, id, validation)
├── types/              # Interfaces TypeScript
└── styles/             # Tailwind + CSS variables
```

### Capas y dependencias
```
Pages → Components → Hooks → Store → Utils
                                     ↕
                              Types (compartidos)
```

**Regla**: Components → Hooks. Hooks → Store. Store → Utils. Nunca al revés.

---

## 2. CONTRATOS Y DATOS

### Modelo de dominio (Task)
```typescript
// src/types/task.ts
interface Task {
  id: string;           // crypto.randomUUID()
  titulo: string;
  descripcion: string;
  tiempo: number;       // minutos
  color: TaskColor;     // union type: 'green' | 'red' | 'purple' | 'lime' | 'pink'
  dia: string;          // ISO YYYY-MM-DD (UNIFICADO - ver §6.3 del plan original)
  completed: boolean;   // true si finalizada
  order: number;        // posición de reordenamiento
  createdAt: number;    // Date.now()
  updatedAt: number;    // Date.now()
}

type TaskColor = 'green' | 'red' | 'purple' | 'lime' | 'pink';
```

### Store (contrato Zustand)
```typescript
// src/store/useTaskStore.ts
interface TaskStore {
  tasks: Task[];
  // Acciones
  addTask: (data: Omit<Task, 'id' | 'createdAt' | 'updatedAt'>) => void;
  updateTask: (id: string, patch: Partial<Task>) => void;
  deleteTask: (id: string) => void;
  clearAll: () => void;
  // Selectores
  getTasksByDay: (day: string) => Task[];
  getTasksByRange: (from: string, to: string) => Task[];
}
```

### Persistencia
- **Mecanismo**: Zustand `persist` middleware + `localforage` (IndexedDB)
- **Key**: `mart-tasks` (nueva, separada de `tareasGuardadas` legacy)
- **Migración**: Ejecutar `migrateLocalStorage()` en `main.tsx` antes de root (ver plan original §11)

---

## 3. ESTRATEGIA TÉCNICA

### 3.1 Eliminación de deudas técnicas
| Prioridad | Archivo/Fecha | Acción |
|-----------|---------------|--------|
| CRÍTICO | `package.json` | `npm uninstall @mui/material @emotion/react @emotion/styled react-bootstrap sweetalert react-toastify` |
| CRÍTICO | `Global.js` | Eliminar — reemplazado por Zustand store |
| CRÍTICO | `Wrapper.jsx` | Eliminar useReducer + localStorage — delegar a Zustand |
| ALTO | `NavBar.jsx:16-17` | Eliminar `localStorage.clear()` y `window.location.replace('/')` — usar `<Link to="/">` |
| ALTO | `Limpiar.jsx` | Cambiar `localStorage.clear()` por `useTaskStore().clearAll()` (solo tareas) |

### 3.2 Nuevo stack de dependencias
```bash
npm i zustand localforage @headlessui/react @heroicons/react
npm i -D vitest @testing-library/react @testing-library/user-event playwright @playwright/test eslint prettier typescript
```

### 3.3 Patrones de diseño
| Patrón | Uso | Justificación |
|--------|-----|---------------|
| **Zustand Store** | Estado global | Simplicidad vs Redux, persist built-in, tipado nativo |
| **Compound Components** | `Modal`, `TaskForm` | Composición flexible sin prop drilling |
| **Custom Hooks** | `useTasks`, `useDate` | Encapsular lógica de acceso al store |
| **Memoization** | `DayCell`, `TaskCard` | Evitar re-renders innecesarios en grid calendario |
| **Data-Driven** | `QUICK_TEMPLATES[]` | Plantillas como array, no hardcoded en JSX |

### 3.4 Fecha unificado (CRÍTICO)
- **Problema actual**: `Tareas.jsx` usa `dayjs().format('YYYY-MM-DD')`, `TareaModal.jsx` usa `diaSelected.valueOf()` (timestamp), `Dia.jsx` compara `DD-MM-YY`
- **Solución**: Todas las tareas almacenan `dia: string` en formato ISO `YYYY-MM-DD`. Conversión se hace UNA sola vez al crear la tarea.

### 3.5 ID generation
- **Actual**: `Date.now() * Math.random()` (colisiones probables)
- **Objetivo**: `crypto.randomUUID()` nativo del browser (wrappado en `src/utils/id.ts`)

---

## 4. JUSTIFICACIÓN Y TRADE-OFFS

| Decisión | Alternativa descartada | Razón |
|----------|----------------------|-------|
| Zustand sobre Redux Toolkit | Redux, MobX, Context+useReducer | Menos boilerplate, persist middleware nativo, bundle ~1KB vs ~10KB |
| IndexedDB sobre localStorage | localStorage puro | Sin límite 5MB, async, no bloquea UI, soporta objetos complejos |
| @headlessui sobre MUI/Headless UI custom | MUI, Bootstrap, Chakra | Sin dependencias pesadas, accesibilidad built-in, Tailwind-friendly |
| TypeScript gradual (.tsx/.ts nuevos, .jsx legacy) | Full migration | Reduce riesgo de break, permite migración incremental |
| Vitest sobre Jest | Jest, Testing Library standalone | Vite-native, HMR en tests, compatible con ESM |
| crypto.randomUUID() sobre UUID lib | uuid, nanoid, Date.now() | Nativo del browser, cero dependencias, sin colisiones |

---

## 5. ORDEN DE EJECUCIÓN (Phases)

### FASE 0 — Fundamentos (Sin cambios en UI)
1. Uninstall dependencias muertas
2. Instalar zustand + localforage + devDependencies
3. Crear `src/types/task.ts`
4. Crear `src/store/useTaskStore.ts` con persist middleware
5. Crear `src/utils/id.ts` (wrapper de `crypto.randomUUID()`)
6. Crear `src/utils/date.ts` (helpers ISO YYYY-MM-DD con dayjs)
7. Crear script migración `src/utils/migration.ts`
8. Ejecutar migración en `main.jsx` antes de render

### FASE 1 — UI Components (Design system)
1. `src/components/ui/Button.tsx` — variant/size + focus-visible + aria
2. `src/components/ui/Input.tsx` — label + htmlFor + error state
3. `src/components/ui/Modal.tsx` — Headless UI Dialog + focus trap
4. `src/components/ui/ColorPicker.tsx` — radio group + aria-label
5. `src/components/ui/Toast.tsx` — live region (reemplaza hot-toast + toastify)

### FASE 2 — Refactor vistas existentes
1. `Tareas.jsx` → Consumir store, eliminar lógica duplicada
2. `TareaModal.jsx` → Consumir store, usar Modal + TaskForm
3. `Dia.jsx` → Consumir `getTasksByDay()`, memoizar
4. `NavBar.jsx` → Eliminar localStorage.clear(), usar Link
5. `Limpiar.jsx` → Usar `clearAll()` del store
6. `Wrapper.jsx` / `Global.js` → Eliminar

### FASE 3 — Testing + CI
1. `vitest.config.ts` + test suites
2. Tests unitarios: store CRUD, persist, utils
3. Tests componente: Modal, TaskForm
4. E2E Playwright: crear → ver calendario → finalizar → borrar
5. GitHub Actions CI: lint → typecheck → test → build

---

## 6. VERIFICACIÓN DE CALIDAD

### Checklist por fase
- [ ] `npm run lint` pasa (0 errores)
- [ ] `npm run typecheck` pasa (0 errores)
- [ ] `npm run test` pasa (coverage >80% store, >60% components)
- [ ] `npm run build` exitoso
- [ ] Navegación funciona sin `localStorage.clear()` destructivo
- [ ] Fechas se comparan consistentemente (solo ISO YYYY-MM-DD)
- [ ] Modales tienen focus trap + ESC close + aria-modal
- [ ] Migración legacy ejecuta sin errores en localStorage existente

### Métricas objetivo
| Métrica | Actual estimado | Objetivo |
|---------|----------------|----------|
| Bundle size (gzip) | ~500KB+ | <200KB |
| Lighthouse accessibility | ~40 | >90 |
| Test coverage | 0% | >70% |
| Dependencias activas | ~20 | <10 |
