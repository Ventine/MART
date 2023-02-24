import React, {useContext, useEffect, useState} from "react";
import dayjs from "dayjs";
import {obtenerMes} from "./funcionamientoCalendar.js";
import {TfiAngleLeft, TfiAngleRight, TfiBook} from "react-icons/tfi";
import Global from "./Global.js";


function CalendarioPequeno(){
    const [currentMesIdx, setCurrentMesIdx] = useState(dayjs().month())
    const [currentMes, setCurrentMes] = useState(obtenerMes())
    useEffect(() => {
    setCurrentMes(obtenerMes(currentMesIdx))
    }, [currentMesIdx])
    const {mesIndex, setCalendarioPequenomes, setDiaSelected, diaSelected} = useContext(Global)
    useEffect(() => {
        setCurrentMesIdx(mesIndex)
    }, [mesIndex])
    function handlePrevMes(){
        setCurrentMesIdx(currentMesIdx -1)
    }
    function handleNextMes(){
        setCurrentMesIdx(currentMesIdx +1)
    }
    function getDiaclass(dia){
        const formato = "DD-MM-YY"
        const diaHoy = dayjs().format(formato)
        const curDia = dia.format(formato)
        const diaslc = diaSelected && diaSelected.format(formato)
        if(diaHoy === curDia){
            return 'bg-purple-500 text-white rounded-full'
        }else if(curDia === diaslc){
            return 'bg-lime-500 text-white rounded-full font-bold'
        }else{
            return ''
        }
    }
    return(
        <div className="mt-3 ">
            <header className="flex justify-between ">
                <p className="text-gray-500 font-bold">
                    {dayjs(new Date(dayjs().year(), currentMesIdx)).format("MMMM YYYY").toUpperCase()}
                </p>
                    <button className="cursor-pointer text-purple-600 mx-2" onClick={handlePrevMes }> <TfiAngleLeft /> </button>
                    <button className="cursor-pointer text-purple-600 mx-2"  onClick={handleNextMes }> <TfiAngleRight /> </button>
            </header>
            <div className="grid grid-cols-7 grid-rows-6">
                {currentMes[0].map((dia,i) => (
                    <span key={i} className="text-sm p-1 text-center">
                        {dia.format('dd').charAt(0).toUpperCase()}
                    </span>
                ))}
                {currentMes.map((row, i) => (
                    <React.Fragment key={i}>
                        {row.map((dia, idx) => (
                            <button
                                key={idx}
                                onClick={() => { setCalendarioPequenomes(currentMesIdx); setDiaSelected(dia) }}
                                className={`p-1 w-full ${getDiaclass(dia)}`}>
                                <span className="text-sm ">
                                    {dia.format('D')}
                                </span>
                            </button>
                        ))}
                    </React.Fragment>
                ))}
            </div>
        </div>
    )
}

export default CalendarioPequeno;