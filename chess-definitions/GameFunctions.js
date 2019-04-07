const { getPossibleMoves } = require('./movement/PieceMovement');
const Board = require('./Board');

module.exports = {
    MOVE: { getPossibleMoves },
    BOARD: Board
}