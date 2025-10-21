import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { get_monastery } from "../api/monasterycalls.js";
import { useSelector } from "react-redux";
import RedirectHome from "../components/RedirectHome.component.jsx";

const MonasteryPage = () => {
  const navigate = useNavigate();
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

  const { events } = useSelector((state) => state.event);
  const { images } = useSelector((state) => state.image);

  return (
    <div className="max-w-5xl mx-auto mb-40 p-6 bg-white rounded-lg shadow-md">
      <RedirectHome/>
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
          {monasteryInfo?.images.map((img, index) => {
            const im = images.find((i) => i._id === img);
            return (
              <img
                key={index}
                src={im.fileUrl}
                alt={`Image ${index + 1} of ${im.monastery.name}`}
                className="rounded-lg shadow hover:scale-105 transition-transform"
              />
            );
          })}
        </div>
      </section>

      <section className="mb-8">
        <h3 className="text-2xl font-semibold mb-3 text-gray-800">
          Upcoming Events
        </h3>
        <ul className="list-disc list-inside text-gray-700">
          {monasteryInfo?.events.map((event) => {
            const ev = events.find((e) => e._id === event);
            return (
              <li
                key={ev._id}
                className="mb-2 p-1 flex flex-col bg-[aliceblue] rounded-md cursor-pointer"
                style={{ listStyle: "none" }}
                onClick={() => navigate(`/event/${ev._id}`)}
              >
                <span className="font-semibold">{ev.name}</span>
                <span className="flex gap-2">
                  <time>{new Date(ev.startDate).toLocaleString()}</time>-
                  <time>{new Date(ev.endDate).toLocaleString()}</time>
                </span>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
};

export default MonasteryPage;
