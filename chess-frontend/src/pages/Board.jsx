import React from 'react';
import useApi from '../utils/useApi';
import { Container, Row, Col } from 'react-bootstrap'
import ChessPieceSelector from '../components/Board/ChessPieceSelector';
import ChessPieceForm from '../components/Board/ChessPieceForm';
import ChessBoard from '../components/Board/ChessBoard';
import CalculatePositionsAction from '../components/Board/CalculatePositionsAction';
import { useSelector,useDispatch } from 'react-redux';
import positions from '../store/actions/positions'


const Board = (props) => {
    const api = useApi()
    const dispatch = useDispatch()
    const chessPiece = useSelector(state => state.chessPiece)
    const initialPosition = useSelector(state => state.positions.initialPosition)

    React.useEffect(() => {
        api.getChessPieces()
    },[])

    React.useEffect(() => {
        dispatch(positions.resetInitialPosition())
    },[chessPiece])

    React.useEffect(() => {
        dispatch(positions.resetPositions())
    },[chessPiece, initialPosition])
    
    return ( 
        <Container className="m-5">
            <ChessPieceSelector />
            <Row>
                <Col xs='12' xl='4'>
                    <ChessPieceForm />
                    <Row >
                        <Col>
                            <CalculatePositionsAction />
                        </Col>
                    </Row>
                </Col>
                <Col xs='12' xl='8' className="d-flex align-items-center justify-content-center">
                    <ChessBoard />
                </Col>
            </Row>
        </Container>   
    );
}
 
export default Board;
