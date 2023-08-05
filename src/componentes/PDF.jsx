import React from "react";
import {TfiCrown, TfiHummer, TfiFaceSmile, TfiLock, TfiHome, TfiLayoutCtaBtnRight} from "react-icons/tfi";

 function PDF() {
    const [showModal, setShowModal] = React.useState(false);
    return (
        <>
            {/*PDF*/}
            <button
                className="bg-red-500 hover:bg-red-600 text-white active:bg-lime-600 font-bold uppercase px-6 py-3 rounded-lg
                shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setShowModal(true)}
            >
                PDF
            </button>
            {showModal ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            <div
                                className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                <div
                                    className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                    <h3 className="text-3xl font-semibold text-purple-600 ml-3">
                                        Registrarse
                                    </h3>
                                    <button
                                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none
                                        font-semibold outline-none focus:outline-none  transition-all duration-15"
                                        onClick={() => setShowModal(false)}
                                    >
                    <span
                        className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                                    </button>
                                </div>
                                <div className="relative p-6 flex-auto">
                                    <div className="relative mt-3">
                                        <TfiFaceSmile className="absolute left-2 top-3"/>
                                        <input type="text"
                                               className="bg-purple-50 py-2 pl-9 pr-6 outline-none rounded-lg w-full required"
                                               placeholder="Nombre"/>
                                    </div>
                                    <div className="relative mt-3">
                                        <TfiLayoutCtaBtnRight className="absolute left-2 top-3"/>
                                        <input type="number"
                                               className="bg-purple-50 py-2 pl-9 pr-6 outline-none rounded-lg w-full required"
                                               placeholder="Correo"/>
                                    </div>
                                    <div className="relative mt-3">
                                        <TfiHome className="absolute left-2 top-3"/>
                                        <input type="email"
                                               className="bg-purple-50 py-2 pl-9 pr-6 outline-none rounded-lg w-full required"
                                               placeholder="Ciudad"/>
                                    </div>
                                    <div className="relative mt-3">
                                        <TfiHummer className="absolute left-2 top-3"/>
                                        <input type="password"
                                               className="bg-purple-50 py-2 pl-9 pr-6 outline-none rounded-lg w-full required"
                                               placeholder="Puesto de trabajo"/>
                                    </div>
                                    <div className="relative mt-3">
                                        <TfiLock className="absolute left-2 top-3"/>
                                        <input type="password"
                                               className="bg-purple-50 py-2 pl-9 pr-6 outline-none rounded-lg w-full required"
                                               placeholder="Contraseña"/>
                                    </div>
                                </div>
                                <div
                                    className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                    <button
                                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm
                                        outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Cancelar
                                    </button>
                                    <button
                                        className="bg-lime-500 hover:bg-lime-600 text-white active:bg-purple-600 font-bold
                                        uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none
                                        mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Registrarse
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>
    );
}

export default PDF;