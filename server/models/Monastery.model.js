import mongoose from "mongoose";

const Monastery = mongoose.model(
  "Monastery",
  new mongoose.Schema(
    {
      name: { type: String, required: true },
      location: { type: String, required: true },
      description: { type: String },
      images: [{ type: mongoose.Schema.Types.ObjectId, ref: "Image" }],
      manuscripts: [
        { type: mongoose.Schema.Types.ObjectId, ref: "Manuscript" },
      ],
      events: [{ type: mongoose.Schema.Types.ObjectId, ref: "Event" }],
      geo: {
        lat: Number,
        lng: Number,
      },
    },
    { timestamps: true }
  )
);

export default Monastery;
