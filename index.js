const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyParser.json());

const users = ["Asad", 'Moin', 'Sini'];

app.get('/', (req, res) => {
    const fruit = {
        product: 'ada',
        price: 220
    }
    res.send(fruit);
});
app.get('/fruits/banana', (req, res) => {
    res.send({fruit: 'banana', quality: 1000, price: 220});
})

app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    console.log(req.query);
    const name= users[id];
    res.send({id, name});
})

//Post
app.post('/addUser', (req, res) => {
//save to database
const user = req.body;
user.id = 55;
    res.send(req.body);
})




app.listen(4200, () => console.log('listening to port 4200'));


