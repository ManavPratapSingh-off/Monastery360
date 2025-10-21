import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import EventCard from "../components/Eventcard.component.jsx";
import useEventData from "../hooks/useEventData.js";
import EventCalendar from "../components/EventCalendar.component.jsx";

function EventsPage() {
  const { events } = useSelector((state) => state.event);
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-5">
      <div className="max-w-7xl mx-auto">
        {/* Page Title */}
        <h1 className="text-3xl font-bold text-center text-indigo-800 mb-10">
          Upcoming Events
        </h1>

        {/* Event calendar */}
        <EventCalendar events={events} />

        {/* Events Grid */}
        {events.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {events.map((event) => (
              <EventCard key={event._id} event={event} />
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-500 text-lg">
            No events found.
          </div>
        )}
      </div>
    </div>
  );
}

export default EventsPage;
