import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./slices/dataReducer";
import themeReducer from "./slices/themeReducer";

const store = configureStore({
  reducer: {
    data: dataReducer,
    theme: themeReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Disable the serializable check middleware
    }),
});

export default store;
