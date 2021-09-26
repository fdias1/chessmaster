import axios from 'axios'

export function getPieces () {
    return axios.get('http://localhost:8000/chesspiece/')
    .then(fetch => fetch.data)
}

export function createChessPiece (chessPiece) {
    return axios.post('http://localhost:8000/chesspiece/', chessPiece)
    .then(fetch => fetch.data)
}

export function updateChessPiece (id, chessPiece) {
    return axios.put(`http://localhost:8000/chesspiece/${id}/`, chessPiece)
    .then(fetch => fetch.data)
}

export function deleteChessPiece (id) {
    return axios.delete(`http://localhost:8000/chesspiece/${id}/`)
    .then(fetch => fetch.data)
}

export function calcPositions (id, position) {
    return axios.get(`http://localhost:8000/position/${id}/${position}`)
    .then(fetch => fetch.data)
}