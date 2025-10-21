// src/components/ImageCard.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const ImageCard = ({ image }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/monastery/${image.monastery._id}`)}
      key={image._id}
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
    >
      <img
        src={image.fileUrl}
        alt={image.caption}
        className="w-full h-56 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{image.caption}</h3>
        <p className="text-gray-600 mt-1">Monastery: {image.monastery.name}</p>
        <p className="text-gray-500 text-sm">{image.monastery.location}</p>
      </div>
    </div>
  );
};

export default ImageCard;
