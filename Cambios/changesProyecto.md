# MART - Plan de Cambios y Mejoras Técnicas

> Documento generado automáticamente para uso exclusivo de agentes LLM. Cero narrativa, máxima densidad de información.

---

## 1. STACK_TECNICO_ACTUAL

- **Framework**: React 18.2.0 + Vite 4.1.0
- **Routing**: React Router DOM 6.8.1
- **UI**: 
  - Tailwind CSS 3.2.6 (config + PostCSS)
  - MUI 5.11.10 + Emotion 11.10.6 (conflicto de bundle)
  - React Bootstrap 2.8.0 (no usado activamente)
  - React Icons 4.7.1 (TFI icons)
- **State**: React Context API (`Global.js`) + useReducer (`Wrapper.jsx`)
- **Persistencia**: localStorage nativo (`Wrapper.jsx:34`)
- **Fechas**: Day.js 1.11.7 + dayjs-random 1.0.1 + locale ES
- **PDF**: jsPDF 2.5.1 (no usado en código visible)
- **Notificaciones**: React Hot Toast 2.4.0 + React Toastify 9.1.3 (duplicado)
- **Alertas**: SweetAlert 2.1.2 (no usado en código visible)
- **Backend placeholder**: Express 4.18.2 + MySQL 2.18.1 (no implementado)
- **Build/Deploy**: Netlify (`netlify.toml` presente)

---

## 2. ARBOL_SISTEMA_ACTUAL

```
MART/
├── public/
│   ├── img-01.svg
│   ├── male.svg
│   ├── vite.svg
│   └── work.svg
├── src/
│   ├── main.jsx                 # Entry point + BrowserRouter + Wrapper
│   ├── App.jsx                  # Routes: /, /tareas, /horario
│   ├── index.css                # Tailwind imports
│   ├── components/
│   │   ├── Global.js            # React Context (estado global)
│   │   ├── Wrapper.jsx          # Provider + useReducer + localStorage sync
│   │   ├── App.jsx              # Routes + estado task/item global
│   │   ├── Home.jsx             # Landing con CTAs
│   │   ├── HeaderSup.jsx        # Header marca MART
│   │   ├── NavBar.jsx           # Sidebar nav + Limpiar + Buzon
│   │   ├── Tareas.jsx           # Form crear/editar + plantillas rápidas
│   │   ├── Calendar.jsx         # Vista mes + Sidebar + Modal
│   │   ├── CalendarHeader.jsx   # (no leído, referenciado)
│   │   ├── Sidebar.jsx          # BotonCreaciones + CalendarioPequeno
│   │   ├── Mes.jsx              # Grid 7x5 días
│   │   ├── Dia.jsx              # Celda día + eventos + click → modal
│   │   ├── TareaModal.jsx       # Modal crear/editar/finalizar/borrar
│   │   ├── BotonCreaciones.jsx  # (referenciado)
│   │   ├── CalendarioPequeno.jsx # (referenciado)
│   │   ├── Limpiar.jsx          # Modal confirmación localStorage.clear()
│   │   ├── Buzon.jsx            # (referenciado)
│   │   ├── MenuBell.jsx         # (referenciado)
│   │   ├── funcionamentoCalendar.js # obtenerMes(monthIndex)
│   │   └── Global.js            # Context definition
│   └── assets/react.svg
├── package.json
├── vite.config.js
├── tailwind.config.cjs
├── postcss.config.cjs
├── netlify.toml
└── README.md (vacío)
```

---

## 3. PATRON_ARQUITECTURA_ACTUAL

