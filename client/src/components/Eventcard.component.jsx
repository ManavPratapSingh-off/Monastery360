import React from "react";
import { useNavigate } from "react-router-dom";

function EventCard({ event }) {
  const navigate = useNavigate();
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-IN", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-5 hover:shadow-lg transition shadow-gray-300">
      {/* Event Name */}
      <h3 className="text-xl font-semibold text-indigo-700 mb-2">
        {event.name}
      </h3>

      {/* Event Date */}
      <p className="text-sm text-gray-500 mb-2">
        📅 {formatDate(event.startDate)} - {formatDate(event.endDate)}
      </p>

      {/* Monastery (if populated) */}
      {event.monastery && (
        <p className="text-sm text-gray-600 mb-2">
          🏯 <span className="font-medium">{event.monastery.name}</span>
        </p>
      )}

      {/* Description */}
      {event.description && (
        <p className="text-gray-700 text-sm mb-4 line-clamp-3">
          {event.description}
        </p>
      )}

      {/* Action Button */}
      <button
        onClick={() => navigate(`/event/${event._id}`)}
        className="mt-auto px-4 py-2 text-white bg-indigo-600 rounded hover:bg-indigo-700 transition"
      >
        View Details
      </button>
    </div>
  );
}

export default EventCard;
