import styled from "styled-components"
export const TestimonyContainer = styled.section`
        margin: 4rem 0;
        .heading{
            text-align: center;
            text-decoration: underline;
            margin-bottom: 1.7rem;
            font-size: 1.5rem
        }
`
export const TestimonyGrid = styled.div`
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        margin-top: 40px
        border: 1px solid lightgray;
        border-radius: 15px
`

export const Testimony = styled.div`
        text-align: center;
        border: 0.1px solid lightgray;
        padding: 3rem;
        display: flex;
        flex-direction: column;
        gap: 25px;

        .testimony-heading{
            font-weight: 800;
        }
        
       
`

export const PerosonalDetailsContainer = styled.div`
        display: flex;
        justify-content: center;
        gap: 20px;

        p{
            text-align: left;
        }

        img{
            height : 2.5rem;
            width : 2.5rem;
            border-radius: 50%;
        
        }
`