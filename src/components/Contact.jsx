import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { styled } from 'styled-components'

//Components
import MapChart from './Map'

export const Contact = () => {
  const publicKeyId = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

  const ref = useRef()
  const [success, setSuccess] = useState(null)

  const handleSubmit = e => {
    e.preventDefault()

      emailjs.sendForm(serviceId, templateId, ref.current, publicKeyId)
        .then((result) => {
            console.log(result.text);
            setSuccess(true)
        }, (error) => {
            console.log(error.text);
            setSuccess(false)
        });
  }

  return (
    <Section>
      <Container>
        <Left>
          <Form ref={ref} onSubmit={handleSubmit}>
            <Title>Contact Us</Title>
            <Input placeholder='Name' name="name"/>
            <Input placeholder='Email' name="email"/>
            <Input placeholder='Phone' name="phone"/>
            <TextArea placeholder='Write your message' name="message" rows={10}/>
            <Button type="submit">Send</Button>
            {success && <SuccessMessage>Your message has been sent. We'll get back to you soon!</SuccessMessage>}
          </Form>
        </Left>
        <Rigth>
          <MapChart />
        </Rigth>
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

    @media only screen and (max-width: 768px) {
      flex-direction: column;
    }
`

const Left = styled.div`
    display: flex;
    justify-content: end;
    align-items: center;
    flex: 1;

    @media only screen and (max-width: 768px) {
      justify-content: center;
    }
`

const Title = styled.h1`
    font-family: 'Roboto', sans-serif;
    font-weigth: 200;
    color: #fff;
`
const Form = styled.form`
    font-family: 'Lunasima', sans-serif;
    width: 500px;
    display: flex;
    flex-direction: column;
    gap: 25px;

    @media only screen and (max-width: 768px) {
      width: 300px;
    }

`

const Input = styled.input`
    padding: 1rem;
    background: #fff;
    border: none;
    border-radius: 5px;
`

const TextArea = styled.textarea`
    font-family: 'Lunasima', sans-serif;
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
    display: flex;
    justify-content: center;
    align-items: end;
    font-family: 'Lunasima', sans-serif;
    font-size: 1.3rem; 
    flex: 1;

    @media only screen and (max-width: 768px) {
        display: none;
    }

    
`

const SuccessMessage = styled.p`
  color: #fff;
  font-size: 1.2rem;
  font-weight: bold;
  margin-top: 10px;
`