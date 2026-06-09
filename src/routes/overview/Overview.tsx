import { useContext } from "react";
import UserCard from "../../components/userCard/UserCard";
import { UserContext } from "../../context/UserContext";
import { Link } from "react-router-dom";
import "./overView.scss";

function Overview() {
  const { users } = useContext(UserContext);

  return (
    <div className="overview-body">
      {users.map((user) => (
        <Link to={`/edit/${user.id}`} key={`usercardLink-${user.id}`}>
          <UserCard key={user.id} user={user} />
        </Link>
      ))}
    </div>
  );
}

export default Overview;
