import mongoose from "mongoose"

// Database Connection
export const dbConnection = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/travel')
    console.log('MongoDB Connection SuccessFully')
  } catch (error) {
    console.error('Server Connection Failed')
  }
}