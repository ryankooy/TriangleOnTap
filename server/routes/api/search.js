// Defining our API routes for search data

const router = require("express").Router();
const searchController = require("../../controllers/searchController");

// Matches with "/api/search"
router.route("/")
    .post(searchController.searchBreweries);

module.exports = router;
