const express = require("express");
const router = express.Router();
const { Item } = require("../models/itemModel");
const { check, validationResult } = require('express-validator');

router.get("/", async (req, res, next) => {
  try {
    const items = await Item.findAll();
    res.json(items);
  } catch (error) {
    next(error);
  }
});

router.get('/:id', async (req, res) => {
    try {
        const item = await Item.findByPk(req.params.id);
        res.json(item);
      } catch (error) {
        next(error);
      }
});

router.post('/',[
  check("title").not().isEmpty(),
  check("price").not().isEmpty(),
  check("price").isFloat(),
  check("description").not().isEmpty(),
  check("category").not().isEmpty(),
  check("image").not().isEmpty(),
],
async (req, res, next) => {
  const errors = validationResult(req);
  if(!errors.isEmpty()){
     res.json({error: errors.array()})
  } else {
      try {
          const addItem = await Item.create({
          title: req.body.title,
          price: req.body.price,
          description: req.body.description,
          category: req.body.category,
          image: req.body.image
          })

      res.json(addItem);
      } catch(error) {
          next(error);
  }
  }});

router.put("/:id", [
  check("title").isString(),
  check("description").isString(),
  check("price").isFloat({min: 0}),
  check("category").isString(),
  check("image").isString()
], async (req, res) => {
  const errors = validationResult(req);
  if(!errors.isEmpty()){
     res.json({error: errors.array()})
  } else {
    try {
    
      const itemToChange = await Item.findByPk(req.params.id);
      const updatedItem = itemToChange.set({
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category,
        image: req.body.image
      })
      await updatedItem.save();
      res.json(updatedItem);
    } catch (error) {
      res.json(error);
    }
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