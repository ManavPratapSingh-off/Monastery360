import React, { useState, useEffect } from "react";
import { get_archive, get_archives } from "../api/archivecalls.js";
import Archivecard from "../components/Archivecard.component.jsx";
import { useDispatch } from "react-redux";
import { setarchives } from "../redux/archiveslice.js";
import ArchiveModal from "../components/ArchiveModal.component.jsx";

function ArchivesPage() {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredArchives, setfilteredArchives] = useState([]);
  const [openModal, setopenModal] = useState(false)

  useEffect(() => {
    try {
      const make_get_archives_call = async () => {
        const data = await get_archives();
        setfilteredArchives(data);
        dispatch(setarchives(data));
      };
      make_get_archives_call();
    } catch (e) {
      console.log(e);
    }
  }, []);

  const make_get_archive_call = async (e) => {
    e.preventDefault();
    if (searchTerm === "") return;
    try {
      const data = await get_archive(searchTerm);
      setfilteredArchives(data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Digital Archive</h1>

      {/* Container for search form and add button */}
      <div className="mb-6 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Search Form */}
        <form className="flex-1 flex gap-2" onSubmit={make_get_archive_call}>
          <input
            type="text"
            placeholder="Search archives by title or tags..."
            className="flex-1 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            type="submit"
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Search
          </button>
        </form>

        {/* Add Archive Button */}
        <button
          onClick={() => setopenModal(true)}
          className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg shadow hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          Add Archive
        </button>
      </div>

      {filteredArchives.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredArchives.map((archive) => (
            <Archivecard key={archive._id} archive={archive} />
          ))}
        </div>
      ) : (
        <p className="text-gray-500 text-center">No archives found.</p>
      )}
      {openModal && <ArchiveModal setopenModal={setopenModal}/>}
    </div>
  );
}

export default ArchivesPage;
