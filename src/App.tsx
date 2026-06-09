import "./App.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/Root";
import Overview from "./routes/overview/Overview";
import CreateView from "./routes/create/CreateView";
import EditView from "./routes/edit/EditView";
import UserManagementReducer from "./hooks/UserManagementReducer";
import { useEffect, useReducer } from "react";
import { UserContext } from "./context/UserContext";
import type { User } from "./types/user/User";

const router = createBrowserRouter([
  {
    path: "/nutzerverwaltung",
    element: <Root />,
    children: [
      { path: "overview", element: <Overview /> },
      { path: "create", element: <CreateView /> },
      { path: "edit/:id", element: <EditView /> },
    ],
  },
]);

function App() {
  const [users, usersDispatch] = useReducer(
    UserManagementReducer,
    [],
    fetchInitUserData,
  );

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  function fetchInitUserData(): User[] {
    const stringUsers = localStorage.getItem("users");
    if (stringUsers) {
      return JSON.parse(stringUsers);
    }

    return [];
  }

  return (
    <UserContext.Provider value={{ users, usersDispatch }}>
      <RouterProvider router={router} />
    </UserContext.Provider>
  );
}

export default App;
