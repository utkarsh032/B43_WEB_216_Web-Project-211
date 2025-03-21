import React from 'react';

const TripCard = ({ trip, onViewClick }) => {
  return (
    <div className="relative group bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform">
      <img src={trip.image} alt={trip.name} className="w-full h-48 object-cover " />
      <div className="p-4">
        <h2 className="text-xl font-bold">{trip.name}</h2>
        <p className="text-gray-600">{trip.country}</p>
        <p className="text-gray-800">Duration: {trip.duration}</p>
        <p className="text-green-500 font-semibold">Price: ${trip.price}</p>
      </div>

      {/* View button on hover */}
      <div className="absolute inset-0  bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity">
        <button
          onClick={onViewClick}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition"
        >
          View
        </button>
      </div>
    </div>
  );
};

export default TripCard;
