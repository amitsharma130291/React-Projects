import styled from 'styled-components'

export const Container = styled.div`
      box-shadow: 0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.1);
      border: 0px solid rgb(229 231 235);   
      border-radius: 0.75rem; 

      img{
        width : 100%;
        border-top-left-radius: 0.75rem; 
        border-top-right-radius: 0.75rem;
    }

    
.product-card-rating, .product-details-text{
  margin: 1rem 0;
}

.product-details{
  padding: 1rem;
}


.pricing{
  display: flex;
  justify-content: space-between;
}

.pricing p{
  font-size: 1.2rem;
}
`