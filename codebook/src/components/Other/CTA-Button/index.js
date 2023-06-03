import React from 'react'
import styles from "./styles.module.css"

function CTAButton({text}) {
  return (
    <button className = {styles.CTAButton}>{text}</button>
  )
}

export default CTAButton