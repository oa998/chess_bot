const { pawnGrid } = require('./Pawn_locationGrid');
const { knightGrid } = require('./Knight_locationGrid');
const { bishopGrid } = require('./Bishop_locationGrid');
const { rookGrid } = require('./Rook_locationGrid');
const { queenGrid } = require('./Queen_locationGrid');
const { kingGridMid } = require('./King_locationGrid_midgame');
const { kingGridEnd } = require('./King_locationGrid_endgame');

module.exports = {
    PAWN: pawnGrid,
    KNIGHT: knightGrid,
    BISHOP: bishopGrid,
    ROOK: rookGrid,
    QUEEN: queenGrid,
    KING_MID: kingGridMid,
    KING_END: kingGridEnd
}