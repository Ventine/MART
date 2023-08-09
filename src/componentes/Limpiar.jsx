import React ,{useState} from 'react';
import {TfiCheck, TfiVector} from "react-icons/tfi";

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
                                        focus:outline-none mr-1 mb-1 mt-5 ease-linear transition-all duration-150 border-none"  onClick={() => setShowModal(true)}
            >
                Limpiar horario
            </button>
        {showModal ? (<>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none mx-auto my-auto
                        focus:outline-none transition-all duration-15 bg-white w-1/3 h-2/5">
                <div className="relative w-auto my-6 mx-auto">
                    <div
                        className="flex items-center p-4 border-b border-solid border-purple-200 rounded-t">
                        <TfiVector className="font-bold tracking-[5px] text-purple-800 m-1 text-2xl"/>
                        <h3 className="text-3xl font-semibold text-purple-600 ml-0">
                            MART
                        </h3>
                    </div>

                    <div>
                        <h1 className="text-2xl font-bold text-green-600 m-4">Confirmar Borrado</h1>
                    </div>

                    <h3 className="text-lg text-gray-500 font-semibold ml-1">¿Estás seguro que deseas borrar los datos almacenados?</h3>
                    <button className="bg-red-500 hover:bg-red-600 text-white active:bg-emerald-400-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none
                                        focus:outline-none mr-1 mb-1 mt-5 ease-linear transition-all duration-150 border-none" onClick={() => setShowModal(false)}>
                        Cancelar
                    </button>
                    <button className="bg-green-500 hover:bg-green-600 text-white active:bg-lime-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none
                                        focus:outline-none mr-1 mb-1 mt-5 mr-10 ease-linear transition-all duration-150" onClick={handleConfirm}>
                        Borrar
                    </button>
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
