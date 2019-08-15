const router = require("express").Router();
const bookRoutes = require("./books");
const googleRoutes = require("./googleBooks");

// Book routes
router.use("/books", bookRoutes);

// Google Routes match /api/books
router.use("/googleBooks", googleRoutes);

module.exports = router;
