import {TfiBrush} from "react-icons/tfi";
import Global from "./Global.js";
import React, {useContext} from "react";

//Boton para crear una tarea nueva en el calendario pequeño
function BotonCreaciones() {
    const {setShowNodal} = useContext(Global)

    return (
        <button
            className="border border-blue-500 hover:bg-blue-50 rounded-full flex items-center shadow-md hover:shadow-lg py-2"
            onClick={() => setShowNodal(true)}
        >
            <TfiBrush className="text-purple-600 text-xl mx-1"/>
            <span className="text-blue-600 text-sm mx-1 px-1">Agregar tarea</span>
        </button>
    )
}

export default BotonCreaciones;