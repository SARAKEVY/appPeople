const mongoose = require('mongoose');
const express = require('express');
const app = express();
app.use(express.json());

const usersRouter = require('./routes/users');
app.use('/users', usersRouter);

const petsRouter = require('./routes/pets');
app.use('/pets', petsRouter);

const peopleRouter = require('./routes/people');
app.use('/people', peopleRouter);

mongoose.connect('mongodb://localhost:27017/people', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(console.log("connect to DB people!"));

const port = 3001


app.get('/', (req, res) => {
  res.send('Hellooooooo!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});

mongoose.set("debug",true);

