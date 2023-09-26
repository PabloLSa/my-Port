'use client'
import { useContext, useEffect, useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ThemeContext from '../../context/ThemeContext'
import emailjs from '@emailjs/browser';
import validator from 'validator';



function Contact() {
  const theme = useContext(ThemeContext);
  const [themeClasses, setThemeClasses] = useState('themeBlackContact');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [h1Contact, seth1Contact] = useState('text-white');
  const [containerContact, setContainerContact] = useState('container-contact-dark');
  const [input, setInput] = useState('input-contact-dark');
  const [textArea, setTextArea] = useState('textarea-dark');




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
    if (message.length < 10) {
      alert('Mensagem muito curta');
      return;
    }
    if (validator.isNumeric(name)) {
      alert('Nome inválido');
      return;
    }
    if (validator.isNumeric(message)) {
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
        ? 'themeWhiteContact'
        : 'themeBlackContact'
    );

    seth1Contact(
      theme.color === 'light'
        ? 'text-black'
        : 'text-white'
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
            boxShadow: '0px 0px 10px rgba(136, 35, 106, 0.774)',
            padding: '0.4em',
            borderRadius: '0.6em',
            whiteSpace: 'nowrap'
          }}
        >
          <h1 className={`mb-8 font-sans text-4xl font-bold md:mb-14 ${h1Contact}`}>Mensagem</h1>
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
            <button className="text-base text-white transition transform duration-800 bg-purple-500 hover:bg-gradient-to-br from-fuchsia-950 via-fuchsia-500 via-45% to-cyan-500  to border-0 rounded-md cursor-pointer"> Enviar mensagem</button>

          </form>
          <div className="flex flex-col gap-1">
            <a href="/" className="flex items-center gap-1 p-1 border-purple-500 rounded-xl hover:text-blue-500">
              <span className="w-4 h-4 xl:w-6 xl:h-6 bg-gradient-to-br from-fuchsia-950 via-fuchsia-500 via-45% to-cyan-500  rounded-full ">
              </span>
              <span className="transition-transform duration-300 border-about">Home
              </span>
            </a>
            <a href="/projects" className="flex items-center gap-1 p-1 border-purple-500 rounded-xl hover:text-blue-500">
              <span className="w-4 h-4 xl:w-6 xl:h-6 bg-gradient-to-br from-fuchsia-950 via-fuchsia-500 via-45% to-cyan-500 rounded-full"></span>
              <span className="border-about">Meus Projetos</span>
            </a>

          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Contact;