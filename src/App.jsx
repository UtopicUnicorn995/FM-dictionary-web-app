import { useState, useEffect } from 'react'
import Header from './components/Header'
import Dictionary from './components/Dictionary'

function App() {
  const [fontStyle, setFontStyle] = useState('Sans Serif')
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    document.getElementById('root').className = fontStyle.split(" ").join('').toLowerCase();
  }, [fontStyle]);

  return (
    <>
     <Header fontSelected={fontStyle} onChangeFont={setFontStyle} mode={isDarkMode} modeHandler={setIsDarkMode}/>
     <Dictionary/>
    </>
  )
}

export default App
