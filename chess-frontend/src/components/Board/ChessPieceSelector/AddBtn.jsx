import styled from 'styled-components'
import SquareBtn from '../../Basics/SquareBtn'

const Label = styled.span`
    font-weight:bold;
`
const PieceBtn = (props) => {
    return (
        <SquareBtn {...props} >
            <Label>Add</Label>
        </SquareBtn>
    );
}
 
export default PieceBtn;