import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar";

function Root() {
  return (
    <div className="app">
      <div className="app-sidebar">
        <Sidebar />
      </div>
      <main className="app-content">
        <Outlet />
      </main>
    </div>
  );
}

export default Root;
