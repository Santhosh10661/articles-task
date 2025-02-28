import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./slices/dataReducer";

const store = configureStore({
  reducer: {
    data: dataReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Disable the serializable check middleware//
    }),
});

export default store;
