import { useDispatch, useSelector } from 'react-redux'
import * as api from '../services/api'
import app from '../store/actions/app'
import chessPiece from '../store/actions/chessPiece'
import positions from '../store/actions/positions'

export default () => {
    const dispatch = useDispatch()
    const state = useSelector(state => state)
    return ({

    async getChessPieces() {
        try {
            dispatch(app.setLoading(true))
            dispatch(chessPiece.loadPieces([]))
            const pieces = await api.getPieces()
            if(pieces) dispatch(chessPiece.loadPieces(pieces))
        } catch(err) {
            alert(err.message)
        } finally {
            dispatch(app.setLoading(false))
        }
    },

    async createChessPiece() {
        try {
            if (!state.chessPiece.type || !state.chessPiece.color) throw new Error('You have to fill all fields to create a new chess piece')
            dispatch(app.setLoading(true))
            await api.createChessPiece(state.chessPiece)
            dispatch(chessPiece.resetForm())
            const pieces = await api.getPieces()
            if(pieces) dispatch(chessPiece.loadPieces(pieces))
        } catch(err) {
            alert(err.message)
        } finally {
            dispatch(app.setLoading(false))
        }
    },

    async updateChessPiece() {
        try {
            if (!state.chessPiece.type || !state.chessPiece.color) throw new Error('You have to fill all fields to update a chess piece')
            dispatch(app.setLoading(true))
            await api.updateChessPiece(state.chessPiece.pieceId, state.chessPiece)
            const pieces = await api.getPieces()
            if(pieces) dispatch(chessPiece.loadPieces(pieces))
        } catch(err) {
            alert(err.message)
        } finally {
            dispatch(app.setLoading(false))
        }
    },
    async deleteChessPiece() {
        try {
            if (!state.chessPiece.pieceId) throw new Error('You have select a piece to delete')
            dispatch(app.setLoading(true))
            await api.deleteChessPiece(state.chessPiece.pieceId)
            dispatch(chessPiece.resetForm())
            const pieces = await api.getPieces()
            if(pieces) dispatch(chessPiece.loadPieces(pieces))
        } catch(err) {
            alert(err.message)
        } finally {
            dispatch(app.setLoading(false))
        }
    },
    async calcPositions() {
        try {
            if (!state.chessPiece.pieceId || !state.positions.initialPosition) throw new Error('You have select a piece and a initial position to calculate')
            dispatch(app.setLoading(true))
            const calcPositions = await api.calcPositions(state.chessPiece.pieceId, state.positions.initialPosition)
            if (calcPositions) dispatch(positions.loadPositions(calcPositions))
        } catch(err) {
            alert(err.message)
        } finally {
            dispatch(app.setLoading(false))
        }
    }
})}