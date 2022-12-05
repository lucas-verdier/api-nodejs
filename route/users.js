const express = require('express');
const { insertUser, getAllUsers } = require("../controller/userController");
const router = express.Router();

router.route('/users').post(insertUser);
router.route('/users').get(getAllUsers);

module.exports = router;