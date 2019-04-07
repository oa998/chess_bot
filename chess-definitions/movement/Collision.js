const { isPiece, getIconColor } = require('../board-evaluation/Icons');

function offBoard(r, c){
    return (r < 0 || r > 7 || c < 0 || c > 7);
}

function keepWalking(color, move, possibleMoves, board){
    if( offBoard(move.r, move.c) ){ return false; }
    if(!isPiece(board[move.r][move.c])){
        possibleMoves.push(move);
        return true;
    }else if(getIconColor(board[move.r][move.c]) !== color){
        possibleMoves.push(move);
        return false;
    }else if(getIconColor(board[move.r][move.c]) === color){
        return false;
    }
    return false;
}

module.exports = {
    offBoard,
    keepWalking
}