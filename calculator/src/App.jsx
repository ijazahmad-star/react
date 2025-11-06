import { useState } from "react";

import Header from "./components/Header";
import UserInputs from "./components/UserInputs";
import Results from "./components/Results";
function App() {
  const [userInput, setUserInput] = useState({
    // intitalInvestment: 10000,
    // aunnalInvestment: 1200,
    // expectedReturns: 6,
    // duration: 10,
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const isValid = userInput.duration >= 1;

  function handleChange(identifier, value) {
    setUserInput((preUserInputs) => {
      return {
        ...preUserInputs,
        [identifier]: +value,
      };
    });
  }
  return (
    <>
      <Header />
      <UserInputs onChangeInput={handleChange} userInputs={userInput} />
      {!isValid && <p className="center"> Please Enter positive duration! </p>}
      {isValid && <Results input={userInput} />}
    </>
  );
}

export default App;
