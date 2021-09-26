import { Form } from 'react-bootstrap'
import ChessPieceColorRadioButton from './ChessPieceColorRadioButton'

const ChessPieceForm = (props) => {

    return (
        <Form.Group className='mt-3'>
            <Form.Label>Color: </Form.Label>
            <ChessPieceColorRadioButton
                name='color'
                type='radio'
                label='Light'
                value='l'
            />
            <ChessPieceColorRadioButton
                name='color'
                type='radio'
                label='Dark'
                value='d'
            />
        </Form.Group>
    );
}
 
export default ChessPieceForm;