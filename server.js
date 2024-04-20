
const express = require('express');

const app = express();

const PORT = 3001;

const friends = [
    { id: 0, firstName: 'Moein', lastName: 'Atfinding' },
    { id: 1, firstName: 'Ali', lastName: 'Jace' },
    { id: 2, firstName: 'George', lastName: 'Bliumng' }
];

app.use((req, res, next) => {
    const start = Date.now();
    next();
    const reqTime = Date.now() - start;
    console.log(`${req.method} ${req.url} ${reqTime}ms`);
})

app.get('/friends/:friendId', (req, res) => {
    const friendId = req.params.friendId;
    const item = friends[friendId];
    if (item) {
        res.json(item)
    } else {
        res.status(404).json({ error: "NOT FOUNNNDDddddd" });
    }
});

app.get('/', (req, res) => {
    res.send("Helloo from express");
});

app.get('/friends', (req, res) => {
    res.send(friends);
});

app.post('/friends',(req,res)=>{

})
app.listen(PORT, () => {
    console.log(`Listening on Port ${PORT}`);
});

