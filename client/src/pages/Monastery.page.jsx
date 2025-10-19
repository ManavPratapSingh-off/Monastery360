import React, { useState } from "react";
import m1 from "../assets/monastery1.jpg";
import m2 from "../assets/monastery2.jpg";
import m3 from "../assets/monastery3.jpg";
import { useParams } from "react-router-dom";
import { get_monastery } from "../api/monasterycalls.js";

const MonasteryPage = () => {
  const monastery_id = useParams().id;
  const [monasteryInfo, setmonasteryInfo] = useState(null);
  const make_get_monastery_call = async () => {
    try {
      const monastery = await get_monastery(monastery_id);
      setmonasteryInfo(monastery);
    } catch (e) {
      console.log(e);
    }
  };
  make_get_monastery_call();

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-4xl font-bold text-gray-900 mb-2">
        {monasteryInfo?.name}
      </h1>
      <h2 className="text-xl text-indigo-700 mb-4">
        {monasteryInfo?.location}
      </h2>
      <p className="text-gray-700 mb-6">{monasteryInfo?.description}</p>

      <section className="mb-8">
        <h3 className="text-2xl font-semibold mb-3 text-gray-800">Gallery</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {monasteryInfo?.images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Image ${index + 1} of ${monasteryInfo?.name}`}
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
          {monasteryInfo?.events.map((event) => (
            <li key={event._id} className="mb-2">
              <span className="font-semibold">{event.name}</span> -{" "}
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
