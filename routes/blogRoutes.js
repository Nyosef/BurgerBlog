const express = require('express');
const blogController = require('../controllers/blogController');
// We created a router that we can use now, did this in order to seperate the routes to different files
const router = express.Router();


//blog routes - easier to read like this - and update after. all logic in blogController.js

router.get('/create',blogController.blog_create_get);
router.get('/',blogController.blog_index);
// we can use req.body because of express- url encoded that was added
router.post('/', blogController.blog_create_post);
// basically we will render the details view - 
router.get('/:id',blogController.blog_details)
router.delete('/:id',blogController.blog_delete);

// exporting the router so we can use it in other places
module.exports = router;