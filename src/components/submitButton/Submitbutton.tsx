import type { MouseEventHandler } from "react";
import "./submitButton.scss";

type SubmitButtonProps = {
  onClick: MouseEventHandler<HTMLButtonElement>;
};

function SubmitButton({ onClick }: SubmitButtonProps) {
  return (
    <button className="submit-button" type="submit" onClick={onClick}>
      Submit
    </button>
  );
}

export default SubmitButton;
