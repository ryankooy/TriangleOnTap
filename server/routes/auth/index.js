// Defining our routes for user authentication

const express = require('express');
const router = express.Router();
const passport = require('../../passport');
const userController = require("../../controllers/userController");

// this route is just used to get the user basic info
router.get('/user', userController.getUser)
router.post('/login', userController.auth, passport.authenticate('local'), userController.authenticate);
router.post('/logout', userController.logout);
router.post('/signup', userController.register);
router.post('/myprofile/:id', userController.update);

module.exports = router;
