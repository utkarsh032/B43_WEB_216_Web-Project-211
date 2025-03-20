import React from 'react';
import Home from './components/Home';
import CurrencyConverter from './pages/CurrencyConverter/CurrencyConverter';
import TravelStories from './components/TravelStories';
import About from './components/About';

export default function MainLayout() {
  return (
    <div className="">
      <Home />
      <CurrencyConverter />
      <TravelStories />
      <About />
    </div>
  );
}
