import { useContext } from "react";

import { UserContext } from "../../context/UserContext";
import type { User } from "../../types/user/User";
import "./createView.scss";
import UserForm from "../../components/userForm/UserForm";
import { useNavigate } from "react-router-dom";

function CreateView() {
  const { usersDispatch } = useContext(UserContext);

  const navigate = useNavigate();

  function handleSubmitUser(user: User) {
    const userWithStableImage = {
      ...user,
      portraitId: Math.floor(Math.random() * 100),
    };
    usersDispatch({ type: "ADD_USER", user: userWithStableImage });
    alert("Added user");
    navigate(-1);
  }

  return <UserForm user={undefined} onSubmit={handleSubmitUser} />;
}

export default CreateView;
