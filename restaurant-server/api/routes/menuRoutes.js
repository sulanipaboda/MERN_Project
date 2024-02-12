const express = require("express");
const Menu = require("../models/Menu");
const router = express.Router();

const mennuController = require('../controllers/menuControllers')

//get all menu items
router.get('/', mennuController.getAllmenuItems)

module.exports = router;