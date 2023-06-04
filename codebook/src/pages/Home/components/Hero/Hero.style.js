import styled from "styled-components";

export const HeroSectionContainer = styled.section`
    display: grid;
    justify-content: space-between;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    align-items: center;
`

export const  HeroText = styled.div`
    h1{
        font-size: 3rem;
        margin-bottom: 25px;
    }

    p{
        font-size: 1.5rem;
        line-height: 1.5;
        margin-bottom: 1.5rem;
    }

    button{
        padding: 0.625rem 1.25rem;
        background-color: rgb(29 78 216);
        color: #fff;
        font-size: 1rem;
        border-radius: 0.5rem;
    }
`

export const HeroImage = styled.div`
    display: flex;
    justify-content: end;
    
    img{
        width: 100%;
        border-radius: 10px;    
    }
`