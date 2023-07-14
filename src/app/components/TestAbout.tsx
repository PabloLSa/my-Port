''
import { useContext, useState, useEffect } from 'react';
import Image from "next/image";
import ThemeContext from '../context/ThemeContext';

function About() {
  const theme = useContext(ThemeContext);
  const [themeClasses, setThemeClasses] = useState('bg-gradient-to-br from-zinc-900 to-zinc-800 mx-auto py-8 min-h-screen');
  const [themeText, setThemeText] = useState(`bg-gradient-to-r from-blue-500  to-blue-700 text-transparent bg-clip-text`);
  const [themeAbout, setThemeAbout] = useState(`font-sans font-bold text-xl sm:text-xl text-center text-white`);

  useEffect(() => {
    setThemeClasses(
      theme.color === 'light'
        ? 'bg-stone-650 '
        : 'bg-gradient-to-br from-zinc-900 to-zinc-800'
    );
    setThemeText(
      theme.color === 'light'
        ? 'text-transparent bg-gradient-to-tr from-[#4158D0] via-[#C850C0] via-46% to-purple-500 bg-clip-text '
        : 'bg-gradient-to-r from-blue-500  to-blue-700 text-transparent bg-clip-text'
    );
    setThemeAbout(
      theme.color === 'light'
        ? 'text-gray-800'
        : 'text-white'
    );
  }, [theme.color]);

  return (
    <>
   <section>

   </section>
    </>
  );
}

export default About;
