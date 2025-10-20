import React, { useRef, useEffect, useState } from "react";
import { post_archive } from "../api/archivecalls.js";

function ArchiveModal({ setopenModal }) {
  const modal_ref = useRef(null);

  const [input, setinput] = useState({
    name: "",
    title: "",
    file: null,
    tags: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "file") {
      setinput({ ...input, file: files[0] });
    } else {
      setinput({ ...input, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form data:", input);
    // TODO: handle file upload API call here

    try {
      const formdata = new FormData();
      formdata.append("title", input.title);
      formdata.append("file", input.file);
      formdata.append("filetype", input.file.type);
      input.tags.split(" ").forEach((tag) => formdata.append("tags", tag));
      formdata.append("uploadedBy", input.name);

      const response = await post_archive(formdata);
      console.log(response);
      window.location.reload();
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    const detect_mouse_click = (e) => {
      if (modal_ref.current && !modal_ref.current.contains(e.target))
        setopenModal(false);
    };
    document.addEventListener("mousedown", detect_mouse_click);
    return () => document.removeEventListener("mousedown", detect_mouse_click);
  }, []);

  return (
    <div
      className="
  fixed inset-0 z-[1]
  bg-black/50 backdrop-blur-sm
  flex items-center justify-center 
  p-4
  overflow-hidden
"
    >
      {/* Your existing modal code goes here */}
      <div
        ref={modal_ref}
        className="w-[95%] lg:max-w-[60%] h-[600px] bg-white rounded-2xl px-8 flex flex-col justify-center items-center overflow-hidden relative z-[2]"
      >
        <h2 className="text-2xl font-bold mb-4">Upload Archive</h2>
        <form className="w-full flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={input.name}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="title"
            placeholder="Title"
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={input.title}
            onChange={handleChange}
            required
          />
          <input
            type="file"
            name="file"
            className="p-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="tags"
            placeholder="Tags (comma separated)"
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={input.tags}
            onChange={handleChange}
          />
          <button
            type="submit"
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 mt-2"
          >
            Upload
          </button>
        </form>
      </div>
    </div>
  );
}

export default ArchiveModal;
