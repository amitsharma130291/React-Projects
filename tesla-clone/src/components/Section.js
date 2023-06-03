import React from 'react'
import styled from "styled-components"

function Section({ title, description, imageURL, leftBtnText, rightBtnText }) {
  return (
    <Wrap bgImage = {imageURL}>
        <ItemText>
            <h1>{title}</h1>
            <p>{description}</p>
        </ItemText>
        <Buttons>
            <ButtonGroup>
                <LeftMenuButton>{ leftBtnText }</LeftMenuButton>
                <RightMenuButton>{ rightBtnText }</RightMenuButton>
            </ButtonGroup>
            <DownArrow src="/images/down-arrow.svg"/>
        </Buttons>
        
    </Wrap>
  )
}

export default Section



const Wrap = styled.div`
    width: 100vw;
    min-height: 100vh;
    background: ${props => `url("/images/${props.bgImage}")`} ;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center    
`

const ItemText = styled.div`
    padding-top : 4.9rem;
    text-align: center
    
`

const Buttons = styled.div`
    display: flex;
    flex-direction: column;
`
const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 1rem;
    
`

const LeftMenuButton = styled.button`
    width : 256px;
    padding: 20px 30px;
    border: transparent;
    border-radius: 100px;
    color: #fff;
    background-color: rgba(23, 26, 32, 0.8) ;
    opacity: 0.85;
    font-size: 12px;
    height: 40px;
    display:flex;
    align-items:center;
    justify-content: center;
    cursor : pointer;
    text-transform: uppercase;
    margin: 8px
`

const RightMenuButton = styled(LeftMenuButton)`
    background-color: #fff;
    opacity: 0.65;
    color:  black ;
`

const DownArrow = styled.img`
    height : 40px;
    margin-top: 20px;
    animation: animateDown infinite 1.5s;
`
