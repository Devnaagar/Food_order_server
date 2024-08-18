import express from 'express';
import {join} from 'path';
import session from 'express-session';
import bodyParser from "body-parser";
import web from './routes/routes.js';
import cors from 'cors';
import connectDB from './db_connect/connectdb.js';
const app = express();
const port = process.env.PORT || '3115';
const DATABASE_URL=process.env.DATABASE_URL || "mongodb://127.0.0.1:27017";
app.use(cors());

// database connection 
connectDB(DATABASE_URL);

//handle submission
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//session
app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: true,
  cookie: {
    secure: false,
    maxAge: null 
  }
}));

//static files
app.use(express.static(join(process.cwd(),"public")));

app.use("/",web);

app.listen(port,()=>{
  console.log(`Server listening at http://localhost:${port}`);
})