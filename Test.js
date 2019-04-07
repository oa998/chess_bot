const { calculateBestMove, calculateBoardValue } = require('./functions/minimax');
const GameFunctions = require('./chess-definitions/GameFunctions');

const board = GameFunctions.BOARD.create([ 
    [ '♖', '♘', '♗', '♔', '♕', '♗', '♘', '♖' ],
    [ '♙', '♙', '♙', '♙', '♙', '♙', '♙', '♙' ],
    [ ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
    [ ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
    [ ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
    [ ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
    [ '♟', '♟', '♟', '♟', '♟', '♟', '♟', '♟' ],
    [ '♜', '♞', '♝', '♚', '♛', '♝', '♞', '♜' ]
]);

// const bMove = calculateBestMove(board, 'white').move;
// const b = GameFunctions.BOARD.movePiece(bMove.from, { r: bMove.r, c: bMove.c }, board);
// console.log(b);
// console.log(calculateBoardValue(b))

function playTurns(turns){
    let currentTurn = 0;
    let player = 'white';
    let prevBoard = GameFunctions.BOARD.create(board);
    while(currentTurn < turns){
        const bestMove = calculateBestMove(prevBoard, player).move;
        let updatedBoard = GameFunctions.BOARD.movePiece(bestMove.from, { r: bestMove.r, c: bestMove.c }, prevBoard);
        console.log(`Turn ${currentTurn} || ${player}'s move || Board Value: ${calculateBoardValue(updatedBoard)}`)
        // console.log(bestMove);
        console.log(updatedBoard);
        console.log();
        prevBoard = GameFunctions.BOARD.create(updatedBoard);
        player = player === 'white' ? 'black' : 'white';
        currentTurn++;
    }
}

playTurns(20);