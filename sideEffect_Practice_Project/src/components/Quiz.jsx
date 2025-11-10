import { useState, useCallback } from "react";
import questions from "../questions";
import quizCompleteImg from "../assets/quiz-complete.png";
import Questions from "./Questions";

export default function Quiz() {
  const [isActiveQuestions, setIsActiveQuestions] = useState([]);

  const activeQuestionIndex = isActiveQuestions.length;
  const isComplete = activeQuestionIndex === questions.length;

  if (isComplete) {
    return (
      <div id="summary">
        <img src={quizCompleteImg} alt="Quiz-Completed" />
        <h2>Quiz Completed</h2>
      </div>
    );
  }

  const handleUserAnswers = useCallback(
    function handleUserAnswers(selectedAns) {
      setIsActiveQuestions((preActiveQuestions) => {
        return [...preActiveQuestions, selectedAns];
      });
    },
    []
  );

  const handleSkipQuestions = useCallback(
    () => handleUserAnswers(null),
    [handleUserAnswers]
  );

  return (
    <div id="quiz">
      <Questions
        key={activeQuestionIndex}
        index = {activeQuestionIndex}
        onSelectedAns={handleUserAnswers}
        onSkipAns={handleSkipQuestions}
      />
    </div>
  );
}
