
function InputBox({label, symbols, input, setInput,setResult, from, setFrom, disableInput}) {
    const handleChange = (e) => {
        setFrom(e.target.value);
        setInput(0); // Reset input value when currency type changes
        setResult(0); // Reset result value when currency type changes
    }
  return (
    <div className="bg-white h-30 w-150 rounded-lg">
         <div className="flex justify-between items-center px-4 py-2 text-gray-500 font-semibold text-2xl">
           <span>{label}</span>
           <span>Currency Type</span>
         </div>
         <div className="flex justify-between items-center px-4 py-2 text-gray-500 font-semibold text-2xl">
           <input
             type="text"
             placeholder="0"
             value={input}
             onChange={(e) => setInput(e.target.value)}
             className="flex-1 px-4 py-2 text-gray-700 border-0 rounded-lg focus:outline-none"
             disabled={disableInput}
           />
           <select 
             value={from}
             onChange={handleChange}
             className="w-25 px-4 py-2 mt-2 text-gray-700 rounded-lg focus:outline-none border-0 bg-gray-200"
           >
             {Object.entries(symbols).map(([key, value]) => (
               <option key={key} value={key}>
                 {key}
               </option>
             ))}
           </select>
         </div>
     </div>
  )
}

export default InputBox
