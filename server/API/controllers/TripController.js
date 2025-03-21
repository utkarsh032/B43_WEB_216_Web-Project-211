import Trip from "../models/TripModels.js";

export const GetTrips = async (req, res) => {
  try {
    const { name, country, type, duration, price, rating } = req.query;

    const filter = {};

    if (name) filter.name = new RegExp(name, "i");         // Case-insensitive search
    if (country) filter.country = new RegExp(country, "i");
    if (type) filter.type = type;                          // Exact match for type
    if (duration) filter.duration = duration;              // Exact match for duration
    if (price) filter.price = { $lte: Number(price) };     // Price less than or equal
    if (rating) filter.rating = { $gte: Number(rating) };  // Rating greater than or equal

    // Fetching trips based on filter
    const trips = await Trip.find(filter);

    // Check if any trips are found
    if (trips.length === 0) {
      return res.status(404).json({ message: "No trips found" });
    }

    // Send the trips in the response
    res.status(200).json(trips);
  } catch (error) {
    console.error("Error fetching trips:", error.message);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};


// Get Trip By ID

export const GetTripByID = async (req, res) => {
  try {
    const { id } = req.params;

    // Check if ID is provided
    if (!id) {
      return res.status(400).json({ message: 'Trip ID is required' });
    }

    // Fetch trip by ID
    const trip = await Trip.findById(id);

    if (!trip) {
      return res.status(404).json({ message: 'Trip not found' });
    }

    res.status(200).json(trip);
  } catch (error) {
    console.error('Error fetching trip by ID:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
