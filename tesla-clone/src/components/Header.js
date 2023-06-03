import React from 'react'
import styled from "styled-components"
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";

function Header() {
    const [ showBurger, setShowBurger ] = useState(false)
  return (
   
        <Container>
        <LogoImg src="/images/logo.svg" fill="white"></LogoImg>
        <ProductList>
            <a href="#">Model S</a>
            <a href="#">Model 3</a>
            <a href="#">Model X</a>
            <a href="#">Model y</a>
            <a href="#">Solar Roof</a>
            <a href="#">Solar Panels</a>
            <a href="#">Powerwalls</a>
        </ProductList>
        <MenuList>
            <a href="#">Shop</a>
            <a href="#">Account</a>
            <MenuIconStyled />            
        </MenuList>      
    </Container>   
  )
}

export default Header

const Container = styled.div`
    display : flex;
    min-height: 50px;
    width:100%;   
    position: fixed;;
    align-items: center;
    justify-content: space-around;
    padding: 10px 0   
`

const LogoImg = styled.img`
   
`
const ProductList = styled.div`
    display: flex;
    gap: 25px;   
    a{
        text-decoration: none;
        color: #fff;
        font-weight: 400;
        cursor: pointer
    }
`
const MenuList = styled(ProductList)`   
    align-items: center;   
`

const MenuIconStyled = styled(MenuIcon)`
    fill: white !important;
    &:hover{
        cursor: pointer
    }
`
const SideBar = styled.div`
    height: 100vh;
    background-color: #fff;
    width: 300px
`