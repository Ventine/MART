import React, { useState } from 'react';
import { Input } from '../ui/Input';
import { ColorPicker } from '../ui/ColorPicker';
import { Button } from '../ui/Button';
import { Task, TaskColor } from '../../types/task';
import { QUICK_TEMPLATES } from '../../types/task';
import { useTaskStore } from '../../store/useTaskStore';
import { today } from '../../utils/date';

interface TaskFormProps {
  initialData?: Partial<Task>;
  selectedDay?: string;
  onSubmit?: () => void;
  onCancel?: () => void;
  mode?: 'create' | 'edit';
}

export function TaskForm({ initialData, selectedDay, onSubmit, onCancel, mode = 'create' }: TaskFormProps) {
  const addTask = useTaskStore((s) => s.addTask);
  const updateTask = useTaskStore((s) => s.updateTask);

  const [titulo, setTitulo] = useState(initialData?.titulo ?? '');
  const [descripcion, setDescripcion] = useState(initialData?.descripcion ?? '');
  const [tiempo, setTiempo] = useState(initialData?.tiempo?.toString() ?? '');
  const [color, setColor] = useState<TaskColor>(initialData?.color ?? 'green');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const timeNum = parseInt(tiempo);
    if (!titulo.trim() || isNaN(timeNum) || timeNum <= 0) {
      setError('Completa todos los campos correctamente');
      return;
    }
    setError('');

    const dia = selectedDay || today();

    if (mode === 'edit' && initialData?.id) {
      updateTask(initialData.id, { titulo, descripcion, tiempo: timeNum, color, dia });
    } else {
      addTask({ titulo, descripcion, tiempo: timeNum, color, dia, order: 0 });
    }
    onSubmit?.();
  };

  const handleTemplate = (template: typeof QUICK_TEMPLATES[0]) => {
    setTitulo(template.titulo);
    setDescripcion(template.descripcion);
    setColor(template.color);
    setTiempo(template.tiempo.toString());
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <Input
        label="Tarea"
        placeholder="Escribe tarea"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
        required
      />
      <Input
        label="Descripción"
        placeholder="Escribe descripción"
        value={descripcion}
        onChange={(e) => setDescripcion(e.target.value)}
      />
      <Input
        label="Tiempo (min)"
        type="number"
        placeholder="Minutos"
        value={tiempo}
        onChange={(e) => setTiempo(e.target.value)}
        min={1}
        max={1000}
        required
      />
      <div>
        <label className="text-sm font-medium text-gray-700 mb-1 block">Color</label>
        <ColorPicker value={color} onChange={setColor} />
      </div>

      {error && <p className="text-red-500 text-sm" role="alert">{error}</p>}

      <div className="flex gap-2 justify-end mt-2">
        {onCancel && (
          <Button type="button" variant="secondary" onClick={onCancel}>
            Cancelar
          </Button>
        )}
        <Button type="submit" variant="primary">
          {mode === 'edit' ? 'Actualizar' : 'Guardar'}
        </Button>
      </div>

      {mode === 'create' && (
        <div className="flex flex-wrap gap-2 mt-2">
          {QUICK_TEMPLATES.map((tpl, i) => (
            <Button
              key={i}
              type="button"
              variant="secondary"
              size="sm"
              onClick={() => handleTemplate(tpl)}
            >
              {tpl.titulo}
            </Button>
          ))}
        </div>
      )}
    </form>
  );
}
