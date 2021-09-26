import { Form } from 'react-bootstrap'
import Btn from '../Basics/Btn'
import useApi from '../../utils/useApi'

const ChessPieceForm = (props) => {
    const api = useApi()

    const calcPositionsHandler=() => {
        api.calcPositions()
    }

    return (
        <Form.Group className="p-3 border border-light rounded my-3" >
            <Form.Label>
                Calculate possible positions after two moves:
            </Form.Label>
            <Btn onClick={calcPositionsHandler}>
                Calculate
            </Btn>
        </Form.Group>
    );
}
 
export default ChessPieceForm;