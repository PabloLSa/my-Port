'use client';
import Image from "next/image";
import ThemeContext from '../context/ThemeContext'
import { useContext, useEffect, useState } from 'react';

function Footer() {
  const theme = useContext(ThemeContext);
  const [themeDarkMode, setThemeDarkMode] = useState('setThemeDarkMode');
  const [footerDarkMode, setFooterDarkMode] = useState('footerDarkMode');

  useEffect(() => {
    setThemeDarkMode(
      theme.color === 'light'
        ? 'setThemeLightMode'
        : 'setThemeDarkMode'
    )
    setFooterDarkMode(
      theme.color === 'light'
        ? 'bg-purple-300 border-black text-black'
        : 'footerDarkMode'
    );
  }, [theme.color]);

  return (
    <footer className ={`${themeDarkMode}`}>
      <div className="flex items-center space-x-4">
        <div className="overflow-hidden rounded-full">
          <Image
            src="/pl.png"
            alt="Minha Foto"
            width={54}
            height={54}
          />
        </div>
        <div className={`${footerDarkMode} border-l-2 pl-4`}>
          <p className="pr-4 font-sans font-bold">Pablo Landim de Sá</p>
          <p>Web Developer</p>
        </div>
        </div>
    </footer>
  );
}

export default Footer;
