import React from 'react';
import { TASK_COLORS, TaskColor } from '../../types/task';

interface ColorPickerProps {
  value: TaskColor;
  onChange: (color: TaskColor) => void;
}

export function ColorPicker({ value, onChange }: ColorPickerProps) {
  return (
    <div className="flex gap-2" role="radiogroup" aria-label="Seleccionar color">
      {TASK_COLORS.map((color) => (
        <button
          key={color}
          type="button"
          role="radio"
          aria-checked={value === color}
          aria-label={`Color ${color}`}
          className={`w-6 h-6 rounded-full flex items-center justify-center cursor-pointer bg-${color}-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-purple-500`}
          onClick={() => onChange(color)}
        >
          {value === color && (
            <span className="text-white text-xs font-bold">✓</span>
          )}
        </button>
      ))}
    </div>
  );
}
