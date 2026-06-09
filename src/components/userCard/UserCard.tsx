import "./userCard.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressBook,
  faCakeCandles,
  faEnvelope,
  faGlobe,
  faPhone,
  faVenusMars,
} from "@fortawesome/free-solid-svg-icons";
import { Gender, type User } from "../../types/user/User";
import DeleteButton from "../deleteButton/DeleteButton";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

type UserCardProps = {
  user: User;
};

function UserCard({ user }: UserCardProps) {
  const { usersDispatch } = useContext(UserContext);

  function deleteUser(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    event.preventDefault();
    usersDispatch({ type: "REMOVE_USER", user: user });
    alert("Deleted user");
  }

  return (
    <div className="usercard-container">
      <DeleteButton onClick={deleteUser} />
      <div className="usercard-header">
        <img
          className="usercard-header-image"
          src={`https://randomuser.me/api/portraits/${
            user.gender === Gender.FEMALE ? "women" : "men"
          }/${Math.floor(Math.random() * 100)}.jpg`}
          alt="User Profile"
        />
      </div>
      <div className="usercard-body">
        <div className="usercard-body-title">
          <strong> {user.name}</strong>
        </div>
        {/* DIE LISTE */}
        <div className="usercard-body-content">
          <div className="usercard-data-list">
            {/* Item 1: Geburtstag */}
            <div className="usercard-data-list-item">
              <span className="usercard-data-icon">
                <FontAwesomeIcon
                  icon={faCakeCandles}
                  style={{ color: "rgb(116, 192, 252)" }}
                />
              </span>
              <span className="usercard-date-text">
                {new Date(user.dob).toLocaleDateString("de-DE", {
                  year: "numeric",
                  month: "2-digit",
                  day: "2-digit",
                })}
              </span>
            </div>

            {/* Item 2: Geschlecht */}
            <div className="usercard-data-list-item">
              <span className="usercard-data-icon">
                <FontAwesomeIcon
                  icon={faVenusMars}
                  style={{ color: "rgb(116, 192, 252)" }}
                />
              </span>
              <span className="usercard-date-text"> {user.gender}</span>
            </div>

            {/* Item 3: Email */}
            <div className="usercard-data-list-item">
              <span className="usercard-data-icon">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  style={{ color: "rgb(116, 192, 252)" }}
                />
              </span>
              <span className="usercard-date-text"> {user.email}</span>
            </div>
          </div>

          <div className="usercard-data-list">
            <div className="usercard-data-list-item">
              <span className="usercard-data-icon">
                <FontAwesomeIcon
                  icon={faAddressBook}
                  style={{ color: "rgb(116, 192, 252)" }}
                />
              </span>
              <span className="usercard-date-text"> {user.address} </span>
            </div>

            <div className="usercard-data-list-item">
              <span className="usercard-data-icon">
                <FontAwesomeIcon
                  icon={faPhone}
                  style={{ color: "rgb(116, 192, 252)" }}
                />
              </span>
              <span className="usercard-date-text"> {user.phone}</span>
            </div>

            <div className="usercard-data-list-item">
              <span className="usercard-data-icon">
                <FontAwesomeIcon
                  icon={faGlobe}
                  style={{ color: "rgb(116, 192, 252)" }}
                />
              </span>
              <span className="usercard-date-text"> {user.web}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserCard;
