import Poll from "../models/Poll.js";

export const createPoll = async (req, res) => {
  const poll = await Poll.create(req.body);
  res.status(201).json({ poll });
};

export const getAllPolls = async (req, res) => {
  const polls = await Poll.find({});
  res.status(200).json({ polls });
};

export const getSinglePoll = async (req, res) => {
  console.log("got req");
  var fields = {};
  var filter = {};
  var options = { skip: 1, limit: 1 };
  const poll = await Poll.findRandom(fields, filter, options);
  res.status(200).json({ poll });
};

export const getRandomPoll = async (req, res) => {
  console.log("got req");
  var fields = {};
  var filter = {};
  var options = { skip: 1, limit: 1 };
  const poll = await Poll.aggregate([{ $sample: { size: 1 } }]);
  res.status(200).json({ poll });
};

export const votePoll = async (req, res) => {
  const { _id, id } = req.body;
  const poll = await Poll.findOneAndUpdate(
    { _id: _id, "answerOptions.id": id },
    { $inc: { "answerOptions.$.votes": 1 } }
  );
  res.status(200).json({ poll });
};

export const updatePoll = async (req, res) => {
  res.send("updated poll");
};

export const deletePoll = async (req, res) => {
  res.send("updated poll");
};
