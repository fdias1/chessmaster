import { useSelector } from 'react-redux' 

const ChessPieceTypeOption = (props) => {
    const type = useSelector(state => state.chessPiece.type)

    return (
        <option
            value={props.value}
            selected={type == props.value} >
            {props.children}
        </option>
    )
}

export default ChessPieceTypeOption