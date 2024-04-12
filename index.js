import express from 'express';

import cors from 'cors';
import routes from './Routes/facilitRoute.js'
import morgan from 'morgan';
import dotenv from 'dotenv';
dotenv.config();



const PORT = process.env.PORT || 5000;
// middleware
const app = express();
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.use(routes)






app.get('/', (req,res) => {
    return res.json("employee apraisal Form")
})



app.listen(PORT, () => {
    
    console.log(`Server running on port ${PORT}`);
})