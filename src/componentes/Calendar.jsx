import React, {useState, useContext, useEffect} from "react";
import {obtenerMes} from "./funcionamientoCalendar.js";
import CalendarHeader from "./CalendarHeader.jsx";
import Sidebar from "./Sidebar.jsx";
import Mes from "./Mes.jsx";
import Global from "./Global.js";
import TareaModal from "./TareaModal.jsx";

//Pagina que une los diferentes componentes del horario
function Calendar({item, setItem}) {
    const [currentMes, setCurrentMes] = useState(obtenerMes())
    const {mesIndex, showNodal} = useContext(Global)
    useEffect(() => {
        setCurrentMes(obtenerMes(mesIndex))
    }, [mesIndex])

    return (
        <div className="">
            <React.Fragment>
                {showNodal && <TareaModal/>}
                <div className="h-screen flex flex-col ml-0 lg:-ml-12">
                    <CalendarHeader/>
                    <div className="flex flex-col md:flex-row ">
                        <Sidebar/>
                        <Mes mes={currentMes} item={item} setItem={setItem}/>
                    </div>
                </div>
            </React.Fragment>
        </div>
    )
}

export default Calendar;
