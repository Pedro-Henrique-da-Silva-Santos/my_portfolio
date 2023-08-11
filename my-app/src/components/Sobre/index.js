import { faHtml5, faCss3, faJsSquare, faReact, faBootstrap, faGithub, faSass, faFigma } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SQLSever from '../../assets/images/sql-server.png';
import NetCore from '../../assets/images/NETCore.png';
import Csharp from '../../assets/images/c-sharp.png';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import './index.scss'

const Sobre = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, []);

    return (
        <>
            <div className='container sobre-page'>
                <div className='text-zone'>
                    <h1><AnimatedLetters letterClass={letterClass} strArray={['S', 'o', 'b', 'r', 'e', '', 'M', 'i', 'm']} idx={15}></AnimatedLetters></h1>
                    <div className='paragrafo'>
                        <p>
                            Minha jornada na área do Desenvolvimento de Sistemas começou em 2019, quando ingressei no curso técnico de Análise e Desenvolvimento de Sistemas na ETEC.
                            Sendo sincero, não me apaixonei pela área logo de primeira e, por isso, não me dediquei tanto quanto deveria e acabei deixando os estudos nessa área de lado.
                            Em 2022, depois de ter passado por outras áreas e não ter me encaixado, decidi dar mais uma chance para a área de Desenvolvimento de Sistemas e, dessa vez, me apaixonei de verdade.
                            Hoje sou estudante de Análise e Desenvolvimento de Sistemas na PUC-MG, me encontro no terceiro período do meu curso e estou sempre buscando desenvolver novas habilidades.
                        </p>
                    </div>
                    <div className='tecs'>
                        <h1><AnimatedLetters letterClass={letterClass} strArray={['T', 'e', 'c', 'n', 'o', 'l', 'o', 'g', 'i', 'a', 's']} idx={15}></AnimatedLetters></h1>
                        <ul>
                            <li><FontAwesomeIcon icon={faHtml5} color="#F06529" /></li>
                            <li><FontAwesomeIcon icon={faCss3} color="#28A4D9" /></li>
                            <li><FontAwesomeIcon icon={faJsSquare} color="#EDF81D" /></li>
                            <li><FontAwesomeIcon icon={faBootstrap} color="#B509FF" /></li>
                            <li><FontAwesomeIcon icon={faReact} color="#5ED4F4" /></li>
                            <li><FontAwesomeIcon icon={faSass} color="#CF649A" /></li>
                            <li><FontAwesomeIcon icon={faFigma} color="#F24E1E" /></li>
                            <li><img src={Csharp} className='tec-images' alt=''></img></li>
                            <li><img src={NetCore} className='tec-images' alt=''></img></li>
                            <li><img src={SQLSever} className='tec-images' alt=''></img></li>

                        </ul>
                    </div>
                </div>

                <div className='cubo-zone'>
                    <div className='cubespinner'>
                        <div className='face cima'>
                            <FontAwesomeIcon icon={faHtml5} />
                        </div>
                        <div className='face baixo'>
                            <FontAwesomeIcon icon={faCss3} />
                        </div>
                        <div className='face esquerda'>
                            <FontAwesomeIcon icon={faBootstrap} />
                        </div>
                        <div className='face direita'>
                            <FontAwesomeIcon icon={faJsSquare} />
                        </div>
                        <div className='face frente'>
                            <FontAwesomeIcon icon={faReact} />
                        </div>
                        <div className='face atras'>
                            <FontAwesomeIcon icon={faGithub} />
                        </div>
                    </div>
                </div>
            </div>
            <Loader type="pacman" className='sobre-loader' />
        </>
    )
}

export default Sobre
