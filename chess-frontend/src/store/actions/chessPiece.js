export default { 
    setType: payload => ({ type:'SET_TYPE', payload }),
    setColor: payload => ({ type:'SET_COLOR', payload }),
    setPieceId: payload => ({ type:'SET_PIECE_ID', payload }),
    loadPieces: payload => ({ type:'LOAD_PIECES', payload }),
    resetForm: () => ({ type:'RESET_FORM' }),
}