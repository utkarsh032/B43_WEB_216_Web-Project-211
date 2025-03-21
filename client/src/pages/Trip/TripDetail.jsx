import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import TripList from './TripList';

const TripDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [trip, setTrip] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTrip = async () => {
      try {
        const response = await fetch(`https://b43-web-216-web-project-211.onrender.com/trips/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch trip');
        }
        const data = await response.json();
        setTrip(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchTrip();
  }, [id]);

  if (loading) {
    return <div className="text-center text-lg">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">Error: {error}</div>;
  }

  return (
    <>

      <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-lg">
        <button
          onClick={() => navigate(-1)}
          className="text-blue-500 hover:underline mb-4"
        >
          ← Back
        </button>
        <img src={trip.image} alt={trip.name} className="w-full h-96 object-cover rounded-lg" />
        <h1 className="text-3xl font-bold mt-4">{trip.name}</h1>
        <p className="text-gray-600 mt-2">{trip.country}</p>
        <p className="text-lg mt-4">{trip.description}</p>
        <p className="text-green-500 font-bold mt-2">Price: ${trip.price}</p>
        <p className="text-gray-500 mt-2">Duration: {trip.duration}</p>
        <p className="text-yellow-500 mt-2">Rating: {trip.rating} ★</p>
      </div>
    </>
  );
};

export default TripDetail;
