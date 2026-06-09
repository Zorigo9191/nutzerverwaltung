import "./deleteButton.scss";

type DeleteButtonProps = {
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

function DeleteButton({ onClick }: DeleteButtonProps) {
  return (
    <button className="delete-button" onClick={onClick}>
      X
    </button>
  );
}

export default DeleteButton;
