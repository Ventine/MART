import {TfiCheckBox, TfiClose, TfiBook, TfiHarddrives, TfiPaintRoller, TfiPaintBucket, TfiLoop, TfiEraser} from "react-icons/tfi";
import {useContext, useState} from "react";
import Global from "./Global.js";
import dayjsRandom from 'dayjs-random'
import dayjs from "dayjs";
const colores = [ "blue", "red", "purple", "lime", "pink"];
dayjs.extend(dayjsRandom)

function Tareas({ task, setTask, item, setItem}) {
    const {setShowNodal, diaSelected, despachoDeTareas, eventoSeleccionado} = useContext(Global)
    const [titulo, setTitulo] = useState(eventoSeleccionado ? eventoSeleccionado.titulo : "")
    const [descripcion, setDescripcion] = useState(eventoSeleccionado ? eventoSeleccionado.descripcion : "")
    const [tiempo, setTiempo] = useState(eventoSeleccionado ? eventoSeleccionado.tiempo : "")
    const [colorseleccionado, setcolorseleccionado] = useState(eventoSeleccionado ?
        colores.find((col) => col === eventoSeleccionado.color)
        : colores[0])

    function handleSubmit(event){
        event.preventDefault()
        const calendarEvento = {
            titulo,
            descripcion,
            tiempo,
            color: colorseleccionado,
            dia: dayjs.between('2023-03-01', '2023-03-31').format('YYYY-MM-DD'),
            id: eventoSeleccionado ? eventoSeleccionado.id : Date.now()
        }
            despachoDeTareas({tipo:'push', carga:calendarEvento})
           }
    return (
        <div className="h-screen w-full fixed left-0 top-0 flex justify-center items-center ">
            <form className="bg-white rounded-lg shadow-xl w-full md:w-1/2">
                <header className="bg-indigo-50 p-3 flex justify-between items-center hidden">
                    <div>
                        {eventoSeleccionado && (
                            <button onClick={()=> {
                                despachoDeTareas({tipo:"delete", carga:eventoSeleccionado});
                                setShowNodal(false)
                            }}>
                                <TfiEraser className=" text-red-500 cursor-pointer" onClick={() => setShowNodal(false)}/>
                            </button>
                        ) }
                    </div>
                    <TfiClose className=" text-gray-500 cursor-pointer" onClick={() => setShowNodal(false)}/>
                </header>
                <div className="p-2">
                    <div className="grid grid-cols-1/5 items-end gap-1">
                        <div></div>
                        <input type="text" name="title" placeholder="Escribe tarea" value={titulo}
                               onChange={(e) => setTitulo(e.target.value)} required={true} className="p-2 border-0 text-gray-600 text-xl
                        font-semibold w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-600"/>
                        <div className="flex items-center hidden">
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
                            <TfiLoop className="text-gray-400 text-sm m-3"/>
                            <input type="number" name="descripcion" placeholder="Define el tiempo (min)" value={tiempo}
                                   step={15} min={0} max={1000}
                                   onChange={(e) => setTiempo(e.target.value)} required={true} className="p-2 border-0 text-gray-600 text-xl
                                 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-600"/>
                        </div>
                        <div className="flex items-center">
                            <TfiPaintRoller className="text-gray-400 text-sm m-3"/>
                            <div className="flex gap-x-2">
                                {colores.map((color, i) => (
                                    <span key={i}
                                          className={`w-6 h-6 rounded-full flex items-center justify-center cursor-pointer bg-${color}-500`}
                                          onClick={() => { setcolorseleccionado(color) }}
                                    >
                                        {colorseleccionado === color && (
                                            <TfiPaintBucket className="text-white text-sm m-1"/>
                                        )}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <footer className="flex justify-end border-t p-2 mt-2">
                    <button type="submit" className="bg-purple-500 hover:bg-purple-400 p-3 rounded-lg text-white"
                            onClick={handleSubmit}>
                        Guardar
                    </button>
                </footer>
            </form>
        </div>

    )
}

export default Tareas;