const { keepWalking } = require('./Collision');

module.exports = {
    possibleMoves: (color, pos, board) => {
        const possibleMoves = [];

        // walk south-west
        let move = { r: pos.r + 1, c: pos.c - 1, from: { r: pos.r, c: pos.c }, color }
        keepWalking(color, move, possibleMoves, board);
        
        // walk north-east
        move = { r: pos.r - 1, c: pos.c + 1, from: { r: pos.r, c: pos.c }, color }
        keepWalking(color, move, possibleMoves, board);

        // walk south-east
        move = { r: pos.r + 1, c: pos.c + 1, from: { r: pos.r, c: pos.c }, color }
        keepWalking(color, move, possibleMoves, board);

        // walk north-west
        move = { r: pos.r - 1, c: pos.c - 1, from: { r: pos.r, c: pos.c }, color }
        keepWalking(color, move, possibleMoves, board);

        // walk down
        move = { r: pos.r + 1, c: pos.c, from: { r: pos.r, c: pos.c }, color }
        keepWalking(color, move, possibleMoves, board);

        // walk up
        move = { r: pos.r - 1, c: pos.c, from: { r: pos.r, c: pos.c }, color }
        keepWalking(color, move, possibleMoves, board);

        // walk right
        move = { r: pos.r, c: pos.c + 1, from: { r: pos.r, c: pos.c }, color }
        keepWalking(color, move, possibleMoves, board);

        // walk left
        move = { r: pos.r, c: pos.c - 1, from: { r: pos.r, c: pos.c }, color }
        keepWalking(color, move, possibleMoves, board);
        return possibleMoves;
    }
}