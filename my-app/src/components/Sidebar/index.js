
import { faHome, faUser, faEnvelope, faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../../assets/images/logo.png'
import { useState } from 'react';
import './index.scss';

const Sidebar = () => {
    const [showNav, setShowNav] = useState(false);

    return (

        <div className="nav-bar">
            <Link className='logo' to="/">
                <img src={Logo} alt="Logo-PH" to='/home' />
            </Link>
            <nav className={showNav ? 'mobile-show' : ''}>
                <NavLink exact='true' activeclassname='active' to='/' onClick={() => setShowNav(false)}>
                    <FontAwesomeIcon icon={faHome} color='#4d4d4de' />
                </NavLink>
                <NavLink exact='true' activeclassname='active' className="sobre-link" to='/sobre' onClick={() => setShowNav(false)}>
                    <FontAwesomeIcon icon={faUser} color='#4d4d4de' />
                </NavLink>
                <NavLink exact='true' activeclassname='active' className="contato-link" to='/contato' onClick={() => setShowNav(false)}>
                    <FontAwesomeIcon icon={faEnvelope} color='#4d4d4de' />
                </NavLink>
                <NavLink exact='true' activeclassname='active' className="projetos-link" to='/projetos' onClick={() => setShowNav(false)}>
                    <FontAwesomeIcon icon={faBriefcase} color='#4d4d4de' />
                </NavLink>
            </nav>
            <ul>
                <li>
                    <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/pedrohenriquesilvasantos12032002/'>
                        <FontAwesomeIcon icon={faLinkedin} color='#4d4d4de' />
                    </a>
                </li>
                <li>
                    <a target='_blank' rel='noreferrer' href='https://github.com/Pedro-Henrique-da-Silva-Santos'>
                        <FontAwesomeIcon icon={faGithub} color='#4d4d4de' />
                    </a>
                </li>
            </ul>
        </div>
    )
};

export default Sidebar;