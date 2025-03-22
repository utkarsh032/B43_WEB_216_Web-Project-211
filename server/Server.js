import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { dbConnection } from "./config/dbConnection.js";
import UserRouter from "./API/routes/UserRoutes.js";
import QuestionsRoutes from "./API/routes/FaqsRoutes.js";
import TripRouter from "./API/routes/TripsRoutes.js";

dotenv.config();

const PORT = process.env.PORT || 3000

const app = express()
app.use(express.json())

// Enable Cors
const allowedOrigins = [
  "http://localhost:5173",
  "https://b43-web-216-web-project-211-1.onrender.com"
];

app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
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