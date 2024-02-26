const express = require("express");
const User = require("../models/User");
const router = express.Router();

const userController = require('../controllers/userControllers')

//get all menu items
router.get('/', userController.getAllUsers)

module.exports = router;