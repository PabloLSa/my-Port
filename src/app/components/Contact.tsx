'use client'
import { useContext, useEffect, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import ThemeContext from '../context/ThemeContext'

function Contact() {
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
      <h1 className="text-4xl text-blue-700 border border-purple-500 border-solid rounded-full">
          Página contato em construção
        </h1>
      </div>
      <Footer />
    </>
  );
}
export default Contact;