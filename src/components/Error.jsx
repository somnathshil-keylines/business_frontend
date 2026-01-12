import React from 'react'

function Error() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900">
      <div className="flex flex-col items-center space-y-4">
        {/* Text */}
        <h1 className="text-gray-600 text-4xl font-medium">
          Something went wrong ...
        </h1>
      </div>
    </div>
  );
}

export default Error