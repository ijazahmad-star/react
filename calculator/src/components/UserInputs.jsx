import { useState } from "react";

// INITIAL_INPUTS = {
//   intitalInvestment: 10000,
//   aunnalInvestment: 1200,
//   expectedReturns: 6,
//   duration: 10,
// };

export default function UserInputs({onChangeInput, userInputs}) {

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label> Initial Investment</label>
          <input
            type="number"
            required
            value={userInputs.initialInvestment}
            onChange={(e) => onChangeInput("initialInvestment", e.target.value)}
          />
        </p>
        <p>
          <label> Annual Investment</label>
          <input
            type="number"
            required
            value={userInputs.annualInvestment}
            onChange={(e) => onChangeInput("annualInvestment", e.target.value)}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label> Expected Return</label>
          <input
            type="number"
            required
            value={userInputs.expectedReturn}
            onChange={(e) => onChangeInput("expectedReturn", e.target.value)}
          />
        </p>
        <p>
          <label> Duration</label>
          <input
            type="number"
            required
            value={userInputs.duration}
            onChange={(e) => onChangeInput("duration", e.target.value)}
          />
        </p>
      </div>
    </section>
  );
}
