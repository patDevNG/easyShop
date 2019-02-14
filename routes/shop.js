const express = require('express')
const router = express.Router();
const formidable =require('formidable');

const ShopController = require('../controllers/shop');



router.get('/addshop',ShopController.addShop);

router.get('/shop',ShopController.shop);

router.get('/allshop', ShopController.allShops);

module.exports = router;