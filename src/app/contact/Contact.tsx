'use client'
import { useContext, useEffect, useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ThemeContext from '../../context/ThemeContext'
import emailjs from '@emailjs/browser';
import validator from 'validator';



function Contact() {
  const theme = useContext(ThemeContext);
  const [themeClasses, setThemeClasses] = useState('themeBlack');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [h1Contact, seth1Contact] = useState('text-white');
  const [boderCard, setBorderCard] = useState('border-l-4 border-white text-white');
  const [containerContact, setContainerContact] = useState('container-contact-dark');
  const [input, setInput] = useState('input-contact-dark');
  const  [textArea, setTextArea] = useState('textarea-dark');




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

    seth1Contact(
      theme.color === 'light'
        ? 'text-black'
        : 'text-white'
    );

    setBorderCard(
      theme.color === 'light'
        ? 'border-l-4 border-black'
        : 'border-l-4 border-white'
    );

    setContainerContact(
      theme.color === 'light'
        ? 'container-contact-light'
        : 'container-contact-dark'
    );

    setInput(
      theme.color === 'light'
        ? 'input-contact-light'
        : 'input-contact-dark'
    );

    setTextArea(
      theme.color === 'light'
        ? 'textarea-white'
        : 'textarea-dark'
    );

  }, [theme.color]);

  return (
    <>
      <Header />
      <div className={`${themeClasses}`}>
        <div
         className={`${containerContact}`} 
         style={{
          boxShadow: '4px 0px 10px rgba(137, 71, 205, 0.5)',
          padding: '0.4em',
          borderRadius: '0.6em',
          whiteSpace: 'nowrap'
        }}
         >
          <h1 className={`mb-8 font-sans text-4xl font-bold md:mb-14 ${h1Contact}`}>Contato</h1>
          <form className="flex flex-col w-full max-w-600" onSubmit={sendEmail}>
            <input
              className={`${input}`}
              type="text"
              placeholder="Ecreva seu nome"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
            <input
              className={`${input}`}
              type="text"
              placeholder="Seu email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <textarea
              className={`${textArea} border-0 rounded-md resize-none mb-14 h-94 outline-none appearance-none hover:border border-purple-500`}
              placeholder="Inicie o diálogo"
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            />
            <button className="text-base text-white transition transform duration-800 bg-purple-500 hover:bg-gradient-to-r from-[#4158D0] via-[#C850C0] via-46% to-[#FFCC70] to border-0 rounded-md cursor-pointer h-34 hover:scale-105"> Enviar mensagem</button>

          </form>
          <div className={`relative text-white bg-gray-800 w-48 h-20 p-4 mt-6 transition-transform cursor-pointer duration-800 hover:scale-125 hover:border-purple-500 hover:text-black rounded-xl hover:bg-gradient-to-r from-[#4158D0] via-[#C850C0] ${boderCard}`}>
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