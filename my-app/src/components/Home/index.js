import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import "./index.scss";

const Home = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['E','u',' ', 'S', 'o', 'u','', 'o',' ','P', 'e', 'd', 'r', 'o'];
    const jobArray = ['D', 'e', 's', 'e', 'n', 'v', 'o', 'l', 'v', 'e', 'd', 'o', 'r', ' ', 'W', 'e', 'b', '.'];


    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }, []);

    return (
    <>    
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                <span className={letterClass}>O</span>
                <span className={`${letterClass} _12`}>l</span>
                <span className={`${letterClass} _13`}>á,</span>
                <br />                
                <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15} />
                <br />
                <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={35} />
                </h1>             
                <h2>Desenvolvedor Frontend</h2>
                <Link to="/contato" className="flat-button">Contate-me</Link>
            </div>
        </div>

        <Loader type="pacman"/>
    </>
    );
};

export default Home