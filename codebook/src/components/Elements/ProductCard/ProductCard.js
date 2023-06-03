import React from 'react'
import styles from "./ProductCard.module.css"
import courseImg from "../../../assets/products/10001.avif"
import Rating from '../Rating'
import CTAButton from "../../Other/CTA-Button"

function ProductCard({ product }) {
  const { name, overview, price, rating } = product
  return (
    <div className={styles["product-card"]}>
      <img src={courseImg} alt="book image"/>
      <div className={styles["product-details"]}>
          <h1>{ name }</h1>
          <p className={styles["product-details-text"]}>
            { overview }
          </p>
          <div className={styles["product-card-rating"]}>
             <Rating ratingValue= { rating } />
          </div>          
          <div className={styles.pricing}>
              <p>${ price }</p>
              <CTAButton text="Add to Cart" /> 
          </div>
      </div>  
    </div>
  )
}

export default ProductCard