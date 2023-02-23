import React, {useState, useContext, useEffect} from "react";
import {obtenerMes} from "./funcionamientoCalendar.js";
import CalendarHeader from "./CalendarHeader.jsx";
import Sidebar from "./Sidebar.jsx";
import Mes from "./Mes.jsx";
import Global from "./Global.js";
import Wrapper from "./Wrapper.jsx";

function Calendar(){
    const [currentMes, setCurrentMes] = useState(obtenerMes())
    const {mesIndex} = useContext(Global)
    useEffect(() => {
        setCurrentMes(obtenerMes(mesIndex))
    }, [mesIndex])
    return(
        <React.Fragment>
            <div className="h-screen flex flex-col">
                <CalendarHeader />
                <div className="flex flex-1">
                    <Sidebar />
                    <Mes mes={currentMes} />
                </div>

            </div>
        </React.Fragment>
    )
}

export default Calendar;
