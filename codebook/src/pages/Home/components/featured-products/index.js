import React, { useState, useEffect } from 'react'
import ProductCard from '../../../../components/Elements/ProductCard/ProductCard'
import styles from "./featured-products.module.css"

function FeaturedProducts() {
  const [ featuredProducts, setFeaturedProducts ] = useState([])

  useEffect(()=> {
     async function fetchProducts(){
        const productsResponse = await fetch("http://localhost:8000/featured_products")
        const products = await productsResponse.json()
        setFeaturedProducts(products)
     }

     fetchProducts()

  }, [])

  return (
    <section className={styles["featured"]}>
      <h1 className={styles["featured-heading"]}>Featured eBooks</h1>
       <div className={styles["featured-products"]}>
        {
          featuredProducts.map((product)=>{
            return( <ProductCard product = {product} key={product.id} /> )
          })
        }                    
     </div>
    </section>
   
  )
}

export default FeaturedProducts