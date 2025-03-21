import React, { useState, useEffect } from 'react';

const FilterBar = ({ filters, onFilterChange, search, onSearchChange, onReset }) => {
  const [placeholder, setPlaceholder] = useState('');
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const placeholderText = 'Search by name, country, or type...';

  // Animated typing effect for the search placeholder
  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (placeholderIndex < placeholderText.length) {
        setPlaceholder((prev) => prev + placeholderText[placeholderIndex]);
        setPlaceholderIndex((prev) => prev + 1);
      } else {
        setPlaceholder('');
        setPlaceholderIndex(0);
      }
    }, 100); // Adjust typing speed here

    return () => clearInterval(typingInterval);
  }, [placeholderIndex]);

  return (
    <div className="bg-gray-100 p-4 flex flex-wrap gap-4 items-center justify-between rounded-lg shadow-sm">
      {/* Search Input with Animated Placeholder */}
      <div className="relative w-full sm:w-1/4">
        <input
          type="text"
          placeholder={placeholder}
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          className="p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
        />
        {search && (
          <button
            onClick={() => onSearchChange('')}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        )}
      </div>

      {/* Country Filter */}
      <select
        name="country"
        value={filters.country}
        onChange={onFilterChange}
        className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
      >
        <option value="">All Countries</option>
        <option value="India">India</option>
        <option value="Japan">Japan</option>
        <option value="Sri Lanka">Sri Lanka</option>
      </select>

      {/* Trip Type Filter */}
      <select
        name="type"
        value={filters.type}
        onChange={onFilterChange}
        className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
      >
        <option value="">All Types</option>
        <option value="Honeymoon">Honeymoon</option>
        <option value="Wedding">Wedding</option>
        <option value="Birthday">Birthday</option>
        <option value="Group Trip">Group Trip</option>
      </select>

      {/* Duration Filter */}
      <select
        name="duration"
        value={filters.duration}
        onChange={onFilterChange}
        className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
      >
        <option value="">All Durations</option>
        <option value="Short Trip">Short Trip</option>
        <option value="Long Trip">Long Trip</option>
      </select>

      {/* Reset Button */}
      <button
        onClick={onReset}
        className="p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
      >
        Reset Filters
      </button>
    </div>
  );
};

export default FilterBar;