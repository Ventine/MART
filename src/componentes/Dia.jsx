import React, { useMemo, useCallback } from 'react';
import dayjs from 'dayjs';
import { es } from 'dayjs/locale/es';
import { useTaskStore } from '../store/useTaskStore';
import { useUIStore } from '../store/useUIStore';
import TareaModal from './TareaModal';

dayjs.locale('es');

function Dia({ dia, rowIdx }) {
  const tasks = useTaskStore((s) => s.tasks);
  const showNodal = useUIStore((s) => s.showNodal);
  const setShowNodal = useUIStore((s) => s.setShowNodal);
  const selectedDay = useUIStore((s) => s.selectedDay);
  const setSelectedDay = useUIStore((s) => s.setSelectedDay);
  const setEventoSeleccionado = useUIStore((s) => s.setEventoSeleccionado);
  const eventoSeleccionado = useUIStore((s) => s.eventoSeleccionado);

  const diaEvento = useMemo(() => {
    return tasks.filter((t) => t.dia === dia.format('YYYY-MM-DD'));
  }, [tasks, dia]);

  const getDiaClass = useCallback(() => {
    return dia.format('DD-MM-YY') === dayjs().format('DD-MM-YY')
      ? 'bg-purple-600 text-white rounded-full w-6 p-1'
      : '';
  }, [dia]);

  const handleDayClick = () => {
    setSelectedDay(dia.format('YYYY-MM-DD'));
    setEventoSeleccionado(null);
    setShowNodal(true);
  };

  const handleTaskClick = (evt) => {
    setEventoSeleccionado(evt);
    setSelectedDay(dia.format('YYYY-MM-DD'));
    setShowNodal(true);
  };

  return (
    <div className="border border-blue-500 flex flex-col overflow-y-auto max-h-56 scroll-auto">
      <header className="flex flex-col items-center">
        {rowIdx === 0 && (
          <p className="text-sm w-full border border-b-blue-500 text-center bg-blue-400 text-white font-bold">
            {dia.format('ddd').toUpperCase()}
          </p>
        )}
        <p className={`text-sm text-center ${getDiaClass()}`}>
          {dia.format('DD')}
        </p>
      </header>
      <div className="flex-1 cursor-pointer" onClick={handleDayClick}>
        {diaEvento.map((evt) => (
          <div
            key={evt.id}
            onClick={(e) => {
              e.stopPropagation();
              handleTaskClick(evt);
            }}
            className={`bg-${evt.color}-500 my-0.5 ml-2 p-0.5 w-[90%] text-white text-sm rounded truncate`}
          >
            {evt.titulo} {evt.tiempo} min
          </div>
        ))}
      </div>

      <TareaModal
        isOpen={showNodal && selectedDay === dia.format('YYYY-MM-DD')}
        onClose={() => setShowNodal(false)}
        eventoSeleccionado={eventoSeleccionado}
        diaSelected={selectedDay}
      />
    </div>
  );
}

export default React.memo(Dia);
