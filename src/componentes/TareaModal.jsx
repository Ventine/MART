import React, { useState } from 'react';
import { Modal } from '../components/ui/Modal';
import { TaskForm } from '../components/tasks/TaskForm';
import { Toast } from '../components/ui/Toast';
import { Button } from '../components/ui/Button';
import { useTaskStore } from '../store/useTaskStore';
import { formatDisplay } from '../utils/date';

function TareaModal({ isOpen, onClose, eventoSeleccionado, diaSelected }) {
  const deleteTask = useTaskStore((s) => s.deleteTask);
  const updateTask = useTaskStore((s) => s.updateTask);
  const [toast, setToast] = useState(null);

  const handleDelete = () => {
    if (eventoSeleccionado) {
      deleteTask(eventoSeleccionado.id);
      setToast({ message: 'Tarea eliminada', type: 'success' });
      setTimeout(onClose, 1000);
    }
  };

  const handleComplete = () => {
    if (eventoSeleccionado) {
      updateTask(eventoSeleccionado.id, {
        titulo: `\u221A ${eventoSeleccionado.titulo}`,
        completed: true,
        color: 'green',
      });
      setToast({ message: 'Tarea finalizada', type: 'success' });
      setTimeout(onClose, 1000);
    }
  };

  const handleSubmit = () => {
    setToast({ message: eventoSeleccionado ? 'Tarea actualizada' : 'Tarea creada', type: 'success' });
    setTimeout(onClose, 1000);
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} title={formatDisplay(diaSelected)}>
        <div className="mt-2">
          <p className="text-sm text-gray-500 mb-4">
            {formatDisplay(diaSelected)}
          </p>
          <TaskForm
            initialData={eventoSeleccionado}
            selectedDay={diaSelected}
            onSubmit={handleSubmit}
            onCancel={onClose}
            mode={eventoSeleccionado ? 'edit' : 'create'}
          />
          {eventoSeleccionado && (
            <div className="flex gap-2 mt-4 pt-4 border-t">
              <Button variant="success" onClick={handleComplete}>
                Finalizar
              </Button>
              <Button variant="danger" onClick={handleDelete}>
                Eliminar
              </Button>
            </div>
          )}
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
}

export default TareaModal;
