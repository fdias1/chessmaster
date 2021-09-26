const initialState = {
    type:null,
    color:null,
    pieceId:null,
    pieces:[]
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'SET_TYPE':
            return {
                ...state,
                type:action.payload
            }
        case 'SET_COLOR':
            return {
                ...state,
                color:action.payload
            }
        case 'SET_PIECE_ID':
            return {
                ...state,
                pieceId:action.payload,
            }
        case 'RESET_FORM':
            return {
                ...state,
                type:null,
                color:null,
                pieceId:null,
            }
        case 'LOAD_PIECES':
            return {
                ...state,
                pieces:action.payload
            }

        default :
            return state
    }
}

