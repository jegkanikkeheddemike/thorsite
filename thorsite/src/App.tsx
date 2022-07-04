import { Route, Routes } from "solid-app-router";
import { lazy } from "solid-js";
import {Specs} from "./pages/Specs";
import {Home} from "./pages/Home";

import "./App.css"
import { Navbar } from "./Navbar";

function App() {
  return (
    <div class="App">
      <Navbar />
      
        <Routes >
          <Route path = "/" element={<Home />} />
          <Route path="/specs" element={<Specs />} />
        </Routes>
    </div>
  );
}

export default App;
