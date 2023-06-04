import styled from "styled-components";
import { Link } from "react-router-dom"
export const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #757575;
    padding-bottom : 15px   
`
export const Logo = styled.div`
    display: flex;
    align-items:center;
    gap: 15px;
    cursor: pointer
`

export const UserActions = styled.div`
    display: flex;
    gap: 20px;
`

export const Icons = styled(Link)`
    height: 25px;
    width : 25px;
    cursor: pointer;
    color : black !important`




