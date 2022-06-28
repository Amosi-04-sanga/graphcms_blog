import '../styles/globals.css'
import Header from '../components/Header'
import { useEffect, useState } from 'react'


function MyApp({ Component, pageProps }) {
  const [mode, setMode] = useState("")
  useEffect(() => {
    const getMode = async () => {
      let currentMode = await window.localStorage.getItem('mode')
      if (currentMode === null) {
        currentMode = "light"
      }
      setMode(currentMode)
    }
    getMode()
  }, [])


  return (
    <>
      < Header />
      <div className="container">
        <Component {...pageProps} />
      </div>
    </>
  )
}

export default MyApp
