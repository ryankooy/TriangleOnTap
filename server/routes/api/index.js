const router = require("express").Router();
const breweryRoutes = require("./breweries");

// Book routes
router.use("/breweries", breweryRoutes);

module.exports = router;
