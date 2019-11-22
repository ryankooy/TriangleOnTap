const router = require("express").Router();
const breweryRoutes = require("./breweries");
const searchRoutes = require("./search");

// Brewery routes
router.use("/breweries", breweryRoutes);

// Search routes
router.use("/search", searchRoutes);

module.exports = router;
