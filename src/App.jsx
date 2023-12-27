import { useState } from 'react'
import './App.css'

import Header from './components/Header'
import Dictionary from './components/Dictionary'

function App() {
  const [fontSyle, setFontStyle] = useState('Sans Serif')
  const [isDarkMode, setIsDarkMode] = useState(false)


  return (
    <>
     <Header fontSelected={fontSyle} onChangeFont={setFontStyle} mode={isDarkMode} modeHandler={setIsDarkMode}/>
     <Dictionary/>
    </>
  )
}

export default App
