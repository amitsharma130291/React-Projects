import React from 'react'
import Hero from "./components/Hero"
import FeaturedProducts from './components/Featured-Products'
import Testimonials from './components/Testimonials/Testimonials'
import Faq from './components/Faq/Faq'
import styled from "styled-components"


export const HomePage = () => {
  return (
    <HomeContainer> 
      <Hero />
      <FeaturedProducts />
      <Testimonials />
      <Faq />
    </HomeContainer>
  )
}

const HomeContainer = styled.main`
        padding: 10px     
`
