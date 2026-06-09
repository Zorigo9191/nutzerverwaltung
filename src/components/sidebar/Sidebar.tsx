import { Link } from "react-router-dom";
import "./sidebar.scss";

function Sidebar() {
  return (
    <div className="sidebar-container">
      <div className="sidebar-header">
        <img className="sidebar-header-image" src="./devkarriere.png" />
      </div>
      <div className="sidebar-body">
        <Link to={"overview"}>
          <button className="sidebar-item"> Übersicht</button>
        </Link>
        <Link to={"create"}>
          <button className="sidebar-item"> Erstellen</button>
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
