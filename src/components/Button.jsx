import React from 'react'

function Button({text, type, onclick}) {
  return (
    <button
      type={type}
      onClick={onclick}
      className="
    px-6 py-2.5
    bg-indigo-600
    text-white
    rounded-lg
    font-semibold
    shadow-md
    hover:bg-indigo-700
    focus:outline-none
    focus:ring-2
    focus:ring-indigo-400
    active:scale-95
    transition-all
    duration-200"
    >
      {text}
    </button>
  );
}

export default Button
