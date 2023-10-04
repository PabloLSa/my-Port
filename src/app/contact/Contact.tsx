'use client'
import { useContext, useEffect, useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ThemeContext from '../../context/ThemeContext'
import emailjs from '@emailjs/browser';
import validator from 'validator';
import { MdEmail } from "react-icons/md";
import { BsFillTelephonePlusFill, BsGithub, BsLinkedin } from "react-icons/bs";



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
    if (name.length < 3) {
      alert('Nome inválido');
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

      <div className={`flex flex-col lg:flex-row ${themeClasses}`}>
        {/* Card de Contato */}

        <div className="p-5 lg:w-1/2">
          <div className="mt-10 mb-6 text-3xl text-left md:mt-20">
            <div
              className={`flex flex-col max-w-xl m-auto lg:flex-row lg:flex-wrap ${containerContact}`}
              style={{
                boxShadow: '0px 0px 10px rgba(136, 35, 106, 0.774)',
                padding: '0.4em',
                borderRadius: '0.6em',
                whiteSpace: 'nowrap',
              }}
            >
              <div className="flex flex-col w-full gap-1 p-3 mb-4 text-lg md:text-sm">


                <div className={`rounded-lg p-4`}>

                  <a
                    href="/"
                    className="flex items-center gap-1 p-1 border-purple-500 rounded-xl hover:text-blue-500"
                  >
                    <span className="w-4 h-4 xl:w-6 xl:h-6 bg-gradient-to-br from-fuchsia-950 via-fuchsia-500 via-45% to-cyan-500 rounded-full"></span>
                    <span className="border-about">Home</span>
                  </a>
                  <a
                    href="/projects"
                    className="flex items-center gap-1 p-1 border-purple-500 rounded-xl hover:text-blue-500"
                  >
                    <span className="w-4 h-4 xl:w-6 xl:h-6 bg-gradient-to-br from-fuchsia-950 via-fuchsia-500 via-45% to-cyan-500 rounded-full"></span>
                    <span className="border-about">Meus Projetos</span>
                  </a>


                  <h2 className={`text-lg font-semibold ${h1Contact}`}>Contato</h2>
                  <p className="flex items-center text-sm text-purple-600 md:text-lg">
                    <MdEmail className="mr-2" />pablolandimdesa@gmail.com
                  </p>
                  <p className="flex items-center text-sm text-purple-600 md:text-lg">
                    <BsFillTelephonePlusFill className="mr-2" /> (19)99628-6293
                  </p>

                </div>

              </div>
            </div>
          </div>
        </div>
        
        {/* Formulário */}
        <div className="p-5 lg:w-1/2">
          <form className={`mb-6 text-3xl text-center rounded-lg ${containerContact}`}
            onSubmit={sendEmail}
            style={{
              boxShadow: '0px 0px 10px rgba(136, 35, 106, 0.774)',
              padding: '0.4em',
              borderRadius: '0.6em',
              whiteSpace: 'nowrap',
            }}
          >
            <h1 className={`font-semibold mb-4 ${h1Contact}`}>Mensagem</h1>

            <div className="flex flex-col max-w-xl m-auto lg:flex-row lg:flex-wrap">
              <input
                type="text"
                className={`${input}`}
                placeholder="Nome"
                onChange={(e) => setName(e.target.value)}
              />

              <input
                type="text"
                className={`${input}`}
                placeholder="Seu email"
                onChange={(e) => setEmail(e.target.value)}
              />

              <textarea
                cols={30}
                rows={8}
                className={`${textArea}`}
                placeholder="Inicialize o diálogo..."
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>

              <div className="mx-auto text-center">
                <button className="relative w-48 h-12 overflow-hidden text-lg font-bold text-white bg-purple-500 hover:bg-gradient-to-br from-fuchsia-950 via-fuchsia-500 via-45% to-cyan-500 rounded-2xl" type="submit">
                  Enviar Mensagem
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </>

  );
}
export default Contact;