import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
import AnimatedLetters from '../AnimatedLetters';
import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';
import Loader from 'react-loaders';
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';
import './index.scss';

const Contato = () => {

    const notyf = new Notyf({
        className: 'notyf',
        duration: 5000,

        types: [
            {
                type: 'success',
                background: 'green',
                duration: 5000,
                ripple: true,
                dismissible: true,
                icon: {
                    className: 'notyf__icon--success',
                    tagName: 'i',
                }
            },
            {
                type: 'error',
                background: 'red',
                duration: 5000,
                ripple: true,
                dismissible: true,
                icon: {
                    className: 'notyf__icon--error',
                    tagName: 'i',
                }
            },
        ]
    });

    const [letterClass, setLetterClass] = useState('text-animate');
    const refForm = useRef();

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }, []);

    const sendEmail = (e) => {
        e.preventDefault();


        emailjs.sendForm('SEU_SERVICE_ID', 'SEU_TEMPLATE_ID', refForm.current, 'SUA_PULBLIC_KEY')
            .then(
                () => {
                    const notification = notyf.success('E-mail enviado com sucesso!');
                    notification.on('click', ({ target, event }) => {
                        window.location.reload(false);
                        window.location.reset();
                    });
                },
                () => {
                    const notification = notyf.error('Erro ao enviar e-mail. Por favor tente novamente!');
                    notification.on('click', ({ target, event }) => { });

                }
            )
    }

    return (
        <>
            <div className="container contato-page">
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters letterClass={letterClass} strArray={['E', 'n', 't', 'r', 'e', '', 'e', 'm', '', 'C', 'o', 'n', 't', 'a', 't', 'o']} idx={15} />
                    </h1>
                    <p className='paragrafo-contato'>
                        Caso queira entrar em contato comigo, basta preencher o formulário abaixo e enviar uma mensagem. Responderei o mais rápido possível. Obrigado!
                    </p>
                    <div className='form-contato'>
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className='campos'>
                                    <input type='text' placeholder='Nome' name='from_name' required />
                                </li>
                                <li className='campos'>
                                    <input type='email' placeholder='E-mail' name='from_email' required />
                                </li>
                                <li>
                                    <input type='text' placeholder='Assunto' name='subject' required />
                                </li>
                                <li>
                                    <textarea placeholder='Mensagem' name='message' required></textarea>
                                </li>
                                <li>
                                    <input type='submit' value='Enviar' className='flat-button' />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                
                <div className='map-zone'>
                    <div className="map-info">
                        Pedro Henrique, 20 anos
                        <br />
                        São Paulo - SP
                        <br />
                        Itanhaém - 11740-000
                        <br />
                        <span>peh.henrique22@outlook.com</span>
                    </div>
                    <div className="map">
                        <MapContainer center={[-24.18349663776129, -46.78978425965975]} zoom={13} scrollWheelZoom={true}>
                            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                            <Marker position={[-24.18349663776129, -46.78978425965975]}>
                                <Popup>
                                    Essa é a minha cidade do coração! <b>Itanhaém</b> <br /> Ótimo lugar para tomar uma cerveja com os amigos! :D
                                </Popup>
                            </Marker>
                        </MapContainer>
                    </div>
                </div>
            </div>
            <Loader type='pacman' className='contato-loader' />

        </>
    )

};

export default Contato; 