'use client';

import { CheckCircle } from 'lucide-react';

interface NotificationToastProps {
  message: string;
  isVisible: boolean;
}

export function NotificationToast({ message, isVisible }: NotificationToastProps) {
  if (!message) return null;

  return (
    <div
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 px-4 ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 -translate-y-4 pointer-events-none'
      }`}
    >
      <div className="bg-green-100 dark:bg-green-950 border-2 border-green-300 dark:border-green-800 text-green-800 dark:text-green-200 px-4 sm:px-6 py-2 sm:py-3 rounded-lg shadow-lg flex items-center gap-2 max-w-md">
        <CheckCircle className="w-5 h-5 flex-shrink-0" />
        <p className="font-medium text-xs sm:text-sm">{message}</p>
      </div>
    </div>
  );
}
