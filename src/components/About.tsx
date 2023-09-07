'use client'
import { FaReact, FaDocker } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';
import { useContext, useState, useEffect } from 'react';
import { TbBrandNextjs } from 'react-icons/tb'
import{ BiLogoFigma } from 'react-icons/bi'
import Image from "next/image";
import ThemeContext from '../context/ThemeContext'
import { useRef } from "react";
import { useInView } from "framer-motion";

function Section({ children } : any) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref}>
      <span
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 3s"
        }}
      >
        {children}
      </span>
    </section>
  );
}

function About() {
  const theme = useContext(ThemeContext);
  const [themeClasses, setThemeClasses] = useState('themeBlack');
  const [themeText, setThemeText] = useState(`text-transparent bg-gradient-to-br from-fuchsia-950 via-fuchsia-500 via-45% to-cyan-500 bg-clip-text`);
  const [themeAbout, setThemeAbout] = useState(`text-white`);

  useEffect(() => {
    setThemeClasses(
      theme.color === 'light'
        ? 'themeWhite'
        : 'themeBlack'
    );
    setThemeText(
      theme.color === 'light'
        ? 'text-transparent bg-gradient-to-br from-blue-700 via-purple-500 to-blue-800 bg-clip-text'
        : 'text-transparent bg-gradient-to-br from-fuchsia-950 via-fuchsia-500 via-45% to-cyan-500 bg-clip-text'
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
              <a href="/contact" className="span-contact">
                <span className="w-4 h-4 xl:w-6 xl:h-6 bg-gradient-to-br from-fuchsia-950 via-fuchsia-500 via-45% to-cyan-500  rounded-full ">
                </span>
                <span className="transition-transform duration-300 border-about hover:scale-105">Contato
                  <span className="inline-block w-1 h-1 text-purple-500 md:text-2xl xl:text-2xl sm:text-xl animate-pulse-stronger"> . </span>
                </span>
              </a>
              <a href="/projects" className="span-contact">
                <span className="w-4 h-4 xl:w-6 xl:h-6 bg-gradient-to-br from-fuchsia-950 via-fuchsia-500 via-45% to-cyan-500 rounded-full"></span>
                <span className="border-about">Meus Projetos</span>
              </a>
              <a href="https://github.com/PabloLSa/curriculo/blob/main/CV-Front-end.pdf" target="_blank" className="span-contact">
                <span className="w-4 h-4 xl:w-6 xl:h-6 bg-gradient-to-br from-fuchsia-950 via-fuchsia-500 via-45% to-cyan-500 rounded-full"></span>
                <span className="border-about">Veja meu currículo</span>
              </a>
            </div>
          </div>
          <div className="flex flex-col items-center justify-between w-full sm:w-3/4 h-96">
            <div className='flex flex-col items-center w-full'>
              <div className='flex justify-center'>
                <div>
                  <h1 className={`font-sans texto-digitado font-bold text-2xl xl:text-5xl md:text-4xl sm:text-5xl ${themeText}`}>
                    Desenvolvedor Web
                  </h1>
                </div>
              </div>
              <span className={`font-sans text-xl texto-digitado sm:text-3xl font-bold md:text-2xl ${themeText}`}>
                Campinas, São Paulo
              </span>
            </div>
            <div className='flex items-center justify-center h-full'>
            <Section> 
              <p className={`sm:text-xs xl:text-2xl md:text-xl text-justify ${themeAbout}`}>
                Sou um desenvolvedor Full Stack, com paixão pelo design de  Front-end. Em agosto de 2022, realizei uma transição de carreira e me juntei à Trybe, onde através de projetos desafiadores e envolventes, tornei-me um especialista completo.
                Minha jornada nesse universo de programação tem sido incrível, hoje me sinto capaz de criar interfaces de usuário que são não apenas atraentes, mas também responsivas e funcionais!!
              </p>
               </Section>
            </div>
            
          </div>
        </div>

        <Section> 
        <div className='flex flex-col items-center gap-2 overflow-hidden'>
          <span className={`mr-4 font-sans font-bold text-xl ${themeText} sm:text-3xl xl:text-4xl`}>
            Tecnologias Essenciais
          </span>

          <div className='flex gap-3'>
            <a href="https://react.dev/" target="_blank" className="relative mb-3 font-sans text-lg text-blue-600 transition-transform duration-300 group hover:text-blue-400 hover:scale-125">
              <FaReact className="mr-2 text-3xl sm:text-4xl xl:text-5xl" />
              <span className="opacity-0 group-hover:opacity-100 absolute top-[-30px] left-0 bg-gradient-to-br from-fuchsia-950 via-fuchsia-500 via-45% to-cyan-500 text-white py-1 px-2 rounded-md">React</span>
            </a>
            <a href="https://tailwindcss.com/" target="_blank" className="relative mb-3 font-sans text-lg text-blue-600 transition-transform duration-300 group hover:text-blue-400 hover:scale-125" rel="noopener noreferrer">
              <SiTailwindcss className="mr-2 text-3xl sm:text-4xl xl:text-5xl" />
              <span className="opacity-0 group-hover:opacity-100 absolute top-[-30px] left-0 bg-gradient-to-br from-fuchsia-950 via-fuchsia-500 via-45% to-cyan-500 text-white py-1 px-2 rounded-md">Tailwind</span>
            </a>
            <a href="https://nextjs.org/docs" target="_blank" className="relative mb-3 font-sans text-lg text-blue-600 transition-transform duration-300 group hover:text-blue-400 hover:scale-125" rel="noopener noreferrer">
              <TbBrandNextjs className="mr-2 text-3xl sm:text-4xl xl:text-5xl" />
              <span className="opacity-0 group-hover:opacity-100 absolute top-[-30px] left-0 bg-gradient-to-br from-fuchsia-950 via-fuchsia-500 via-45% to-cyan-500 text-white py-1 px-2 rounded-md">Next.js</span>
            </a>
            <a href="https://www.figma.com/" target="_blank" className="relative mb-3 font-sans text-lg text-blue-600 transition-transform duration-300 group hover:text-blue-400 hover:scale-125" rel="noopener noreferrer">
              <BiLogoFigma className="mr-2 text-3xl sm:text-4xl xl:text-5xl" />
              <span className="opacity-0 top-[-30px]  group-hover:opacity-100 absolute left-0 bg-gradient-to-br from-fuchsia-950 via-fuchsia-500 via-45% to-cyan-500 text-white py-1 px-2 rounded-md">Figma</span>
            </a>
          </div>        
        </div>
        </Section>

      </section>
    </>
  );
}

export default About;
