import Global from "./Global.js";
import React, {useEffect, useReducer, useState} from "react";
import dayjs from "dayjs";

function guardarDespacho(estado, {tipo, carga}){
    switch (tipo){
        case 'push':
            return [... estado, carga]
        case 'update':
            return estado.map((ev) => ev.id === carga.id ? carga : ev)
        case 'delete':
            return estado.filter((ev) => ev.id !== carga.id)
        default:
            throw new Error();
    }
}

function iniciarTareas(){
    const storageTareas = localStorage.getItem('tareasGuardadas')
    const parseTareas = storageTareas ? JSON.parse(storageTareas) : []
    return parseTareas
}
function Wrapper(props){
    const [mesIndex, setMesIndex] = useState(dayjs().month())
    const [calendarioPequenomes, setCalendarioPequenomes] = useState(null)
    const [diaSelected, setDiaSelected] = useState(dayjs())
    const [showNodal, setShowNodal] = useState(false)
    const [eventoSeleccionado, setEventoSeleccionado] = useState(null)
    const [guardarTarea, despachoDeTareas] = useReducer(guardarDespacho, [], iniciarTareas )

    useEffect(() => {
        localStorage.setItem('tareasGuardadas', JSON.stringify(guardarTarea))
    }, [guardarTarea])


    useEffect(() => {
        if(calendarioPequenomes !== null){
            setMesIndex(calendarioPequenomes)
        }
    }, [calendarioPequenomes])

    useEffect(() => {
        if(!showNodal){
            setEventoSeleccionado(null);
        }
    }, [showNodal])

    return(
        <Global.Provider value={{mesIndex, setMesIndex, calendarioPequenomes, setCalendarioPequenomes, diaSelected, setDiaSelected
        , showNodal, setShowNodal, despachoDeTareas, guardarTarea, eventoSeleccionado, setEventoSeleccionado}}>
            {props.children}
        </Global.Provider>
    )
}

export default Wrapper;