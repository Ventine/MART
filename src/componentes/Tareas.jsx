import React, { useState } from 'react';
import { TaskForm } from '../components/tasks/TaskForm';
import { Toast } from '../components/ui/Toast';

function Tareas() {
  const [toast, setToast] = useState(null);

  const handleSubmit = () => {
    setToast({ message: 'Tarea creada exitosamente', type: 'success' });
  };

  return (
    <div className="mt-24 w-full fixed left-0 top-0 flex flex-col justify-center items-center relative">
      <div className="bg-white rounded-lg shadow-xl w-full md:w-1/2 p-4">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Crear Tarea</h2>
        <TaskForm onSubmit={handleSubmit} />
      </div>
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </div>
  );
}

export default Tareas;
