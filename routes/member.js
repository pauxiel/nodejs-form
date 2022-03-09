const path = require('path');

const express = require('express');

const membersController = require('../controllers/members');

const router = express.Router();

// /add-member => GET
router.get('/add-member', membersController.getAddMember);



// /add-member => POST
router.post('/add-member', membersController.postAddMember);




module.exports = router;