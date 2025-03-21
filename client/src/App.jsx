import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import CurrencyConverter from './pages/CurrencyConverter/CurrencyConverter';
import TravelStories from './components/TravelStories';
import About from './components/About';
import SignUpForm from './pages/Auth/SignUpForm';
import SignInForm from './pages/Auth/SignInForm';
import MainLayout from './MainLayout';
import Footer from './components/Footer';
import TravelBudgetPlanner from './pages/TravelBudgetPlanner';
import TripList from './pages/Trip/TripList';
import TripDetail from './pages/Trip/TripDetail';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        {/* Main layout with multiple components */}
        <Route
          path="/"
          element={<MainLayout />}
        />
        {/* Individual routes */}
        <Route path="/exchange" element={<CurrencyConverter />} />
        <Route path="/travel" element={<TravelStories />} />
        <Route path="/about" element={<About />} />
        <Route path="/travel_budjet-planner" element={<TravelBudgetPlanner />} />
        <Route path="/travel_planner" element={<TripList />} />
        <Route path="/trip/:id" element={<TripDetail />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/signin" element={<SignInForm />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