```
App.jsx (Routes + State: task, item, setItem, setTask)
    │
    ├─> Wrapper.jsx (Global Provider)
    │       └─> useReducer(guardarDespacho, [], iniciarTareas)
    │       └─> useEffect → localStorage.setItem('tareasGuardadas')
    │       └─> Context value: { mesIndex, setMesIndex, calendarioPequenomes, 
    │                           diaSelected, setDiaSelected, showNodal, setShowNodal,
    │                           despachoDeTareas, guardarTarea, eventoSeleccionado, setEventoSeleccionado }
    │
    ├─> NavBar.jsx (useContext Global) → Sidebar fija izquierda
    ├─> HeaderSup.jsx (estático)
    │
    ├─> Home.jsx (Landing)
    ├─> Tareas.jsx (useContext Global) → Form + 6 botones plantilla
    │       └─> handleSubmit: divide tiempo en bloques de 25min → múltiples push a despachoDeTareas
    │       └─> handleReco: plantillas hardcoded (Cardio, Musculos, Meditar, Estudiar, Procastinar, Siesta)
    │
    └─> Calendar.jsx (useContext Global)
            ├─> CalendarHeader.jsx
            ├─> Sidebar.jsx
            │       ├─> BotonCreaciones.jsx
            │       └─> CalendarioPequeno.jsx
            └─> Mes.jsx
                    └─> Dia.jsx (useContext Global) → filter guardarTarea by day → click → setEventoSeleccionado + showNodal
                            └─> TareaModal.jsx (condicional showNodal)
                                    ├─> handleSubmit: push/update
                                    ├─> handleEnd: update con "√" prefix + color green
                                    └─> handleDelete: dispatch delete
```

**Flujo de datos**: `Wrapper (Provider) → Context → Components consumen useContext(Global)`
**Persistencia**: `useReducer → useEffect → localStorage` (síncrono, sin debounce)

---

## 4. MODELO_DOMINIO

```yaml
Tarea:
  id: Number (Date.now() * Math.random() ± Math.random())
  titulo: String
  descripcion: String
  tiempo: Number (minutos, múltiplos de 25 en Tareas.jsx, libre en TareaModal.jsx)
  color: String ["green", "red", "purple", "lime", "pink"]
  dia: String (YYYY-MM-DD en Tareas.jsx, dayjs.valueOf() en TareaModal.jsx)
  # Inconsistencia: formato fecha difiere entre vistas

PlantillasRapidas (hardcoded en Tareas.jsx:98-140):
  1: {titulo: "Cardio", desc: "Rutina de Cardio", color: "green", tiempo: 100}
  2: {titulo: "Musculos", desc: "Rutina brazos/piernas", color: "red", tiempo: 100}
  3: {titulo: "Meditar", desc: "Relaja tu mente", color: "purple", tiempo: 100}
  4: {titulo: "Estudiar", desc: "Mejora tu conocimiento", color: "lime", tiempo: 100}
  5: {titulo: "Procastinar", desc: "Disfruta de tiempo libre", color: "pink", tiempo: 100}
  6: {titulo: "Siesta", desc: "Descansa tu mente", color: "green", tiempo: 100}
```

---

## 5. REGLAS_NEGOCIO_CRITICAS_ACTUALES

- **Bloques de 25 min**: En `Tareas.jsx`, tiempo se fragmenta en chunks de 25 min + resto (múltiples tareas creadas por submit)
- **Tiempo libre en modal**: `TareaModal.jsx` permite cualquier tiempo (step=15, min=0, max=1000)
- **Colores fijos**: 5 colores hardcoded en `colores = ["green","red","purple","lime","pink"]`
- **Finalizar tarea**: Prefija "√" al título + fuerza color "green"
- **Borrar todo**: `Limpiar.jsx` hace `localStorage.clear()` + `window.location.href = '/'`
- **Persistencia única**: Key `tareasGuardadas` en localStorage (sin versionado, sin migración)
- **Semana actual**: `Tareas.jsx` usa `dayjs().format('YYYY-MM-DD')` a `dayjs().add(6,'day')` para asignar días aleatorios (`dayjs.between`)
- **Navegación**: `NavBar.jsx` usa `window.location.replace('/')` + `localStorage.clear()` en botón Home (efecto secundario destructivo)

---

## 6. PROBLEMAS_CRITICOS_DETECTADOS

