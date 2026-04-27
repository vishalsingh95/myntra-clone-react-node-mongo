const express = require('express');
const {
  createOrder,
    getOrderById,
    updateOrderStatus,
    getUserOrders
} = require('../controllers/orderController');
const router = express.Router();
router.post('/', createOrder);
router.get('/:id', getOrderById);
router.put('/:id/status', updateOrderStatus);
router.get('/user/:userId', getUserOrders);
module.exports = router;