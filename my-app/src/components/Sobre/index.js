import { OrbitControls, RenderTexture, PerspectiveCamera } from '@react-three/drei';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SQLSever from '../../assets/images/sql-server.png';
import NetCore from '../../assets/images/NETCore.png';
import Csharp from '../../assets/images/c-sharp.png';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import Loader from 'react-loaders';
import './index.scss'
import {
    faHtml5,
    faCss3,
    faJsSquare,
    faReact,
    faBootstrap,
    faGithub,
    faSass,
    faNode,
    faFigma
} from '@fortawesome/free-brands-svg-icons';

const Sobre = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 10000)
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
                            Hoje sou estudante de Análise e Desenvolvimento de Sistemas na PUC-MG, me encontro no terceiro período do meu curso e estou sempre buscando me aperfeiçoar e aprender novas tecnologias, além de estar sempre buscando desenvolver novos projetos.
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
                            <li><FontAwesomeIcon icon={faNode} color="#56A645" /></li>
                            <li><FontAwesomeIcon icon={faFigma} color="#F24E1E" /></li>
                            <li><img src={Csharp} className='tec-images'></img></li>
                            <li><img src={NetCore} className='tec-images'></img></li>
                            <li><img src={SQLSever} className='tec-images'></img></li>

                        </ul>
                    </div>
                </div>

                <div className='cubo-zone'>
                    {/* <div className='stage-cube-cont'> */}
                        <div className='cubespinner'>
                            <div className='face1'>
                                <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                            </div>
                            <div className='face2'>
                                <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                            </div>
                            <div className='face3'>
                                <FontAwesomeIcon icon={faBootstrap} color="#B509FF" />
                            </div>
                            <div className='face4'>
                                <FontAwesomeIcon icon={faJsSquare} color="#EDF81D" />
                            </div>
                            <div className='face5'>
                                <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                            </div>
                            <div className='face6'>
                                <FontAwesomeIcon icon={faGithub} color="#FFF" />
                            </div>
                        </div>
                    {/* </div> */}
                </div>

            </div>
            <Loader type="pacman" className='sobre-loader' />
        </>
    )
}

export default Sobre
