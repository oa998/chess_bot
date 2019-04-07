
const { getIconValue } = require('../chess-definitions/board-evaluation/Icons');
const GameFunctions = require('../chess-definitions/GameFunctions');

function calculateBoardValue(board){
    let value = 0;
    for(let i = 0; i < 8; i++){
        for(let j = 0; j < 8; j++){
            value += getIconValue(board[i][j], { r: i, c: j });
        }
    }
    return value;
}

// this is the function used to get the move needed
function calculateBestMove(board, color){
    const LAST_COLOR = color === 'white' ? 'black' : 'white';
    const ROOT = { id: '0', color: LAST_COLOR };
    const moves = getAllAvailableMoves(board, color, ROOT);
    const DEPTH = 4;
    let COUNT = { count: 0 };
    shuffle(moves);
    let rootMap = moves.reduce((dict, move) => {
        dict[move.id] = move;
        return dict;
    }, {});
    const start = new Date().getTime();
    const bestLeaf = minimax(board, DEPTH, ROOT, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER, color !== 'white', rootMap, COUNT);
    const seconds = (new Date().getTime() - start) / 1000;
    const key = bestLeaf.id.split('-').filter((_, i) => i < 2).join('-');
    const choice = rootMap[key];
    const solution = {
        move: choice,
        previousBoard: board,
        suggestedBoard: GameFunctions.BOARD.movePiece(choice.from, { r: choice.r, c: choice.c }, board),
        seconds,
        boardPositions: COUNT.count
    }
    return solution;
}

function minimax(board, depth, parentNode, alpha, beta, isMax, rootMap, count) {
    if (depth === 0) {
        return parentNode;
    }

    const color = parentNode.color === 'white' ? 'black' : 'white';
    let movesForThisLayer;
    if(rootMap){
        movesForThisLayer = Object.values(rootMap);
    }else{
        movesForThisLayer = getAllAvailableMoves(board, color, parentNode);
        shuffle(movesForThisLayer);
    }

    if (isMax) {
        let bestMove = { id: 'min-infin', value: Number.MIN_SAFE_INTEGER };
        for (let i = 0; i < movesForThisLayer.length; i++) {
            count.count++;
            const updatedBoard = GameFunctions.BOARD.movePiece(movesForThisLayer[i].from, { r:  movesForThisLayer[i].r, c:  movesForThisLayer[i].c }, board);
            movesForThisLayer[i].value = calculateBoardValue(updatedBoard);
            const bestMoveBranch = minimax(updatedBoard, depth - 1, movesForThisLayer[i], alpha, beta, false, null, count);

            bestValue = Math.max(bestMoveBranch.value, bestMove.value);
            if(bestValue === bestMoveBranch.value){
                bestMove = bestMoveBranch;
            }
            alpha = Math.max(alpha, bestValue);
          	if (beta <= alpha) {
                return bestMove;
            }
        }
        return bestMove;
    } else {
        let bestMove = { id: 'max-infin', value: Number.MAX_SAFE_INTEGER };
        for (let i = 0; i < movesForThisLayer.length; i++) {
            count.count++;
            const updatedBoard = GameFunctions.BOARD.movePiece(movesForThisLayer[i].from, { r:  movesForThisLayer[i].r, c:  movesForThisLayer[i].c }, board);
            movesForThisLayer[i].value = calculateBoardValue(updatedBoard);
            const bestMoveBranch = minimax(updatedBoard, depth - 1, movesForThisLayer[i], alpha, beta, true, null, count);

            bestValue = Math.min(bestMoveBranch.value, bestMove.value);
            if(bestValue === bestMoveBranch.value){
                bestMove = bestMoveBranch;
            }
            beta = Math.min(beta, bestMove);
            if (beta <= alpha) {
                return bestMove;
            }
        }
        return bestMove;
    }
};

function getAllAvailableMoves(board, color, parentMove){
    let moves;
    if(color === 'white'){
        moves = GameFunctions.BOARD.getWhitePieces(board)
            .map(piece => {
                return GameFunctions.MOVE.getPossibleMoves(piece.icon, piece, board);
            })
            .reduce((allMoves, pieceMoves, pi) => {
                // pi is the index of the moves, corresponding to a specific piece
                pieceMoves.forEach((mv, index) => {
                    // index is the index of a specific move
                    const id = `${parentMove.id}-${pi.toString(36)}${index.toString(36)}`
                    // give each move a unique id to help choose a move once a branch is chosen
                    mv.id = id;
                })
                allMoves = allMoves.concat(pieceMoves);
                return allMoves;
            }, []);
    }else{
        moves = GameFunctions.BOARD.getBlackPieces(board)
            .map(piece => {
                return GameFunctions.MOVE.getPossibleMoves(piece.icon, piece, board);
            })
            .reduce((allMoves, pieceMoves, pi) => {
                // pi is the index of the moves, corresponding to a specific piece
                pieceMoves.forEach((mv, index) => {
                    // index is the index of a specific move
                    const id = `${parentMove.id}-${pi.toString(36)}${index.toString(36)}`
                    // give each move a unique id to help choose a move once a branch is chosen
                    mv.id = id;
                })
                allMoves = allMoves.concat(pieceMoves);
                return allMoves;
            }, []);
    }
    return moves;
}

function shuffle(array) {
    let counter = array.length;

    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
        let index = Math.floor(Math.random() * counter);

        // Decrease counter by 1
        counter--;

        // And swap the last element with it
        let temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }

    return array;
}

module.exports = { calculateBestMove, calculateBoardValue }
