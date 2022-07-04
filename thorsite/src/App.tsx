import { Route, Routes } from "solid-app-router";
import { Specs } from "./pages/Specs/Specs";
import { Home } from "./pages/Home/Home";

import "./App.css"
import { Navbar } from "./Navbar";

function App() {
  return (
    <div class="App">
      <Navbar />
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/specs" element={<Specs />} />
      </Routes>
    </div>
  );
}

export default App;
