const { keepWalking } = require('./Collision');

module.exports = {
    possibleMoves: (color, pos, board) => {
        const possibleMoves = [];

        // up, up, right
        let move = { r: pos.r - 2, c: pos.c + 1, from: { r: pos.r, c: pos.c }, color }
        keepWalking(color, move, possibleMoves, board);
        // up, up, left
        move = { r: pos.r - 2, c: pos.c - 1, from: { r: pos.r, c: pos.c }, color }
        keepWalking(color, move, possibleMoves, board);
        // down, down, right
        move = { r: pos.r + 2, c: pos.c + 1, from: { r: pos.r, c: pos.c }, color }
        keepWalking(color, move, possibleMoves, board);
        // down, down, left
        move = { r: pos.r + 2, c: pos.c - 1, from: { r: pos.r, c: pos.c }, color }
        keepWalking(color, move, possibleMoves, board);
        // left, left, up
        move = { r: pos.r - 1, c: pos.c - 2, from: { r: pos.r, c: pos.c }, color }
        keepWalking(color, move, possibleMoves, board);
        // left, left, down
        move = { r: pos.r + 1, c: pos.c - 2, from: { r: pos.r, c: pos.c }, color }
        keepWalking(color, move, possibleMoves, board);
        // right, right, up
        move = { r: pos.r - 1, c: pos.c + 2, from: { r: pos.r, c: pos.c }, color }
        keepWalking(color, move, possibleMoves, board);
        // right, right, down
        move = { r: pos.r + 1, c: pos.c + 2, from: { r: pos.r, c: pos.c }, color }
        keepWalking(color, move, possibleMoves, board);

        return possibleMoves;
    }
}