### 6.1 Conflicto UI Libraries
- MUI + Emotion + Tailwind + React Bootstrap = **~500KB+ bundle innecesario**
- MUI no usado en componentes leídos (solo dependencia)
- **Acción**: Eliminar `@mui/material`, `@emotion/react`, `@emotion/styled`, `react-bootstrap`

### 6.2 Estado Global Frágil
- `Global.js` define defaults vacíos (funciones no-op)
- `Wrapper.jsx` provee implementación real
- Cualquier componente fuera del Provider crashea silenciosamente
- **Acción**: Migrar a Zustand + persist middleware

### 6.3 Inconsistencia Formato Fecha
- `Tareas.jsx:52`: `dia: dayjs.between(...).format('YYYY-MM-DD')`
- `TareaModal.jsx:41`: `dia: diaSelected.valueOf()` (timestamp number)
- `Dia.jsx:14`: Filtra comparando `dayjs(evt.dia).format("DD-MM-YY") === dia.format("DD-MM-YY")`
- **Bug**: Comparación falla si formatos difieren

### 6.4 ID Generation Colisiones
- `Tareas.jsx:53`: `Date.now() * Math.random() + Math.random()`
- `Tareas.jsx:70`: `Date.now() * Math.random() - Math.random()`
- `TareaModal.jsx:42`: `Date.now()`
- **Riesgo**: Colisiones matemáticas probables en alta frecuencia

### 6.5 localStorage Sin Límite
- Sin `try/catch` para `QuotaExceededError`
- Sin paginación/archivado (crece indefinido)
- `Limpiar.jsx` borra **todo** localStorage (incluye keys ajenas)

### 6.6 Accesibilidad Nula
- Sin `aria-label`, `role`, `aria-expanded`, focus management
- Modales sin `aria-modal`, sin trap focus
- Inputs sin labels asociados (`htmlFor`/`id`)
- Colores solo diferenciadores (sin iconos/patrones)

### 6.7 Duplicación Lógica Formulario
- `Tareas.jsx` y `TareaModal.jsx` ~80% código idéntico
- Validaciones, colores, alerts replicados

### 6.8 Navegación Destructiva
- `NavBar.jsx:16-17`: `window.location.replace('/')` + `localStorage.clear()` en Home click
- Rompe SPA, borra datos usuario sin confirmación

### 6.9 Sin Tests / CI / Lint
- `package.json` sin scripts `test`, `lint`, `typecheck`
- No husky, no GitHub Actions

---

## 7. PLAN_DE_CAMBIOS_PRIORIZADO

### FASE 0 - Limpieza Inmediata (Semana 0)
```bash
# Eliminar dependencias muertas
npm uninstall @mui/material @emotion/react @emotion/styled react-bootstrap sweetalert react-toastify

# Instalar stack moderno
npm i zustand localforage @dnd-kit/core @dnd-kit/sortable @dnd-kit/utilities @headlessui/react @heroicons/react
npm i -D vitest @testing-library/react @testing-library/user-event playwright @playwright/test eslint @typescript-eslint/eslint-plugin prettier husky lint-staged
```

### FASE 1 - Estado + Persistencia (Semana 1)
| Archivo | Cambio |
|---------|--------|
| `src/store/useTaskStore.ts` (nuevo) | Zustand store: `tasks`, `addTask`, `updateTask`, `deleteTask`, `clearAll`, `getTasksByDay` + `persist` middleware (localForage/IndexedDB) |
| `src/hooks/useTasks.ts` (nuevo) | Selectores tipados + acciones |
| `Wrapper.jsx` | Eliminar useReducer + useEffect localStorage → consumir store |
| `Global.js` | **Eliminar** (reemplazado por store hooks) |
| `Tareas.jsx` / `TareaModal.jsx` | Usar `useTasks()` actions |
| `Dia.jsx` | Usar `useTasks().getTasksByDay(day)` |

**Tipado fecha unificado**: `day: string` (ISO `YYYY-MM-DD`) en todo el sistema.

