import React from 'react'
import { styled } from 'styled-components'

const data = [
    "Web Design",
    "Development",
    "Illustration",
    "Social Media",
    "UI/UX",
    "3D Models",
]

export const Works = () => {
  return (
    <Section>
      <Container>
        <Left>
            <List>
                {data.map((item) => (
                    <ListItem key={item} text={item}>
                        {item}
                    </ListItem>
                ))}
            </List>
        </Left>
        <Right>{/*3d Model*/}</Right>
      </Container>
    </Section>
  )
}

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
  position: relative;
  color: black;
  font-size: 14px;
  font-weight: 300;
`;

const Container = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;

  @media only screen and (max-width: 768px) {
    padding: 20px;
    justify-content: center;
  }
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ListItem = styled.li`
  font-size: 4.5rem;
  font-weight: bold;
  font-family: 'Roboto', sans-serif;
  cursor: pointer;
  color: transparent;
  -webkit-text-stroke: 1px #fff;
  position: relative;

  @media only screen and (max-width: 768px) {
    font-size: 24px;
    color: white;
    -webkit-text-stroke: 0px;
  }

  &::after {
    content: "${(props) => props.text}";
    position: absolute;
    top: 0;
    left: 0;
    color: #00cbf9;
    width: 0px;
    overflow: hidden;
    white-space: nowrap;
    
  }

  &:hover {
    &::after {
      animation: moveText 0.5s linear both;

      @keyframes moveText {
        to {
          width: 100%;
          border: none;
        }
      }
    }
  }
`;

const Right = styled.div`
  flex: 1;
`;
