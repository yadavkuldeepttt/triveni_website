import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import Header from "./components/header";
import Home from "./pages/home.jsx";
import Footer from "./components/footer.jsx";
import AboutPage from "./pages/about.jsx";
import ServicesPage from "./pages/services.jsx";
import Contact from "./pages/contact.jsx";
import Destination from "./pages/destination.jsx";
import TourPackageDetails from "./components/services/details/tourPackageDetails.jsx";
import BookingForm from "./components/services/bookingForm.jsx";
import WhatsAppFloat from "./components/whatsappFloat.jsx"
import VehicleDetails from "./components/services/details/vehicleServicesDetails.jsx";
import RentalCars from "./components/trip/carRent/carRent.jsx";
import TourGuidePage from "./pages/tourGuidePage.jsx";
import CityServicePage from "./components/services/cities/CityServicePage .jsx";

class App extends Component {
  render() {
    return (
      <div className="App ">
        <Header />
        <div className="">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/destinations" element={<Destination />} />
            <Route path="/car-rental" element={<RentalCars />} />
            <Route path="/tour-guide" element={<TourGuidePage />} />
            <Route path="/tourist-spots" element={<TouristSpotsModal />} />
            
           
            <Route path="/:cityName" element={<CityServicePage />} />
            
            <Route
              path="/tour-package/:slug"
              element={<TourPackageDetails />}
            />
            {/* Booking form route */}
            <Route path="/tour-package/:slug/book" element={<BookingForm />} />
            <Route
              path="/vehicle-details/:slug"
              element={<VehicleDetails/>}
            />
          </Routes>
        </div>
        <WhatsAppFloat phoneNumber="7668570551" />
        <Footer />
      </div>
    );
  }
}

export default App;