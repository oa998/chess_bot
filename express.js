const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const port = 3000;

const { calculateBestMove } = require('./functions/minimax');

app.use(bodyParser.json({ type: 'application/json' }));
app.use(express.static(path.join(__dirname, 'static')));

app.all('/', (req, res) => {
    req.url = 'board.html';
    app.handle(req, res);
});

app.post('/move', (req, res) => {
    const board = req.body.board;
    const solution = calculateBestMove(board, 'white');
    res.status(200).json(solution);
})

app.listen(port, () => console.log(`running: ${port}!`))