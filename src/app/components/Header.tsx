'use client';
import ThemeContext from '../context/ThemeContext';
import { useContext, useState, useEffect } from 'react';
import React from 'react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { MdOutlineFlashlightOff, MdOutlineFlashlightOn } from 'react-icons/md';

function Header() {
  const theme = useContext(ThemeContext);

  const [themeClasses, setThemeClasses] = useState(
    'text-white font-sans font-bold text-center sm:text-4xl'
  );
  const [bgHeader, setBgHeader] = useState(
    'bg-zinc-900 flex flex-col justify-center items-center py-5 w-full'
  );
  const [ligth, setlLigth] = useState(
    'text-white hover:text-purple-700'
  );

  useEffect(() => {
    setBgHeader(
      theme.color === 'light'
        ? 'bg-gradient-to-tl from-green-300 via-green-200 via-80% to-green-100'
        : 'bg-zinc-900' 
    );
    setlLigth(
      theme.color === 'light'
        ? 'text-blue-700'
        : 'text-white' 
    );
    setThemeClasses(
      theme.color === 'light'
        ? 'text-blue-700'
        : 'text-white' 
    );
  }, [theme.color]);

  return (
    <header className={`flex flex-col justify-center py-5 items-center w-full ${bgHeader}`}>
      <div className="flex flex-col items-center justify-center w-full px-4 sm:flex-row">
        <h1
          className={`text-3xl sm:text-4xl font-bold text-center font-sans ${themeClasses}`}
          style={{
            boxShadow: '0px 0px 10px rgba(137, 71, 205, 0.5)',
            padding: '0.3em',
            borderRadius: '0.5em',
            whiteSpace: 'nowrap'
          }}
        >
          Pablo Landim de Sá
        </h1>
       
        <span className="flex items-center mt-2 ml-4 mr-1 font-sans text-xl font-bold border-purple-500 hover:border rounded-xl">
          <span className='ml-2 text-transparent bg-gradient-to-br from-[#4158D0] via-[#C850C0] via-46% to-purple-500 bg-clip-text'>Conecte-se</span>
          <a
            href="https://www.linkedin.com/in/pablolandimdesadev/"
            target="_blank"
            rel="noreferrer"
            className="mx-2 text-xl text-purple-600 hover:text-blue-600"
          >
            <BsLinkedin />
          </a>
          <a
            href="https://github.com/PabloLSa"
            target="_blank"
            rel="noreferrer"
            className="mx-2 text-xl text-purple-600 hover:text-gray-600"
          >
            <BsGithub />
          </a>
        </span>
        <div className="flex items-center mt-2 ml-5">
          <span className={`flex items-center mx-6 ml-4 text-3xl ${ligth} hover:text-purple-600`}>
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
