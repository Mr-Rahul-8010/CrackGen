const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');

const { 
    handleQuestions, 
    handleMock 
} = require('../controller/subjectController');


router.get("/questions/:subject", auth, handleQuestions);

router.get("/mock/:subject", auth, handleMock);


module.exports = router;