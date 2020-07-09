const express = require('express');
const router = express.Router();
const path = require('path');
const webController = require(path.resolve(__dirname, '../controllers/webController'))

router.get('/', webController.index);

router.get('/nosotros', webController.nosotros);
router.get('/contact', webController.contact);

router.get('/register', webController.register);
router.get('/admin/items', webController.addItem);
router.get('/carrito', webController.carrito);
router.get('/categorias', webController.show);

module.exports = router