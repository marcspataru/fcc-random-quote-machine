import { configureStore } from "@reduxjs/toolkit";
import colorReducer from "@/redux/slices";
import store from "@/redux/store";

export default configureStore({
  reducer: {
    color: colorReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
