const express = require('express');
const app = express();

app.listen('8092', () => { console.log('rodando') });

app.get('/', (req, res) => {
    res.json("Sucess");
});