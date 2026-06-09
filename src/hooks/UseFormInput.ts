import { useState, type ChangeEvent } from "react";
import type { ValidationError } from "../types/validation/Validation";

export function UseFormInput(value: string, required = false) {
  const [inputValue, setInputValue] = useState(value);
  const [error, setError] = useState<ValidationError>({
    isError: false,
    errorMessage: "",
  });

  function handleInputChangeEvent(
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) {
    const inputValue = event.target.value;

    setInputValue(inputValue);

    validateInput(inputValue);
  }

  function validateInput(inputValue: string): boolean {
    console.log(inputValue);
    if (required) {
      if (inputValue === "") {
        setError({
          isError: true,
          errorMessage: "Bitte geben Sie einen Wert ein",
        });

        return false;
      } else {
        setError({ isError: false, errorMessage: "" });
        return true;
      }
    }
    return true;
  }

  return {
    value: inputValue,
    handleInputChangeEvent,
    error: error,
    validateInput: validateInput,
  };
}
