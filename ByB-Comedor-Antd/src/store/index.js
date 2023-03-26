import { configureStore } from "@reduxjs/toolkit";
//reducers
import users from "./slices/users";
import layout from "./slices/layout";
import notifications from "./slices/notifications";

export default configureStore({
  reducer: {
    users,
    layout,
    notifications,
  },
});
