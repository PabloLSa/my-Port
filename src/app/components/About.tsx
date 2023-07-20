'use client'
import { FaReact, FaDocker } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';
import { useContext, useState, useEffect } from 'react';
import { TbBrandNextjs } from 'react-icons/tb'
import Image from "next/image";
import ThemeContext from '../context/ThemeContext'




function About() {
  const theme = useContext(ThemeContext);
  const [themeClasses, setThemeClasses] = useState('bg-gradient-to-br from-zinc-900 to-zinc-800 mx-auto py-8 min-h-screen');
  const [themeText, setThemeText] = useState(`text-transparent bg-gradient-to-br from-[#4158D0] via-[#C850C0] via-46% to-purple-500 bg-clip-text`);
  const [themeAbout, setThemeAbout] = useState(`text-white`);

  useEffect(() => {
    setThemeClasses(
      theme.color === 'light'
        ? 'bg-white'
        : 'bg-gradient-to-br from-zinc-900 to-zinc-800'
    );
    setThemeText(
      theme.color === 'light'
        ? 'text-transparent bg-gradient-to-br from-blue-700 via-purple-500 to-blue-800 bg-clip-text'
        : 'text-transparent bg-gradient-to-br from-[#4158D0] via-[#C850C0] via-46% to-purple-500 bg-clip-text'
    );
    setThemeAbout(
      theme.color === 'light'
        ? 'text-black'
        : 'text-white'
    );
  }, [theme.color]);

  return (
    <>
      <section className={`mx-auto py-8 min-h-screen ${themeClasses}`}>
        <div className="container flex flex-col gap-3 px-4 mx-auto sm:flex-row-reverse">
          <div className="flex flex-col items-center w-full gap-4 sm:w-1/4">
            <div className="flex items-center justify-center mb-4 sm:w-32 sm:h-36 xl:w-64 xl:h-64 md:w-56 md:h-56">
              <Image
                src="/myphototwo.jpeg"
                alt="Minha Foto"
                width={200}
                height={200}
                className="rounded-full"
              />
            </div>
            <div className="flex flex-col items-start gap-2">
              <a href="/contato" target="_blank" className="span-contact">
                <span className="w-4 h-4 xl:w-6 xl:h-6 bg-gradient-to-br from-[#4158D0] via-[#C850C0] via-46% to-[#FFCC70] rounded-full ">
                </span>
                <span className="transition-transform duration-300 border-about hover:scale-125">Contato</span>
              </a>
              <a href="/projetos" target="_blank" className="span-contact">
                <span className= "w-4 h-4 xl:w-6 xl:h-6 bg-gradient-to-br from-[#4158D0] via-[#C850C0] via-46% to-[#FFCC70] rounded-full"></span>
                <span className="border-about">Meus Projetos</span>
              </a>
              <a href="https://github.com/PabloLSa/curriculo/blob/main/CV-Front-end.pdf" target="_blank" className="span-contact">
                <span className="w-4 h-4 xl:w-6 xl:h-6 bg-gradient-to-br from-[#4158D0] via-[#C850C0] via-46% to-[#FFCC70] rounded-full"></span>
                <span className="border-about">Veja meu currículo</span>
              </a>
            </div>
          </div>
          <div className="flex flex-col items-center justify-between w-full sm:w-3/4 h-96">
            <div className='flex flex-col items-center w-full'>
              <div className='flex justify-center'>
                <div>
                <h1 className={` texto-digitado font-sans font-bold text-2xl xl:text-5xl md:text-4xl sm:text-5xl ${themeText}`}>
                  Desenvolvedor Web
                </h1>
                </div>
              </div>
              <span className={` texto-digitado font-sans text-xl sm:text-3xl font-bold md:text-2xl ${themeText}`}>
                Campinas, São Paulo
              </span>
            </div>
            <div className='flex items-center justify-center h-full elemento'>
              <p className={`texto-escondido sm:text-xs xl:text-2xl md:text-xl text-center ${themeAbout}`}>     
              <span className={`inline-block w-1 h-1 mr-7 md:text-xl xl:text-2xl sm:mr-11 sm:text-xs ${themeAbout}`}>&lt;p&gt;</span>
                Sou Full Stack, com expertise em Front-end design. Em agosto de 2022, realizei uma transição de carreira e me juntei à Trybe, onde através de projetos me tornei um desenvolvedor Full Stack.
                Estou pronto para oportunidades e projetos desafiadores, onde devo criar interfaces de usuário atraentes, responsivas e funcionais
                <span className={`inline-block w-1 h-1 md:text-2xl xl:text-2xl sm:text-xl animate-pulse-stronger ${themeAbout}`}> | </span>
                <span className={`inline-block w-1 h-1 md:text-xl xl:text-2xl sm:text-xs ${themeAbout}`}> &lt;/p&gt;</span>
              </p>
            </div>
          </div>
        </div>
        <div className='flex flex-col items-center gap-2 overflow-hidden'>
              <span className={`mr-4 font-sans font-bold text-xl ${themeText} sm:text-3xl xl:text-4xl`}>
                Tecnologias Essenciais 
              </span>
              <div className='flex gap-3'>
                <a href="https://react.dev/" target="_blank" className="mb-3 font-sans text-lg text-blue-600 transition-transform duration-300 hover:text-blue-400 hover:scale-125">
                  <FaReact className="mr-2 text-3xl sm:text-4xl xl:text-5xl" />
                </a>
                <a href="https://tailwindcss.com/" target="_blank" className="mb-3 font-sans text-lg text-blue-600 transition-transform duration-300 hover:text-blue-400 hover:scale-125 " rel="noopener noreferrer">
                  <SiTailwindcss className="mr-2 text-3xl sm:text-4xl xl:text-5xl" />
                </a>
                <a href="https://nextjs.org/docs" target="_blank" className="mb-3 font-sans text-lg text-blue-600 transition-transform duration-300 hover:text-blue-400 hover:scale-125 " rel="noopener noreferrer">
                  <TbBrandNextjs className="mr-2 text-3xl sm:text-4xl xl:text-5xl" />
                </a>
                <a href="https://docs.docker.com/" target="_blank" className="mb-3 font-sans text-lg text-blue-600 transition-transform duration-300 hover:text-blue-400 hover:scale-125 " rel="noopener noreferrer">
                  <FaDocker className="mr-2 text-3xl sm:text-4xl xl:text-5xl" />
                </a>
              </div>
            </div>
      </section>
    </>
  );
}

export default About;
