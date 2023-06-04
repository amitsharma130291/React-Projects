import React, { useState, useEffect } from 'react'
import ProductCard from '../../../../components/Elements/ProductCard/ProductCard'
import { FeaturedContainer, FeatureProductsGrid } from "./featured-products.style.js"
import axiosInstance from "../../../../axios/config"

function FeaturedProducts() {
  const [ featuredProducts, setFeaturedProducts ] = useState([])

  useEffect(()=> {
     async function fetchProducts(){
        const productsResponse = await axiosInstance.get("/featured_products")
        setFeaturedProducts(productsResponse.data)
     }

     fetchProducts()
  }, [])

  return (
    <FeaturedContainer>
      <h1 className="featured-heading">Featured eBooks</h1>
       <FeatureProductsGrid>
        {
          featuredProducts.map((product)=>{
            return( <ProductCard product = {product} key={product.id} /> )
          })
        }                    
     </FeatureProductsGrid>
    </FeaturedContainer>   
  )
}

export default FeaturedProducts