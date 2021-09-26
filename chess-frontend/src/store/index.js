import { createStore, combineReducers } from 'redux'
import chessPiece from './reducers/chessPiece'
import positions from './reducers/positions'
import app from './reducers/app'


const reducer = combineReducers({
    app,
    chessPiece, 
    positions 
})

export default createStore(reducer)