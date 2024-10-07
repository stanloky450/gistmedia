import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import postRoutes from './routes/post.js';
import userRouter from './routes/user.js';
import dotenv from 'dotenv';
import cors from 'cors';

const app = express();

dotenv.config();

app.use(express.json({ limit: '30mb', extended: true }));
app.use(express.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

app.use('/posts', postRoutes);
app.use('/user', userRouter);

const CONNECTION_URL = process.env.MONGODB_URI;

const PORT = process.env.PORT || 4050;

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on : ${PORT}`))
  )
  .catch((error) => console.log(`${error} did not connect`));
// app.listen(PORT, () => console.log(`server is running ${PORT}`));

// mongoose.set('useFindAndModify', false);
