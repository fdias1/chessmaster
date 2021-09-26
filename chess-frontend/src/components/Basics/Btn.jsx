import Piece from 'react-chess-pieces';
import styled from 'styled-components'

const BtnBody = styled.div`
    cursor:pointer;
    transition:100ms;
    user-select:none;
    background-color:${props => props.light ? '#ffffff' : props.dark ? '#001219' : '#EE9B00'};
    color:${props => props.light ? '#000000' : props.dark ? '#ffffff' : '#000000'};
    font-weight:bold;
    display:flex;
    align-items:center;
    justify-content:center;
    &:hover {
        filter:brightness(80%);
    }
    &:active {
        filter:brightness(60%);
    }
`

const Btn = ({selected, piece, ...props}) => {
    return (
        <BtnBody className="rounded m-2 px-3" {...props} >
            { props.children }
        </BtnBody>
    );
}
 
export default Btn;