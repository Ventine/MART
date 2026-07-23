## STACK_TECNICO
- React 18.2.0 + Vite 4.1.0
- React Router DOM 6.8.1 (SPA routing)
- Tailwind CSS 3.2.6 + PostCSS + Autoprefixer
- UI: MUI 5.11.10 + Emotion, React-Bootstrap 2.8.0, React-Icons (TFI)
- State: React Context API (Global.js) + useState/useContext hooks
- Persistencia: localForage 1.10.0 (IndexedDB/LocalStorage)
- Fechas: dayjs 1.11.7 + dayjs-random + locale ES
- PDF: jspdf 2.5.1
- Toast/Alerts: react-hot-toast 2.4.0, react-toastify 9.1.3, sweetalert 2.1.2
- Backend (listado, no usado en frontend): express 4.18.2, mysql 2.18.1
- Deploy: Netlify (netlify.toml configurado)

## ARBOL_SISTEMA
```
MART/
├── public/
│   ├── img-01.svg, male.svg, work.svg, vite.svg
├── src/
│   ├── main.jsx                    # Entry: BrowserRouter + Wrapper + App
│   ├── App.jsx                     # Root: Layout grid + Routes (/ , /tareas , /horario)
│   ├── index.css                   # Tailwind imports
│   ├── componentes/
│   │   ├── Global.js               # Context API: state global (tareas, mes, modales, eventos)
│   │   ├── App.jsx                 # (root component, see above)
│   │   ├── Home.jsx                # Landing: CTA -> /tareas, /horario
│   │   ├── NavBar.jsx              # Sidebar navigation (Home, Tareas, Horario, Buzon, Limpiar)
│   │   ├── HeaderSup.jsx           # Top bar: logo MART
│   │   ├── Wrapper.jsx             # Layout wrapper: NavBar + children
│   │   ├── Tareas.jsx              # Form crear/editar tareas + tareas rápidas (Cardio, Musculos, etc.)
│   │   ├── TareaModal.jsx          # Modal en /horario: crear/editar/eliminar/finalizar tarea del día
│   │   ├── Calendar.jsx            # Vista /horario: header + grid mes (5x7)
│   │   ├── CalendarHeader.jsx      # Header mes: nav mes anterior/siguiente/hoy + título
│   │   ├── Mes.jsx                 # Grid 5 semanas x 7 días
│   │   ├── Dia.jsx                 # Celda día: header + lista eventos (click -> modal)
│   │   ├── CalendarioPequeno.jsx   # Mini-calendario en sidebar
│   │   ├── Sidebar.jsx             # Sidebar en /horario: BotonCreaciones + CalendarioPequeno
│   │   ├── BotonCreaciones.jsx     # Botón flotante "Crear tarea" -> abre Tareas.jsx
│   │   ├── funcionamientoCalendar.js # Util: generar grid 5x7 dayjs para mes dado
│   │   ├── Buzon.jsx               # Componente sugerencias/buzón
│   │   ├── Limpiar.jsx             # Botón limpiar localStorage
│   │   ├── MenuBell.jsx            # (No usado directamente)
│   │   ├── Tareas.jsx              # (Duplicado de Tareas.jsx, ver App.jsx)
│   │   └── Dia.jsx                 # (Duplicado, ver components/)
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.cjs
├── postcss.config.cjs
├── netlify.toml
└── README.md
```

## PATRON_ARQUITECTURA
- **Arquitectura**: SPA React + Context API (estado global único en `Global.js`)
- **Flujo de datos**: `App.jsx` (state `item[]`, `task`) → Props a `Tareas` y `Calendar` → `Global.js` Context provee `guardarTarea[]`, `despachoDeTareas({tipo, carga})` (reducer-like) → Componentes consumen vía `useContext(Global)`
- **Ruteo**: `BrowserRouter` en `main.jsx` → `Routes` en `App.jsx` → `/` (Home), `/tareas` (Tareas), `/horario` (Calendar)
- **Layout**: `Wrapper` (NavBar fijo lateral) → `HeaderSup` + `Routes` contenido
- **Persistencia**: `localForage` en `Global.js` (load/save `guardarTarea` en `localStorage`/`IndexedDB`)
- **Estilos**: Tailwind CSS utility-first + MUI components puntuales

## MODELO_DOMINIO
```yaml
Tarea:
  id: number (Date.now() * Math.random())
  titulo: string
  descripcion: string
  tiempo: number (minutos, múltiplos de 25 + resto)
  color: string (green|red|purple|lime|pink)
  dia: string (YYYY-MM-DD) / number (dayjs.valueOf())
  # Reglas: tiempo se fragmenta en bloques de 25 min + resto

EstadoGlobal (Global.js):
  guardarTarea: Tarea[]              # Persistido en localForage
  mesIndex: number                   # Mes actual en vista calendario (0-11)
  diaSelected: dayjs                 # Día seleccionado en grid
  showNodal: boolean                 # Modal visible (TareaModal)
  eventoSeleccionado: Tarea|null     # Tarea en edición
  setMesIndex, setDiaSelected, setShowNodal, setEventoSeleccionado
  despachoDeTareas: (action) => void # {tipo: 'push'|'update'|'delete', carga: Tarea}
```

Acciones `despachoDeTareas`:
- `push`: agregar nueva tarea (genera ID único)
- `update`: actualizar tarea existente (match por `id`)
- `delete`: eliminar tarea (match por `id`)

Tareas Rápidas (predefinidas en `Tareas.jsx`):
- Cardio (green, 100min), Musculos (red, 100min), Meditar (purple, 100min), Estudiar (lime, 100min), Procastinar (pink, 100min), Siesta (green, 100min)

Calendario:
- Grid fijo 5 semanas × 7 días (35 celdas)
- `obtenerMes(month)` genera array `Dayjs[][]` usando `dayjs`
- Navegación mes anterior/siguiente/hoy via `mesIndex` en Context

## REGLAS_NEGOCIO_CRITICAS
- **Fragmentación de tiempo**: Al crear tarea, `tiempo` se divide en bloques de 25 min + resto. Cada bloque genera una `Tarea` separada con mismo título/descripción/color pero `tiempo=25` (o resto final). IDs únicos por bloque.
- **Persistencia obligatoria**: `guardarTarea` SIEMPRE se sincroniza con `localForage` (localStorage/IndexedDB) tras cada `despachoDeTareas`.
- **Unicidad de ID**: `Date.now() * Math.random() ± Math.random()` para nuevos; `eventoSeleccionado.id` para ediciones.
- **Colores fijos**: Solo 5 colores permitidos: `["green", "red", "purple", "lime", "pink"]`.
- **Semana de tareas automáticas**: En `/tareas`, `startOfWeek`/`endOfWeek` = semana actual (lunes-domingo). `dia` se asigna aleatoriamente dentro de esa semana via `dayjs.between()`.
- **Modal único**: Un solo modal global (`showNodal` + `eventoSeleccionado`) para crear/editar tareas en `/horario`.
- **Navegación lateral**: `NavBar` es sidebar fija (mobile: off-canvas) con rutas `/`, `/tareas`, `/horario` + acciones `Buzon` (sugerencias) y `Limpiar` (clear localStorage).
- **Locale fijo**: `dayjs.locale('es')` hardcodeado en componentes de calendario.