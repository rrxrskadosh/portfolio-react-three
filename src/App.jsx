// Styled Components
import { styled } from 'styled-components'

import './App.css'
// Components
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Works } from './components/Works'
import { Contact } from './components/Contact'

function App() {

  return (
    <Container>
      <Navbar />
      <Hero />
      <About />
      <Works />
      <Contact />
    </Container>
    
  )
}

export default App


const Container = styled.div`
  background: #00d2ff;
  background: -webkit-linear-gradient(to right, #3a7bd5, #00d2ff);
  background: linear-gradient(to right, #3a7bd5, #00d2ff);
  font-family: Comic-sans;
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  &::-webkit-scrollbar{
    display:none;
  }
`