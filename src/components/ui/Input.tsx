import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export function Input({ label, error, id, className = '', ...props }: InputProps) {
  const inputId = id || props.name;
  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label htmlFor={inputId} className="text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <input
        id={inputId}
        className={`p-2 border-0 text-gray-600 text-xl w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-600 ${error ? 'border-red-500' : ''} ${className}`}
        aria-describedby={error ? `${inputId}-error` : undefined}
        {...props}
      />
      {error && (
        <p id={`${inputId}-error`} className="text-red-500 text-sm" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
