export default { 
    setInitialPosition: payload => ({ type:'SET_INITIAL_POSITION', payload }),
    loadPositions: payload => ({ type:'LOAD_POSITIONS', payload }),
    resetPositions: () => ({ type:'RESET_POSITIONS' }),
    resetInitialPosition: () => ({ type:'RESET_INITIAL_POSITION' })
}