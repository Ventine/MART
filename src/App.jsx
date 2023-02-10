import { TfiViewGrid, TfiCheckBox, TfiCalendar, TfiSaveAlt, TfiPowerOff, TfiMenu, TfiClose, TfiBell , TfiAngleDown, TfiSearch,
    TfiFlickrAlt, TfiSignal, TfiTime} from "react-icons/tfi";
import React from 'react'
import {useState} from "react";
function App() {
    const [sidebar, setSidebar] = useState(false);
    const handleSidebar = () =>{
        setSidebar(!sidebar)
    }
  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-6">
        <div className={`fixed lg:static top-0 z-50 bg-white ${sidebar ? "-left-0" : "-left-full"} w-[74%] lg:w-full md:w-[45%] 
        w-full h-full col-span-1 p-6 border-r transition-all`}>
            <div className="text-center p-6">
                <h1 className="font-bold tracking-[5px] text-lime-800">MART</h1>
            </div>
            <div className="flex flex-col justify-between h-[480px]">
                <nav>
                    <ul>
                        <li>
                            <a href="#home" className="flex items-center gap-1.5 hover:bg-lime-600 p-3 text-gray-400 hover:text-white rounded-lg
                        transition-colors font-semibold">
                                <TfiViewGrid />
                                Tablero
                            </a>
                        </li>
                        <li>
                            <a href="#home" className="flex items-center gap-2 hover:bg-lime-600 p-4 text-gray-400 hover:text-white rounded-lg
                        transition-colors font-semibold">
                                <TfiCheckBox />
                                Tareas
                            </a>
                        </li>
                        <li>
                            <a href="#home" className="flex items-center gap-2 hover:bg-lime-600 p-4 text-gray-400 hover:text-white rounded-lg
                        transition-colors font-semibold">
                                <TfiCalendar />
                                Horario
                            </a>
                        </li>
                        <li>
                            <a href="#home" className="flex items-center gap-2 hover:bg-lime-600 p-4 text-gray-400 hover:text-white rounded-lg
                        transition-colors font-semibold">
                                <TfiSaveAlt />
                                Historial
                            </a>
                        </li>
                    </ul>
                </nav>
                <div className="flex flex-col gap-3">
                    <div className="bg-lime-50 p-3 flex flex-col gap-3 rounded-3xl">
                        <h3 className="text-xl text-center">Hazte Premium</h3>
                        <p className="text-gray-500 text-center">Accede a muchas funcionalidades haciendote premium.</p>
                        <button className="bg-lime-600 text-white p-2 rounded-lg">Ser premium</button>
                    </div>
                    <a href="#home" className="flex items-center gap-2 hover:bg-lime-600 p-4 text-gray-400 hover:text-white rounded-lg
                        transition-colors font-semibold"> <TfiPowerOff /> Cerrar Sesión </a>
                </div>
            </div>
        </div>
        <button onClick={handleSidebar} className="block lg:hidden absolute bottom-4 right-4 bg-lime-600 p-2 text-white
        rounded-full text-2xl">{sidebar ? <TfiClose /> : <TfiMenu />}</button>
        <div className="col-span-5">
            <header className="flex flex-col md:flex-row gap-4 items-center justify-between p-5 w-full">
                <form className="w-full md:w-[40%] lg:w-[35%] order-1 md:order-none">
                    <div className="relative ">
                        <TfiSearch className="absolute left-2 top-3" />
                        <input type="text" className="bg-lime-50 py-2 pl-9 pr-6 outline-none rounded-lg w-full"  placeholder="Buscar horario" />
                    </div>
                </form>
                <nav className="w-full md:w-[60%] lg:w-[65%] flex justify-center md:justify-end">
                    <ul className="flex items-center gap-4">
                        <li>
                            <a href="#hom2" className="relative">
                                <TfiFlickrAlt className="absolute -right-1 -top-1 text-xs text-red-500" />
                                <TfiBell className="text-xl"  />
                            </a>
                        </li>
                        <li>
                            <a href="#hom2" className="flex items-center gap-2">
                                Jhon Torres
                                <TfiAngleDown />
                            </a>
                        </li>
                    </ul>
                </nav>
            </header>
            <div className="p-9 bg-lime-50">
                <div className="mb-6">
                    <h1 className="text-2xl font-semibold">Area de trabajo</h1>
                </div>
                <div className="grid grid-cols-4 gap-3 items-center mb-5 ">
                    <form className="col-span-2">
                        <div className="relative ">
                            <TfiSearch className="absolute left-2 top-3 text-lime-600" />
                            <input type="text" className="bg-white-50 py-2 pl-9 pr-6 outline-none rounded-lg w-full"  placeholder="Buscar tarea" />
                        </div>
                    </form>
                    <form className="col-span-1">
                        <div className="relative ">
                            <TfiSignal className="absolute left-2 top-3 text-lime-600" />
                            <select className="bg-white-50 py-2 pl-9 pr-6 outline-none rounded-lg w-full text-gray-400">
                                <option >Prioridad</option>
                            </select>
                        </div>
                    </form>
                    <form className="col-span-1">
                        <div className="relative ">
                            <TfiTime className="absolute left-2 top-3 text-lime-600" />
                            <input type="number" className="bg-white-50 py-2 pl-9 pr-6 outline-none rounded-lg w-full" step={30}  placeholder="Tiempo" />
                            {/*<span className="absolute text-sm right-3 top-1 bg-lime-500 text-white rounded-full py-1 px-[10px]">3</span>*/}
                        </div>
                    </form>
                </div>
                <div className="flex items-center gap-3">
                    <span className="bg-white flex items-center gap-2 py-3 px-5 pl-3 pr-4 rounded-full">
                        <button className="bg-lime-100 p-1 rounded-full text-lime-600 text-xs"><TfiClose /></button>
                        <span className="text-gray-600">Horario</span>
                    </span>
                    <span className="bg-white flex items-center gap-2 py-3 px-5 pl-3 pr-4 rounded-full">
                        <button className="bg-lime-100 p-1 rounded-full text-lime-600 text-xs"><TfiClose /></button>
                        <span className="text-gray-600">30</span>
                    </span>
                    <span className="bg-white flex items-center gap-2 py-3 px-5 pl-3 pr-4 rounded-full">
                        <button className="bg-lime-100 p-1 rounded-full text-lime-600 text-xs"><TfiClose /></button>
                        <span className="text-gray-600">Ejercicio</span>
                    </span>
                     <button className="text-lime-500 ml-4">Borrar busquedas</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default App
