const express = require('express');

const app = express();

app.get('/',(req, res) => {
    res.send ('thank you......YAY');
})

app.listen(4200, () => console.log('listening to port 4200'));


