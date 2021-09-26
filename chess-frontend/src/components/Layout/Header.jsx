import React from 'react';
import styled from 'styled-components'

const HeaderContainer = styled.header`
    background-color:#EE9B00;
    grid-area:header;
    display:flex;
    align-items:center;
    justify-content:start;
`

const Title = styled.h1`
    color:#001219 !important;
` 
const Header = (props) => {
    return ( 
        <HeaderContainer className="p-3 px-5">
            <Title className="display-4">ChessMaster.com</Title>
        </HeaderContainer>
    );
}
 
export default Header;