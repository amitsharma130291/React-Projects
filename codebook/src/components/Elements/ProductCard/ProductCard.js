import React from 'react'
import { Container } from "./ProductCard.style.js"
import courseImg from "../../../assets/products/10001.avif"
import Rating from '../Rating'
import CTAButton from "../../Other/CTA-Button"

function ProductCard({ product }) {
  const { name, overview, price, rating } = product
  return (
    <Container>
      <img src={courseImg} alt="book image"/>
      <div className="product-details">
          <h1>{ name }</h1>
          <p className="product-details-text">
            { overview }
          </p>
          <div className="product-card-rating">
             <Rating ratingValue= { rating } />
          </div>          
          <div className="pricing">
              <p>${ price }</p>
              <CTAButton text="Add to Cart" /> 
          </div>
      </div>  
    </Container>
  )
}

export default ProductCard
