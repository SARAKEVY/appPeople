const express = require('express');
const router = express.Router();
router.use(express.json());
const peopleM = require('../modele/people');


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
  res.json(person)
  // res.send(user)
  console.log(person)
})


router.post('/', (req, res) => {
  // const newP = new peopleM({ "name": "hhhh", "age": 9 })
  const newP = req.body
  peopleM.insertMany(newP)
  try {
    res.send(newP);
    res.send('add new ');
  } 
  catch (error) {
    res.status(500).send(error);
    res.send('eroorrrrrrr');
  }
})


router.put('/:id', async (req, res) => {
  personUpdate = req.body;
  const person = await peopleM.findByIdAndUpdate((req.params.id),personUpdate).exec();

})

router.delete('/:id', async (req, res) => {
  const person = await peopleM.findByIdAndDelete(req.params.id)
  res.send('deletttttt')
})


module.exports = router