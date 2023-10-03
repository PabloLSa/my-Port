'use client';
import React, { useState, useEffect } from 'react';
// import {
//   AiOutlineArrowLeft, AiOutlineArrowRight
// } from "react-icons/ai";
import { BiLogoFigma } from 'react-icons/bi';
import ThemeContext from '../context/ThemeContext';
import { useContext } from 'react';
import { FaReact } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';


const Carousel = () => {
  const totalSlides = 4; // Número total de slides
  const [slideIndex, setSlideIndex] = useState(0);
  const [buttonClasses, setButtonClasses] = useState(["bg-white", "bg-white", "bg-white, bg-white"]);
  const [containerContact, setContainerContact] = useState('container-contact-dark');
  const theme = useContext(ThemeContext);


  // const handlePrevClick = () => {
  //   // Diminui o índice do slide atual para mostrar o slide anterior
  //   setSlideIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  // };

  // const handleNextClick = () => {
  //   // Aumenta o índice do slide atual para mostrar o próximo slide
  //   setSlideIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  // };
  useEffect(() => {
    // Atualiza as classes dos botões com base no slide atual
    const updatedClasses = Array(totalSlides).fill("bg-white");
    updatedClasses[slideIndex] = "bg-purple-500"; // Use a classe que você deseja para o slide atual
    setButtonClasses(updatedClasses);
  }, [slideIndex, totalSlides]);

  useEffect(() => {
    setContainerContact(
      theme.color === 'light'
        ? 'container-contact-light'
        : 'zinc-800'
    );
  }, [theme.color]);

  useEffect(() => {
    const carouselLoop = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    }, 3000); // Troque 3000 por milissegundos desejados

    return () => {
      clearInterval(carouselLoop);
    };
  }, []);

  return (

    <div className={`w-7/12 flex text-center rounded-lg ${containerContact} items-center justify-center max-h-60 relative overflow-hidden mx-auto`}>
      <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
        <button type="button" className={`w-3 h-3 rounded-full ${buttonClasses[0]}`} aria-current="false" aria-label="Slide 1" data-carousel-slide-to="0"></button>
        <button type="button" className={`w-3 h-3 rounded-full ${buttonClasses[1]}`} aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
        <button type="button" className={`w-3 h-3 rounded-full ${buttonClasses[2]}`} aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
        <button type="button" className={`w-3 h-3 rounded-full ${buttonClasses[3]}`} aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
      </div>

      <div
        id="carousel"
        className="flex w-full transition-transform duration-300 ease-in-out"
        style={{ transform: `translateX(-${slideIndex * 100}%)` }}
      >

        <div className="flex-shrink-0 w-full max-h-screen">

          <div className="flex flex-col items-center justify-center h-full text-center ">
          <a href="https://react.dev/" target="_blank" className="relative mb-3 font-sans text-lg text-blue-600 transition-transform duration-300 group hover:text-blue-400 hover:scale-125">
              <FaReact className="mr-2 text-4xl sm:text-5xl xl:text-6xl" />
              <span className="opacity-0 group-hover:opacity-100 absolute top-[-30px] left-0 bg-gradient-to-br from-fuchsia-950 via-fuchsia-500 via-45% to-cyan-500 text-white py-1 px-2 rounded-md">React</span>
            </a>
          </div>



        </div>


        <div className="flex-shrink-0 w-full max-h-screen">

          <div className="flex flex-col items-center justify-center h-full text-center ">
          <a href="https://tailwindcss.com/" target="_blank" className="relative mb-3 font-sans text-lg text-blue-600 transition-transform duration-300 group hover:text-blue-400 hover:scale-125" rel="noopener noreferrer">
              <SiTailwindcss className="mr-2 text-4xl sm:text-5xl xl:text-6xl" />
              <span className="opacity-0 group-hover:opacity-100 absolute top-[-30px] left-0 bg-gradient-to-br from-fuchsia-950 via-fuchsia-500 via-45% to-cyan-500 text-white py-1 px-2 rounded-md">Tailwind</span>
            </a>
         
             </div>

        </div>

        <div className="flex-shrink-0 w-full h-64">

          <div className="flex flex-col items-center justify-center h-full text-center ">
          <a href="https://nextjs.org/docs" target="_blank" className="relative mb-3 font-sans text-lg text-blue-600 transition-transform duration-300 group hover:text-blue-400 hover:scale-125" rel="noopener noreferrer">
              <TbBrandNextjs className="mr-2 text-4xl sm:text-5xl xl:text-6xl" />
              <span className="opacity-0 group-hover:opacity-100 absolute top-[-30px] left-0 bg-gradient-to-br from-fuchsia-950 via-fuchsia-500 via-45% to-cyan-500 text-white py-1 px-2 rounded-md">Next.js</span>
            </a>
          </div>


        </div>

        <div className="flex-shrink-0 w-full h-64">

          <div className="flex flex-col items-center justify-center h-full text-center ">
            <a href="https://www.figma.com/" target="_blank" className="relative mb-3 font-sans text-lg text-blue-600 transition-transform duration-300 group hover:text-blue-400 hover:scale-125" rel="noopener noreferrer">
              <BiLogoFigma className="mr-2 text-4xl sm:text-5xl xl:text-6xl" />
              <span className="opacity-0 top-[-30px]  group-hover:opacity-100 absolute left-0 bg-gradient-to-br from-fuchsia-950 via-fuchsia-500 via-45% to-cyan-500 text-white py-1 px-2 rounded-md">Figma</span>
            </a>
          </div>


        </div>



      </div>


      {/* <button
        id="prevButton"
        className="absolute px-3 py-1 text-white transform -translate-y-1/2 bg-black rounded-full top-1/2 left-2 opacity-30 hover:opacity-50"
        onClick={handlePrevClick}
      >
        <AiOutlineArrowLeft />
      </button>
      <button
        id="nextButton"
        className="absolute px-3 py-1 text-white transform -translate-y-1/2 bg-black rounded-full top-1/2 right-2 opacity-30 hover:opacity-50"
        onClick={handleNextClick}
      >
        <AiOutlineArrowRight />
      </button> */}
    </div>

  );
};

export default Carousel;
