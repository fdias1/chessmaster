import styled from 'styled-components'

const Btn = styled.div`
    height:60px;
    width:60px;
    cursor:pointer;
    transition:100ms;
    user-select:none;
    background-color:${props => props.light ? '#ffffff' : props.dark ? '#001219' : '#EE9B00'};
    display:flex;
    align-items:center;
    justify-content:center;
    &:hover {
        filter:brightness(80%);
    }
    &:active {
        filter:brightness(60%);
    }
    &.selected{
        background-color:#EE9B00;
    }
`

const SquareBtn = ({selected, piece, ...props}) => {
    return (
        <Btn className={"rounded m-2"} {...props} >
            {props.children}
        </Btn>
    );
}
 
export default SquareBtn;