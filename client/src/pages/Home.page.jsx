import React from "react";
import NavbarComponent from "../components/Navbar.component.jsx";
import Monasterycardcomponent from "../components/Monasterycard.component.jsx";
import { useSelector } from "react-redux";
import useMonasteryData from "../hooks/useMonasteryData.js";

function HomePage() {
  useMonasteryData()
  const { monasteries } = useSelector((state) => state.monastery);
  const featuredMonasteries = monasteries.filter((mon) => mon.featured) || [];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          Welcome to Monastery360
        </h1>
        <p className="text-gray-700">
          Explore featured monasteries around the world.
        </p>
      </header>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          Featured Monasteries
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {featuredMonasteries.map((monastery) => (
            <Monasterycardcomponent monastery={monastery} />
          ))}
        </div>
      </section>

      <NavbarComponent />
    </div>
  );
}

export default HomePage;
