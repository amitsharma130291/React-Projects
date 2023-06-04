import React from 'react'
import { HeroSectionContainer, HeroText, HeroImage } from "./Hero.style"
import heroImg from "../../../../assets/images/hero.avif"
import CTAButton from "../../../../components/Other/CTA-Button"
import { useNavigate } from 'react-router-dom'

function Hero() {
  const navigate = useNavigate()
  return (
    <HeroSectionContainer>
        <HeroText>
            <h1>The Ultimate eBook Store</h1>
            <p>CodeBook is the world's most popular and authoritative source for computer science ebooks. Find ratings and access to the newest books digitally.</p>
            <CTAButton onClick={() => navigate("/products")} text="Explore eBooks" />          
        </HeroText>
        <HeroImage>
            <img src={heroImg} alt="hero image" />
        </HeroImage>
    </HeroSectionContainer>
  )
}

export default Hero