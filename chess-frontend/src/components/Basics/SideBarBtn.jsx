import React from 'react';
import styled from 'styled-components'
import { Link, useLocation } from 'react-router-dom'

const Button = styled.li`
    border-right: 5px solid ${props => props.active ? '#EE9B00' : 'transparent'};
    padding:10px 0;
    transition:300ms;
    color:#fff !important;
    &:hover {
        border-color:#EE9B00;
    }
`

const SideBarBtn = ({link, label, ...props}) => {
    const location = useLocation()

    return ( 
        <Link to={link}>
            <Button active={location.pathname == `/${link}`}>
                {label}
            </Button>  
        </Link>
    );
}
 
export default SideBarBtn;