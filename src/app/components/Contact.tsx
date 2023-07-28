'use client'
import { useContext, useEffect, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import ThemeContext from '../context/ThemeContext'
import emailjs from '@emailjs/browser';
import validator from 'validator';



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

    if (!validator.isEmail(email)) {
      alert('Email inválido');
      return;
    }
    if(message.length < 10){
      alert('Mensagem muito curta');
      return;
    }
    if(validator.isNumeric(name)){
      alert('Nome inválido');
      return;
    }
    if(validator.isNumeric(message)){
      alert('Mensagem inválida');
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
        <div className="flex flex-col items-center justify-center w-full p-4 mx-auto text-white rounded-none sm:mt-4 bg-zinc-900 md:mt-8 lg:mt-10 xl:mt-12 md:w-8/12 lg:w-6/12 xl:w-4/12 md:rounded-3xl md:p-14">
          <h1 className="mb-8 font-sans text-4xl font-bold md:mb-14">Contato</h1>
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
            <button className="text-base text-white transition transform duration-800 bg-purple-500 hover:bg-gradient-to-r from-[#4158D0] via-[#C850C0] via-46% to-[#FFCC70] border-0 rounded-md cursor-pointer h-34 hover:scale-105"> Enviar mensagem</button>

          </form>
          <div className="relative w-48 h-20 p-4 mt-6 transition-transform border-l-4 border-white cursor-pointer duration-800 hover:scale-125 hover:border-purple-500 hover:text-purple-500 rounded-xl">
            <i className="absolute top-0 left-0 mt-4 text-xs">pablolandimdesa@gmail.com</i>
            <i className="absolute left-0 text-xs top-10">(+55) 19 99628-6293</i>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Contact;