import React from 'react';
import SideBar from './SideBar';
import Header from './Header';
import Logo from './Logo';
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import Loading from './Loading'

const Grid = styled.div`
    display:grid;
    width:100vw;
    height:100vh;
    grid-template-columns:200px 1fr;
    grid-template-rows: 150px 1fr;
    grid-template-areas: 
    "logo   header"
    "aside  content";
`

const Content = styled.div`
    grid-area:content;
    background-color:#001219;
`

const LogoContainer = styled.div`
    grid-area:logo;
    background-color:#000000;
`

const MainLayout = (props) => {
    const loading = useSelector(state => state.app.loading)
    return (
        <Grid>
            <Loading loading={loading}/>
            <LogoContainer className="d-flex align-items-center justify-content-center">
                <Logo/>
            </LogoContainer>
            <Header/>
            <SideBar/>
            <Content className="d-flex align-items-start justify-content-center p-3">
                {props.children}
            </Content>
        </Grid> 
    );
}
 
export default MainLayout;