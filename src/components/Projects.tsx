'use client'
import { useContext, useEffect, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import ThemeContext from '../context/ThemeContext'

function Projects() {
  const theme = useContext(ThemeContext);
  const [themeClasses, setThemeClasses] = useState('themeBlack');

  useEffect(() => {
    setThemeClasses(
      theme.color === 'light'
        ? 'themeWhite'
        : 'themeBlack'
    );
  }, [theme.color]);

  return (
    <>
      <Header />
      <div className={`${themeClasses}`}>
      <section className="flex items-center justify-center">

        <h1 className="text-4xl text-blue-700 border border-purple-500 border-solid">
          Página Projetos em construção
        </h1>

      </section>
      </div>
      <Footer />
    </>
  );
}
export default Projects;