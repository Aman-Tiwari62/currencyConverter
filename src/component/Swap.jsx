import React from 'react'

function Swap({from,to, setFrom, setTo, setInput, setResult}) {
    function handleSwap() {
        setFrom(to);
        setTo(from);
        setInput(0); // Reset input value when currencies are swapped
        setResult(0); // Reset result value when currencies are swapped
    }
  return (
    <button 
    onClick={handleSwap}
    className="
        absolute
        left-1/2
        top-1/2
        -translate-x-1/2
        -translate-y-1/2
        z-10
        bg-blue-500
        hover:bg-blue-700
        text-white
        px-5
        py-2
        rounded-lg
        font-bold
        shadow-lg">
    swap
    </button>
  )
}

export default Swap
