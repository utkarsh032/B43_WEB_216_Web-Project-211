import express from "express";
import dotenv from "dotenv/config";
import { dbConnection } from "./config/dbConnection.js";
import UserRouter from "./API/routes/UserRoutes.js";

const PORT = process.env.PORT || 3000

const app = express()
app.use(express.json())

// Databse connection
dbConnection()

// Routes
app.use('/API', UserRouter)

// Server Listing
app.listen(PORT, () => {
  console.log(`Server is listening on PORT ${PORT}`)
})