import { Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux' 
import chessPieceActions from '../../../store/actions/chessPiece'


const ChessPieceColorRadioButton = (props) => {
    const dispatch = useDispatch()
    const color = useSelector(state => state.chessPiece.color)

    return (
        <Form.Check
            name='color'
            type='radio'
            label={props.label}
            id={props.value}
            value={props.value}
            onClick={() => dispatch(chessPieceActions.setColor(props.value))}
            checked={color == props.value} />
    )
}

export default ChessPieceColorRadioButton;