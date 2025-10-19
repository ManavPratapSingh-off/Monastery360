import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home.page.jsx";
import MonasteryPage from "./pages/Monastery.page.jsx";
import GalleryPage from "./pages/Gallery.page.jsx";
import MapPage from "./pages/Map.page.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home"/>}/>
      <Route path="/home" element={<HomePage />} />
      <Route path="/monastery/:name" element={<MonasteryPage/>}/>
      <Route path="/gallery" element={<GalleryPage/>}/>
      <Route path="/map" element={<MapPage/>}/>
    </Routes>
  );
}

export default App;
