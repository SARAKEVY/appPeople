const express = require('express');
const router = express.Router();
router.use(express.json());
const peopleM = require('../models/people');


router.get('/', async (req, res) => {
  const users = await peopleM.find();

  try {
    res.send(users);
  } catch (error) {
    res.status(500).send(error);
  }
});


router.get('/:id', async (req, res) => {
  const person = await peopleM.findById(req.params.id).exec();
  try {
    res.json(person)
  } 
  catch (error) {
    res.status(500).send(error);
  }
 })


router.post('/', async(req, res) => {
  const newP = req.body
  const updateP = await peopleM.insertMany(newP)
  try {
    res.send(newP);
  } 
  catch (error) {
    res.status(500).send(error);
  }
})


router.put('/:id', async (req, res) => {
  const personUpdate = req.body;
  const person = await peopleM.findByIdAndUpdate((req.params.id),personUpdate).exec();
  
  try {
    res.send('personUpdate')
  } 
  catch (error) {
    res.status(500).send(error);
  }

})

router.delete('/:id', async (req, res) => {
  const person = await peopleM.findByIdAndDelete(req.params.id)
  try {
    res.send('personDelete')
  } 
  catch (error) {
    res.status(500).send(error);
  }
})


module.exports = router