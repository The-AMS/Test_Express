const express = require('express');

const shopController = require ("./controllers/shop.controller")

const app = express();

const PORT = 3000;

app.use((req, res, next) => {
    const startTime = Date.now();
    next();
    const endTime = Date.now() - startTime;
    console.log(`${req.method} ${req.url} ${endTime}ms`)
});

app.use(express.json());

app.get('/', (req, res) => {
    res.send("Helloo from express");
});

app.get('/about', (req, res) => {
    res.send("About us tab")
});

app.get('/contact', (req, res) => {
    res.send(`Contact Us`)
})

//get Item by ID 
app.get('/shop/:shopId',shopController.getShopItemById);

//get Shop Controller 
app.get('/shop',shopController.getShop )

//post Shop Controller
app.post('/shop',shopController.postShop )

app.put('/shop/:shopId', (req, res) => {

    const item = shop[parseInt(req.params.shopId)];

    if (!item) {
        return res.status(404).json({
            error: "item Not Found..."
        });
    }
    if (!req.body.name) {
        return res.status(404).json({
            error: "Your item us empty, try again..."
        });
    }

    item.name = req.body.name;

    res.send(item);


});

app.delete('/shop/:shopId', (req, res) => {

    const item = shop.find(f => f.id === parseInt(req.params.shopId));

    if (!item) res.status(404).json({
        error: "item Not Found..."
    });

    const itemIndex = shop.indexOf(item);

    shop.splice(itemIndex, 1);


    res.send(item);


});


app.listen(PORT, () => {
    console.log(`Listening on Port ${PORT}`);
})


