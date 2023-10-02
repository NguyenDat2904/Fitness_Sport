const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const ClientModel = require('./models/client');
const app = express();
app.use(express.json());
app.use(cors());
mongoose.connect("mongodb://localhost:27017/clients");

app.post('/register', (req, res) => {
    ClientModel.create(req.body)
        .then((client) => res.json(client))
        .catch((err) => res.json(err));
});
app.listen(3000, () => {
    console.log('sever is connecting');
});
