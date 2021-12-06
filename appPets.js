const express = require('express');
const app2 = express();


const petsL = {
    "data": [
        { "name": "giraffa", "loveEat": "growe", "age": "7" },
        { "name": "lion", "loveEat": "meat", "age": "12" },

        { "name": "hipopotam", "loveEat": "flower", "age": "16" }

    ]
}
const petsRouter = require('./routes/pets');
app2.use('/pets', petsRouter);
const port = 3000;

app2.get('/pets', (req, res) => {
    res.send(petsL)

})

app2.listen(port, () => {
    console.log(`Example app2222 listening at http://localhost:${port}`)
})