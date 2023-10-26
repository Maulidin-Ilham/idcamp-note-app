import Archieve from "./pages/Archieve";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/archieve" element={<Archieve />} />
      </Routes>
    </Router>
  );
}

export default App;
