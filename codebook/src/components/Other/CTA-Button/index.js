import React from 'react'
import styled from 'styled-components'

function CTAButton({ onClick, text}) {
  return (
    <CTAButtonContainer onClick={onClick}>{text}</CTAButtonContainer>
  )
}

export default CTAButton

export const CTAButtonContainer = styled.button`
      padding: 0.625rem 1.25rem;
      background-color: rgb(29 78 216);
      color: #fff;
      font-size: 1rem;
      border-radius: 0.5rem;
      border: 0 solid #e5e7eb;
      font-weight: 500;
    

    &:hover{
      cursor: pointer;
      background-color: #1a46c2;
    }
`