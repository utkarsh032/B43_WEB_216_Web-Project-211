import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express()


const PORT = process.env.PORT || 3000

app.use(express.json())

// Server Listing
app.listen(PORT, () => {
  console.log(`Server is listening on PORT ${PORT}`)
})