### FASE 2 - Componentes Base + Accesibilidad (Semana 2)
| Componente | Descripción |
|------------|-------------|
| `src/components/ui/Button.tsx` | Variant/size, `focus-visible`, `aria-disabled` |
| `src/components/ui/Input.tsx` | Label + `htmlFor`, error state, `aria-describedby` |
| `src/components/ui/Modal.tsx` | Headless UI Dialog, focus trap, `aria-modal`, ESC close |
| `src/components/ui/ColorPicker.tsx` | Radio group + `aria-label`, keyboard nav |
| `src/components/ui/Toast.tsx` | Replace hot-toast/toastify → accessible live region |

### FASE 3 - Refactor Vistas (Semana 3)
| Vista | Cambios |
|-------|---------|
| `Tareas.jsx` | Extraer `TaskForm` component compartido; plantillas → data-driven `QUICK_TEMPLATES[]` |
| `TareaModal.jsx` | Usar `TaskForm` + `Modal`; eliminar lógica duplicada |
| `Calendar.jsx` | Virtualizar grid mes (`react-window`) si >50 tareas |
| `Dia.jsx` | `React.memo` + `useMemo` filter; drag-drop reordenar (`@dnd-kit`) |
| `NavBar.jsx` | Eliminar `localStorage.clear()`; usar `<Link to="/">` normal |
| `Limpiar.jsx` | Confirm modal → `useTasks().clearAll()` (solo tasks, no todo localStorage) |

### FASE 4 - Drag & Drop + UX Avanzado (Semana 4)
- `@dnd-kit/sortable` en `Dia.jsx` para reordenar tareas
- `@dnd-kit/core` en `Mes.jsx` para mover tareas entre días
- Persistir orden en store (`order` field en Task)

### FASE 5 - Testing + CI (Semana 5)
| Archivo | Contenido |
|---------|-----------|
| `vitest.config.ts` | Config + coverage |
| `src/store/__tests__/useTaskStore.test.ts` | CRUD, persist, filters |
| `src/components/ui/__tests__/Modal.test.tsx` | Focus trap, ESC, portal |
| `.github/workflows/ci.yml` | `lint → typecheck → test → build` |
| `playwright.config.ts` | E2E: crear tarea → ver en calendario → finalizar → borrar |

### FASE 6 - PWA + Deploy (Semana 6)
- `vite-plugin-pwa` → manifest + service worker (offline-first)
- Netlify: headers CSP, redirects SPA, branch previews
- Sentry (error tracking) + Plausible (analytics privacidad)

---

## 8. ARQUITECTURA_OBJETIVO

```
src/
├── store/
│   ├── useTaskStore.ts          # Zustand + persist (IndexedDB)
│   ├── useUIStore.ts            # UI state: modalOpen, selectedDay, selectedTask
│   └── index.ts                 # Export barrel
├── hooks/
│   ├── useTasks.ts              # Selectores + acciones tipadas
│   ├── useDate.ts               # dayjs wrapper inmutable
│   └── useLocalStorage.ts       # (legacy migration helper)
├── components/
│   ├── ui/                      # Design system (Button, Input, Modal, ColorPicker, Toast, etc.)
│   ├── calendar/
│   │   ├── CalendarView.tsx     # Month grid + virtualization
│   │   ├── DayCell.tsx          # Memoized + DnD
│   │   ├── WeekHeader.tsx
│   │   └── MiniCalendar.tsx
│   ├── tasks/
│   │   ├── TaskForm.tsx         # Shared form (create/edit)
│   │   ├── TaskList.tsx
│   │   ├── TaskCard.tsx         # Draggable
│   │   └── QuickTemplates.tsx   # Data-driven
│   └── layout/
│       ├── AppShell.tsx         # Header + Sidebar + Outlet
│       ├── Sidebar.tsx
│       └── Header.tsx
├── pages/
│   ├── HomePage.tsx
│   ├── TasksPage.tsx
│   └── CalendarPage.tsx
├── utils/
│   ├── date.ts                  # ISO helpers, week ranges
│   ├── id.ts                    # crypto.randomUUID() wrapper
│   └── validation.ts            # Zod schemas
├── types/
│   └── task.ts                  # Task interface + enums
└── styles/
    └── globals.css              # Tailwind @import + CSS variables
```

