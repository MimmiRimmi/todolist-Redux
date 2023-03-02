import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./Home.jsx";
import TodoReducer from "./TodoReducer.jsx";
import Navbar from "./Navbar.jsx";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/TodoReducer" element={<TodoReducer />} />
          <Route path="*" element={<h1>Page not found</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
