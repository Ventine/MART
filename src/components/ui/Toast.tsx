import React, { useEffect, useState } from 'react';

interface ToastProps {
  message: string;
  type?: 'success' | 'error';
  onClose: () => void;
}

export function Toast({ message, type = 'success', onClose }: ToastProps) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      onClose();
    }, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  if (!visible) return null;

  const bgColor = type === 'success' ? 'bg-green-500' : 'bg-red-500';

  return (
    <div
      role="status"
      aria-live="polite"
      className={`fixed top-4 right-4 z-50 p-4 ${bgColor} text-white rounded-lg shadow-lg text-sm font-bold flex items-center gap-2`}
    >
      {message}
    </div>
  );
}
