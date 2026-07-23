import React, { useState } from 'react';
import { TfiCheck, TfiVector } from "react-icons/tfi";
import { useTaskStore } from '../store/useTaskStore';
import { Button } from '../components/ui/Button';
import { Modal } from '../components/ui/Modal';
import { Toast } from '../components/ui/Toast';

const Limpiar = () => {
  const [showModal, setShowModal] = useState(false);
  const [toast, setToast] = useState(null);
  const clearAll = useTaskStore((s) => s.clearAll);

  const handleConfirm = () => {
    clearAll();
    setShowModal(false);
    setToast({ message: 'Todas las tareas fueron eliminadas', type: 'success' });
  };

  return (
    <>
      <Button
        variant="success"
        size="md"
        className="w-full mt-5"
        onClick={() => setShowModal(true)}
      >
        Limpiar horario
      </Button>

      <Modal isOpen={showModal} onClose={() => setShowModal(false)} title="Confirmar Borrado">
        <div className="flex flex-col gap-4">
          <p className="text-black text-sm">¿Estás seguro que deseas borrar todas las tareas?</p>
          <div className="flex justify-center gap-4">
            <Button variant="danger" onClick={handleConfirm}>
              Borrar
            </Button>
            <Button variant="secondary" onClick={() => setShowModal(false)}>
              Volver
            </Button>
          </div>
        </div>
      </Modal>

      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </>
  );
};

export default Limpiar;
