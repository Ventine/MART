import { TfiAgenda, TfiAngleLeft, TfiAngleRight } from "react-icons/tfi";
import {useContext} from "react";
import Global from "./Global.js";

function CalendarHeader(){
    const {mesIndex, setMesIndex} = useContext(Global)
    function handlePrevMes(){
        setMesIndex(mesIndex -1)
    }
    function handleNextMes(){
        setMesIndex(mesIndex -1)
    }
    return(
        <header className="p-2 flex items-center">
            <div className="flex flex-row mb-2">
                <TfiAgenda className="text-purple-600 text-3xl mx-5" />
                <h1 className="text-blue-600 text-2xl font-semibold">Horario generado</h1>
            </div>
            <button className="border rounded p-2 mx-4"> Hoy </button>
            <button className="cursor-pointer text-gray-600 mx-2" onClick={handlePrevMes }> <TfiAngleLeft /> </button>
            <button className="cursor-pointer text-gray-600 mx-2"  onClick={handleNextMes }> <TfiAngleRight /> </button>

        </header>
    )
}

export default CalendarHeader;