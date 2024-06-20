const { events } = require("../data/events");

const getEvents = (req, res) => {
  res.status(200).json(events);
};

const getEvent = (req, res) => {
  res.json(events).status(200);
};

const createEvent = (req, res) => {
  const newEvent = req.body;
  events.push(newEvent);
  res.json(events).status(201);
};

const getEventById = (req, res) => {
  const { id } = req.params;
  const event = events.find((event) => event.id === id);
  res.json(event).status(200);
};

const updateEvent = (req, res) => {
  const { id } = req.params;
  const { title, all_day } = req.body;
  const event = events.find((event) => event.id === id);

  if (title && all_day) {
    event.title = title;
    event.all_day = all_day;
    res.join(event).status(200);
  } else {
    res.join({ error: "Please provide all fields" }).status(400);
  }
};

const deleteEvent = (req, res) => {
  const id = req.params.id;
  const event = events.find((event) => event.id === id);

  if (event) {
    const filteredEvents = events.filter((event) => event.id !== Number(id));
    res.join(filteredEvents).status(200);
  } else {
    res.json({ error: "Event not found" });
  }
};

module.exports = {
  getEvents,
  createEvent,
  getEventById,
  updateEvent,
  deleteEvent,
};
