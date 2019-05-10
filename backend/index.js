//index.js

//imports
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

//route imports
var newsitems = require("./routes/newsitems");

//definitions
const app = express();
const PORT = 3001;
const defRes = { response: "Root Endpoint Reached" };

//mongoose setup
var mongoose = require('mongoose');
var mongoDB = process.env.MONGODB_URI || 'mongodb://publicUser:212278Z1x9@ds015909.mlab.com:15909/hay-web';
mongoose.connect(mongoDB, { useNewUrlParser: true });
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

//express setup
app.use(helmet());
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('combined'));

//routes
app.use("/newsitems", newsitems);

app.get('/', (req, res) => {
    res.send(defRes);
});

app.listen(3001, () => {
    console.log('listening on port ' + PORT);
});