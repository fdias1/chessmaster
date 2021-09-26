export default function mapChessPieces(pieceType, color){
    const map = {
        'pawn':'p',
        'rook':'r',
        'bishop':'b',
        'knight':'n',
        'queen':'q',
        'king':'k',
    }
    const type = map[pieceType] || ''

    return color === 'l' ? 
    type.toUpperCase() : 
    type.toLowerCase() 
}
