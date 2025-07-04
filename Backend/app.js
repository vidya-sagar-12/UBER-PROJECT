const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cors = require('cors');
const app = express();
const cookieParser = require('cookie-parser');
const connectToDb = require('./db/db.js');
const userRoutes = require('./routes/user-routes.js');
const captainRoutes = require('./routes/captain_routes.js');
const mapsRoutes = require('./routes/maps_routes.js');
const rideRoutes = require('./routes/ride_routes.js');

connectToDb();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());


app.get('/', (req, res) => {
    res.send('Welcome to my API!');
});

app.use('/users', userRoutes);
app.use('/captains', captainRoutes);
app.use('/maps', mapsRoutes);
app.use('/rides', rideRoutes);
module.exports = app;