const express = require('express');
const router = express.Router();
const Salon = require('../models/Salon');

router.get('/', async (req, res) => {
  try {
    const salons = await Salon.find();
    res.json(salons);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post('/', async (req, res) => {
  try {
    const salon = new Salon(req.body);
    const saved = await salon.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
