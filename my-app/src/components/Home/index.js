import { Sphere, OrbitControls, MeshDistortMaterial } from '@react-three/drei';
import AnimatedLetters from '../AnimatedLetters';
import Image from '../../assets/images/Hero.png';
import { Canvas } from '@react-three/fiber';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Loader from 'react-loaders';
import { Img } from 'react-image';
import React from 'react';
import "./index.scss";


const Home = () => {

    const [letterClass, setLetterClass] = useState('text-animate-home')
    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 11000)
    }, []);

    return (
        <>
            <div className="container home-page">
                <div className="text-zone">
                    <h1 >
                        <AnimatedLetters letterClass={letterClass} strArray={['O', 'l', 'á', ',']} idx={15}></AnimatedLetters>
                        <br />
                        <AnimatedLetters letterClass={letterClass} strArray={['M', 'e', ' ', 'c', 'h', 'a', 'm', 'o', ' ', 'P', 'e', 'd', 'r', 'o', '', 'e', '', 's', 'o', 'u']} idx={15}></AnimatedLetters>
                        <br />
                        <AnimatedLetters letterClass={letterClass} strArray={['D', 'e', 's', 'e', 'n', 'v', 'o', 'l', 'v', 'e', 'd', 'o', 'r', ' ', 'W', 'e', 'b', '', 'F', 'r', 'o', 'n', 't', '-', 'E', 'n', 'd', '']} idx={25}></AnimatedLetters>
                    </h1>
                    <h2>Desenvolvedor Front-End / React.js / ASP.NET Core MVC / C# </h2>
                    <Link to="/contato" className="flat-button">Contate-me</Link>
                </div>
                <div className='hero-zone'>

                    <Canvas className='hero' camera={{ fov: 25, position: [5, 5, 5] }} >
                        <OrbitControls enableZoom={false} />
                        <ambientLight intensity={1} />
                        <directionalLight position={[3, 2, 1]} />
                        <Sphere args={[1, 100, 200]} scale={1.5}>
                            <MeshDistortMaterial
                                color="#337def"
                                attach="material"
                                distort={0.5}
                                speed={2}
                            />
                        </Sphere>
                    </Canvas>
                    <Img src={Image} alt="Pedro" className="hero-image" />


                </div>

            </div>

            <Loader type="pacman" className='home-loader' />
        </>
    );
};

export default Home