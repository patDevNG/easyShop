const express = require('express');
const router = express.Router();
const PostControl = require('../controllers/post')


router.post('/post',PostControl.postContent );
router.get('/allpost',PostControl.getAllPost)

module.exports = router;