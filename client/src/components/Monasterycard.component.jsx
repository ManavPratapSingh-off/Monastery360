import React from "react";
import { useNavigate } from "react-router-dom";

function Monasterycardcomponent({ monastery }) {
  const navigate = useNavigate();
  return (
    <div
      key={monastery._id}
      className="bg-white rounded-lg shadow-md p-5 hover:shadow-lg transition shadow-gray-300"
    >
      <h3 className="text-xl font-semibold text-indigo-700 mb-1">
        {monastery.name}
      </h3>
      <p className="text-gray-600">{monastery.location}</p>
      <button
        className="mt-3 inline-block px-4 py-2 text-white bg-indigo-600 rounded hover:bg-indigo-700 transition"
        onClick={() => navigate(`/monastery/${monastery._id}`)}
      >
        View Details
      </button>
    </div>
  );
}

export default Monasterycardcomponent;
