'use client'
import { FaReact, FaDocker } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';
import { useContext, useState, useEffect } from 'react';
import { TbBrandNextjs } from 'react-icons/tb'
import Typical from 'react-typical';


import Image from "next/image";
import ThemeContext from '../context/ThemeContext';

function About() {
  const theme = useContext(ThemeContext);
  const [themeClasses, setThemeClasses] = useState('bg-gradient-to-br from-zinc-900 to-zinc-800 mx-auto py-8 min-h-screen');
  const [themeText, setThemeText] = useState(`text-transparent bg-gradient-to-br from-[#4158D0] via-[#C850C0] via-46% to-purple-500 bg-clip-text`);
  const [themeAbout, setThemeAbout] = useState(`font-sans font-bold text-xl sm:text-2xl text-center text-white`);

  useEffect(() => {
    setThemeClasses(
      theme.color === 'light'
        ? 'bg-gradient-to-tr from-green-100 via-green-200 via-85% to-green-300'
        : 'bg-gradient-to-br from-zinc-900 to-zinc-800'
    );
    setThemeText(
      theme.color === 'light'
        ? 'text-transparent bg-gradient-to-br from-blue-700 via-purple-500 to-blue-800 bg-clip-text'
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
        <div className="container flex flex-col gap-3 px-4 mx-auto sm:flex-row-reverse">
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
              <a href="/contato" target="_blank" className="span-contact">
                <span className="w-4 h-4 bg-gradient-to-br from-[#4158D0] via-[#C850C0] via-46% to-[#FFCC70] rounded-full"></span>
                <span className="border-about">Contato</span>
              </a>
              <a href="/projetos" target="_blank" className="span-contact">
                <span className= "w-4 h-4 bg-gradient-to-br from-[#4158D0] via-[#C850C0] via-46% to-[#FFCC70] rounded-full"></span>
                <span className="border-about">Meus Projetos</span>
              </a>
              <a href="https://github.com/PabloLSa/curriculo/blob/main/CV-Front-end.pdf" target="_blank" className="span-contact">
                <span className="w-4 h-4 bg-gradient-to-br from-[#4158D0] via-[#C850C0] via-46% to-[#FFCC70] rounded-full"></span>
                <span className="border-about">Veja meu currículo</span>
              </a>
            </div>
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
                Sou um desenvolvedor web com foco nas tecnologias React, Tailwind, Next.js!! Em agosto de 2022 decidi 
                fazer uma transição de carreira
                e ingressei na Trybe, onde me tornei
                um desenvolvedor Full Stack. E com o apoio da Trybe estou trilhando um caminho de sucesso
                como desenvolvedor web. Estou pronto para tornar realidade a minha transição de carreira!!
              </p>
            </div>
            <div className='flex flex-col items-center gap-1'>
              <span className={`mr-4 font-sans font-bold text-xl ${themeText} sm:text-3xl`}>
                Tecnologias Essenciais 
              </span>
              <div className='flex gap-2'>
                <a href="https://react.dev/" target="_blank" className="mb-3 font-sans text-lg text-blue-600 hover:text-blue-400">
                  <FaReact className="mr-2 text-xl sm:text-3xl" />
                </a>
                <a href="https://tailwindcss.com/" target="_blank" className="mb-3 font-sans text-lg text-blue-600 hover:text-blue-400 " rel="noopener noreferrer">
                  <SiTailwindcss className="mr-2 text-xl sm:text-3xl" />
                </a>
                <a href="https://nextjs.org/docs" target="_blank" className="mb-3 font-sans text-lg text-blue-600 hover:text-blue-400 " rel="noopener noreferrer">
                  <TbBrandNextjs className="mr-2 text-xl sm:text-3xl" />
                </a>
                <a href="https://docs.docker.com/" target="_blank" className="mb-3 font-sans text-lg text-blue-600 hover:text-blue-400 " rel="noopener noreferrer">
                  <FaDocker className="mr-2 text-xl sm:text-3xl" />
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
