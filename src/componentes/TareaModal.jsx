import {
    TfiCheckBox,
    TfiClose,
    TfiBook,
    TfiHarddrives,
    TfiPaintRoller,
    TfiPaintBucket,
    TfiLoop,
    TfiEraser,
    TfiCheck, TfiNa
} from "react-icons/tfi";
import {useContext, useState} from "react";
import Global from "./Global.js";

const colores = [ "blue", "red", "purple", "lime", "pink"];

function TareaModal() {
    const {setShowNodal, diaSelected, despachoDeTareas, eventoSeleccionado} = useContext(Global)
    const [titulo, setTitulo] = useState(eventoSeleccionado ? eventoSeleccionado.titulo : "")
    const [descripcion, setDescripcion] = useState(eventoSeleccionado ? eventoSeleccionado.descripcion : "")
    const [tiempo, setTiempo] = useState(eventoSeleccionado ? eventoSeleccionado.tiempo : "")
    const [colorseleccionado, setcolorseleccionado] = useState(eventoSeleccionado ?
        colores.find((col) => col === eventoSeleccionado.color)
        : colores[0])
    const [showAlertT, setShowAlertT] = useState(false);
    const [showAlertF, setShowAlertF] = useState(false);
    const [showAlertD, setShowAlertD] = useState(false);

    function handleSubmit(event){
        event.preventDefault()
        let tiimeTrue=  parseInt(tiempo);
        if(!(tiimeTrue === 0 || tiimeTrue == null || isNaN(tiimeTrue)) ){

            const calendarEvento = {
                titulo,
                descripcion,
                tiempo,
                color: colorseleccionado,
                dia: diaSelected.valueOf(),
                id: eventoSeleccionado ? eventoSeleccionado.id : Date.now()
            }
            if(eventoSeleccionado){
                despachoDeTareas({tipo:'update', carga:calendarEvento})
            }else{
                despachoDeTareas({tipo:'push', carga:calendarEvento})
            }
            setShowAlertT(true);
            setTimeout(() => {
                setShowAlertT(false);
                setShowNodal(false)
            }, 1000);
        }else{
            setShowAlertF(true);
            setTimeout(() => {
                setShowAlertF(false);
            }, 1000);
        }
    }

    function handleDelete(event){
        event.preventDefault()
            setShowAlertD(true);
            setTimeout(() => {
                setShowAlertD(false);
                setShowNodal(false);
            }, 1000);
        }

    return (
        <div className="h-screen w-full fixed left-0 top-0 flex justify-center items-center bg-">
            <form className="bg-white rounded-lg shadow-xl w-1/4">
                <header className="bg-indigo-50 p-3 flex justify-between items-center">
                    <div>
                        {eventoSeleccionado && (
                            <button onClick={()=> {
                                despachoDeTareas({tipo:"delete", carga:eventoSeleccionado});
                            }}>
                                <TfiEraser className=" text-red-500 cursor-pointer"  onClick={handleDelete} />
                            </button>
                        ) }
                    </div>
                    <TfiClose className=" text-gray-500 cursor-pointer"  onClick={() => setShowNodal(false)}/>
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
            {showAlertT && (
                <div className="top-0 right-0 absolute m-3 p-2 bg-green-500 text-white rounded-lg shadow w-70 text-sm font-bold flex
                justify-center items-center">
                    <TfiCheck className="text-3xl p-1 font-bold"/>
                    La tarea fue creada o modificada exitosamente !!
                </div>
            )}
            {showAlertF && (
                <div className="top-0 right-0 absolute m-3 p-2 bg-red-500 text-white rounded-lg shadow w-70 text-sm font-bold flex
                justify-center items-center">
                    <TfiNa className="text-3xl p-1 font-bold"/>
                    La tarea NO fue creada o modificada exitosamente !!
                </div>
            )}
            {showAlertD && (
                <div className="top-0 right-0 absolute m-3 p-2 bg-green-500 text-white rounded-lg
                                    shadow w-70 text-sm font-bold flex justify-center items-center">
                    <TfiCheck className="text-3xl p-1 font-bold"/>
                    La tarea fue eliminada exitosamente !!
                </div>
            )}
        </div>
    )
}

export default TareaModal;