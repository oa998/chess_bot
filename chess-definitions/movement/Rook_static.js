const { keepWalking } = require('./Collision');

module.exports = {
    possibleMoves: (color, pos, board) => {
        const possibleMoves = [];

        // walk down
        let m = 1;
        while(true){
            let move = { r: pos.r + m, c: pos.c, from: { r: pos.r, c: pos.c }, color }
            if(!keepWalking(color, move, possibleMoves, board)){
                break;
            }
            m++;              
        }

        // walk up
        m = 1;
        while(true){
            let move = { r: pos.r - m, c: pos.c, from: { r: pos.r, c: pos.c }, color }
            if(!keepWalking(color, move, possibleMoves, board)){
                break;
            }
            m++;            
        }

        // walk right
        m = 1;
        while(true){
            let move = { r: pos.r, c: pos.c + m, from: { r: pos.r, c: pos.c }, color }
            if(!keepWalking(color, move, possibleMoves, board)){
                break;
            }
            m++;               
        }

        // walk left
        m = 1;
        while(true){
            let move = { r: pos.r, c: pos.c - m, from: { r: pos.r, c: pos.c }, color }
            if(!keepWalking(color, move, possibleMoves, board)){
                break;
            }
            m++;            
        }
        return possibleMoves;
    }
}