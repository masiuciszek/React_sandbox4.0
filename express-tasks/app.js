const express = require('express');

const app = express();
const port = process.env.PORT || 5000;
const connectDB = require('./config/db');

connectDB();

app.use(express.json({ extended: false }));
app.use(express.json());

app.use('/api/users', require('./routes/user'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/tasks', require('./routes/task'));

app.listen(port, () => console.log(`port is running on port ${port}`));