---

## 9. MO_S_C_O_W_PRIORIZACION

| Must Have (Bloqueador) | Should Have (Alto valor) | Could Have (Nice) | Won't (v1) |
|------------------------|--------------------------|-------------------|------------|
| Eliminar MUI/Emotion | Drag & Drop tareas | Exportar PDF (jsPDF) | IA sugerencias |
| Zustand + IndexedDB | Virtualización mes | Modo oscuro | Equipos/colaboración |
| Formato fecha unificado | PWA + SW | Atajos teclado | Notificaciones push |
| Accesibilidad WCAG AA | Tests unit + E2E | Internacionalización i18n | Backend real |
| Eliminar localStorage.clear() destructivo | CI/CD GitHub Actions | Analytics privacidad | Sync multi-dispositivo |

---

## 10. COMANDOS_NPM_PROPUESTOS

```json
{
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview",
    "lint": "eslint src --ext ts,tsx",
    "typecheck": "tsc --noEmit",
    "test": "vitest run --coverage",
    "test:ui": "vitest --ui",
    "e2e": "playwright test",
    "prepare": "husky install",
    "postinstall": "husky install"
  }
}
```

---

## 11. MIGRACION_DATOS_EXISTENTES

```typescript
// src/utils/migration.ts
export function migrateLocalStorage() {
  const raw = localStorage.getItem('tareasGuardadas');
  if (!raw) return;
  try {
    const oldTasks = JSON.parse(raw);
    const migrated = oldTasks.map((t: any) => ({
      id: crypto.randomUUID(),
      titulo: t.titulo,
      descripcion: t.descripcion ?? '',
      tiempo: Number(t.tiempo) || 0,
      color: t.color ?? 'green',
      dia: dayjs(t.dia).isValid() ? dayjs(t.dia).format('YYYY-MM-DD') : dayjs().format('YYYY-MM-DD'),
      completed: t.titulo?.startsWith('√') ?? false,
      order: 0,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    }));
    localForage.setItem('tasks', migrated);
    localStorage.removeItem('tareasGuardadas');
  } catch (e) {
    console.error('Migration failed', e);
  }
}
```

Ejecutar en `main.tsx` antes de `createRoot`.

---

## 12. RIESGOS_TECNICOS

| Riesgo | Probabilidad | Impacto | Mitigación |
|--------|--------------|---------|------------|
| Tailwind + MUI conflict | Alta | Alto | **Eliminar MUI semana 0** |
| localStorage quota | Media | Alto | Migrar IndexedDB semana 1 |
| dayjs mutabilidad | Media | Medio | Wrapper inmutable `useDate()` |
| DnD mobile roto | Alta | Medio | `@dnd-kit` + test device real sem 2 |
| Scope creep stakeholders | Muy alta | Crítico | Product Owner veta fuera de MoSCoW Must |

---

## 13. ACCIONES_INMEDIATAS (Hoy)

1. **Product**: Definir 3 User Personas + User Journey Map (FigJam/Notion)
2. **UI/UX**: Design Tokens en `tailwind.config.js` + componentes base en Storybook
3. **CTO**: 
   ```bash
   npm uninstall @mui/material @emotion/react @emotion/styled react-bootstrap sweetalert react-toastify
   npm i zustand localforage @dnd-kit/core @dnd-kit/sortable @dnd-kit/utilities @headlessui/react @heroicons/react
   npm i -D vitest @testing-library/react @testing-library/user-event playwright @playwright/test eslint @typescript-eslint/eslint-plugin prettier husky lint-staged
   ```
4. **Equipo**: Reunión 30min alineación MoSCoW + Definition of Done

---

*Fin del documento. Único artefacto de referencia para agentes subsiguientes.*