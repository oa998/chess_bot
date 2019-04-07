const { isPiece, getIconColor } = require('../board-evaluation/Icons');
const { offBoard } = require('./Collision');

module.exports = {
    possibleMoves: (color, pos, board) => {
        const possibleMoves = [];
        let m = 0;
        let max = 1;
        let collision = false;

        // allow 2 moves if they are on the starting row
        if((pos.r === 6 && color === 'black') || (pos.r === 1 && color === 'white')){
            max = 2;
        }

        while(m < max && !collision){
            m += 1; 
            const move = color === 'white' ? 
                { r: pos.r + m, c: pos.c, from: { r: pos.r, c: pos.c }, color}
                :
                { r: pos.r - m, c: pos.c, from: { r: pos.r, c: pos.c }, color};

            if(offBoard(move.r, move.c)){
                continue;
            }
            // if there is no icon here, this is a valid place
            if(!isPiece(board[move.r][move.c])){
                possibleMoves.push(move);
            }else{
                collision = true;
            }
        }

        m = color === 'white' ? 1 : -1;
        // try to capture 
        let move = { r: pos.r + m, c: pos.c + 1, from: { r: pos.r, c: pos.c }, color};
        if(!offBoard(move.r, move.c) && isPiece(board[move.r][move.c]) && getIconColor(board[move.r][move.c]) !== color){
            possibleMoves.push(move);
        }
        move = { r: pos.r + m, c: pos.c - 1, from: { r: pos.r, c: pos.c }, color};
        if(!offBoard(move.r, move.c) && isPiece(board[move.r][move.c]) && getIconColor(board[move.r][move.c]) !== color){
            possibleMoves.push(move);
        }

        return possibleMoves;
    }
}