import React from 'react';
import ReactDOM from 'react-dom/client';
import {WaiterApp} from "./features/waiter";
const App = () => {
  return <WaiterApp />;
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(<App />);