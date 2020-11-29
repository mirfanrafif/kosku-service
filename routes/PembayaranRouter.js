const express = require('express')
const router = express.Router()
const controller = require('../controllers/PembayaranController')

router.get('/', controller.index);
router.get('/:id', controller.findById);
router.post('/', controller.store);
router.put('/:id', controller.update);
router.delete('/:id', controller.destroy);
module.exports = router