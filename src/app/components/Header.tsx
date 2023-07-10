'use client';
import ThemeContext from '../context/ThemeContext';
import { useContext, useState, useEffect } from 'react';
import React from 'react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { MdOutlineFlashlightOff, MdOutlineFlashlightOn } from 'react-icons/md';

function Header() {
  const theme = useContext(ThemeContext);

  const [themeClasses, setThemeClasses] = useState(
    'bg-gradient-to-r from-blue-500 to-blue-700 text-transparent bg-clip-text text-3xl sm:text-4xl font-bold text-center'
  );
  const [bgHeader, setBgHeader] = useState(
    'bg-stone-950 flex flex-col justify-center items-center py-5 w-full'
  );

  useEffect(() => {
    setBgHeader(
      theme.color === 'light'
        ? 'bg-gray-800 opacity-90 flex flex-col justify-center py-5 items-center w-full'
        : 'bg-stone-950 flex flex-col justify-center items-center py-5 w-full'
    );
  }, [theme.color]);

  useEffect(() => {
    setThemeClasses(
      theme.color === 'light'
        ? 'text-blue-500 text-3xl sm:text-4xl font-bold text-center'
        : 'bg-gradient-to-r from-blue-500 to-blue-700 text-transparent bg-clip-text text-3xl sm:text-4xl font-bold text-center'
    );
  }, [theme.color]);

  return (
    <header className={bgHeader}>
      <div className="flex flex-col items-center justify-center w-full px-4 sm:flex-row">
        <h1
          className={themeClasses}
          style={{
            boxShadow: '0px 0px 10px rgba(0, 191, 255, 0.5)',
            padding: '0.3em',
            borderRadius: '0.5em',
            whiteSpace: 'nowrap'
          }}
        >
          Pablo Landim de Sá
        </h1>
        <div className="flex items-center mt-2">
          <span className="flex items-center mx-6 ml-4 text-xl text-white hover:text-blue-500">
            <button onClick={() => theme.toogleTheme()}>
              {theme.color === 'dark' ? <MdOutlineFlashlightOff /> : <MdOutlineFlashlightOn />}
            </button>
          </span>
        </div>
        <span className="flex items-center mt-2 mr-4 text-xl text-transparent bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text">
          <a>Conecte-se</a>
          <a
            href="https://www.linkedin.com/in/pablolandimdesadev/"
            target="_blank"
            rel="noreferrer"
            className="mx-2 text-xl text-white hover:text-blue-600"
          >
            <BsLinkedin />
          </a>
          <a
            href="https://github.com/PabloLSa"
            target="_blank"
            rel="noreferrer"
            className="mx-2 text-xl text-white hover:text-zinc-600"
          >
            <BsGithub />
          </a>
        </span>
      </div>
    </header>
  );
}

export default Header;
