import { Link } from 'react-router-dom';
import "./index.scss";

const Home = () => {
    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>Olá, eu sou o <span className="name">Pedro</span></h1>               
                <h2>Desenvolvedor Frontend</h2>
                <Link to="/contato" className="flat-button">Contate-me</Link>
            </div>
        </div>
    );
};

export default Home