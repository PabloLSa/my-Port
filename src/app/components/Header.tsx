'use client';
import ThemeContext from '../context/ThemeContext';
import { useContext, useState, useEffect } from 'react';
import React from 'react';
import { FaReact, FaDocker } from 'react-icons/fa';
import { MdOutlineFlashlightOff, MdOutlineFlashlightOn } from 'react-icons/md';

// text-blue-15b8c6
// text-blue-500
function Header() {
  const theme = useContext(ThemeContext);
// console.log(theme);
  const [themeClasses, setThemeClasses] = useState('bg-gradient-to-r from-blue-500 to-blue-700 text-transparent bg-clip-text text-4xl font-bold text-center');
  const[bgHeader, setbgHeader] = useState('bg-stone-950 flex flex-col justify-center items-center py-5 w-full');

  useEffect(() =>{
    setbgHeader(
      theme.color === 'light'
      ? 'bg-gray-800 opacity-90 flex flex-col justify-center py-5 items-center w-full'
      : 'bg-stone-950 flex flex-col justify-center items-center py-5 w-full' 
    )
  },[theme.color])
  
  useEffect(() => {
    setThemeClasses(
      theme.color === 'light'
        ? 'text-blue-500 text-4xl font-bold text-center'
        : 'bg-gradient-to-r from-blue-500 to-blue-700 text-transparent bg-clip-text text-4xl font-bold text-center'
    );
  }, [theme.color]);
  

  // console.log(theme);
  return (

    <header className={bgHeader}>
      <div className="flex flex-col items-center justify-center w-full px-4 sm:flex-row">
        <h1 className={themeClasses}
          style={{
            // textShadow: '0px 2px 4px rgba(0, 0, 0, 0.3)',
            boxShadow: '0px 0px 10px rgba(0, 191, 255, 0.5)',
            padding: '0.3em',
            borderRadius: '0.5em',
            whiteSpace: 'nowrap'
          }}>
          Pablo Landim de Sá
        </h1>
        <div className="flex items-center mt-2">
          <span className='flex items-center mx-6 mr-4 text-xl text-white hover:text-blue-500'>
            <a href='https://react.dev/'
              target="_blank" rel="noreferrer">
              <FaReact />
            </a>
          </span>
          <span className='flex items-center mx-6 mr-4 text-xl text-white hover:text-blue-950'>
            <a href='https://docs.docker.com/'
              target="_blank" rel="noreferrer">
              <FaDocker />
            </a>
          </span>
          <span className='flex items-center mx-6 mr-4 text-xl text-white hover:text-blue-500'>
            <button
              onClick={() => theme.toogleTheme()}>
                {theme.color === "dark" ? <MdOutlineFlashlightOff /> : 
                <MdOutlineFlashlightOn/>}</button>
          </span>
        </div>
      </div>
    </header>








  );
}

export default Header;
