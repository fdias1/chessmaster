import React from 'react';
import { Row, Col } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import chessPieceActions from '../../../store/actions/chessPiece'
import PieceBtn from './PieceBtn';
import AddBtn from './AddBtn';
import mapChessPieceTypes from '../../../utils/mapChessPieces'

const Board = (props) => {
    const avaiableChessPieces = useSelector(state => state.chessPiece.pieces)
    const selectedPiece = useSelector(state => state.chessPiece.pieceId)
    const dispatch = useDispatch()

    const selectPieceHandle = (piece) => {
        if (piece.id !== selectedPiece) {
            dispatch(chessPieceActions.setPieceId(piece.id))
            dispatch(chessPieceActions.setType(piece.type))
            dispatch(chessPieceActions.setColor(piece.color))
        } else {
            dispatch(chessPieceActions.resetForm())
        }
    }
    
    const addPieceHandleBtn = () => {
        dispatch(chessPieceActions.resetForm())
    }

    return ( 
        <Row>
            <Col className="rounded p-2 bg-light px-3">
                <Row >
                    <Col className="pt-3 px-4">
                        <h3 style={{color:'#001219'}}>Your pieces:</h3>
                    </Col>
                </Row>
                <Row>
                    <Col xs='12' className="d-flex flex-row rounded p-2 bg-light px-3 flex-wrap">
                        {avaiableChessPieces.map((el, index) => (
                            <PieceBtn 
                                piece={mapChessPieceTypes(el.type, el.color)} 
                                selected={el.id === selectedPiece}
                                onClick={() => selectPieceHandle(el)}
                            />
                        ))}
                        <AddBtn onClick={() => addPieceHandleBtn()}/>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
}
 
export default Board;
