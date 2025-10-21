import React, { useRef, useEffect, useState } from "react";
import { post_booking } from "../api/bookingcalls.js";

function BookingModal({ setopenModal, event }) {
  const modal_ref = useRef(null);

  const [input, setinput] = useState({
    name: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setinput({ ...input, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form data:", input);
    // TODO: handle file upload API call here

    try {
      const formdata = new FormData();
      formdata.append("event", event._id);
      formdata.append("name", input.name);
      formdata.append("email", input.email);

      const response = await post_booking(formdata);
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
        <h2 className="text-2xl font-bold mb-1">Make Booking</h2>
        <h4 className="mb-4">{`for: ${event.name}`}</h4>
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
            name="email"
            placeholder="example@email.com"
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={input.email}
            onChange={handleChange}
            required
          />
          <button
            type="submit"
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 mt-2"
          >
            Book
          </button>
        </form>
      </div>
    </div>
  );
}

export default BookingModal;
