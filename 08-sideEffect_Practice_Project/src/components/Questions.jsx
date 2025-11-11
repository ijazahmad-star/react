import QuestionTimer from "./QuestionTimer";
import Answer from "./Answer";
import { useState } from "react";
import questions from "../questions";

export default function Questions({ onSelectedAns, onSkipAns, index }) {
  const [answer, setAnwer] = useState({
    selectedAnswer: "",
    isCorrect: null,
  });

  let timer = 10000;
  if (answer.selectedAnswer) {
    timer = 1000;
  }

  if (answer.isCorrect !== null) {
    timer = 2000;
  }
  function handleSelectedAnswer(answer) {
    setAnwer({
      selectedAnswer: answer,
      isCorrect: null,
    });

    setTimeout(() => {
      setAnwer({
        selectedAnswer: answer,
        isCorrect: questions[index].answers[0] === answer,
      });

      setTimeout(() => {
        onSelectedAns(answer);
      }, 2000);
    }, 1000);
  }

  let answerState = "unanswered";
  if (answer.selectedAnswer && answer.isCorrect !== null) {
    answerState = answer.isCorrect ? "correct" : "wrong";
  } else if (answer.selectedAnswer) {
    answerState = "answered";
  }
  return (
    <div id="questions">
      <QuestionTimer
        key={timer}
        timeout={timer}
        onTimeout={answer.selectedAnswer === '' ? onSkipAns: null}
        mode={answerState}
      />
      <h2>{questions[index].text}</h2>
      <Answer
        answers={questions[index].answers}
        selectedAns={answer.selectedAnswer}
        ansState={answerState}
        onSelet={handleSelectedAnswer}
      />
    </div>
  );
}
