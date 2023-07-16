'use client';
import ThemeContext from '../context/ThemeContext';
import { useContext, useState, useEffect } from 'react';
import React from 'react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { MdOutlineFlashlightOff, MdOutlineFlashlightOn } from 'react-icons/md';

function Header() {
  const theme = useContext(ThemeContext);

  const [themeClasses, setThemeClasses] = useState('h1-dark');

  const [bgHeader, setBgHeader] = useState('headerdark');

  const [ligth, setlLigth] = useState('dark');

  useEffect(() => {

    setBgHeader(theme.color === 'light' ? 'headerlight' : 'headerdark');

    setlLigth(theme.color === 'light' ? 'light' : 'dark');

    setThemeClasses(theme.color === 'light' ? 'h1-light' : 'h1-dark');

  }, [theme.color]);

  return (
    <header className={`${bgHeader}`}>
      <div className="flex flex-col items-center justify-center w-full px-4 sm:flex-row">
        <h1 className={`${themeClasses}`}
          style={{
            boxShadow: '0px 0px 10px rgba(137, 71, 205, 0.5)',
            padding: '0.3em',
            borderRadius: '0.5em',
            whiteSpace: 'nowrap'
          }}
        >
          Pablo Landim de Sá
        </h1>

        <span className="span">
          <span className="
                        ml-2 text-transparent 
                        bg-gradient-to-br 
                        from-[#4158D0] 
                        via-[#C850C0] 
                        via-46% 
                        to-purple-500 
                        bg-clip-text"
          >Conecte-se</span>
          <a href="https://www.linkedin.com/in/pablolandimdesadev/" target="_blank"rel="noreferrer"
          className="mx-2 text-xl text-purple-600 hover:text-blue-600"
          >
            <BsLinkedin />
          </a>
          <a href="https://github.com/PabloLSa" target="_blank" rel="noreferrer"
          className="mx-2 text-xl text-purple-600 hover:text-gray-600"
          >
            <BsGithub />
          </a>
        </span>
        <div className="flex items-center mt-2 ml-5">
          <span className={`${ligth}`}>
            <button onClick={() => theme.toogleTheme()}>
              {theme.color === 'dark' ? <MdOutlineFlashlightOff /> : <MdOutlineFlashlightOn />}
            </button>
          </span>
        </div>
      </div>
    </header>
  );
}

export default Header;
