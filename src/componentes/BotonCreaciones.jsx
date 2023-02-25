import { TfiBrush } from "react-icons/tfi";
import Global from "./Global.js";
import React, {useContext} from "react";

function BotonCreaciones(){
    const {setShowNodal} = useContext(Global)

    return(
        <button className="border border-blue-500 hover:bg-blue-50 p-1 rounded-full flex items-center shadow-md hover:shadow-lg mx-3"
                onClick={()=> setShowNodal(true)}
        >
            <TfiBrush className="text-purple-600 text-xl mx-2" />
            <span className="p-4 text-blue-600 text-lg">Agregar</span>
        </button>
    )
}

export default BotonCreaciones;