const allItems = require ("../models/shopItems");

function getShop (req, res) {
    res.send(allItems.shop);
}

function postShop (req, res) {
    if (!req.body.name) {
        return res.status(400).json({
            error: "Item not found!"
        })
    };
    let newItem = {
        name: req.body.name,
        id: allItems.shop.length
    }
    allItems.shop.push(newItem);
    res.json(newItem)
}

function getShopItemById  (req, res) {
    const shopId = req.params.shopId;
    const item = allItems.shop[shopId];
    if (item) { res.json(item) }
    else {
        res.status(404).json({ error: " this item not exitst " })
    };

}

module.exports = {
    getShop,
    postShop,
    getShopItemById
}