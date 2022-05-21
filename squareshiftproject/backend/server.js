const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./db');
const morgan = require('morgan');
const path = require('path');
const loginroutes=require('./Routes/loginroutes')
dotenv.config();
const app = express();
app.use(cors())
app.use(express.json())
connectDB();

const PORT=process.env.PORT||5000

const server = app.listen(PORT, (req, res) => {
   
    console.log("Server is running on the port : "+PORT);
})
app.get('/', async(req, res) => {
    res.status(200).send("API is running")
})

app.use('/api/user', loginroutes)

process.on('unhandledRejection', (err, Promise) => {
    console.log("logged error " + err)
    server.close(() => process.exit(1))
})