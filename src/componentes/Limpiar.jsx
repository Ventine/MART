import React, {useState} from 'react';
import {TfiCheck, TfiVector} from "react-icons/tfi";

//Boton y modal para limpiar las tareas del calendario
const Limpiar = () => {
    const [showAlert, setShowAlert] = React.useState(false);
    const [showModal, setShowModal] = React.useState(false);
    const [showAlertT, setShowAlertT] = useState(false);


    const handleConfirm = () => {
        localStorage.clear();
        setShowAlert(false);
        setShowAlertT(true);
        setTimeout(() => {
            setShowAlertT(false);
            window.location.href = '/';
        }, 1000);
    };

    const handleCancel = () => {
        setShowAlert(false);
    };

    return (
        <>
            <button
                className="bg-green-500 hover:bg-green-600 text-white active:bg-lime-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none
                                        focus:outline-none mr-1 mb-1 mt-5 ease-linear transition-all duration-150 border-none"
                onClick={() => setShowModal(true)}
            >
                Limpiar horario
            </button>
            {showModal ? (<>
                <div className="flex justify-center items-center fixed inset-0 z-50 outline-none m-auto
                        focus:outline-none transition-all duration-15 bg-white w-5/6 md:w-1/3 h-2/5 border border-4 ">
                    <div className="relative w-auto my-2 mx-auto ">
                        <div
                            className="flex items-center p-2 border-b border-solid border-purple-200 rounded-t">
                            <TfiVector className="font-bold tracking-[5px] text-purple-800 m-1 text-2xl"/>
                            <h3 className="text-3xl font-semibold text-purple-600 ml-5">
                                MART
                            </h3>
                        </div>

                        <div className="flex flex-col ">
                            <h1 className="lg:text-xl  md:text-lg font-bold text-green-600 m-4">Confirmar Borrado</h1>
                            <h3 className="text-black-500 ml-1 text-sm">¿Estás seguro que deseas borrar los datos
                                almacenados?</h3>
                        </div>
                        <div className="flex justify-center items-center">
                            <button className="bg-green-500 hover:bg-green-600 text-white active:bg-lime-600 font-bold uppercase text-sm lg:px-6 lg:py-3 px-2 py-2 rounded shadow hover:shadow-lg outline-none
                                        focus:outline-none m-5 ease-linear transition-all duration-150"
                                    onClick={handleConfirm}>
                                Borrar
                            </button>
                            <button className="bg-red-500 hover:bg-red-600 text-white active:bg-emerald-400-600 font-bold uppercase text-sm lg:px-6 lg:py-3 px-2 py-2 rounded shadow hover:shadow-lg outline-none
                                        focus:outline-none m-4 ease-linear transition-all duration-150 border-none"
                                    onClick={() => setShowModal(false)}>
                                Volver
                            </button>
                        </div>

                    </div>

                </div>
                {showAlertT && (
                    <div className="m-3 top-0 right-0 absolute p-4 bg-green-500 text-white rounded-lg shadow w-65 text-sm font-bold
                flex justify-center items-center z-50">
                        <TfiCheck className="text-3xl m-2 p-2 font-bold"/>
                        Se elimino el historial correctamente !!
                    </div>
                )}
                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>) : null}

        </>
    );
};

export default Limpiar;
