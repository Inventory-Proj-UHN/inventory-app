const express = require("express");
const router = express.Router();

router.use("/item", require("./items"));

module.exports = router;
