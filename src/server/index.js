const express = require('express');
const app = express();
const cors = require('cors');
const candidateRouter = require('../routes/candidate.js');

app.use(express.static('dist'));
app.use('/',candidateRouter);

app.all('', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    //Auth Each API Request created by user.
    next();
    });

app.listen(2000, () => console.log('Listening on port 2000!'));
