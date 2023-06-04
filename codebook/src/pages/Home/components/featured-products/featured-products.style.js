import styled from "styled-components";

export const FeaturedContainer = styled.div`
        margin-top: 5.2rem;
        
        .featured-heading{
            text-align: center;
            text-decoration: underline;
            margin-bottom: 1.7rem;
            font-size: 1.5rem
        }       
`

export const FeatureProductsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 25px
`