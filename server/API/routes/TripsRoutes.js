import express from 'express';
import { GetTripByID, GetTrips } from '../controllers/TripController.js';

const TripRouter = express.Router();

TripRouter.get('/trips', GetTrips);
TripRouter.get('/trips/:id', GetTripByID);

export default TripRouter;
