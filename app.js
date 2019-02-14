const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const user =require('./routes/users.js')
const post = require('./routes/post.js');
const shop = require('./routes/shop.js');
const uploadRouter = require('./upload');

const app = express();
const port = 3500;
const config = require('./config/db')

mongoose.connect(config.database,{useNewUrlParser:true});

mongoose.connection.on('connected',()=>{
    console.log(`Connected to database:${config.database}`);
})


// bringing in the middlewares
app.use(cors())

app.get('/',(req,res)=>{
    res.send('Heelo fom the server')
})


app.use(bodyParser.json());
 app.use(cors());


app.use('/',user);
app.use('/',post);
app.use('/',shop);
app.use('/', uploadRouter);


app.listen(port,()=>{
    console.log(`Server started at port:${port}`)
})
