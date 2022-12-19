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




























router.put("/:id", [
  check("name").isString(),
  check("description").isString(),
  check("price").isFloat({min: 0}),
  check("category").isString(),
  check("image").isString()
], async (req, res) => {
  try {
    const itemToChange = await Item.findByPk(req.params.id);
    const updatedItem = await itemToChange.update({
      name: req.params.name,
      description: req.params.description,
      price: req.params.price,
      category: req.params.category,
      image: req.params.image
    })
    res.json(updatedItem);
  } catch (error) {
    res.json(error);
  }
})


router.delete("/:id", async (req, res) => {
  try {
    const itemToDelete = await Item.findByPk(req.params.id);
    const deletedItem = await itemToDelete.destroy()
    res.json(deletedItem);
  } catch (error) {
    res.json(error);
  }
})

module.exports = router;