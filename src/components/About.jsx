import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei';

import React from 'react'
import { styled } from 'styled-components'
import Cube from './Cube';

export const About = () => {
  return (
    <Section>
      <Container>
        <Left>
          <Canvas camera={{fov:25, position:[5, 5, 5]}}>
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={4} />
            <directionalLight position={[3, 2, 1]} />
            <Cube />
          </Canvas>
        </Left>
        <Right>
          <Title>Think outside the square space</Title>
          <WhatWeDo>
            <Line src="./img/line.png" />
            <Subtitle>Who we Are</Subtitle>
          </WhatWeDo>
          <Desc>
            A creative group of designers and developers with a passion for the
            Arts.
          </Desc>
          <Button>See our works</Button>
        </Right>
      </Container>
    </Section>
  );
};


const Section = styled.div`
    height: 100vh;
    scroll-snap-align: center;
    display: flex;
    justify-content: center;
    font-family: 'Lunasima', sans-serif;

    @media only screen and (max-width: 768px) {
      heigth: 200vh;
    }
`;

const Container = styled.div`
    height: 100vh;
    scroll-snap-align: center;
    width: 1400px;
    display: flex;
    justify-content: space-between;

    @media only screen and (max-width: 768px) {
      flex-direction: column;
    }
`;

const Left = styled.div`
    flex: 1;

    @media only screen and (max-width: 768px) {
        display: none;
    }
`;

const Title = styled.h1`
    font-family: 'Roboto', sans-serif;
    font-size: 2rem;
    color: #fff;
    @media only screen and (max-width: 768px) {
        font-size: 35px;
    }
`;

const Right = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;

    @media only screen and (max-width: 768px) {
        align-items: center;
        text-align: center;
    }
`;

const WhatWeDo = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;

    @media only screen and (max-width: 768px) {
        padding: 10px;
    }
`;

const Line = styled.img`
    height: 5px;
`;

const Subtitle = styled.h2`
    color: #000;
`;

const Desc = styled.p`
    font-size: 1rem;
    color: lightgray;

    @media only screen and (max-width: 768px) {
        padding: 10px;
    }
`;

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
`;