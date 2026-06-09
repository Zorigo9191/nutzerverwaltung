import React, { createContext } from "react";
import type {
  UserManagementAction,
  UserManagementState,
} from "../hooks/UserManagementReducer";

export const UserContext = createContext<{
  users: UserManagementState;
  usersDispatch: React.Dispatch<UserManagementAction>;
}>({ users: [], usersDispatch: () => {} });
