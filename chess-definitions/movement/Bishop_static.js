const { keepWalking } = require('./Collision');

module.exports = {
    possibleMoves: (color, pos, board) => {
        const possibleMoves = [];

        // walk south-west
        let m = 1;
        while(true){
            let move = { r: pos.r + m, c: pos.c - m, from: { r: pos.r, c: pos.c }, color }
            if(!keepWalking(color, move, possibleMoves, board)){
                break;
            }
            m++;              
        }
        
        // walk north-east
        m = 1;
        while(true){
            let move = { r: pos.r - m, c: pos.c + m, from: { r: pos.r, c: pos.c }, color }
            if(!keepWalking(color, move, possibleMoves, board)){
                break;
            }
            m++;            
        }

        // walk south-east
        m = 1;
        while(true){
            let move = { r: pos.r + m, c: pos.c + m, from: { r: pos.r, c: pos.c }, color }
            if(!keepWalking(color, move, possibleMoves, board)){
                break;
            }
            m++;               
        }

        // walk north-west
        m = 1;
        while(true){
            let move = { r: pos.r - m, c: pos.c - m, from: { r: pos.r, c: pos.c }, color }
            if(!keepWalking(color, move, possibleMoves, board)){
                break;
            }
            m++;            
        }
        return possibleMoves;
    }
}