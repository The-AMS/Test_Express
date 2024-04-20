const express = require('express');

const app = express();

const PORT = 3000;

const shop = [
    { id: 0, name: 'concept1' },
    { id: 1, name: 'concept2' },
    { id: 2, name: 'concept3' }
];

app.use((req, res, next) => {
    const startTime = Date.now();
    next();
    const endTime = Date.now() - startTime;
    console.log(`${req.method} ${req.url} ${endTime}ms`)
});

app.get('/shop/:shopId', (req, res) => {
    const shopId = req.params.shopId;
    const item = shop[shopId];
    if (item) { res.json(item) }
    else {
        res.status(404).json({ error: " ERROR " })
    };

});

app.get('/', (req, res) => {
    res.send("Helloo from express");
});

app.get('/about', (req, res) => {
    res.send("About us tab")
});

app.get('/contact', (req, res) => {
    res.send(`Contact Us ${res}`)
})

app.get('/shop', (req, res) => {
    res.send(`Shop Tab`)
})



app.listen(PORT, () => {
    console.log(`Listening on Port ${PORT}`);
})


