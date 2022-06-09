import { useState } from 'react'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  const [breedId, setBreedId] = useState('');

  return <Component {...pageProps} 
    breedId={breedId}
    setBreedId={setBreedId}
  />
}

export default MyApp
