import React from 'react'
import { styled } from 'styled-components'

export const Contact = () => {
  return (
    <Section>
      <Container>
        <Left>
          <Form>
            <Title>Contact Us</Title>
            <Input placeholder='Name' />
            <Input placeholder='Email'/>
            <Input placeholder='Phone'/>
            <TextArea placeholder='Write your message' rows={10}/>
            <Button>Send</Button>
          </Form>
        </Left>
        <Rigth></Rigth>
      </Container>
    </Section>
  )
}

const Section = styled.div`
    height: 100vh;
    scroll-snap-align: center;
`

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    gap: 50px;
`

const Left = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
`

const Title = styled.h1`
    font-family: 'Roboto', sans-serif;
    font-weigth: 200;
    color: #fff;
`
const Form = styled.form`
    width: 500px;
    display: flex;
    flex-direction: column;
    gap: 25px;

`

const Input = styled.input`
    padding: 1rem;
    background: #fff;
    border: none;
    border-radius: 5px;
`

const TextArea = styled.textarea`
    padding: 1rem;
    background: #fff;
    border: none;
    border-radius: 5px;
`

const Button = styled.button`
    width: 100%;
    padding: 1rem;
    font-family: 'Lunasima', sans-serif;
    font-size: 1rem;   
    color: #fff;
    background-color: #000;
    border: none;
    border-radius: 10px;
    cursor: pointer;
`

const Rigth = styled.div`
  flex: 1;

`