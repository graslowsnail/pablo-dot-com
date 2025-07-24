"use client"

export default function LoadingSpinner() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none">
      <div className="bg-gray-100 border border-gray-300 p-4 flex items-center gap-3 shadow-lg">
        <div className="w-4 h-4 border-2 border-gray-300 border-t-black rounded-full animate-spin"></div>
        <div className="font-mono text-sm text-black">Loading...</div>
      </div>
    </div>
  );
} 