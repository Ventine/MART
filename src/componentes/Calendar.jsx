import React, { useState, useEffect } from "react";
import { obtenerMes } from "./funcionamientoCalendar.js";
import CalendarHeader from "./CalendarHeader.jsx";
import Sidebar from "./Sidebar.jsx";
import Mes from "./Mes.jsx";
import { useUIStore } from '../store/useUIStore';
import TareaModal from "./TareaModal.jsx";

function Calendar() {
  const [currentMes, setCurrentMes] = useState(obtenerMes());
  const mesIndex = useUIStore((s) => s.mesIndex);
  const showNodal = useUIStore((s) => s.showNodal);
  const selectedDay = useUIStore((s) => s.selectedDay);
  const eventoSeleccionado = useUIStore((s) => s.eventoSeleccionado);
  const setShowNodal = useUIStore((s) => s.setShowNodal);

  useEffect(() => {
    setCurrentMes(obtenerMes(mesIndex));
  }, [mesIndex]);

  return (
    <div className="">
      <React.Fragment>
        <div className="h-screen flex flex-col ml-0 lg:-ml-12">
          <CalendarHeader />
          <div className="flex flex-col md:flex-row">
            <Sidebar />
            <Mes mes={currentMes} />
          </div>
        </div>
      </React.Fragment>

      <TareaModal
        isOpen={showNodal}
        onClose={() => setShowNodal(false)}
        eventoSeleccionado={eventoSeleccionado}
        diaSelected={selectedDay}
      />
    </div>
  );
}

export default Calendar;
