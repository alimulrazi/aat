import dotenv from "dotenv";
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import users from './routes/users.js';

dotenv.config();

const app = express();

app.use(bodyParser.json({limit:"30mb", extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb", extended:true}));
app.use(cors());

app.use('/api', users);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => { console.log(`Server is running on Port: ${PORT}`)})


