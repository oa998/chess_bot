const StaticBehavior = require('./staticIndex');

const BLACK = 'black';
const WHITE = 'white';

const Pieces = {
    KING_WHITE: { 
        icon: '♔', 
        color: WHITE,
        getPossibleMoves: (pos, board) => StaticBehavior.KING.possibleMoves(WHITE, pos, board) 
    },
    QUEEN_WHITE: { 
        icon: '♕', 
        color: WHITE,
        getPossibleMoves: (pos, board) => StaticBehavior.QUEEN.possibleMoves(WHITE, pos, board)
    },
    ROOK_WHITE: { 
        icon: '♖', 
        color: WHITE,
        getPossibleMoves: (pos, board) => StaticBehavior.ROOK.possibleMoves(WHITE, pos, board)
    },
    BISHOP_WHITE: { 
        icon: '♗', 
        color: WHITE,
        getPossibleMoves: (pos, board) => StaticBehavior.BISHOP.possibleMoves(WHITE, pos, board)
    },
    KNIGHT_WHITE: { 
        icon: '♘', 
        color: WHITE,
        getPossibleMoves: (pos, board) => StaticBehavior.KNIGHT.possibleMoves(WHITE, pos, board)
    },
    PAWN_WHITE: { 
        icon: '♙', 
        color: WHITE,
        getPossibleMoves: (pos, board) => StaticBehavior.PAWN.possibleMoves(WHITE, pos, board)
    },
    KING_BLACK: { 
        icon: '♚', 
        color: BLACK,
        getPossibleMoves: (pos, board) => StaticBehavior.KING.possibleMoves(BLACK, pos, board)
    },
    QUEEN_BLACK: { 
        icon: '♛', 
        color: BLACK,
        getPossibleMoves: (pos, board) => StaticBehavior.QUEEN.possibleMoves(BLACK, pos, board)
    },
    ROOK_BLACK: { 
        icon: '♜', 
        color: BLACK,
        getPossibleMoves: (pos, board) => StaticBehavior.ROOK.possibleMoves(BLACK, pos, board)
    },
    BISHOP_BLACK: { 
        icon: '♝', 
        color: BLACK,
        getPossibleMoves: (pos, board) => StaticBehavior.BISHOP.possibleMoves(BLACK, pos, board)
    },
    KNIGHT_BLACK: { 
        icon: '♞', 
        color: BLACK,
        getPossibleMoves: (pos, board) => StaticBehavior.KNIGHT.possibleMoves(BLACK, pos, board)
    },
    PAWN_BLACK: { 
        icon: '♟', 
        color: BLACK,
        getPossibleMoves: (pos, board) => StaticBehavior.PAWN.possibleMoves(BLACK, pos, board)
    }
}

function getPossibleMoves(icon, pos, board){
    switch(icon){
        case '♙': return Pieces.PAWN_WHITE.getPossibleMoves(pos, board);
        case '♘': return Pieces.KNIGHT_WHITE.getPossibleMoves(pos, board);
        case '♗': return Pieces.BISHOP_WHITE.getPossibleMoves(pos, board);
        case '♖': return Pieces.ROOK_WHITE.getPossibleMoves(pos, board);
        case '♕': return Pieces.QUEEN_WHITE.getPossibleMoves(pos, board);
        case '♔': return Pieces.KING_WHITE.getPossibleMoves(pos, board);
        case '♟': return Pieces.PAWN_BLACK.getPossibleMoves(pos, board);
        case '♞': return Pieces.KNIGHT_BLACK.getPossibleMoves(pos, board);
        case '♝': return Pieces.BISHOP_BLACK.getPossibleMoves(pos, board);
        case '♜': return Pieces.ROOK_BLACK.getPossibleMoves(pos, board);
        case '♛': return Pieces.QUEEN_BLACK.getPossibleMoves(pos, board);
        case '♚': return Pieces.KING_BLACK.getPossibleMoves(pos, board);
        default: ['failed']
    }
}

module.exports = { 
    getPossibleMoves
}