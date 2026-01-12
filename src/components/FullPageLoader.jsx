import React from "react";

function FullPageLoader() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900">
      <div className="flex flex-col items-center space-y-4">
        {/* Spinner */}
        <div className="w-14 h-14 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>

        {/* Text */}
        <p className="text-gray-600 text-sm font-medium">
          Loading, please wait...
        </p>
      </div>
    </div>
  );
}

export default FullPageLoader;
