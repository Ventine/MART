import {
    TfiClose,
    TfiBook,
    TfiHarddrives,
    TfiPaintRoller,
    TfiPaintBucket,
    TfiLoop,
    TfiEraser,
    TfiCheck,
    TfiNa
} from "react-icons/tfi";
import React, {useContext, useState} from "react";
import Global from "./Global.js";
import dayjsRandom from 'dayjs-random'
import dayjs from "dayjs";

const colores = ["blue", "red", "purple", "lime", "pink"];
dayjs.extend(dayjsRandom)

//Pagina Para crear tareas
function Tareas({task, setTask, item, setItem}) {
    const startOfWeek = dayjs().format('YYYY-MM-DD');
    const endOfWeek = dayjs().add(6, 'day').format('YYYY-MM-DD');
    const {setShowNodal, diaSelected, despachoDeTareas, eventoSeleccionado} = useContext(Global)
    const [titulo, setTitulo] = useState(eventoSeleccionado ? eventoSeleccionado.titulo : "")
    const [descripcion, setDescripcion] = useState(eventoSeleccionado ? eventoSeleccionado.descripcion : "")
    let [tiempo, setTiempo] = useState(eventoSeleccionado ? eventoSeleccionado.tiempo : "")
    const [colorseleccionado, setcolorseleccionado] = useState(eventoSeleccionado ?
        colores.find((col) => col === eventoSeleccionado.color)
        : colores[0])
    const [showAlertT, setShowAlertT] = useState(false);
    const [showAlertF, setShowAlertF] = useState(false);

    function handleSubmit(event) {
        event.preventDefault()
        let divisibleCount = 0;
        let ventiCinco = parseInt(tiempo);
        if (!(ventiCinco === 0 || ventiCinco == null || isNaN(ventiCinco) || ventiCinco < 0)) {

            while (25 <= ventiCinco) {
                ventiCinco = ventiCinco - 25;
                divisibleCount++;
            }

            while (divisibleCount > 0) {
                tiempo = 25;
                const calendarEvento = {
                    titulo,
                    descripcion,
                    tiempo,
                    color: colorseleccionado,
                    dia: dayjs.between(`${startOfWeek}`, `${endOfWeek}`).format('YYYY-MM-DD'),
                    id: eventoSeleccionado ? eventoSeleccionado.id : (Date.now() * Math.random() + Math.random())
                }
                setTitulo("");
                setDescripcion("");
                setTiempo("");
                setcolorseleccionado("");
                despachoDeTareas({tipo: 'push', carga: calendarEvento})
                divisibleCount--;
            }
            if (ventiCinco > 0) {
                tiempo = ventiCinco;
                const calendarEvento = {
                    titulo,
                    descripcion,
                    tiempo,
                    color: colorseleccionado,
                    dia: dayjs.between(`${startOfWeek}`, `${endOfWeek}`).format('YYYY-MM-DD'),
                    id: eventoSeleccionado ? eventoSeleccionado.id : (Date.now() * Math.random() - Math.random())
                }
                setTitulo("");
                setDescripcion("");
                setTiempo("");
                setcolorseleccionado("");
                despachoDeTareas({tipo: 'push', carga: calendarEvento})
            }
            setShowAlertT(true);
            setTimeout(() => {
                setShowAlertT(false);
            }, 1000);
        } else {
            setShowAlertF(true);
            setTimeout(() => {
                setShowAlertF(false);
            }, 1000);
        }


    }

    function handleReco(event, valor) {
        event.preventDefault()
        let ventiCinco = 100;
        let titulo = "";
        let descripcion = "";
        let colorSelec = "";
        if(valor === 1){
            let tituloUno = "Cardio";
            let descripcionUno = "Rutina de Cardio";
            let colorUno = "blue";
            titulo = tituloUno;
            descripcion = descripcionUno;
            colorSelec = colorUno;
        }else if(valor === 2){
            let tituloUno = "Musculos";
            let descripcionUno = "Rutina brazos/piernas";
            let colorUno = "yellow";
            titulo = tituloUno;
            descripcion = descripcionUno;
            colorSelec = colorUno;
        }else if(valor === 3){
            let tituloUno = "Meditar";
            let descripcionUno = "Relaja tu mente";
            let colorUno = "cyan";
            titulo = tituloUno;
            descripcion = descripcionUno;
            colorSelec = colorUno;
        }else if(valor === 4){
            let tituloUno = "Estudiar";
            let descripcionUno = "Mejora tu conocimiento";
            let colorUno = "emerald";
            titulo = tituloUno;
            descripcion = descripcionUno;
            colorSelec = colorUno;
        }else if(valor === 5){
            let tituloUno = "Procastinar";
            let descripcionUno = "Disfruta de tiempo libre";
            let colorUno = "orange";
            titulo = tituloUno;
            descripcion = descripcionUno;
            colorSelec = colorUno;
        }else{
            let tituloUno = "Siesta";
            let descripcionUno = "Descansa tu mente";
            let colorUno = "rose";
            titulo = tituloUno;
            descripcion = descripcionUno;
            colorSelec = colorUno;
        }
        let divisibleCount = 0;
        if (!(ventiCinco === 0 || ventiCinco == null || isNaN(ventiCinco) || ventiCinco < 0)) {

            while (25 <= ventiCinco) {
                ventiCinco = ventiCinco - 25;
                divisibleCount++;
            }

            while (divisibleCount > 0) {
                tiempo = 25;
                const calendarEvento = {
                    titulo,
                    descripcion,
                    tiempo,
                    color: colorSelec,
                    dia: dayjs.between(`${startOfWeek}`, `${endOfWeek}`).format('YYYY-MM-DD'),
                    id: eventoSeleccionado ? eventoSeleccionado.id : (Date.now() * Math.random() + Math.random())
                }
                setTitulo("");
                setDescripcion("");
                setTiempo("");
                setcolorseleccionado("");
                despachoDeTareas({tipo: 'push', carga: calendarEvento})
                divisibleCount--;
            }
            if (ventiCinco > 0) {
                tiempo = ventiCinco;
                const calendarEvento = {
                    titulo,
                    descripcion,
                    tiempo,
                    color: colorseleccionado,
                    dia: dayjs.between(`${startOfWeek}`, `${endOfWeek}`).format('YYYY-MM-DD'),
                    id: eventoSeleccionado ? eventoSeleccionado.id : (Date.now() * Math.random() - Math.random())
                }
                setTitulo("");
                setDescripcion("");
                setTiempo("");
                setcolorseleccionado("");
                despachoDeTareas({tipo: 'push', carga: calendarEvento})
            }
            setShowAlertT(true);
            setTimeout(() => {
                setShowAlertT(false);
            }, 1000);
        } else {
            setShowAlertF(true);
            setTimeout(() => {
                setShowAlertF(false);
            }, 1000);
        }
    }

    return (
        <div className=" mt-24 w-full fixed left-0 top-0 flex flex-col justify-center items-center relative">
            <form className="bg-white rounded-lg shadow-xl w-full md:w-1/2">
                <header className="bg-indigo-50 p-3 flex justify-between items-center hidden">
                    <div>
                        {eventoSeleccionado && (
                            <button onClick={() => {
                                despachoDeTareas({tipo: "delete", carga: eventoSeleccionado});
                                setShowNodal(false)
                            }}>
                                <TfiEraser className=" text-red-500 cursor-pointer"
                                           onClick={() => setShowNodal(false)}/>
                            </button>
                        )}
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
                                   step={25} min={25} max={5000}
                                   onChange={(e) => setTiempo(e.target.value)} required={true} className="p-2 border-0 text-gray-600 text-xl
                                 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-600"/>
                        </div>
                        <div className="flex items-center">
                            <TfiPaintRoller className="text-gray-400 text-sm m-3"/>
                            <div className="flex gap-x-2">
                                {colores.map((color, i) => (
                                    <span key={i}
                                          className={`w-6 h-6 rounded-full flex items-center justify-center cursor-pointer bg-${color}-500`}
                                          onClick={() => {
                                              setcolorseleccionado(color)
                                          }}
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
                    <button type="submit" className="bg-purple-500 hover:bg-purple-400 px-6 py-3 rounded-lg text-white mr-10"
                            onClick={handleSubmit}>
                        Guardar
                    </button>

                </footer>
            </form>
            {showAlertT && (
                <div className="-mt-44 top-0 right-0 absolute p-4 bg-green-500 text-white rounded-lg shadow w-65 text-sm font-bold
                flex justify-center items-center">
                    <TfiCheck className="text-3xl m-2 p-2 font-bold"/>
                    La tarea fue creada o modificada exitosamente !!
                </div>
            )}
            {showAlertF && (
                <div className="-mt-44 top-0 right-0 absolute p-4 bg-red-500 text-white rounded-lg shadow w-65 text-sm font-bold
                flex justify-center items-center">
                    <TfiNa className="text-3xl m-2 p-2 font-bold"/>
                    La tarea NO fue creada o modificada exitosamente !!
                </div>
            )}
            <div className="">
                    <button className="mx-4 p-2 border border-none m-4 rounded
                    bg-blue-500 text-white hover:bg-blue-700" onClick={(event) => handleReco(event, 1)}>Cardio</button>
                    <button className="mx-4 p-2 border border-none m-4 rounded
                    bg-yellow-500 text-white hover:bg-yellow-700" onClick={(event) => handleReco(event, 2)}>Musculos</button>
                    <button className="mx-4 p-2 border border-none m-4 rounded
                    bg-cyan-500 text-white hover:bg-cyan-700" onClick={(event) => handleReco(event, 3)}>Meditar</button>
                    <button className="mx-4 p-2 border border-none m-4 rounded
                    bg-emerald-500 text-white hover:bg-emerald-700" onClick={(event) => handleReco(event, 4)}>Estudiar</button>
                    <button className="mx-4 p-2 border border-none m-4 rounded
                    bg-orange-500 text-white hover:bg-orange-700" onClick={(event) => handleReco(event, 5)}>Procastinar</button>
                    <button className="mx-4 p-2 border border-none m-4 rounded
                    bg-rose-500 text-white hover:bg-rose-700" onClick={(event) => handleReco(event, 6)}>Siesta</button>
            </div>

        </div>

    )
}

export default Tareas;