import connectionReduce from "./features/loginSlice";
import { configureStore } from "@reduxjs/toolkit";

export default configureStore({
  reducer: {
    connection: connectionReduce,
  },
});
