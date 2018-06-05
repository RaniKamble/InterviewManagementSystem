const express = require('express');
const app = express();
const cors = require('cors');
const candidateRouter = require('../routes/candidate.js');
app.use(cors());
app.use(express.static('dist'));
app.use('/',candidateRouter);

app.listen(2000, () => console.log('Listening on port 2000!'));
