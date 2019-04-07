const LocationValues = require('./LocationValues');

const BLACK = 'black';
const WHITE = 'white';
const WHITE_PIECES = ['♔', '♕', '♖', '♗', '♘', '♙'];
const BLACK_PIECES = ['♚', '♛', '♜', '♝', '♞', '♟'];
const ALL_PIECES = WHITE_PIECES.concat(BLACK_PIECES);

function getIconColor(icon){
    if(BLACK_PIECES.includes(icon)){
        return BLACK;
    }else if(WHITE_PIECES.includes(icon)){
        return WHITE;
    }
}

function getIconValue(icon, pos){
    switch(icon){
        case '♟': return 100 - LocationValues.PAWN[7-pos.r][7-pos.c];
        case '♞': return 320 - LocationValues.KNIGHT[7-pos.r][7-pos.c];;
        case '♝': return 330 - LocationValues.BISHOP[7-pos.r][7-pos.c];;
        case '♜': return 500 - LocationValues.ROOK[7-pos.r][7-pos.c];;
        case '♛': return 900 - LocationValues.QUEEN[7-pos.r][7-pos.c];;
        case '♚': return 20000 - LocationValues.KING_MID[7-pos.r][7-pos.c];;
        case '♙': return -100 + LocationValues.PAWN[pos.r][pos.c];
        case '♘': return -320 + LocationValues.KNIGHT[pos.r][pos.c];
        case '♗': return -330 + LocationValues.BISHOP[pos.r][pos.c];
        case '♖': return -500 + LocationValues.ROOK[pos.r][pos.c];
        case '♕': return -900 + LocationValues.QUEEN[pos.r][pos.c];
        case '♔': return -20000 + LocationValues.KING_MID[pos.r][pos.c];
        default: return 0
    }
}

function isPiece(icon){
    return ALL_PIECES.includes(icon);
}

module.exports = {
    WHITE_PIECES,
    BLACK_PIECES,
    ALL_PIECES,
    getIconColor,
    getIconValue,
    isPiece
}