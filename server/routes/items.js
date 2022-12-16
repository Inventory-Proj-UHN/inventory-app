const express = require("express");
const router = express.Router();
const { Item } = require("../models");
const { check, validationResult } = require('express-validator');

router.get("/", async (req, res, next) => {
  try {
    const items = await Item.findAll();
    res.send(items);
  } catch (error) {
    next(error);
  }
});

module.exports = router;