import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import ProcurandoAlguem from '../../assets/images/procurandoalguem.mp4';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import YourMoney from '../../assets/images/yourmoney.mp4';
import Poster from '../../assets/images/poster.png';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import React from 'react';
import "./index.scss";


const Projetos = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 6000)
    }, []);

    return (
        <>
            <div className="container projetos-page">
                <div className="text-zone">
                    <h1 >
                        <AnimatedLetters letterClass={letterClass} strArray={['P', 'r', 'o', 'j', 'e', 't', 'o', 's']} idx={15}></AnimatedLetters>
                    </h1>
                    <div className='paragrafo-yourmoney'>
                        <a href='https://your-money20230609182318.azurewebsites.net/'><h4>Acesso ao site aqui!</h4><FontAwesomeIcon icon={faArrowUpRightFromSquare} className='site-link' /></a>
                        <p>
                            <h3>YourMoney</h3>
                            Nesta sessão quero mostrar os dois projetos que desenvolvi junto a meus colegas de curso na faculdade.
                            O primeiro projeto é um sistema de gerenciamento financeiro que busca ajudar o público alvo a ter mais controle
                            sobre suas finanças de uma forma intuitiva, prática e efetiva. Esta aplicação tem todo o front-end e back-end
                            bem desenvolvidos e sólidos baseados em C# com o framework ASP.NET Core com o padrão MVC aplicado, Entity Framework,
                            SQL Server, HTML, CSS e JavaScript. Além disso, por se tratar de um projeto com mais pessoas, foi utilizada a metodologia
                            SCRUM para gerenciar todo o processo de desenvolvimento do projeto, GitHub Projects para gerenciar tarefas e para
                            estruturar todo o Backlog e o próprio GitHub para versionamento de código.
                        </p>
                    </div>
                    <div className='paragrafo-procurandoalguem'>
                        <a href='https://icei-puc-minas-pmv-ads.github.io/pmv-ads-2022-2-e1-proj-web-t5-procurando-alguem/src/paginas/usuario/home-page.html'><h4>Acesso ao site aqui!</h4><FontAwesomeIcon icon={faArrowUpRightFromSquare} className='site-link' /></a>
                        <p>
                            <h3>Procurando Alguem?</h3>
                            O segundo projeto é uma aplicação web que busca oferecer um ambiente simples e intuitivo para auxiliar na busca
                            por pessoas desaparecidas no Brasil. Este sistema foi desenvolvido utilizando apenas HTML, CSS e JavaScript, além de
                            termos utilizado a metodologia SCRUM para gerenciar o desenvolvimento do projeto, o ClickUp para divisão de
                            tarefas e o GitHub para versionamento de código. Este projeto teve um escopo bem menor que o YourMoney, devido ao fato de
                            ter sido desenvolvido no primeiro semestre do meu curso, porém foi uma base de estudo muito boa que serviu para aprimorar
                            minhas habilidades para que então no segundo semestre eu pudesse desenvolver o YourMoney. Fazendo um comparativo entre os
                            dois projetos fica claro o quanto pude evoluir em termos de conhecimento e habilidades.
                        </p>
                    </div>
                </div>
                <div className='projetos-zone'>
                    <h1><AnimatedLetters letterClass={letterClass} strArray={['Y', 'o', 'u', 'r', 'M', 'o', 'n', 'e', 'y', '', '(', 'C#', '', '|', '', '.NETCoreMVC', '', '|', '', 'EntityFramework', ')']} idx={15}></AnimatedLetters></h1>
                    <div className='video'>
                        <video src={YourMoney} controls={true}></video>
                    </div>

                    <h1><AnimatedLetters letterClass={letterClass} strArray={['P', 'r', 'o', 'c', 'u', 'r', 'a', 'n', 'd', 'o', '', 'A', 'l', 'g', 'u', 'é', 'm', '?', '', '(', '', 'HTML', '', '|', '', 'CSS', '', '|', '', 'JavaScript', '', ')',]} idx={15}></AnimatedLetters></h1>
                    <div className='video2'>
                        <video src={ProcurandoAlguem} controls={true} poster={Poster}></video>
                    </div>
                </div>
            </div>

            <Loader type="pacman" className='projetos-loader' />
        </>
    );
};

export default Projetos