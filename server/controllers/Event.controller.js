import Event from "../models/Event.model.js";

export const post_event = async (req, res) => {
  try {
    const event = await Event.create(req.body);
    res.status(201).json(event);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const get_events = async (req, res) => {
  const events = await Event.find({});
  res.status(200).send(events);
};

export const get_event = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) return res.status(404).json({ error: "Not found" });
    res.status(200).json(event);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const update_event = async (req, res) => {
  try {
    const event = await Event.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!event) return res.status(404).json({ error: "Not found" });
    res.json(event);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const delete_event = async (req, res) => {
  try {
    const event = await Event.findByIdAndDelete(req.params.id);
    if (!event) return res.status(404).json({ error: "Not found" });
    res.json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
