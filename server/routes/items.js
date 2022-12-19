const express = require("express");
const router = express.Router();
const { Item } = require("../models");
const { check, validationResult } = require('express-validator');

router.get("/", async (req, res, next) => {
  try {
    const items = await Item.findAll();
    res.json(items);
  } catch (error) {
    next(error);
  }
});

router.post('/',[
    check("name").not().isEmpty(),
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
    }})

module.exports = router;