const express = require('express');
const productController = require('../../controllers/product');
const manufacturerController = require('../../controllers/manufacturer');

const router = express.Router();

router.get('/manufacturers', manufacturerController.all);

router.get('/products', productController.all);
router.get('/products/:id', productController.byId);
router.post('/products', productController.create);
router.put('/products:id', productController.update);
router.delete('/products:id', productController.remove);

module.exports = router;
