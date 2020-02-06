// importing modules
const express = require("express");
const router = express.Router();
const chuckNorrisController = require('../controllers/chuck-norris');

router.get("/randomJoke", chuckNorrisController.getRandomJoke);

// exporting routes
module.exports = router;
