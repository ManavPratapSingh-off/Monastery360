import React, { useEffect, useState } from "react";
import axios from "axios";

const GalleryPage = () => {
  const [images, setImages] = useState([]);

  return (
    <div className="max-w-6xl mx-auto p-6 bg-gray-50 rounded-lg">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">
        Monastery Image Gallery
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {images.map((img, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
          >
            <img
              src={img.url}
              alt={img.description || `Monastery Image ${index + 1}`}
              className="object-cover w-full h-48"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryPage;
