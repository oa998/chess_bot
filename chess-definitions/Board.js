
const { BLACK_PIECES, WHITE_PIECES } = require('../chess-definitions/board-evaluation/Icons');

function create(grid){
    if(!grid){
        return [ 
            [ '♖', '♘', '♗', '♔', '♕', '♗', '♘', '♖' ],
            [ '♙', '♙', '♙', '♙', '♙', '♙', '♙', '♙' ],
            [ ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
            [ ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
            [ ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
            [ ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
            [ '♟', '♟', '♟', '♟', '♟', '♟', '♟', '♟' ],
            [ '♜', '♞', '♝', '♚', '♛', '♝', '♞', '♜' ]
        ];
    }else{
        return JSON.parse(JSON.stringify(grid));
    }
}

function getWhitePieces(board){
    return board.reduce((a, row, r) => {
        row.forEach((icon, c) => {
            if(WHITE_PIECES.includes(icon)){
                a.push({ r, c, icon });
            }
        });
        return a;
    }, [])
}

function getBlackPieces(board){
    return board.reduce((a, row, r) => {
        row.forEach((icon, c) => {
            if(BLACK_PIECES.includes(icon)){
                a.push({ r, c, icon });
            }
        });
        return a;
    }, [])
}

function movePiece(startPos, endPos, board){
    const updated = create(board);
    updated[endPos.r][endPos.c] = board[startPos.r][startPos.c];
    updated[startPos.r][startPos.c] = ' ';
    return updated;
}

module.exports = { 
    create, 
    getWhitePieces,
    getBlackPieces,
    movePiece
 };