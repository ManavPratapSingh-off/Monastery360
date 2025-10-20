import React from "react";

function Archivecard({ archive }) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {archive.filetype.startsWith("image") ? (
        <img
          src={archive.fileUrl}
          alt={archive.title}
          className="w-full h-48 object-cover"
        />
      ) : (
        <div className="h-48 flex items-center justify-center bg-gray-200 text-gray-600 text-xl font-semibold">
          PDF Document
        </div>
      )}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900">{archive.title}</h3>
        <p className="text-sm text-gray-600 mt-1">
          Tags: {archive.tags.join(", ") || "None"}
        </p>
      </div>
    </div>
  );
}

export default Archivecard;
