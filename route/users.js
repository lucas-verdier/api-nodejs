const express = require('express');
const { insertUser, getAllUsers, getOneUserById, login, deleteUser, getUsersByGroup } = require("../controller/userController");
const router = express.Router();

router.route('/users').post(insertUser);
router.route('/users').get(getAllUsers);
router.route('/users/:id').get(getOneUserById);
router.route('/connect').post(login);
router.route('/delete/:id').delete(deleteUser);
router.route('/users/group/:id').get(getUsersByGroup);

module.exports = router;