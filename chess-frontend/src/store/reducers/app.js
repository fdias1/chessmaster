const initialState = {
    loading:false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'SET_LOADING':
            return {
                loading:action.payload
            }
        case 'TOGGLE_LOADING':
            return {
                ...state,
                loading:!state.loading
            }
        default :
            return state
    }
}

