const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json())
app.listen(8000, () => {
    console.log('Il server è su raggiungibile localhost:8000');
})