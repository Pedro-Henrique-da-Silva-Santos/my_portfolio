import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faHtml5, 
    faCss3,
    faGitAlt,
    faJsSquare,
    faReact,
} from '@fortawesome/free-brands-svg-icons';
import './index.scss'

const Sobre = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, []);

    return(
    <div className='container sobre-page'>
        <div className='text-zone'>
            <h1>
                <AnimatedLetters letterClass={letterClass} strArray={['S','o','b','r','e','','M','i','m']} idx={15}></AnimatedLetters>
            </h1>
            <p>
                AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
            </p>
            <p>
                {' '}
                AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
            </p>
            <p>

            </p>
        </div>

        <div className='stage-cube-cont'>
            <div className='cubespinner'>
                <div className='face1'>
                    <FontAwesomeIcon icon={faHtml5} color="#F06529"/>
                </div>                
                <div className='face2'>
                    <FontAwesomeIcon icon={faCss3} color="#28A4D9"/>
                </div>                
                <div className='face3'>
                    <FontAwesomeIcon icon={faGitAlt} color="#EC4D28"/>
                </div>                
                <div className='face4'>
                    <FontAwesomeIcon icon={faJsSquare} color="#EDF81D"/>
                </div>
                <div className='face5'>
                    <FontAwesomeIcon icon={faReact} color="#5ED4F4"/>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Sobre
