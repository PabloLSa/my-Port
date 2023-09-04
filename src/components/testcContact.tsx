'use client'
import { useContext, useEffect, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import ThemeContext from '../context/ThemeContext'
import emailjs from '@emailjs/browser';

function Contact() {
  const theme = useContext(ThemeContext);
  const [themeClasses, setThemeClasses] = useState('themeBlack');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  function sendEmail(e: any) {
    e.preventDefault();

    if (name === '' || email === '' || message === '') {
      alert('Preencha todos os campos');
      return;
    }

    const templateParams = {
      from_name: name,
      message: message,
      email: email,
    };

    emailjs.send("service_izc1ovm", "template_3szu68j", templateParams, "McOMjZpTavG06s8UW")
      .then((response) => {
        alert('Email enviado com sucesso!');
        setName('');
        setEmail('');
        setMessage('');
      })
      .catch((error) => {
        alert('Ocorreu um erro ao enviar o email, tente novamente mais tarde.');
      });

  }

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
        <div className="flex flex-col items-center justify-center w-full p-4 mx-auto mt-4 text-white bg-zinc-900 md:mt-8 lg:mt-10 xl:mt-12 md:w-8/12 lg:w-6/12 xl:w-4/12 rounded-3xl md:p-14">
          <h1 className="mb-8 text-3xl md:mb-14">Converse comigo</h1>
          <form className="flex flex-col w-full max-w-600" onSubmit={sendEmail}>
            <input
              className="px-4 py-2 mb-4 text-white bg-gray-800 rounded-md"
              type="text"
              placeholder="Ecreva seu nome"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
            <input
              className="px-4 py-2 mb-4 text-white bg-gray-800 rounded-md"
              type="text"
              placeholder="Seu email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <textarea
              className="p-8 bg-gray-800 border-0 rounded-md resize-none mb-14 h-94"
              placeholder="Inicie o diálogo"
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            />
            <button className="text-base text-white transition transform bg-blue-400 border-0 rounded-md cursor-pointer h-34 hover:bg-blue-300 hover:scale-105 duration-800">Send</button>

          </form>
          <div className="flex flex-col items-start justify-start h-20 px-4 mt-6 mb-8 border-l-4 border-white">
        <span className="my-2 ml-0">Projetos</span>
        <span className="my-2 ml-0">Sobre mim</span>
      </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Contact;