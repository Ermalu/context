import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import Add from "./components/Add/Add";
import Counter from "./components/Counter/Counter";
import Edit from "./components/Edit/Edit";
import List from "./components/List/List";

import CounetrContextProvidet from "./contexts/counterContext";
import TodoContextProvider from "./contexts/todoContext";

function App() {
  return (
    <TodoContextProvider>
      <CounetrContextProvidet>
        <BrowserRouter>
          <Routes>
            <Route path="/counter" element={<Counter />} />
            <Route path="/add" element={<Add />} />
            <Route path="/list" element={<List />} />
            <Route path="/edit/:id" element={<Edit />} />
          </Routes>
        </BrowserRouter>
      </CounetrContextProvidet>
    </TodoContextProvider>
  );
}

export default App;
