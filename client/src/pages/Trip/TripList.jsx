import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate
import TripCard from './TripCard';
import FilterBar from './FilterBar';

const TripList = () => {
  const [trips, setTrips] = useState([]);
  const [filters, setFilters] = useState({
    country: '',
    type: '',
    duration: ''
  });
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);
  const tripsPerPage = 6;

  const navigate = useNavigate();

  useEffect(() => {
    const fetchTrips = async () => {
      try {
        const response = await fetch('http://localhost:3000/trips');
        if (!response.ok) {
          throw new Error('Failed to fetch trips');
        }
        const data = await response.json();
        setTrips(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchTrips();
  }, []);

  useEffect(() => {
    const applyFilters = async () => {
      try {
        const response = await fetch('http://localhost:3000/trips');
        const data = await response.json();

        let filteredTrips = data;

        if (filters.country) {
          filteredTrips = filteredTrips.filter(trip => trip.country === filters.country);
        }
        if (filters.type) {
          filteredTrips = filteredTrips.filter(trip => trip.type === filters.type);
        }
        if (filters.duration) {
          filteredTrips = filteredTrips.filter(trip => trip.duration === filters.duration);
        }
        if (search) {
          filteredTrips = filteredTrips.filter(trip =>
            trip.name.toLowerCase().includes(search.toLowerCase())
          );
        }

        setTrips(filteredTrips);
        setCurrentPage(1);  // Reset to first page after filtering
      } catch (error) {
        console.error('Error applying filters:', error);
      }
    };

    applyFilters();
  }, [filters, search]);

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleSearchChange = (value) => {
    setSearch(value);
  };

  const handleViewClick = (id) => {
    navigate(`/trip/${id}`);   // Navigate to detailed trip page
  };

  const indexOfLastTrip = currentPage * tripsPerPage;
  const indexOfFirstTrip = indexOfLastTrip - tripsPerPage;
  const currentTrips = trips.slice(indexOfFirstTrip, indexOfLastTrip);

  const totalPages = Math.ceil(trips.length / tripsPerPage);

  const goToNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const goToPrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  if (loading) {
    return <div className="text-center text-lg">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">Error: {error}</div>;
  }

  return (
    <div>
      <FilterBar
        filters={filters}
        onFilterChange={handleFilterChange}
        search={search}
        onSearchChange={handleSearchChange}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {currentTrips.length > 0 ? (
          currentTrips.map(trip => (
            <TripCard
              key={trip._id}
              trip={trip}
              onViewClick={() => handleViewClick(trip._id)}
            />
          ))
        ) : (
          <div className="text-center col-span-full">No trips found</div>
        )}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center items-center gap-4 my-6">
        <button
          onClick={goToPrevPage}
          disabled={currentPage === 1}
          className={`px-4 py-2 rounded-md text-white ${currentPage === 1 ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700'} transition`}
        >
          Previous
        </button>

        <span className="text-lg font-medium">
          Page {currentPage} of {totalPages}
        </span>

        <button
          onClick={goToNextPage}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 rounded-md text-white ${currentPage === totalPages ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700'} transition`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default TripList;
