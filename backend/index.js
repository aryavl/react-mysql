import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import { authenticateDatabase, syncDatabase } from './models/index.js';
import headerRouter from './routes/headerRoutes.js';

// Adjust the path if needed

// Call the authentication function
authenticateDatabase();
syncDatabase()

const app = express()


const corsOptions = {
    origin:"https://localhost:8081"
}


// middlewares
app.use(cors(corsOptions))

app.use(express.json())

app.use(express.urlencoded({extended:true}))

app.use('/',headerRouter)
// testing

app.get('/',(req,res)=>{
    res.json({message:"helloo from api"})
})

// port

const PORT = process.env.PORT || 8082

// SERVER

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})