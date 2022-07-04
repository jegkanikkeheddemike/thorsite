import { Route, Routes } from "solid-app-router";
import { lazy } from "solid-js";
import {Specs} from "./pages/Specs";
import {Home} from "./pages/Home";

import "./App.css"

function App() {
  return (
    <div class="App">
      <nav>Navbar</nav>
      
        <Routes >
          <Route path = "/" element={<Home />} />
          <Route path="/specs" element={<Specs />} />
        </Routes>
    </div>
  );
}

export default App;
