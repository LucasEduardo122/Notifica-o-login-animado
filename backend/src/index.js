const express = require('express');
const Rootes = require('./Routes');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.use(Rootes);

app.listen(3333);