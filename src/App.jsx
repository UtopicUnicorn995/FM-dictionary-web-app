import { useState, useEffect } from 'react'
import Header from './components/Header'
import Dictionary from './components/Dictionary'

const root = document.getElementById('root')

function App() {
  const [fontStyle, setFontStyle] = useState('Sans Serif')
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    console.log('it activates again')
    root.className = fontStyle.split(" ").join('').toLowerCase();
    if(isDarkMode){
      root.classList.add('dark')
    }else{
      root.classList.remove('dark')
    }
    
  },  [fontStyle, isDarkMode]);
  console.log(isDarkMode)

  return (
    <>
    <main className="main-container">
     <Header fontSelected={fontStyle} onChangeFont={setFontStyle} mode={isDarkMode} modeHandler={setIsDarkMode}/>
     <Dictionary/>
    </main>
    </>
  )
}

export default App
