import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import SignUpForm from './pages/Auth/SignUpForm';
import SignInForm from './pages/Auth/SignInForm';
import CurrencyConverter from './pages/CurrencyConverter/CurrencyConverter';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exchange" element={<CurrencyConverter />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/signin" element={<SignInForm />} />
      </Routes>
    </>
  );
}

export default App;
