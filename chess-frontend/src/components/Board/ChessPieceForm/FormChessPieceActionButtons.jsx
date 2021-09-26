import { Row, Col } from 'react-bootstrap'
import { useSelector } from 'react-redux' 
import Btn from '../../Basics/Btn'
import useApi from '../../../utils/useApi'


const ChessPieceForm = (props) => {
    const pieceId = useSelector(state => state.chessPiece.pieceId)
    const api = useApi()

    const createHandler=() => {
        api.createChessPiece()
    }

    const updateHandler=() => {
        api.updateChessPiece()
    }

    const deleteHandler=() => {
        api.deleteChessPiece()
    }
    
    return (
        <Row>
            <Col>
                <div style={{visibility:pieceId === null ? 'visible' : 'hidden'}}>
                    <Btn onClick={createHandler}>Create</Btn>
                </div>
                <div style={{visibility:pieceId === null ? 'hidden' : 'visible'}}>
                    <Btn onClick={updateHandler} light >Update</Btn>
                </div>
                <div style={{visibility:pieceId === null ? 'hidden' : 'visible'}}>
                    <Btn onClick={deleteHandler} >Delete</Btn>
                </div>
            </Col>
        </Row>
    );
}
 
export default ChessPieceForm;