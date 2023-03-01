import React, {useState, useContext, useEffect} from "react";
import {obtenerMes} from "./funcionamientoCalendar.js";
import CalendarHeader from "./CalendarHeader.jsx";
import Sidebar from "./Sidebar.jsx";
import Mes from "./Mes.jsx";
import Global from "./Global.js";
import Wrapper from "./Wrapper.jsx";
import TareaModal from "./TareaModal.jsx";

function Calendar({item, setItem}){
    const [currentMes, setCurrentMes] = useState(obtenerMes())
    const {mesIndex, showNodal} = useContext(Global)
    useEffect(() => {
        setCurrentMes(obtenerMes(mesIndex))
    }, [mesIndex])

    return(
        <div id="pdf">
            <React.Fragment>
                {showNodal &&  <TareaModal /> }
                <div className="h-screen flex flex-col">
                    <CalendarHeader />
                    <div className="flex flex-col md:flex-row ">
                        <Sidebar />
                        <Mes mes={currentMes} item={item} setItem={setItem} />
                    </div>
                </div>
            </React.Fragment>
        </div>
    )
}

export default Calendar;
