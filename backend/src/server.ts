
import dotenv from 'dotenv';
dotenv.config();

import express from "express";
import cors from "cors";
import serviceRouter from './routers/service.router'
import userRouter from "./routers/user.router";
import orderRouter from "./routers/order.router";
import { dbConnect } from './config/database.config';
import router from './routers/service.router';
import { Server } from 'socket.io';
import { isObjectIdOrHexString } from 'mongoose';

dbConnect();

const app = express();
app.use(express.json());
app.use(cors({
    credentials:true,
    origin:["http://localhost:4200"],
})); 

app.use("/api/services", serviceRouter);
app.use("/api/users", userRouter);
app.use("/api/orders", orderRouter);


const port = 5000;
const expressServer = app.listen(port, () => {
console.log("Server listen on port:" + port);
});

const io =  new Server(expressServer, {
  cors: {
      origin: ['http://localhost:4200'],
      methods: ["GET","POST"],
      credentials: true
  }
});


io.on('connect', (socket) => {
  console.log("User Connected");
  socket.on('disconnect', () => {
      console.log("User Disconnected");
  })

  socket.on('message', (message,name) => {
      let chat = {
          "name":name,
          "message":message
      }
      io.emit('incomming', chat);
  })

}) 