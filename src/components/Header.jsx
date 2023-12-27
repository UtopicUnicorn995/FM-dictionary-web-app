import { useState } from 'react'
import './Header.css'
import pageLogo from '../assets/images/logo.svg'
import moonIcon from '../assets/images/icon-moon.svg'
import moonIconActive from '../assets/images/icon-moon-active.svg'

export default function Header({fontSelected, onChangeFont, mode, modeHandler}) {
    const [showDropdown, setShowDropdown] = useState(false)

  return (
    <header>
      <img src={pageLogo} alt="" className="icon" />
      <div className="header-group">
        <div className={`dropdown ${showDropdown && 'active'}`}>
          <button onClick={() => setShowDropdown(prev => !prev)}>
            {fontSelected}
          </button>
          <ul className="dropdown-menu">
            <li onClick={() => onChangeFont('Sans Serif')}>
                Sans Serif
            </li>
            <li onClick={() => onChangeFont('Serif')}>
                Serif
            </li>
            <li onClick={() => onChangeFont('Mono')}>
                Mono
            </li>
          </ul>
        </div>
        <div className="divider"></div>
        <div className="color-mode">
            <div className={`switch-container ${mode && 'dark'}`} onClick={() => modeHandler(prev => !prev)}>
                <div className="switch"></div>
            </div>
            <img src={mode ? moonIconActive : moonIcon} className='moon' alt="" />
        </div>
      </div>
    </header>
  );
}
