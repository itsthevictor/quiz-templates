import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { BsArrowCounterclockwise, BsArrowRightShort } from "react-icons/bs";
import axios from "axios";

export const pollLoader = async () => {
  const response = await axios.get("http://localhost:8080/api/v1/polls/random");

  const { data } = response;
  const { poll } = data;
  return poll;
};

export default function SimplePoll() {
  const data = useLoaderData();
  const poll = data[0];

  const [alreadyVoted, setAlreadyVoted] = useState("");
  const [totalVotes, setTotalVotes] = useState(0);

  const handleClick = async (id) => {
    console.log(id);

    const votedOption = poll.answerOptions.filter((option) => {
      return option.id === id;
    });
    votedOption[0].votes++;
    console.log(votedOption[0]);
    setTotalVotes(totalVotes + 1);
    const sendData = {
      _id: poll._id,
      id: id,
    };
    await axios.patch("http://localhost:8080/api/v1/polls/vote", sendData);
  };

  return (
    <>
      <section className="section">
        <div className="app">
          <>
            <div className="poll-container">
              <div className="question-section">
                <div className="question-count">
                  <span>Vote </span>
                </div>
                <div className="question-text">{poll.questionText}</div>
              </div>
              <div className="answer-section">
                {poll.answerOptions.map((poll, id) => {
                  return (
                    <button key={id} onClick={() => handleClick(poll.id)}>
                      {poll.option}
                    </button>
                  );
                })}
              </div>
            </div>
          </>
        </div>
      </section>
    </>
  );
}
