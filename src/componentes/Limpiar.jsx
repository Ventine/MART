import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {TfiVector} from "react-icons/tfi";

const Limpiar = () => {
    const [showAlert, setShowAlert] = React.useState(false);

    const handleClearLocalStorage = () => {
        setShowAlert(true);
    };

    const handleConfirm = () => {
        localStorage.clear();
        // O también puedes usar "localStorage.removeItem('nombreDeTuItem')" para eliminar un item específico.
        setShowAlert(false);
        window.location.reload();
    };

    const handleCancel = () => {
        setShowAlert(false);
    };

    return (
        <>
            <Button
                onClick={handleClearLocalStorage}
                className="bg-red-500 hover:bg-red-600 text-white active:bg-lime-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none
                                        focus:outline-none mr-1 mb-1 mt-5 ease-linear transition-all duration-150 border-none"            >
                Limpiar horario
            </Button>

            <Modal show={showAlert} onHide={handleCancel} className="mt-36">
                <div className="flex items-center justify-center m-1">
                    <TfiVector className="font-bold tracking-[5px] text-purple-800 m-1 text-2xl"/>
                    <h3 className="text-3xl font-semibold text-purple-600 ml-10">
                        MART
                    </h3>
                </div>
                <Modal.Header closeButton>
                    <Modal.Title>Confirmar Borrado</Modal.Title>
                </Modal.Header>
                <Modal.Body>¿Estás seguro que deseas borrar los datos almacenados?</Modal.Body>
                <Modal.Footer>
                    <Button className="bg-red-500 hover:bg-red-600 text-white active:bg-emerald-400-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none
                                        focus:outline-none mr-1 mb-1 mt-5 ease-linear transition-all duration-150 border-none" onClick={handleCancel}>
                        Cancelar
                    </Button>
                    <Button className="bg-blue-500 hover:bg-blue-600 text-white active:bg-lime-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none
                                        focus:outline-none mr-1 mb-1 mt-5 mr-10 ease-linear transition-all duration-150" onClick={handleConfirm}>
                        Borrar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default Limpiar;
