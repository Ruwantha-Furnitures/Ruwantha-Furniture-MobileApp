const db = require("../../models");
const Message = db.messages;

const messageController = async (req, res) => {
  const { first_name, last_name, contact_number, email, details } = req.body;

  try {
    const message = await Message.create({
      first_name,
      last_name,
      contact_number,
      email,
      details,
    });
    if (message) {
      res
        .status(200)
        .json({ message: "Your message has been added successfully" });
    } else {
      res
        .status(500)
        .json({ message: "Your message has not been added, please try again" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { messageController };
