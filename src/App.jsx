import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import "./App.css";
import About from "./pages/About";
import ContactInfo from "./pages/ContactInfo";
import Examples from "./pages/Examples";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/contactinfo" element={<ContactInfo />} />
        <Route path="/examples" element={<Examples />} />
      </Routes>
    </Router>
  );
}

export default App;
