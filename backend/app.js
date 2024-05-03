require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const workouts = require('./routes/workout');
const cors = require('cors');


app = express();

//middleware for cors
app.use(cors());
//middleware to get req.body instead of using bodyParser
app.use(express.json());

app.use('/api/workouts', workouts);
app.all('*', (req, res) => {
    res.status(404).send('<h1>404! Page not found</h1>');
});

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    app.listen(process.env.PORT, () => {
        console.log('Connected to db and listening to port ', process.env.PORT)
    });
    
}).catch((err) => {
    console.log(err);

});


