const express = require('express');

const app = express();
const port = process.env.PORT || 5000;
const connectDB = require('./config/db');

connectDB();

app.use(express.json({ extended: false }));
app.use(express.json());

app.listen(port, () => console.log(`port is running on port ${port}`));
