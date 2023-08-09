import {TfiCrown, TfiControlStop, TfiCheckBox, TfiRulerAlt, TfiFiles, TfiViewGrid, TfiCalendar} from "react-icons/tfi";
import React from "react";
import {Link} from "react-router-dom";

function AreaDeTrabajo() {

    return (
        <div className="h-[80vh] flex flex-col sm:flex-row ml-5">
            {/*Dashboard*/}
            <div className="flex items-center w-[80%] md:w-[55%] justify-center lg:p-6 p-4 ml-5 border-4 md:border-none border-purple-500
            rounded-lg bg-purple-50 md:bg-white
            ">
                <div className="flex flex-col gap-6">
                    <h1 className=" text-2xl md:text-5xl xl:text-6xl  font-bold leading-[3.5rem] md:leading-[5.5rem] xl:leading-[6.5rem] text-center">Generador
                        de horarios
                        <span
                            className="text-purple-600 py-2 px-4 border-4 border-purple-700 relative rounded-lg ml-2 bg-white">Automático</span>
                    </h1>
                    <p className="text-gray-500 text-lg mt-5 leading-[2.5rem]">Ingresa tus tareas, dales tiempo y
                        color, ahora espera la magia,
                        tendrás un horario elaborado para poder seguir tu día a día.</p>
                    <div className="flex items-center gap-5 m-auto flex-col sm:flex-row">
                        <Link to="/tareas">
                            <button
                                className="bg-purple-600 hover:bg-purple-800 text-white py-4 px-6 rounded-xl text-xl"
                            >Agregar tareas
                            </button>
                        </Link>
                        <Link to="/horario">
                            <button className="flex items-center gap-5 py-4 px-6 rounded-xl text-xl hover:bg-gray-100">
                                <TfiCrown className="bg-gray-200 text-purple-600 p-3 box-content rounded-full "/> <span
                                className="text-gray-500">
                            Mi horario</span></button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="hidden md:flex items-center justify-center w-[34%] relative ">
                <img src="img-01.svg" className="w-52 h-52 object-cover "/>
                <TfiControlStop className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-[380px] text-purple-600 bg-white p-[.5px]
            rounded-full -z-10 flex md:hidden lg:flex
             "/>
                <TfiCheckBox
                    className="w-20 h-20 object-cover text-purple-600 absolute top-[6%] right-[22%] rotate-6 hidden md:flex"/>
                <TfiRulerAlt
                    className="w-20 h-20 object-cover text-purple-600 absolute top-[12%] left-[13%] hidden md:flex"/>
                <TfiFiles
                    className="w-20 h-20 object-cover text-purple-600 absolute top-[81%] right-[36%] -rotate-3 hidden md:flex"/>

            </div>
        </div>
    )
}

export default AreaDeTrabajo;