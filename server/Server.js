import express from "express";
import dotenv from "dotenv/config";
import cors from "cors";
import { dbConnection } from "./config/dbConnection.js";
import UserRouter from "./API/routes/UserRoutes.js";
import QuestionsRoutes from "./API/routes/FaqsRoutes.js";
import TripRouter from "./API/routes/TripsRoutes.js";

const PORT = process.env.PORT || 3000

const app = express()
app.use(express.json())

// Enable Cors
app.use(cors({
  origin: "http://localhost:5173",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true
}));


// Databse connection
dbConnection()

// Routes
app.use('/api', UserRouter)

app.use('/', QuestionsRoutes)

app.use('/', TripRouter)

// Server Listing
app.listen(PORT, () => {
  console.log(`Server is listening on PORT ${PORT}`)
})