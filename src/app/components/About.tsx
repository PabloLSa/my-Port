'use client';
import { FaReact, FaDocker } from 'react-icons/fa';
import { useContext, useState, useEffect } from 'react';

import Image from "next/image";
import ThemeContext from '../context/ThemeContext';

function About() {
  const theme = useContext(ThemeContext);
  const [themeClasses, setThemeClasses] = useState('bg-gradient-to-br from-zinc-900 to-zinc-800 mx-auto py-8 min-h-screen');
  const [themeText, setThemeText] = useState(`bg-gradient-to-br from-blue-500  to-blue-700 text-transparent bg-clip-text`);
  const [themeAbout, setThemeAbout] = useState(`font-sans font-bold text-xl sm:text-xl text-center text-white`);

  useEffect(() => {
    setThemeClasses(
      theme.color === 'light'
        ? 'bg-stone-650'
        : 'bg-gradient-to-br from-zinc-900 to-zinc-800'
    );
    setThemeText(
      theme.color === 'light'
        ? 'bg-gradient-to-br from-blue-600 to-blue-950 text-transparent bg-clip-text'
        : 'text-transparent bg-gradient-to-br from-[#4158D0] via-[#C850C0] via-46% to-purple-500 bg-clip-text'
    );
    setThemeAbout(
      theme.color === 'light'
        ? 'text-blue-800'
        : 'text-white'
    );
  }, [theme.color]);

  return (
    <>
      <section className={`mx-auto py-8 min-h-screen ${themeClasses}`}>
        <div className="container flex flex-col px-4 mx-auto sm:flex-row-reverse">
          <div className="flex flex-col items-center w-full gap-4 sm:w-1/4">
            <div className="flex items-center justify-center w-32 mb-4 h-36 sm:w-56 sm:h-56">
              <Image
                src="/myphototwo.jpeg"
                alt="Minha Foto"
                width={150}
                height={150}
                className="rounded-full"
              />
            </div>
            <div className="flex flex-col items-start gap-2">
              <a href="/contato">
          <span className="ml-3 inline-block w-4 h-4 bg-gradient-to-br from-[#4158D0] via-[#C850C0] via-46% to-[#FFCC70] rounded-full"></span>
                <span className="border-about">Contato</span>
              </a>
              <a href="/projetos">
          <span className="ml-3 inline-block w-4 h-4 bg-gradient-to-br from-[#4158D0] via-[#C850C0] via-46% to-[#FFCC70] rounded-full"></span>
                <span className="border-about">Meus Projetos</span>
              </a>
              <a href="https://github.com/PabloLSa/curriculo/blob/main/CV-Front-end.pdf">
          <span className="ml-3 inline-block w-4 h-4 bg-gradient-to-br from-[#4158D0] via-[#C850C0] via-46% to-[#FFCC70] rounded-full"></span>
              <span className="border-about">
                Veja meu currículo
              </span>
              </a>
              
            </div>
            {/* <div className="flex mt-4">
              <a href="#sobre-mim" className="mb-3 font-sans text-lg text-black hover:text-blue-500" rel="noopener noreferrer">
                <FaReact className="mr-2" />
              </a>
            </div> */}
          </div>
          <div className="flex flex-col items-center justify-between w-full sm:w-3/4 h-96">
            <div className='flex flex-col items-center w-full'>
              <div className='flex justify-center'>
                <span className={`font-sans font-bold text-xl sm:text-5xl ${themeText}`}>
                  Desenvolvedor Full Stack
                </span>
              </div>
              <span className={`font-sans text-xl sm:text-3xl font-bold ${themeText}`}>
                Campinas, São Paulo
              </span>
            </div>
            <div className='flex items-center justify-center h-full'>
            <p className={`font-sans font-bold text-xl sm:text-2xl text-center ${themeAbout}`}>     
              Sou um desenvolvedor web com foco nas tecnologias React, Tailwind, Next.js e conexão com o GitHub! 
              Em agosto de 2022, decidi fazer uma transição de carreira e ingressei na Trybe, uma escola de tecnologia, para me tornar
              um desenvolvedor Full Stack.
              Estou trilhando para alcançar esse objetivo!
            </p>
            </div>
            <div className='flex flex-col items-center'>
            <span className="mr-4 font-sans text-2xl text-transparent bg-gradient-to-br from-[#4158D0] via-[#C850C0] via-46% to-purple-500 bg-clip-text sm:text-xl">
              Tecnologias Relevantes
            </span>
            <div className='flex gap-2'>
            <a href="https://react.dev/" className="mb-3 font-sans text-lg text-blue-600 hover:text-blue-500">
              <FaReact className="mr-2" />
            </a>
            <a href="#sobre-mim" className="mb-3 font-sans text-lg text-blue-600 hover:text-blue-400 " rel="noopener noreferrer">
              <FaDocker className="mr-2" />
            </a>
            <a href="#sobre-mim" className="mb-3 font-sans text-lg text-blue-600 hover:text-blue-400 " rel="noopener noreferrer">
              <FaDocker className="mr-2" />
            </a>
            <a href="#sobre-mim" className="mb-3 font-sans text-lg text-blue-600 hover:text-blue-400 " rel="noopener noreferrer">
              <FaDocker className="mr-2" />
            </a>
            </div>
            
            </div>
            
          </div>
        </div>
      </section>
    </>
  );
}

export default About;