import React from 'react'
import { styled } from 'styled-components'

// Components
import { Navbar } from './Navbar'

export const Hero = () => {
  return (
    <Section>
        <Navbar />
    </Section>
  )
}

const Section = styled.div`
  color: #fff;
  height: 100vh;
  scroll-snap-align: center;
`