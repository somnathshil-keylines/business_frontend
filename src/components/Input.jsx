// import React from 'react'

// function Input(label, placeholder, type, onChange) {
//   return (
//     <>
//       <label>{label}</label>
//       <input
//         type={type}
//         placeholder={placeholder}
//         onChange={onChange}
//         className="
//         w-full
//         px-4
//         py-2.5
//         border
//         border-gray-300
//         rounded-lg
//         text-gray-800
//         placeholder-gray-400
//         focus:outline-none
//         focus:ring-2
//         focus:ring-indigo-500
//         focus:border-indigo-500
//         transition
//         "
//       />
//     </>
//   );
// }

// export default Input




function Input({ label, placeholder, value, onChange, type = "text", options = [], }) {
  return (
    <div className="mb-4">
      <label className="block mb-1 font-medium capitalize">{label}</label>

      {type === "select" ? (
        <select
          value={value}
          onChange={onChange}
          className="w-full px-3 py-2 border rounded"
        >
          <option value="">{placeholder || "Select an option"}</option>

          {options.map((opt, index) => (
            <option key={index} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="w-full px-3 py-2 border rounded"
        />
      )}
    </div>
  );
}

export default Input;
