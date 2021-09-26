import Piece from 'react-chess-pieces';
import SquareBtn from '../../Basics/SquareBtn'


const Btn = ({color, selected, piece, ...props}) => {
    return (
        <SquareBtn light className={"rounded m-2 border border-dark " + (selected ? 'selected' : '')} {...props} >
            <Piece piece={piece} />
        </SquareBtn>
    );
}
 
export default Btn;