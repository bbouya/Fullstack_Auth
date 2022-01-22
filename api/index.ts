import cookieParser from "cookie-parser";
import cors from 'cors'
import express from 'express'

const app = express();

app.use(cors({credentials: true, origin: process.env.CLIENT_URL}))
app.use(cookieParser())
//add api entry point

app.get('/gitgub', async (req,res) => {})
app.post('/refrech',async (reg, res) => {})
app.post('/logout', (req,res) => {})
app.post('/logout-all', async (req,res)=> {})
app.get('/me', async (req,res) => {})


app.listen(3000)