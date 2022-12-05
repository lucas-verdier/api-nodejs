const express = require('express');
const { insertGroup, getAllGroups } = require('../controller/groupController');
const router = express.Router();

router.route('/groups').post(insertGroup);
router.route('/groups').get(getAllGroups);

module.exports = router;
