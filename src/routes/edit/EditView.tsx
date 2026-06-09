import { useContext, useEffect, useState } from "react";
import UserForm from "../../components/userForm/UserForm";
import { UserContext } from "../../context/UserContext";
import type { User } from "../../types/user/User";
import { useNavigate, useParams } from "react-router-dom";

function EditView() {
  const [editUser, setEditUser] = useState<User | undefined>();
  const { users, usersDispatch } = useContext(UserContext);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const user = users.find((user) => "" + user.id === id);
    setEditUser(user);
  }, [users, id]);

  function updateUser(user: User) {
    usersDispatch({ type: "UPDATE_USER", user: user });
    alert("Updated user");
    navigate(-1);
  }

  function displayUserForm() {
    if (editUser) {
      return <UserForm user={editUser} onSubmit={updateUser} />;
    } else {
      return "User not found";
    }
  }

  return displayUserForm();
}

export default EditView;
