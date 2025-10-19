import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home.page.jsx";
import MonasteryPage from "./pages/Monastery.page.jsx";
import GalleryPage from "./pages/Gallery.page.jsx";
import MapPage from "./pages/Map.page.jsx";
import useMonasteryData from "./hooks/useMonasteryData.js";
import useEventData from "./hooks/useEventData.js";
import useImageData from "./hooks/useImageData.js";

function App() {
  useMonasteryData()
  useEventData()
  useImageData()
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home"/>}/>
      <Route path="/home" element={<HomePage />} />
      <Route path="/monasteries" element={a}/>
      <Route path="/monastery/:name" element={<MonasteryPage/>}/>
      <Route path="/gallery" element={<GalleryPage/>}/>
      <Route path="/map" element={<MapPage/>}/>
    </Routes>
  );
}

export default App;
