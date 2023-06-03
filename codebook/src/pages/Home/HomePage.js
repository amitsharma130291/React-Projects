import React from 'react'
import Hero from "./components/Hero"
import styles from "./HomePage.module.css"
import FeaturedProducts from './components/featured-products'
import Testimonials from './components/Testimonials/Testimonials'
import Faq from './components/Faq/Faq'


export const HomePage = () => {
  return (
    <main className={styles.home}> 
      <Hero />
      <FeaturedProducts />
      <Testimonials />
      <Faq />
    </main>
  )
}

