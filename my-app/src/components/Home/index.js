import { Link } from 'react-router-dom';
import './index.scss'

const Home = () => {
    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>Olá, <br /> Meu nome é <span>Lucas</span> <br /> e eu sou <span>Desenvolvedor Front-End</span> <br /> e <span>UI Designer</span> <br />
                    <img></img>
                </h1>
                <h2>Desenvolvedor Frontend</h2>
                <Link to="/contato" className="flat-button">Contate-me</Link>
            </div>
        </div>
    );
};

export default Home;