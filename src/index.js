import express from "express";
import apiRoutes from "./routes/index.js";
import {PORT,Logger} from "./config/index.js";

const app=express();


app.use("/api",apiRoutes);


app.listen(PORT,()=>{
    console.log(`Server is running port ${PORT}`);
    Logger.info(`Server is running port ${PORT}`,{});
});