import React, {useState} from 'react';
import {TfiVector} from "react-icons/tfi";

function Buzon() {
    const [showModal, setShowModal] = React.useState(false);
    const [satisfaccion, setSatisfaccion] = useState('');
    const [comentario, setComentario] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Aquí puedes enviar los datos de la encuesta a tu backend o realizar cualquier otra acción
        console.log('Satisfacción: ', satisfaccion);
        console.log('Comentario: ', comentario);
    };
    return (<>
        {/*Premium*/}
        <button
            className="bg-pink-500 hover:bg-pink-600 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded
                shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
            onClick={() => setShowModal(true)}
        >
            Enviar sugerencia
        </button>
        {showModal ? (<>
            <div
                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none
                        focus:outline-none transition-all duration-15"
            >
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                    <div
                        className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        <div
                            className="flex items-center justify-center p-2 border-b border-solid border-purple-200 rounded-t">
                            <TfiVector className="font-bold tracking-[5px] text-purple-800 m-1 text-2xl"/>
                            <h3 className="text-3xl font-semibold text-purple-600 ml-10">
                                MART
                            </h3>
                            <button
                                className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                onClick={() => setShowModal(false)}
                            >
                    <span
                        className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                            </button>
                        </div>
                        <div className="bg-green-100 flex items-center justify-center ">
                            <div className="bg-white w-96 p-6 rounded-lg shadow-lg border-b border-solid border-purple-200 rounded-t">
                                <h1 className="text-2xl font-bold text-green-600 mb-4">Buzón de sugerencia</h1>
                                <form onSubmit={handleSubmit}>
                                    <label className="text-black-500 mb-2 block text-lg">
                                        ¿Cómo calificarías tu nivel de satisfacción?
                                        <select
                                            className="block w-full p-2 border border-purple-600 rounded-md"
                                            value={satisfaccion}
                                            onChange={(e) => setSatisfaccion(e.target.value)}
                                        >
                                            <option value="">Selecciona una opción</option>
                                            <option value="muy-satisfecho">Muy satisfecho</option>
                                            <option value="satisfecho">Satisfecho</option>
                                            <option value="neutral">Neutral</option>
                                            <option value="insatisfecho">Insatisfecho</option>
                                            <option value="muy-insatisfecho">Muy insatisfecho</option>
                                        </select>
                                    </label>
                                    <label className="text-black-500 mt-4 block text-lg">
                                        ¿Algún comentario adicional?
                                        <textarea
                                            className="block w-full p-2 border border-purple-600 rounded-md"
                                            value={comentario}
                                            onChange={(e) => setComentario(e.target.value)}
                                            placeholder="Escribe aquí tu comentario..."
                                        />
                                    </label>
                                    <div className="flex items-center justify-center">
                                        <button
                                            type="button" onClick={() => setShowModal(false)}
                                            className="bg-green-500 hover:bg-green-600 text-white active:bg-lime-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none
                                        focus:outline-none mr-1 mb-1 mt-5 mr-10 ease-linear transition-all duration-150"
                                        >
                                            Enviar
                                        </button>
                                        <button
                                            className="bg-red-500 hover:bg-red-600 text-white active:bg-lime-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none
                                        focus:outline-none mr-1 mb-1 mt-5 ease-linear transition-all duration-150 "
                                            type="button"
                                            onClick={() => setShowModal(false)}
                                        >
                                            Volver
                                        </button>
                                    </div>

                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>) : null}
    </>);
}

export default Buzon;