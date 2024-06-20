const express = require("express");

const { getEvents, createEvent, updateEvent, deleteEvent, getEventById } = require("../controllers/events");

const router = express.Router();

router.get("/", getEvents);
router.post("/", createEvent);
router.get("/:id", getEvents);
router.put("/:id", updateEvent);
router.delete("/:id", deleteEvent);

module.exports = router;