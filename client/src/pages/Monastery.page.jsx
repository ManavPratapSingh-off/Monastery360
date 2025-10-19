import React from "react";
import m1 from "../assets/monastery1.jpg";
import m2 from "../assets/monastery2.jpg";
import m3 from "../assets/monastery3.jpg";

const MonasteryPage = () => {
  const monasteryInfo = {
    name: "Saint Catherine's Monastery",
    location: "[translate:Синай, Египет]",
    description:
      "One of the oldest working Christian monasteries in the world, located at the foot of Mount Sinai.",
    images: [m1, m2, m3],
    events: [
      { id: 1, title: "Religious Festival", date: "2025-11-15" },
      { id: 2, title: "Cultural Tour", date: "2025-12-05" },
    ],
  };

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-4xl font-bold text-gray-900 mb-2">
        {monasteryInfo.name}
      </h1>
      <h2 className="text-xl text-indigo-700 mb-4">{monasteryInfo.location}</h2>
      <p className="text-gray-700 mb-6">{monasteryInfo.description}</p>

      <section className="mb-8">
        <h3 className="text-2xl font-semibold mb-3 text-gray-800">Gallery</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {monasteryInfo.images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Image ${index + 1} of ${monasteryInfo.name}`}
              className="rounded-lg shadow hover:scale-105 transition-transform"
            />
          ))}
        </div>
      </section>

      <section className="mb-8">
        <h3 className="text-2xl font-semibold mb-3 text-gray-800">
          Upcoming Events
        </h3>
        <ul className="list-disc list-inside text-gray-700">
          {monasteryInfo.events.map((event) => (
            <li key={event.id} className="mb-2">
              <span className="font-semibold">{event.title}</span> -{" "}
              <time>{event.date}</time>
            </li>
          ))}
        </ul>
      </section>

      <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition">
        Book Your Visit
      </button>
    </div>
  );
};

export default MonasteryPage;
