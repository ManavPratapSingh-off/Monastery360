import React, { useEffect, useState } from "react";
import Monasterycardcomponent from "../components/Monasterycard.component.jsx";
import { useSelector } from "react-redux";

function MonasteriesPage() {
  const { monasteries } = useSelector((state) => state.monastery);

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-5">
      <div className="max-w-7xl mx-auto">
        {/* Page Title */}
        <h1 className="text-3xl font-bold text-center text-indigo-800 mb-10">
          Monasteries
        </h1>

        {/* Grid of Monastery Cards */}
        {monasteries.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {monasteries.map((monastery) => (
              <Monasterycardcomponent
                key={monastery._id}
                monastery={monastery}
              />
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-500 text-lg">
            No monasteries found.
          </div>
        )}
      </div>
    </div>
  );
}

export default MonasteriesPage;
