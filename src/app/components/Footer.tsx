'use client';
import Image from "next/image";
import ThemeContext from '../context/ThemeContext'
import { useContext, useEffect, useState } from 'react';

function Footer() {
  const theme = useContext(ThemeContext);
  const [themeDarkMode, setThemeDarkMode] = useState('bg-gradient-to-bl from-zinc-900 to-zinc-800');
  const [footerDarkMode, setFooterDarkMode] = useState('bg-gradient-to-bl from-zinc-900 to-zinc-800');

  useEffect(() => {
    setThemeDarkMode(
      theme.color === 'light'
        ? 'bg-gradient-to-r from-gray-100 to-gray-500 border-black'
        : 'bg-gradient-to-bl from-zinc-900 to-zinc-800'
    )
    setFooterDarkMode(
      theme.color === 'light'
        ? 'bg-gradient-to-r from-gray-100 to-gray-500 border-black text-black'
        : 'bg-gradient-to-r from-zinc-900 to-zinc-800 border-white text-white'
    );
  }, [theme.color]);

  return (
    <footer className ={`${themeDarkMode} py-6 flex justify-center`}>
      <div className="flex items-center space-x-4">
        <div className="overflow-hidden rounded-lg">
          <Image
            src="/footerTres.jpeg"
            alt="Minha Foto"
            width={50}
            height={50}
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
