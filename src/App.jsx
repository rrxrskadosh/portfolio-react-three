import './App.css'
// Styled Components
import { styled } from 'styled-components'

// Components
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Works } from './components/Works'
import { Contact } from './components/Contact'

function App() {
  return (
    <Container>
      <Hero />
      <About />
      <Works />
      <Contact />
    </Container>
  )
}

export default App


const Container = styled.div`
  background: rgb(2,0,36);
  background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%);
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  &::-webkit-scrollbar{
    display:none;
  }
`