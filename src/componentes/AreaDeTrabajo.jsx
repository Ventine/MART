import {TfiAngleDown, TfiBasketball, TfiBook, TfiClose, TfiSearch, TfiSignal, TfiTime} from "react-icons/tfi";

function AreaDeTrabajo () {
    return(
    <div className="p-6 md:p-8 lg:p-12 bg-lime-50"> {/*Dashboard*/}
        <div className="mb-6">
            <h1 className="text-2xl font-semibold text-blue-600">Area de trabajo</h1>
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
    )
}

export default AreaDeTrabajo;