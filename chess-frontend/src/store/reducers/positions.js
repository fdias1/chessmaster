const initialState = {
    initialPosition:null,
    positions:[],
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'SET_INITIAL_POSITION':
            return {
                ...state,
                initialPosition:action.payload
            }
        case 'LOAD_POSITIONS':
            return {
                ...state,
                positions:action.payload
            }     
        case 'RESET_POSITIONS':
            return {
                ...state,
                positions:[]
            }   
        case 'RESET_INITIAL_POSITION':
            return {
                ...state,
                initialPosition:null
            }  
        default :
            return state
    }
}

