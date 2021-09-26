import styled from 'styled-components'
import Piece from 'react-chess-pieces'
import { useDispatch, useSelector } from 'react-redux'
import positionsActions from '../../../store/actions/positions'
import mapChessPieceTypes from '../../../utils/mapChessPieces'

const Square = styled.td`
    cursor:pointer;
    text-align:center;
    user-select:none;
    &.light{
        background-color:#ccc;
    }
    &.dark{
        background-color:#EE9B00;
    }
    &.light:hover, &.dark:hover{
        filter:brightness(80%)
    }
    &.light:active, &.dark:active{
        filter:brightness(60%)
    }
`

const Dot = styled.div`
    border-radius:50%;
    width:20px;
    height:20px;
    background-color:#ffffff;
`

const ChessBoard = ({coordinates, ...props}) => {
    const dispatch = useDispatch()
    const initialPosition = useSelector(state => state.positions.initialPosition)
    const positions = useSelector(state => state.positions.positions)
    const chessPiece = useSelector(state => state.chessPiece)

    const setCoordinatesHandler = () => {
        if(initialPosition !== coordinates && chessPiece.pieceId !== null) {
            dispatch(positionsActions.setInitialPosition(coordinates))
        } else {
            dispatch(positionsActions.resetInitialPosition())

        }
    }

    
    const pieceType = mapChessPieceTypes(chessPiece.type, chessPiece.color)

    return (
        <Square {...props} onClick={setCoordinatesHandler}>
            {
                initialPosition === coordinates && chessPiece.pieceId !== null &&
                <Piece piece={pieceType} />
                ||
                positions.includes(coordinates) && 
                <Dot className="mx-auto"></Dot>
            }
        </Square>
    );
}
 
export default ChessBoard;