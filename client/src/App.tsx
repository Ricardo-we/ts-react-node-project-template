import {BrowserRouter, Route, Routes} from "react-router-dom";

import Login from "./features/login";
import React from 'react';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}   />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
