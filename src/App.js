import { Container } from 'react-bootstrap';
import { BrowserRouter,  Route ,Routes } from 'react-router-dom';


import React, { createContext } from 'react';


import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from './pages/Home';
import Reservation from './pages/Reservation';
import Offers from './pages/Offers';
import ContactUs from './pages/ContactUs';
import SignIn from './pages/SignIn';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// import LandingPage from './components/LandingPage';

export const AppContext = createContext(null);

const App = () => {
  return (
    <AppContext.Provider value={{}}>
      <BrowserRouter>
        <Header />
       
        <Routes>
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/" element={<Container><Home /></Container>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export default App;
