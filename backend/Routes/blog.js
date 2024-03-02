const express = require('express');
const BlogController = require('../Controllers/BlogController');
const { body } = require('express-validator');
const handleErrorMessage = require('../Middlewares/handleErrorMessage');
const router = express.Router();

router.get('',BlogController.getBlogs)
router.post('',[
    body('title').notEmpty(),
    body('description').notEmpty(),
    body('category').notEmpty().isArray({min:2}),
    body('imageUrl').notEmpty(),
    handleErrorMessage
],BlogController.create)
router.get('/:id',BlogController.read)
router.patch('/:id',BlogController.update)
router.delete('/:id',BlogController.delete)
module.exports = router;