import express from "express";
import mongoose from "mongoose";

const app = express();
const port = 5000;

async function main() {
    await mongoose.connect('mongodb+srv://m-xue:mongodbpassword@cluster0.uwy7p.mongodb.net/cse-fullstack-guide?retryWrites=true&w=majority');
}
main().catch(err => console.log(err));
const db = mongoose.connection;
db.on('error', err => console.log(err));
db.once('open', () => console.log('Connected to database.'))

app.use(express.json())

import usersRouter from './routes/users.js';
app.use('/users', usersRouter);


app.listen(port, () => console.log(`Server running on port ${port}`))