import './index.scss';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import { useState, useEffect } from 'react';

const Contato = () => {

    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }, []);

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
                        <form>
                            <ul>
                                <li className='campos'>
                                    <input type='text' placeholder='Nome' name='nome' required/>
                                </li>                                
                                <li className='campos'>
                                    <input type='email' placeholder='E-mail' name='email' required/>
                                </li>                                
                                <li>
                                    <input type='text' placeholder='Assunto' name='assunto' required/>
                                </li>                               
                                <li>
                                    <textarea placeholder='Mensagem' name='mensagem' required></textarea>
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