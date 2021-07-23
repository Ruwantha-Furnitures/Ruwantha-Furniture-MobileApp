const { Message } = require("../../models");
const contactUsController = async (req, res) => {
  const { name, telephone, email, description } = req.body.data;
  const messageData = { name, telephone, email, details: description };
  try {
    const messageSubmit = await Message.create(messageData);
    if (messageSubmit) {
      res.json({ status: "Successful" });
    } else {
      res.json({ status: "Unsuccessful" });
    }
    console.log(messageSubmit.name);
    console.log(messageSubmit.telephone);
  } catch (error) {
    console.log(error);
  }
};

module.exports = contactUsController;
