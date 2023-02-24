import {TfiCheckBox, TfiClose, TfiBook, TfiHarddrives, TfiPaintRoller, TfiPaintBucket} from "react-icons/tfi";
import {useContext, useState} from "react";
import Global from "./Global.js";

const colores = [ "blue", "red", "purple", "lime", "pink"];

function TareaModal() {
    const {setShowNodal, diaSelected} = useContext(Global)
    const [titulo, setTitulo] = useState("")
    const [descripcion, setDescripcion] = useState("")
    return (
        <div className="h-screen w-full fixed left-0 top-0 flex justify-center items-center bg-">
            <form className="bg-white rounded-lg shadow-xl w-1/4">
                <header className="bg-indigo-50 p-3 flex justify-between items-center">
                    <TfiCheckBox className=" text-gray-500"/>
                    <TfiClose className=" text-gray-500 cursor-pointer" onClick={() => setShowNodal(false)}/>
                </header>
                <div className="p-2">
                    <div className="grid grid-cols-1/5 items-end gap-1">
                        <div></div>
                        <input type="text" name="title" placeholder="Escribe tarea" value={titulo}
                               onChange={(e) => setTitulo(e.target.value)} required={true} className="p-2 border-0 text-gray-600 text-xl
                        font-semibold w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-600"/>
                        <div className="flex items-center">
                            <TfiBook className="text-gray-400 text-sm m-3"/>
                            <p>{diaSelected.format("dddd, MMMM DD").toUpperCase()}</p>
                        </div>
                        <div className="flex items-center">
                            <TfiHarddrives className="text-gray-400 text-sm m-3"/>
                            <input type="text" name="descripcion" placeholder="Escribe descripcion" value={descripcion}
                                   onChange={(e) => setDescripcion(e.target.value)} required={true} className="p-2 border-0 text-gray-600 text-xl
                                 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-600"/>
                        </div>
                        <div className="flex items-center">
                            <TfiPaintRoller className="text-gray-400 text-sm m-3"/>
                            <div className="flex gap-x-2">
                                {colores.map((color, i) => (
                                    <span key={i}
                                          className={`w-6 h-6 rounded-full flex items-center justify-center cursor-pointer bg-${color}-500`}>
                                       <TfiPaintBucket className="text-white text-sm m-1"/>
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default TareaModal;