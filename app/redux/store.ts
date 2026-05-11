import language from "./language_converter";
import {configureStore} from "@reduxjs/toolkit";

export const makeStore = () => {
  return configureStore({
    reducer: {
      language: language,
    },
  });
};


export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
