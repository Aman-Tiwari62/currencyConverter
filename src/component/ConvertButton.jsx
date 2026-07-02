import React from 'react'

function ConvertButton({convert, from, to}) {
  return (
    <button 
    onClick={convert} 
    className="
    bg-blue-500 
    hover:bg-blue-700 
    text-white  
    text-3xl 
    font-bold 
    py-2 
    px-4 
    rounded-lg 
    h-18 
    w-150 
    mt-6">
    Convert {from} to {to}
    </button>
  )
}

export default ConvertButton
