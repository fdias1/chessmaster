import React from 'react';
import styled from 'styled-components'
import SideBarBtn from '../Basics/SideBarBtn';

const Aside = styled.aside`
    background-color:#000000;
    grid-area:aside;
`

const SideBar = (props) => {

    return ( 
        <Aside className="fixed-left py-5">
            <ul>
                {[
                    {link:'home', label:'Home'}, 
                    {link:'board', label:'Board'}, 
                    {link:'about', label:'About app'}, 
                ]
                .map((el, index) => (
                    <SideBarBtn key={index} {...el} />
                ))}
            </ul>
        </Aside>
    );
}
 
export default SideBar;