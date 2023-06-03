import React from 'react'
import styles from "./Hero.module.css"
import heroImg from "../../../../assets/images/hero.avif"
import CTAButton from "../../../../components/Other/CTA-Button"

function Hero() {
  return (
    <section className={ styles.heroSection }>
        <div className={styles.text}>
            <h1>The Ultimate eBook Store</h1>
            <p>CodeBook is the world's most popular and authoritative source for computer science ebooks. Find ratings and access to the newest books digitally.</p>
            <CTAButton text="Explore eBooks" />          
        </div>
        <div className={styles.heroImage}>
            <img src={heroImg} alt="hero image" />
        </div>
    </section>
  )
}

export default Hero