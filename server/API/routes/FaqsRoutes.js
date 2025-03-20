import express from "express";
import { GetAllFaqs } from "../controllers/FaqController.js";

const QuestionsRoutes = express.Router()

QuestionsRoutes.get('/questions', GetAllFaqs)

export default QuestionsRoutes;