const express = require('express');
const routerOfPets = express.Router();


const petsL = {
    "data": [
        { "name": "giraffa", "loveEat": "growe", "age": "7" },
        { "name": "lion", "loveEat": "meat", "age": "12" },
        { "name": "hipopotam", "loveEat": "flower", "age": "16" }

    ]
}


routerOfPets.get('/', (req, res) =>
    res.send(petsL)
)

routerOfPets.post('/', (req, res) => {

    const newPet = req.body;
    petsL.data.push(newPet)
    res.send(newPet);
    res.send('add new pet');
})


routerOfPets.delete('/:isbn', (req, res) => {

    const isbn = req.params.isbn;
    console.log(isbn)
    petsL.data = petsL.data.filter(i => {
        if (i.isbn !== isbn) {
            return true;
        }
        return false;
    });

    res.send('pet is deleted');
})


routerOfPets.put('/:isbn', (req, res) => {
    const isbn = req.params.isbn;
    const newPet = req.body;

    for (let i = 0; i < petsL.data.length; i++) {
        let book = petsL.data[i]
        if (book.isbn === isbn) {
            petsL.data[i] = newPet;
        }
    }
    res.send('giraffa is update');
});

module.exports = routerOfPets
