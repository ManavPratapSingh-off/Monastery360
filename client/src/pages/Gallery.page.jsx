import React, { useEffect, useState } from "react";
import { get_images } from "../api/imagecalls.js";
import { useSelector } from "react-redux";
import useImageData from "../hooks/useImageData.js";
import ImageCard from "../components/Gallerycard.component.jsx";
import RedirectHome from "../components/RedirectHome.component.jsx";

const GalleryPage = () => {
  const { images } = useSelector((state) => state.image);

  return (
    <div className="max-w-6xl mx-auto p-6 bg-gray-50 rounded-lg">
      <RedirectHome/>
      <h1 className="text-3xl font-bold text-gray-900 mb-6">
        Monastery Image Gallery
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
        {images.map((img) => (
          <ImageCard image={img} />
        ))}
      </div>
    </div>
  );
};

export default GalleryPage;
