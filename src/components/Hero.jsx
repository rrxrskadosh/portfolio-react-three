import React from 'react'
import { styled } from 'styled-components'

// Components
import { Canvas } from '@react-three/fiber'
import { MeshDistortMaterial, OrbitControls } from '@react-three/drei'


export const Hero = () => {
  return (
    <Section>
        <Container>
            <Left>
                <Title>Erasing the limits to the goal of Knowledge</Title>
                <WhatWeDo>
                    <Line src="./img/line.png"></Line>
                    <TagLine>Design, Web Services, Marketing</TagLine>
                </WhatWeDo>
                <Desc>We exist to maximize education by providing a disruptive educational and provide professional web services of 
                    high quality and in efficient temporality
                </Desc>
                <Button>Learn More!</Button>
            </Left>
            <Right>
                <Canvas>
                    <OrbitControls enableZoom={false} />
                    <ambientLight intensity={5}/>
                    <directionalLight position={[3, 2, 1]} />
                    <mesh>
                        <sphereGeometry args={[2.3, 180, 200]}/>
                        <meshPhysicalMaterial />
                        <MeshDistortMaterial 
                            color={"#1E90FF"}
                            attach={"material"}
                            distort={0.5}
                            speed={3} />
                    </mesh>
                </Canvas>
                <Img src="./img/rocket-1.png"></Img>
            </Right>
        </Container>
    </Section>
  )
}

const Section = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 60vh;  
    scroll-snap-align: center;
    color: #fff;
    font-family: 'Lunasima', sans-serif;

    @media only screen and (max-width: 768px) {
        height: 220vh;
    }
`

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    width: 85%;
    height: 100%;  
    scroll-snap-align: center;

    @media only screen and (max-width: 768px) {
        flex-direction: column;
    }
`

const Left = styled.div`
    flex: 3;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;

    @media only screen and (max-width: 768px) {
        flex:1;
        align-items: center;
    }
`

const Title = styled.h2`
    font-size: 2rem;
    background: linear-gradient(
        to right,
        #FFF 20%,
        #F18309 70%,
        #0190cd 30%,
        #0b4ca3 0%
    );
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    text-fill-color: transparent;
    background-size: 500% auto;
    animation: textShine 5s ease-in-out infinite alternate;

    @keyframes textShine {
        0% {
            background-position: 0% 50%;
        }
        100% {
            background-position: 100% 50%;
        }
    }

    @media only screen and (max-width: 768px) {
        font-size: 1.2rem;
    }
`
const WhatWeDo = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`
const Line = styled.img`
    width: 2%;
`

const TagLine = styled.h3`
    font-size: 1.5rem;
    font-weight: 500;

    @media only screen and (max-width: 768px) {
        font-size: 1.2rem;
    }
`
const Desc = styled.p`
    width: 60%;
    font-size: 0.9rem;
    line-height: 1.5;
    padding: 1rem;

    @media only screen and (max-width: 768px) {
        width: 87%;
        font-size: .8rem;
    }
`

const Button = styled.button`
    width: 150px;
    padding: 1rem;
    font-family: 'Lunasima', sans-serif;
    font-size: 1rem;   
    color: #fff;
    background-color: #000;
    border: none;
    border-radius: 10px;
    cursor: pointer;

    @media only screen and (max-width: 768px) {
        width: 130px;
        padding: .9rem;
        font-size: .7rem; 
    }
`

const Right = styled.div`
    flex: 2;
    position: relative;
    @media only screen and (max-width: 768px) {
        
    }
`
const Img = styled.img`
    width: 100%;
    object-fit: contain;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    rigth: 0;
    margin: auto;

    animation: animate 2s infinite ease alternate;
    
    @keyframes animate {
        100% {
            transform: translateY(-40px)
        }
    }
`