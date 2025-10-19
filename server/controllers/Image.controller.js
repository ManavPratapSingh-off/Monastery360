import Image from "../models/Image.model.js";
import Monastery from "../models/Monastery.model.js";

export const post_image = async (req, res) => {
  try {
    const image = await Image.create(req.body);
    const monastery = await Monastery.findById(image.monastery).populate(
      "images"
    );
    monastery.images.push(image._id);
    await monastery.save();
    const populated_image = await Image.findById(image._id).populate(
      "monastery",
      "_id name"
    );
    res.status(201).send(populated_image);
  } catch (e) {
    res.status(400).send(e);
  }
};

export const get_images = async (req, res) => {
  try {
    const images = await Image.find({}).populate("monastery", "_id name");
    res.status(200).send(images);
  } catch (e) {
    res.status(404).send(e);
  }
};
