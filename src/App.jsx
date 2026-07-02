import bgImage from './assets/bg.jpg'
import useSymbols from './hooks/useSymbols'
import useConvert from './hooks/useConvert'
import { ConvertButton, InputBox, Swap } from './component/index.js'

const App = () => {
  console.log("App rendering....")

  const {input, result, from, to, setInput, setResult, setFrom, setTo, convert} = useConvert();
  const [symbols, loading, error] = useSymbols();

  console.log('Symbols state:', symbols);
  
  console.log('App returning....')

  return (

    // THIS  DIV COVERS THE FULL SCREEN AND SETS THE BACKGROUND IMAGE.
    <div className=" min-h-screen bg-no-repeat bg-cover bg-center"
    style={{
      backgroundImage: `url(${bgImage})`,
    }}>

      {/* THIS DIV IS A SEMI-TRANSPARENT OVERLAY THAT COVERS THE ENTIRE SCREEN. */}
      <div className="min-h-screen bg-black/60 flex flex-col items-center gap-6">
          <h1 className='text-5xl font-bold text-white mt-8'>Currency Converter</h1>
          <div className="bg-white/40 p-8 rounded-lg shadow-lg mt-8">
              <div className="flex flex-col gap-3 relative">

                <InputBox 
                label="From" 
                symbols={symbols} 
                input={input} 
                setInput={setInput} 
                setResult={setResult}
                from={from} 
                setFrom={setFrom} 
                disabled={false} />

                <Swap from={from} to={to} setFrom={setFrom} setTo={setTo} setInput={setInput} setResult={setResult} />

                <InputBox 
                label="To" 
                symbols={symbols} 
                input={result} 
                setInput={setResult} 
                setResult={setInput}
                from={to} 
                setFrom={setTo}
                disableInput={true} />

              </div>
              <ConvertButton convert={convert} from={from} to={to} />
          </div>
      </div>
    </div>
  )
}

export default App

