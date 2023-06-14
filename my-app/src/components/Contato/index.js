import './index.scss';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import { useState, useEffect } from 'react';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contato = () => {

    const [letterClass, setLetterClass] = useState('text-animate');
    const refForm = useRef();

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, []);

    const sendEmail = (e) => {
        e.preventDefault();

        
        emailjs.sendForm('', '', refForm.current, '')
            .then(
                () => {
                    alert('E-mail enviado com sucesso!');
                    window.location.reload(false);
                },
                () => {
                    alert('Erro ao enviar e-mail. Por favor tente novamente!');

                }
            )
    }

    return(
        <>
            <div className="container contato-page">
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters letterClass={letterClass} strArray = {['C', 'O', 'N', 'T', 'A', 'T', 'E', '-','M', 'E']} idx={15} />
                    </h1>
                    <p>
                        eu sou um parágrafo de teste
                    </p>
                    <div className='form-contato'>
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className='campos'>
                                    <input type='text' placeholder='Nome' name='from_name' required/>
                                </li>                                
                                <li className='campos'>
                                    <input type='email' placeholder='E-mail' name='from_email' required/>
                                </li>                                
                                <li>
                                    <input type='text' placeholder='Assunto' name='assunto' required/>
                                </li>                               
                                <li>
                                    <textarea placeholder='Mensagem' name='message' required></textarea>
                                </li>
                                <li>
                                    <input type='submit' value='Enviar' className='flat-button'/>
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
            </div>
            <Loader type='pacman' />
        </>
    )

};

export default Contato; 