import { useState, useEffect } from 'react';

const accessKey = "ed488ee80e1d8fc480ff84137f95ad96"
const baseURL = "https://api.exchangeratesapi.io/v1"

function useSymbols() {
  const [symbols, setSymbols] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  console.log("useSymbols hook rendering....")

  useEffect(() => {
    console.log('useEffect in useSymbols triggered');
    const fetchSymbols = async () => {
      try {
        const response = await fetch(`${baseURL}/symbols?access_key=${accessKey}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setSymbols(data.symbols);
      } catch (error) {
        console.log('Error fetching symbols:', error);
        setError("Oops! Something went wrong while fetching symbols.");
      } finally {
        setLoading(false);
      }
    };

    fetchSymbols();
  }, []);

  return [symbols, loading, error];
}

export default useSymbols;