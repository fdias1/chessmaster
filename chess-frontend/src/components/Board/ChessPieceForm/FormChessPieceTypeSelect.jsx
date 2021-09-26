import { Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux' 
import chessPieceActions from '../../../store/actions/chessPiece'
import ChessPieceTypeOption from './ChessPieceTypeOption'

const ChessPieceForm = (props) => {
    const type = useSelector(state => state.chessPiece.type)
    const dispatch = useDispatch()

    return (
        <Form.Group>
            <Form.Label for='type'>Type: </Form.Label>
            <select className="form-select"
                onChange={(e) => dispatch(chessPieceActions.setType(e.target.value))}
            >
                <option value='' hidden disabled selected={type === null}>Select...</option>
                <ChessPieceTypeOption value='pawn'>Pawn</ChessPieceTypeOption>
                <ChessPieceTypeOption value='rook'>Rook</ChessPieceTypeOption>
                <ChessPieceTypeOption value='knight'>Knight</ChessPieceTypeOption>
                <ChessPieceTypeOption value='bishop'>Bishop</ChessPieceTypeOption>
                <ChessPieceTypeOption value='queen'>Queen</ChessPieceTypeOption>
                <ChessPieceTypeOption value='king'>King</ChessPieceTypeOption>
            </select>
        </Form.Group>
    );
}
 
export default ChessPieceForm;