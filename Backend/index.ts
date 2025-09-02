import express from 'express'
import cors from "cors"
import { PrismaClient } from '@prisma/client';
import client from './routes/client'
import engager from './routes/engager'


const app = express()
app.use(cors)
  const prisma  = new PrismaClient();

app.use("/client", client)
app.use("/engager", engager)


const Port = 7627;

app.listen(Port, 
    ()=>{
        console.log(`connected to port ${Port}`)
    }
)


export default prisma;