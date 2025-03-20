import Faq from "../models/FaqModels.js";

export const GetAllFaqs = async (req, res) => {
  try {
    const questioneries = await Faq.find({});
    res.status(200).json({ questioneries });
  } catch (error) {
    console.error(error);
    res.status(500).send('No Queries Found');
  }
};
