const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');

const app = express();

dotenv.config();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`App listening on port : ${PORT}`);
});

mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
}).then(() => {
    console.log('MongoDB connected successfully...');
}).catch((err) => {
    console.log(`Failed to connect to MongoDB ${err}`);
})

//cors for exchange data b/w 4200 and 3000 - two different ports
app.use(cors());

//body-parser
app.use(bodyParser.json());

//routes
const authRoute = require('./controller/auth');
app.use('/api/user', authRoute);

const phoneAuthRoute = require('./controller/phoneauth');
app.use('/api/auth', phoneAuthRoute);

const postRoute = require('./controller/post');
app.use('/api/post', postRoute);

app.use(express.json());