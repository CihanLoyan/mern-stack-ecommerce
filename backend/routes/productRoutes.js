const express = require('express');
const router = express.Router();

const {getAllProducts, getProductById} = require('../controller/productControllers');

// GET /api/products
router.get('/', getAllProducts);

// GET /api/products/:id
router.get('/:id', getProductById);

module.exports = router;