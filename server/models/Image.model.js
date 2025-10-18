import mongoose from "mongoose";

const Image = mongoose.model(
  "Image",
  new mongoose.Schema(
    {
      url: { type: String, required: true },
      caption: { type: String },
      monastery: { type: mongoose.Schema.Types.ObjectId, ref: "Monastery" },
    },
    { timestamps: true }
  )
);

export default Image;
