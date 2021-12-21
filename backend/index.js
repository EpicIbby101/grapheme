const express = require('express');
const cors = require('cors');
const Pusher = require("pusher");

const pusher = new Pusher({
    appId: "1320610",
    key: "7cedcee87f94c7e31247",
    secret: "f7b4adba3cc0124253c3",
    cluster: "eu",
    useTLS: true
  });
  
const app = express();

app.use(cors({
    origin: ['http://localhost:3000', 'http://localhost:8080', 'http:localhost:4200']
}));

app.use(express.json());

app.post('/api/v1/messages', async (req, res) => {
    await pusher.trigger('chat', 'message', {
        username: req.body.username,
        message: req.body.message
    });

    res.json([]);
})

console.log('listening on port 8000');
app.listen(8000);