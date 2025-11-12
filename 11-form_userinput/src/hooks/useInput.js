import { useState } from "react";

export function useInput(defaultValue, validationFn) {
  const [enteredValue, setEnteredValue] = useState(defaultValue);
  const [didEdit, setDidEdit] = useState(false);

  const valueIsValid = validationFn(enteredValue);

  function handleValueChange(event) {
    setEnteredValue(event.target.value);
    setDidEdit(false);
  }

  function handleBlur() {
    setDidEdit(true);
  }

  return {
    value: enteredValue,
    handleBlur,
    handleValueChange,
    hasError: didEdit && !valueIsValid
  };
}
