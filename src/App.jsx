// src/App.jsx
import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HotelReg from "./components/HotelReg";

import Home from "./pages/Home";
import AllRooms from "./pages/AllRooms";
import RoomDetails from "./pages/RoomDetails";
import MyBookings from "./pages/MyBookings";

import Layout from "./pages/hotelOwner/Layout";
import Dashboard from "./pages/hotelOwner/Dashboard";
import AddRoom from "./pages/hotelOwner/AddRoom";
import ListRoom from "./pages/hotelOwner/ListRoom";

const App = () => {
  // useLocation must be called inside the component (it is)
  const location = useLocation();
  const isOwnerPath = location?.pathname?.includes("/owner");

  return (
    <div className="min-h-screen flex flex-col">
      {/* show site chrome only when not in owner section */}
      {!isOwnerPath && <Navbar />}

      {/* If you want HotelReg to be toggled later, control it from state; remove dead `{false && ...}` */}
      {/* <HotelReg /> */}

      <main className="flex-grow min-h-[70vh]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rooms" element={<AllRooms />} />
          <Route path="/rooms/:id" element={<RoomDetails />} />
          <Route path="/my-bookings" element={<MyBookings />} />

          {/* Owner area uses a Layout (expects <Outlet /> inside Layout) */}
          <Route path="/owner" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="add-room" element={<AddRoom />} />
            <Route path="list-room" element={<ListRoom />} />
          </Route>

          {/* optional: fallback 404 route */}
          <Route path="*" element={<div className="p-8 text-center">Page not found</div>} />
        </Routes>
      </main>

      {/* hide footer on owner pages (optional) */}
      {!isOwnerPath && <Footer />}
    </div>
  );
};

export default App;
