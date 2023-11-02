import { Provider } from "react-redux";
import {WaiterApp} from "./features/waiter";
import { store } from "./store";
import React from "react";
import {ThemeProvider} from "./components/ThemeContext";
import { Home } from "./features/home";
import { About } from "./features/about";
import { NotFound } from "./features/not_found";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import "./App.css";

export function App() {
  const isActiveClass = ({ isActive }: any) => isActive ? "active" : "";

  return (
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider>
          <nav className='navigation'>
            <NavLink to="/" className={isActiveClass} end>Home</NavLink>{' | '}
            <NavLink to="/waiter" className={isActiveClass}>Waiter</NavLink>{' | '}
            <NavLink to="/about" className={isActiveClass}>About</NavLink>
          </nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/waiter/*" element={<WaiterApp />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  );
}