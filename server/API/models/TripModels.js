import mongoose from "mongoose";

const tripSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  country: { type: String, required: true, trim: true },
  type: { type: String, enum: ['Honeymoon', 'Wedding', 'Birthday', 'Group Trip', 'Short Trip', 'Long Trip'], required: true },
  duration: { type: String, enum: ['Short Trip', 'Long Trip'], required: true },
  image: { type: String, required: true, trim: true },
  price: { type: Number, required: true, min: 0 },
  rating: { type: Number, min: 1, max: 5, default: 4 },
  feedback: { type: String, trim: true },
  createdAt: { type: Date, default: Date.now }
});

const Trip = mongoose.model('Trip', tripSchema);

export default Trip;
