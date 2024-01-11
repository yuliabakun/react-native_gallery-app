import { configureStore } from "@reduxjs/toolkit";
import imagesReducer from "./image";

const store = configureStore({
  reducer: {
    images: imagesReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
