import express from 'express'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import cors from 'cors'

const app = express();
app.use(cors());
dotenv.config();


app.get('/',(req, res)=>{
    res.send('Hello World from git hackathon')
})




app.listen(5000, ()=>{
    console.log('server listening on the port ')
})