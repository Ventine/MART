import React from "react";

export default function Premium() {
    const [showModal, setShowModal] = React.useState(false);
    return (
        <>
            <button
                className="bg-pink-500 hover:bg-pink-600 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded
                shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setShowModal(true)}
            >
                Hazte Premium
            </button>
            {showModal ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none
                        focus:outline-none transition-all duration-15"
                    >
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                    <h3 className="text-3xl font-semibold text-purple-600 ml-10">
                                         Premium
                                    </h3>
                                    <button
                                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => setShowModal(false)}
                                    >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                                    </button>
                                </div>
                                {/*body*/}
                                <div className="relative p-4 flex-auto">
                                    <div className="flex justify-center m-3">
                                        <div className="block p-2 rounded-lg shadow-lg bg-white max-w-sm">
                                            <h5 className="text-purple-900 text-xl leading-tight font-medium mb-2">1 mes - 10.000 COP</h5>
                                            <p className="text-gray-700 text-base mb-4">
                                                15 Personalizaciones y descarga en formato PDF y EXCEL.
                                            </p>
                                            <button type="button"
                                                    className=" inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg
                                                    focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out">Comprar</button>
                                        </div>
                                    </div>
                                    <div className="flex justify-center m-3">
                                        <div className="block p-2 rounded-lg shadow-lg bg-white max-w-sm">
                                            <h5 className="text-amber-900 text-xl leading-tight font-medium mb-2">6 meses - 50.000 COP</h5>
                                            <p className="text-gray-700 text-base mb-4">
                                                80 Personalizaciones y descarga en formato PDF, XML, DOC y EXCEL.
                                            </p>
                                            <button type="button"
                                                    className=" inline-block px-6 py-2.5 bg-amber-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-amber-700 hover:shadow-lg focus:bg-amber-700 focus:shadow-lg
                                                    focus:outline-none focus:ring-0 active:bg-amber-800 active:shadow-lg transition duration-150 ease-in-out">Comprar</button>
                                        </div>
                                    </div>
                                    <div className="flex justify-center m-3">
                                        <div className="block p-2 rounded-lg shadow-lg bg-white max-w-sm">
                                            <h5 className="text-emerald-900 text-xl leading-tight font-medium mb-2">1 año - 90.000 COP</h5>
                                            <p className="text-gray-700 text-base mb-4">
                                                Ilimitadas Personalizaciones y descarga en formato PDF, JPG, PNG, XML, DOC y EXCEL.
                                            </p>
                                            <button type="button"
                                                    className=" inline-block px-6 py-2.5 bg-emerald-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-emerald-700 hover:shadow-lg focus:bg-emerald-700 focus:shadow-lg
                                                    focus:outline-none focus:ring-0 active:bg-emerald-800 active:shadow-lg transition duration-150 ease-in-out">Comprar</button>
                                        </div>
                                    </div>
                                </div>
                                {/*footer*/}
                                <div className="flex items-center justify-center p-6 border-t border-solid border-slate-200 rounded-b">
                                    <button
                                        className="bg-red-500 hover:bg-red-600 text-white active:bg-lime-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none
                                        focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 "
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Volver
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