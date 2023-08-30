import {TfiAgenda, TfiAngleLeft, TfiAngleRight} from "react-icons/tfi";
import {useContext} from "react";
import Global from "./Global.js";
import dayjs from "dayjs";

//Parte superior de la pagina horario
dayjs.locale("es");


function CalendarHeader() {
    const {mesIndex, setMesIndex} = useContext(Global)

    function handlePrevMes() {
        setMesIndex(mesIndex - 1)
    }

    function handleNextMes() {
        setMesIndex(mesIndex + 1)
    }

    function handleReset() {
        setMesIndex(mesIndex === dayjs().month() ? mesIndex + Math.random() : dayjs().month())
    }

    return (
        <header className="m-1  items-center justify-between hidden sm:flex">
            <div className="flex flex-row mb-2">
                <TfiAgenda className="text-purple-600 text-xl mx-5 mt-1"/>
                <h1 className="text-blue-600 text-xl font-semibold"> Programación de actividades</h1>
            </div>
            <button className="border rounded p-2 mx-8 border border-blue-500 rounded-full" onClick={handleReset}> Hoy
            </button>
            <button className="cursor-pointer text-purple-600 mx-2" onClick={handlePrevMes}><TfiAngleLeft/></button>
            <button className="cursor-pointer text-purple-600 mx-2" onClick={handleNextMes}><TfiAngleRight/></button>
            <h2 className="mx-3 text-xl text-blue-400 font-bold"> {dayjs(new Date(dayjs().year(), mesIndex)).format("MMMM YYYY").toUpperCase()} </h2>
        </header>
    )
}

export default CalendarHeader;