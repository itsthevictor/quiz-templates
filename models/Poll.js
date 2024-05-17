import mongoose from "mongoose";

const PollSchema = new mongoose.Schema({
  questionText: {
    type: String,
  },
  answerOptions: [],
});

export default mongoose.model("Poll", PollSchema);
