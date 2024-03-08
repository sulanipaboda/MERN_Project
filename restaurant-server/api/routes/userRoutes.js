const express = require("express");
const User = require("../models/User");
const router = express.Router();

const userController = require('../controllers/userControllers')
const verifyToken = require('../middleware/verifyToken')
const verifyAdmin = require('../middleware/verifyAdmin')

//get all menu items
router.get('/', verifyToken, verifyAdmin, userController.getAllUsers);
router.post('/', userController.createUser);
router.delete('/:id', userController.deleteUser);
router.get('/admin/:email', verifyToken, userController.getAdmin);
router.put('/admin/:id', verifyToken, verifyAdmin, userController.makeAdmin);

module.exports = router;