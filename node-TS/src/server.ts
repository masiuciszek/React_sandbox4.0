import express from 'express';
import userRouter from './routes/user';

const app: express.Application = express();

const port = process.env.PORT || 5000;

app.use('/api/users', userRouter);

app.listen(port, () => console.log(`Port is running on port ${port}`));
