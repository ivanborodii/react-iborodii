import { Provider } from "react-redux";
import {WaiterApp} from "./features/waiter";
import { store } from "./store";
import React from "react";
import {ThemeProvider} from "./components/ThemeContext";

export function App() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <WaiterApp />
      </ThemeProvider>
    </Provider>
  );
}