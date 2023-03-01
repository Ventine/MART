import dayjs from "dayjs";
import { es } from "dayjs/locale/es";
import {useContext, useEffect, useState} from "react";
import Global from "./Global.js";
dayjs.locale("es");
function Dia({dia, rowIdx}){
    const [diaEvento, setDiaEvento] = useState([])
    const {setDiaSelected, setShowNodal, guardarTarea, setEventoSeleccionado} = useContext(Global)

    useEffect(() => {
        const eventos = guardarTarea.filter(evt => dayjs(evt.dia).format("DD-MM-YY") === dia.format("DD-MM-YY") )
        setDiaEvento(eventos)
    }, [guardarTarea, dia])

    function getDiaClass() {
        return dia.format("DD-MM-YY") === dayjs().format("DD-MM-YY") ? "bg-purple-600 text-white rounded-full w-6 p-1" : "";
    }
    return(
        <div className="border border-blue-500 flex flex-col ">
            <header className="flex flex-col items-center">
                {rowIdx === 0 && (
                    <p className="text-sm w-full border border-b-blue-500 text-center bg-blue-400 text-white font-bold ">
                        {dia.format('ddd').toUpperCase()}
                    </p>
                )}
                <p className={`text-sm text-center ${getDiaClass()}`}>
                    {dia.format('DD')}
                </p>
            </header>
            <div className="flex-1 cursor-pointer" onClick={() => {
                setDiaSelected(dia); setShowNodal(true)
            }
            }>
                {diaEvento.map((evt, index) => (
                    <div key={index}
                         onClick={()=> setEventoSeleccionado(evt)}
                        className={`bg-${evt.color}-500 p-1 m-1 text-white text-sm rounded truncate` }>
                        {evt.titulo}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Dia;