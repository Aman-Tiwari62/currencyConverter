import {useState, useEffect} from 'react'

const accessKey = import.meta.env.VITE_ACCESS_KEY
const baseURL = "https://api.exchangeratesapi.io/v1"

function useConvert() {
  const [result, setResult] = useState(0);
  const [input, setInput] = useState('');
  const [from, setFrom] = useState('USD');
  const [to, setTo] = useState('INR');

  console.log("useConvert hook rendering....")

  const convert = async () => {
    const url = `${baseURL}/latest?access_key=${accessKey}&symbols=${from},${to}`;
    const response = await fetch(url);
    const data = await response.json();
    let exchangeRate = data.rates[to] / data.rates[from];
    console.log(`Exchange rate from ${from} to ${to}:`, exchangeRate);
    console.log(`Input value: ${input}`);
    const newResult = Number(input) * exchangeRate;
    console.log(`Converted result: ${newResult}`);
    setResult(newResult);
    console.log('Fetched exchange rates:', data);
  }

  return {result, input,  from, to, setResult, setInput, setFrom, setTo, convert};
}

export default useConvert;