import * as sapper from '@sapper/server';
const express = require('express')
const app = express()

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';

app.use(express.static('static'))
app.use(sapper.middleware())

app.listen(PORT, () => console.log(`Listening on port ${PORT}!`))