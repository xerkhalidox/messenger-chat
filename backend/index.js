const express=require("express");
const http=require("http");
const socketio=require("socket.io");
const port=process.env.PORT||8000;
const router=require("./route");
const app=express();
const server=http.createServer(app);
const io=socketio(server);
io.on("connection",(socket)=>{
    console.log("New connection")
})
app.use(router)
server.listen(port)