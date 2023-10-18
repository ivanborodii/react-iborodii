import { Provider } from "react-redux";
import {WaiterApp} from "./features/waiter";
import { store } from "./store";

export function App() {
  return (
    <Provider store={store}>
      <WaiterApp />
    </Provider>
  );
}