// src/components/EventCalendar.jsx
import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment"; // ✅ Required for momentLocalizer
import "react-big-calendar/lib/css/react-big-calendar.css";
import { parseISO } from "date-fns";

const localizer = momentLocalizer(moment); // ✅ Must pass moment to the localizer

const EventCalendar = ({ events }) => {
  // ✅ Convert string dates (e.g., from API) to real Date objects
  const parsedEvents = events.map((e) => ({
    ...e,
    start: e.startDate instanceof Date ? e.startDate : parseISO(e.startDate),
    end: e.endDate instanceof Date ? e.endDate : parseISO(e.endDate),
    title: e.title || "(No title)", // Fallback title if missing
  }));

  return (
    <Calendar
      localizer={localizer}
      events={parsedEvents}
      startAccessor="start" // ✅ Required to tell the calendar what field to use
      endAccessor="end" // ✅ Same here
      style={{ height: 500 }}
      components={{
        event: ({ event }) => (
          <span className="text-sm font-medium">{event.name}</span>
        ),
      }}
    />
  );
};

export default EventCalendar;
