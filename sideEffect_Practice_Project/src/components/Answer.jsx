import { useRef } from "react";

export default function Answer({ answers, selectedAns, ansState, onSelet }) {
  const shuffelAns = useRef();
  if (!shuffelAns.current) {
    shuffelAns.current = [...answers];
    shuffelAns.current.sort(() => Math.random() - 0.5);
  }
  return (
    <ul id="answers">
      {shuffelAns.current.map((ans) => {
        const selected = selectedAns === ans;
        let cssClass = " ";

        if (ansState === "answered" && selected) {
          cssClass = "selected";
        }

        if ((ansState === "correct" || ansState === "wrong") && selected) {
          cssClass = ansState;
        }

        return (
          <li key={ans} className="answer">
            <button
              onClick={() => onSelet(ans)}
              className={cssClass}
              disabled={ansState !== ""}
            >
              {ans}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
