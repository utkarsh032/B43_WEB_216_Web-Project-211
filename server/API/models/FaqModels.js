import mongoose from "mongoose";

// Define schema with validation
const faqSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
    trim: true
  },
  answer: {
    type: String,
    required: true,
    trim: true
  }
});

// Create model
const Faq = mongoose.model('Faq', faqSchema);

export default Faq;
