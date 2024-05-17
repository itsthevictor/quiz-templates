import { useState } from "react";
import { BsArrowCounterclockwise } from "react-icons/bs";

export default function SimpleQuiz() {
  const questions = [
    {
      questionText: "What is the capital of France?",
      answerOptions: [
        { answerText: "New York", isCorrect: false },
        { answerText: "London", isCorrect: false },
        { answerText: "Paris", isCorrect: true },
        { answerText: "Dublin", isCorrect: false },
      ],
    },
    {
      questionText: "Who is CEO of Tesla?",
      answerOptions: [
        { answerText: "Jeff Bezos", isCorrect: false },
        { answerText: "Elon Musk", isCorrect: true },
        { answerText: "Bill Gates", isCorrect: false },
        { answerText: "Tony Stark", isCorrect: false },
      ],
    },
    {
      questionText: "The iPhone was created by which company?",
      answerOptions: [
        { answerText: "Apple", isCorrect: true },
        { answerText: "Intel", isCorrect: false },
        { answerText: "Amazon", isCorrect: false },
        { answerText: "Microsoft", isCorrect: false },
      ],
    },
    {
      questionText: "How many Harry Potter books are there?",
      answerOptions: [
        { answerText: "1", isCorrect: false },
        { answerText: "4", isCorrect: false },
        { answerText: "6", isCorrect: false },
        { answerText: "7", isCorrect: true },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);

  const handleClick = (isCorrect) => {
    if (isCorrect === true) {
      setCorrectAnswers(correctAnswers + 1);
    }
    if (currentQuestion === questions.length - 1) {
      setShowScore(true);
    } else {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  return (
    <>
      <section className="section">
        <div className="app">
          {/* HINT: replace "false" with logic to display the 
      score when the user has answered all the questions */}
          {showScore ? (
            <>
              {" "}
              <div className="score-section">
                <p>
                  You scored {correctAnswers} out of {questions.length}
                </p>
                <div className="reset-container">
                  <button
                    className="reset-btn"
                    onClick={() => {
                      setCurrentQuestion(0);
                      setShowScore(false);
                      setCorrectAnswers(0);
                    }}
                  >
                    <BsArrowCounterclockwise className="reset-icon" size={55} />
                  </button>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="poll-container">
                <div className="question-section">
                  <div className="question-count">
                    <span>Question {currentQuestion + 1}</span>/
                    {questions.length}
                  </div>
                  <div className="question-text">
                    {questions[currentQuestion].questionText}
                  </div>
                </div>
                <div className="answer-section">
                  {questions[currentQuestion].answerOptions.map(
                    (question, index) => {
                      return (
                        <button
                          key={index}
                          onClick={() => handleClick(question.isCorrect)}
                        >
                          {question.answerText}
                        </button>
                      );
                    }
                  )}
                </div>
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
}
