import { TfiViewGrid, TfiCheckBox, TfiCalendar, TfiSaveAlt, TfiPowerOff, TfiMenu, TfiClose, TfiBell , TfiAngleDown, TfiSearch,
    TfiFlickrAlt, TfiSignal, TfiTime, TfiBasketball, TfiBook} from "react-icons/tfi";
import React from 'react'
import {useState} from "react";
import InicioSesion from "./componentes/InicioSesion.jsx";
import Registrarse from "./componentes/Registrarse.jsx";
import Premium from "./componentes/Premium.jsx";
function App() {
    const [sidebar, setSidebar] = useState(false);
    const handleSidebar = () =>{
        setSidebar(!sidebar)
    }
  return (
     <div className="min-h-screen grid grid-cols-1 lg:grid-cols-6">      {/*Pagina principal*/}
        {/*Menu derecho*/}
        <div className={`fixed lg:static top-0 z-50 bg-white ${sidebar ? "-left-0" : "-left-full"} w-[50%] lg:w-full md:w-[45%] 
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
                <div className="flex flex-col gap-3 mt-10">
                    <div className="bg-lime-50 p-3 flex flex-col gap-3 rounded-3xl">
                        <h3 className="text-xl text-center">Hazte Premium</h3>
                        <p className="text-gray-500 text-center">Accede a muchas funcionalidades haciendote premium.</p>
                        <Premium />
                         </div>
                    <InicioSesion />
                    <Registrarse />
                </div>
            </div>
        </div>
        <button onClick={handleSidebar} className="block lg:hidden fixed bottom-4 right-4 bg-lime-600 p-2 text-white
        rounded-full text-2xl z-40">{sidebar ? <TfiClose /> : <TfiMenu />}</button>
        <div className="col-span-5">
            {/*Menu superior*/}
            <header className="flex flex-col md:flex-row gap-4 items-center justify-between p-5 md:pl-8 lg:pl-10 w-full">
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
                                {/*<TfiAngleDown />*/}
                            </a>
                        </li>
                    </ul>
                </nav>
            </header>
            {/*Dashboard*/}
            <div className="p-6 md:p-8 lg:p-12 bg-lime-50">
                <div className="mb-6">
                    <h1 className="text-2xl font-semibold text-lime-600">Area de trabajo</h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-3 items-center mb-5 ">
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
                                <option >Alta</option>
                                <option >Media</option>
                                <option >Baja</option>
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
                <div className="flex items-center flex-wrap gap-3">
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
                     <button className="bg-white text-lime-600 ml-4">Borrar busquedas</button>
                </div>
                <div className="flex items-center justify-between mt-10 mb-5">
                    <p className="text-gray-500">Tienes <span className="text-lime-500 font-semibold">25</span> tareas pendientes.</p>
                    <p className="flex items-center gap-2 ">Ordenado por <span className="text-lime-500 font-semibold hover:cursor-pointer">
                        Fecha</span> <TfiAngleDown /> </p>
                </div>
                <div className="bg-white rounded-2xl p-7 flex flex-col md:flex-row gap-5 w-full shadow-lg border-2 border-transparent
                 hover:border-lime-600">
                    <div className="w-full md:w-[15%] flex items-center justify-between">
                        <TfiBasketball className="text-6xl bg-lime-100 text-lime-500 p-2 rounded-md"/>
                    </div>
                    <div className="w:full md:w-[65%]">
                        <h1 className="text-xl flex items-center gap-5 mb-2">Ejercicio
                            <span className="text-sm py-1 px-2 bg-red-100 text-red-600 font-bold">Alta</span>
                            <span className="text-sm py-1 px-2 bg-purple-100 text-purple-600 font-bold">60 minutos</span>
                        </h1>
                        <p className="text-gray-500">Jugar basketball</p>
                    </div>
                    <div className="w:full md:w-[20%]">
                        <h3 className="text-xl text-gray-500 mb-2">21/02/2023</h3>
                        <p className="text-gray-500">Martes</p>
                    </div>
                </div>
                <div className="bg-white rounded-2xl p-7 flex flex-col md:flex-row gap-5 w-full shadow-lg border-2 border-transparent
                 hover:border-lime-600 mt-5">
                    <div className="w-full md:w-[15%] flex items-center justify-between">
                        <TfiBook className="text-6xl bg-lime-100 text-lime-500 p-2 rounded-md"/>
                    </div>
                    <div className="w:full md:w-[65%]">
                        <h1 className="text-xl flex items-center gap-5 mb-2">Tarea
                            <span className="text-sm py-1 px-2 bg-blue-100 text-blue-600 font-bold">Media</span>
                            <span className="text-sm py-1 px-2 bg-purple-100 text-purple-600 font-bold">30 minutos</span>
                        </h1>
                        <p className="text-gray-500">Jugar basketball</p>
                    </div>
                    <div className="w:full md:w-[20%]">
                        <h3 className="text-xl text-gray-500 mb-2">22/02/2023</h3>
                        <p className="text-gray-500">Miercoles</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default App
