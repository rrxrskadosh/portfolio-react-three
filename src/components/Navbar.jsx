import React from 'react'
import { styled } from 'styled-components'

export const Navbar = () => {
  return (
    <Section>
        <Container>
            <Links>
                <Logo src="./img/goalpath.png"></Logo>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>About</ListItem>
                    <ListItem>Works</ListItem>
                    <ListItem>Contact</ListItem>
                </List>
            </Links>
            <Icons>
                <Icon src="./img/search.png"></Icon>
                <Button>Hire</Button>
            </Icons>
        </Container>
    </Section>
  )
}

const Section = styled.div`
    display: flex;
    justify-content: center; 
    color: #fff;
    font-family: 'Lunasima', sans-serif;

    @media only screen and (max-width: 768px) {
        width: 100%;
    }
`

const Container = styled.div`
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
`

const Links = styled.div`
    display: flex;
    align-items: center;
    padding: 1rem;
    gap: 50px;
`
const Logo = styled.img`
    width: 9%;
`
const List = styled.ul`
    display: flex;
    gap: 20px;
    list-style: none;
`

const ListItem = styled.li`
    display: flex;
    align-items: center;
    padding: 1rem;
    gap: 50px;
    cursor: pointer;
`

const Icons = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`

const Icon = styled.img`
    width: 15%;
    cursor: pointer;
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
`

// Media Queries

